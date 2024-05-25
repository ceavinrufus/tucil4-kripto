import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReaderFile from "../components/ReaderFile.jsx";
import { saveAs } from "file-saver";
import AES from "../utils/AES.js";

function Decrypt() {
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [decryptedFile, setDecryptedFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const aes = new AES("halohalo");

  const decryptFile = () => {
    if (!encryptedFile) return;

    setDecryptedFile(aes.decrypt(encryptedFile));
  };

  const handleDecryptedFileDownload = () => {
    if (!decryptedFile) return;

    const blob = new Blob([decryptedFile], {
      type: "application/octet-stream",
    });
    saveAs(blob, fileName.replace("_encrypted", ""));
  };

  return (
    <div className="homepage">
      <Container>
        <Row className="title d-flex justify-content-between align-items-center">
          <Col className="col-spacing">
            <h1 className="titlePageText">Decrypt File</h1>
            <p style={{ fontSize: "25px", marginBottom: "10px" }}>
              Silakan Upload File Transkrip Nilai yang Terenkripsi
            </p>
            <ReaderFile setFile={setEncryptedFile} setFileName={setFileName} />
            {encryptedFile && (
              <button className="button-decrypt" onClick={decryptFile}>
                Decrypt
              </button>
            )}
          </Col>
          <Col className="col2">
            {decryptedFile && (
              <div>
                <p style={{ fontSize: "25px", textAlign: "center" }}>
                  File Berhasil Terdekripsi!
                </p>
                <div className="buttonDiv">
                  <button
                    className="button-download-decrypt"
                    onClick={handleDecryptedFileDownload}
                  >
                    Download File Hasil Dekripsi
                  </button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Decrypt;
