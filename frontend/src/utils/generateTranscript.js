import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import AES from "./AES";

export default function generateTranscript(data) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const tableWidth = 170;
  const margin = 20;

  const logoWidth = 17;
  const logoHeight = 22;
  var img = new Image();
  img.src = "src/assets/logo.jpg";

  doc.addImage(img, "JPG", margin, 15, logoWidth, logoHeight);

  // Add title and header
  doc.setFontSize(14);
  doc.setFont("Times", "bold");
  doc.text("INSTITUT TEKNOLOGI BANDUNG", margin + logoWidth + 10, 20);

  doc.setFontSize(12);
  doc.setFont("Times", "normal");
  doc.text(
    "SEKOLAH TEKNIK ELEKTRO DAN INFORMATIKA",
    margin + logoWidth + 10,
    28
  );

  doc.setFontSize(10);
  doc.text(
    "Jalan Ganesha 10 Bandung 40132 Telp. (022) 2502260, (022) 4254028 Fax. (022) 2534222",
    margin + logoWidth + 10,
    36
  );

  doc.line(margin, 44, pageWidth - margin, 44); // x1, y1, x2, y2
  doc.line(margin, 45, pageWidth - margin, 45); // x1, y1, x2, y2

  // Add bold title
  doc.setFontSize(14);
  doc.setFont("Times", "bold");
  const titleText = "Transkip Akademik";
  doc.text(titleText, (pageWidth - doc.getTextWidth(titleText)) / 2, 55);

  // Add student information
  doc.setFontSize(12);
  doc.setFont("Times", "normal");
  doc.text("Nama", margin, 70);
  doc.text("NIM", margin, 75);
  doc.text("Fakultas/Sekolah", margin, 80);
  doc.text("Program Studi", margin, 85);

  // Menentukan panjang maksimum dari label "Nama" dan "NIM"
  const maxLabelLength = Math.max(
    doc.getTextWidth("Nama"),
    doc.getTextWidth("NIM"),
    doc.getTextWidth("Fakultas/Sekolah"),
    doc.getTextWidth("Program Studi")
  );

  // Menambahkan spasi tambahan untuk menyamakan posisi ":" pada "Nama" dan "NIM"
  const labelSpace = 5;
  doc.text(":", margin + maxLabelLength + labelSpace, 70);
  doc.text(":", margin + maxLabelLength + labelSpace, 75);
  doc.text(":", margin + maxLabelLength + labelSpace, 80);
  doc.text(":", margin + maxLabelLength + labelSpace, 85);

  // Menambahkan nilai nama dan nim
  doc.text(data.identity.name, margin + maxLabelLength + labelSpace + 2, 70);
  doc.text(
    data.identity.nim.toString(),
    margin + maxLabelLength + labelSpace + 2,
    75
  );
  doc.text(
    "Sekolah Teknik Elektro dan Informatika",
    margin + maxLabelLength + labelSpace + 2,
    80
  );
  doc.text(
    "Sistem dan Teknologi Informasi",
    margin + maxLabelLength + labelSpace + 2,
    85
  );

  // Add table headers
  const startX = margin;
  const startY = 90;
  const cellHeight = 8;
  const columnWidths = [
    tableWidth * 0.05,
    tableWidth * 0.2,
    tableWidth * 0.6,
    tableWidth * 0.075,
    tableWidth * 0.075,
  ];

  doc.setFillColor(200, 200, 200);
  doc.rect(
    startX,
    startY,
    columnWidths.reduce((a, b) => a + b, 0),
    cellHeight,
    "F"
  );
  doc.setTextColor(0, 0, 0); // item lagi

  doc.text("No", startX + 2, startY + 6);
  doc.text("Kode mata kuliah", startX + columnWidths[0] + 2, startY + 6);
  doc.text(
    "Nama mata kuliah",
    startX + columnWidths[0] + columnWidths[1] + 2,
    startY + 6
  );
  doc.text(
    "SKS",
    startX + columnWidths[0] + columnWidths[1] + columnWidths[2] + 2,
    startY + 6
  );
  doc.text(
    "Nilai",
    startX +
      columnWidths[0] +
      columnWidths[1] +
      columnWidths[2] +
      columnWidths[3] +
      2,
    startY + 6
  );

  // Draw table header border
  let currentX = startX;
  columnWidths.forEach((width) => {
    doc.rect(currentX, startY, width, cellHeight);
    currentX += width;
  });

  let y = startY + cellHeight;

  data.matkul.forEach((row, index) => {
    const wrappedText = [
      [(index + 1).toString()],
      ...row.map((text, index) =>
        doc.splitTextToSize(text, columnWidths[index + 1] - 4)
      ),
    ];
    const rowHeight =
      Math.max(...wrappedText.map((text) => text.length)) * 5 + 2; // line height

    wrappedText.forEach((text, colIndex) => {
      if (colIndex === 1) {
        doc.setFont("Courier");
      } else {
        doc.setFont("Times");
      }
      doc.text(
        text,
        startX + 2 + columnWidths.slice(0, colIndex).reduce((a, b) => a + b, 0),
        y + 5
      );
    });

    currentX = startX;
    columnWidths.forEach((width) => {
      doc.rect(currentX, y, width, rowHeight);
      currentX += width;
    });

    y += rowHeight;
  });

  doc.line(margin, y + 5, pageWidth - margin, y + 5); // x1, y1, x2, y2

  // Hitung SKS dan IPK
  const ipMapping = {
    A: 4,
    AB: 3.5,
    B: 3,
    BC: 2.5,
    C: 2,
    D: 1,
    E: 0,
  };
  const sks = data.matkul.reduce((acc, row) => acc + Number(row[2]), 0);
  const total = data.matkul.reduce(
    (acc, row) => acc + Number(ipMapping[row[3]] * Number(row[2])),
    0
  );

  const ipktext = "IPK = " + parseFloat(total / sks).toFixed(2);
  doc.text(ipktext, margin, y + 12);
  doc.text(
    "Total Jumlah SKS = " + sks,
    margin + doc.getTextWidth(ipktext) + 20,
    y + 12
  );
  doc.line(margin, y + 14, pageWidth - margin, y + 14); // x1, y1, x2, y2

  // Format date to "22 Mei 2024"
  const formatDate = (date) => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const currentDate = formatDate(new Date());
  doc.text(
    `Bandung, ${currentDate}`,
    pageWidth - margin - doc.getTextWidth(`Bandung, ${currentDate}`),
    y + 35
  );

  // Align right bagian ttd kaprodi
  const ttdStartY = y + 55;
  const ttdText = "--Begin signature--";
  const ttdEndText = "--End signature--";
  const kaprodiText = `(${data.kaprodi.name})`;
  doc.text(ttdText, pageWidth - margin - doc.getTextWidth(ttdText), ttdStartY);

  const wrappedSignature = doc.splitTextToSize(data.kaprodi.sign, 50);
  wrappedSignature.forEach((line, index) => {
    doc.text(
      line,
      pageWidth - margin - doc.getTextWidth(line),
      ttdStartY + 5 * (index + 1)
    );
  });

  doc.text(
    ttdEndText,
    pageWidth - margin - doc.getTextWidth(ttdEndText),
    ttdStartY + 5 * (wrappedSignature.length + 1)
  );
  doc.text(
    kaprodiText,
    pageWidth - margin - doc.getTextWidth(kaprodiText),
    ttdStartY + 5 * (wrappedSignature.length + 3)
  );

  doc.text(
    "Ketua Program Studi",
    pageWidth - margin - doc.getTextWidth("Ketua Program Studi"),
    ttdStartY - 10
  );

  // Save PDF
  // doc.save("transkrip_" + data.identity.nim); // ini kalo mau download plain

  // Convert to uint8array
  const pdfArrayBuffer = doc.output("arraybuffer");
  const pdfUint8Array = new Uint8Array(pdfArrayBuffer);

  const aes = new AES("halohalo");

  // Encrypt
  const encryptedContent = aes.encrypt(pdfUint8Array);
  const encryptedBlob = new Blob([encryptedContent], {
    type: "application/octet-stream",
  });

  // Download the encrypted PDF file
  saveAs(encryptedBlob, `transkrip_${data.identity.nim}_encrypted.pdf`);
}

// Contoh penggunaan
// const data = {
//   identity: {
//     name: "Ceavin Rufus De Prayer Purba",
//     nim: 18221162,
//   },
//   matkul: [
//     ["II2221", "Manajemen Proyek STI", 3, "A"],
//     ["II3220", "Arsitektur Enterprise", 3, "A"],
//     ["II3230", "Keamanan Informasi", 3, "A"],
//     ["II3240", "Rekayasa Sistem dan Teknologi Informasi", 3, "A"],
//     ["II3260", "Platform dan Pengembangan Aplikasi Mobile", 3, "A"],
//     ["II4031", "Kriptografi dan Koding", 2, "A"],
//     ["II4035", "Sistem Cerdas", 2, "A"],
//     ["II4035", "Manajemen Produk", 2, "A"],
//     ["II4472", "Komunikasi Interpersonal", 2, "A"],
//   ],
//   kaprodi: {
//     name: "I Gusti Bagus Baskara",
//     sign: "BFc65FFeCD2108CE340B",
//   },
// };

// generateTranscript(data, "Transcript-18221162.pdf");
