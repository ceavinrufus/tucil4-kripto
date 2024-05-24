import React, { useState, useEffect, useRef } from "react";
import { Tabs, Tab, Table, Container, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import generateTranscript from "../utils/generateTranscript";
import { data as d } from "../../mocks/dummy";
import ModifiedRC4 from "../utils/ModifiedRC4";
import Keccak from "../utils/Keccak";

function Database() {
  const [data, setData] = useState(d);
  const [key, setKey] = useState("plaintext");
  const [expandedCell, setExpandedCell] = useState(null);

  function TableHeader({ headerName, ...props }) {
    return (
      <th
        className="firstSpan"
        style={{ cursor: "pointer", position: "relative" }}
        onClick={() => {
          setExpandedCell(headerName);
        }}
        {...props}
      >
        {props.children}
        {headerName && expandedCell !== headerName && (
          <span class="secondSpan">Click to expand</span>
        )}
      </th>
    );
  }

  const keccak = new Keccak(256);
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
    "Kode MK 1",
    "Nama Matkul 1",
    "Nilai 1",
    "SKS 1",
    "Kode MK 2",
    "Nama Matkul 2",
    "Nilai 2",
    "SKS 2",
    "Kode MK 3",
    "Nama Matkul 3",
    "Nilai 3",
    "SKS 3",
    "Kode MK 4",
    "Nama Matkul 4",
    "Nilai 4",
    "SKS 4",
    "Kode MK 5",
    "Nama Matkul 5",
    "Nilai 5",
    "SKS 5",
    "Kode MK 6",
    "Nama Matkul 6",
    "Nilai 6",
    "SKS 6",
    "Kode MK 7",
    "Nama Matkul 7",
    "Nilai 7",
    "SKS 7",
    "Kode MK 8",
    "Nama Matkul 8",
    "Nilai 8",
    "SKS 8",
    "Kode MK 9",
    "Nama Matkul 9",
    "Nilai 9",
    "SKS 9",
    "Kode MK 10",
    "Nama Matkul 10",
    "Nilai 10",
    "SKS 10",
    "IPK",
    "Digital Signature",
    "Download PDF",
  ];

  const courseAttr = [
    { name: "Kode MK", width: "80px" },
    { name: "Nama Matkul", width: "200px" },
    { name: "Nilai", width: "50px" },
    { name: "SKS", width: "30px" },
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

    generateTranscript(data);
  };
  const renderTable = (type) => {
    const rc4 = new ModifiedRC4("halohalo");
    let displayData = data;

    if (type === "plaintext") {
      // You can add encryption logic here
      displayData = data.map((item) => {
        const encryptedItem = { ...item };
        // Apply encryption to all fields
        Object.keys(encryptedItem).forEach((key) => {
          try {
            encryptedItem[key] = rc4.decrypt(atob(encryptedItem[key]));
          } catch (error) {
            // Handle decoding errors
            console.error("Error decoding:", error);
          }
        });
        return encryptedItem;
      });
    }

    const verify = (row) => {
      keccak.update(row["NIM"]);
      keccak.update(row["Nama"]);
      for (let i = 1; i <= 10; i++) {
        keccak.update(row[`KodeMK${i}`]);
        keccak.update(row[`NamaMatkul${i}`]);
        keccak.update(row[`Nilai${i}`]);
        keccak.update(row[`SKS${i}`]);
      }
      keccak.update(row["IPK"]);

      const hasil = keccak.hash();
      return hasil === row["DigitalSignature"];
    };

    return (
      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <Table striped hover bordered>
          <thead>
            <tr>
              <TableHeader headerName={"NIM"} rowSpan={2}>
                NIM
              </TableHeader>
              <TableHeader headerName={"Nama"} rowSpan={2}>
                Nama
              </TableHeader>
              {[...Array(10)].map((_, index) => (
                <TableHeader colSpan={4}>Matkul {index + 1}</TableHeader>
              ))}
              <TableHeader headerName={"IPK"} rowSpan={2}>
                IPK
              </TableHeader>
              <TableHeader headerName={"Digital Signature"} rowSpan={2}>
                Digital Signature
              </TableHeader>
              <TableHeader rowSpan={2}>Action</TableHeader>
            </tr>
            <tr>
              {[...Array(10)].map((_, index) =>
                courseAttr.map((header, idx) => (
                  <TableHeader
                    headerName={header.name + " " + (index + 1).toString()}
                    key={idx}
                  >
                    {header.name}
                  </TableHeader>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, index) => {
              return (
                <tr key={index}>
                  {columns.map((col, colIndex) => (
                    <td
                      key={col}
                      onClick={() => {
                        setExpandedCell(col + index);
                      }}
                      style={{
                        whiteSpace:
                          expandedCell !== col &&
                          expandedCell !== col + index &&
                          "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth:
                          colIndex !== columns.length - 1 &&
                          expandedCell !== col &&
                          expandedCell !== col + index &&
                          "10ch",
                      }}
                    >
                      {colIndex === columns.length - 1 ? (
                        <div>
                          <Button onClick={() => downloadPDF(row)}>
                            Download
                          </Button>
                          <Button
                            style={{ marginLeft: 4 }}
                            onClick={() => downloadPDF(row)}
                            className="btn-secondary"
                          >
                            Verify
                          </Button>
                        </div>
                      ) : type === "ciphertext" ? (
                        row[col.replaceAll(" ", "")]?.length > 20 ? (
                          expandedCell === col + index ? (
                            <div onClick={() => setExpandedCell(null)}>
                              {row[col.replaceAll(" ", "")]
                                .match(/.{1,20}/g)
                                .join("\n")}
                            </div>
                          ) : (
                            <>
                              {row[col.replaceAll(" ", "")]
                                .match(/.{1,20}/g)
                                .join("\n")}
                            </>
                          )
                        ) : (
                          // Otherwise, render the content as is
                          row[col.replaceAll(" ", "")]
                        )
                      ) : (
                        <>{row[col.replaceAll(" ", "")]}</>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <div className="homepage">
      <Row style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontWeight: "bold" }}>Database Akademik</h1>
      </Row>

      <Container>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="plaintext" title="Plaintext">
            {renderTable("plaintext")}
          </Tab>
          <Tab eventKey="ciphertext" title="Ciphertext">
            {renderTable("ciphertext")}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Database;
