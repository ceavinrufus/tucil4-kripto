import React, { useState, useEffect } from "react";
import { Tabs, Tab, Table, Container, Button } from "react-bootstrap";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import generateTranscript from "../utils/generateTranscript";

function Database() {
  const [data, setData] = useState([]);
  const [key, setKey] = useState("plain");

  useEffect(() => {
    fetch("http://localhost:8081/get")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const columns = [
    "NIM",
    "Nama",
    "KodeMK1",
    "NamaMatkul1",
    "Nilai1",
    "SKS1",
    "KodeMK2",
    "NamaMatkul2",
    "Nilai2",
    "SKS2",
    "KodeMK3",
    "NamaMatkul3",
    "Nilai3",
    "SKS3",
    "KodeMK4",
    "NamaMatkul4",
    "Nilai4",
    "SKS4",
    "KodeMK5",
    "NamaMatkul5",
    "Nilai5",
    "SKS5",
    "KodeMK6",
    "NamaMatkul6",
    "Nilai6",
    "SKS6",
    "KodeMK7",
    "NamaMatkul7",
    "Nilai7",
    "SKS7",
    "KodeMK8",
    "NamaMatkul8",
    "Nilai8",
    "SKS8",
    "KodeMK9",
    "NamaMatkul9",
    "Nilai9",
    "SKS9",
    "KodeMK10",
    "NamaMatkul10",
    "Nilai10",
    "SKS10",
    "IPK",
    "DigitalSignature",
    "Download PDF",
  ];

  const downloadPDF = (rowData) => {
    // Process data
    const data = {
      identity: {
        name: rowData["Nama"],
        nim: rowData["NIM"],
      },
      matkul: [],
      kaprodi: {
        name: "I Gusti Bagus Baskara", // Assuming the kaprodi name is constant
        sign: "BFc65FFeCD2108CE340B", // Assuming the signature is constant
      },
    };

    // Extracting course data
    for (let i = 1; i <= 10; i++) {
      const kodeMK = rowData[`KodeMK${i}`];
      const namaMatkul = rowData[`NamaMatkul${i}`];
      const nilai = rowData[`Nilai${i}`];
      const sks = Number(rowData[`SKS${i}`]);

      // If any of the course data is missing, break the loop
      if (!kodeMK || !namaMatkul || !nilai || !sks) {
        break;
      }
      data.matkul.push([kodeMK, namaMatkul, sks, nilai]);
    }
    console.log(data);

    generateTranscript(data);
  };

  const renderTable = (type) => {
    let displayData = data;
    if (type === "encrypted" || type === "encrypted-signed") {
      // You can add encryption logic here
      displayData = data.map((item) => ({
        ...item,
        // Apply encryption to required fields here
      }));
    }

    return (
      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              {columns.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, index) => (
              <tr key={index}>
                {columns.map((col, colIndex) => (
                  <td
                    key={col}
                    style={{ padding: "10px", border: "1px solid #ddd" }}
                  >
                    {colIndex === columns.length - 1 ? (
                      <Button onClick={() => downloadPDF(row)}>Download</Button>
                    ) : (
                      row[col]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <div className="homepage">
      <Container>
        <h1>Database Akademik</h1>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="plain" title="Tabel Plain">
            {renderTable("plain")}
          </Tab>
          <Tab eventKey="encrypted" title="Tabel Terenkripsi">
            {renderTable("encrypted")}
          </Tab>
          <Tab
            eventKey="encrypted-signed"
            title="Tabel Terenkripsi dan Tertandatangan"
          >
            {renderTable("encrypted-signed")}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Database;
