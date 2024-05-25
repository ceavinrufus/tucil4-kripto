import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReaderFile from "../components/ReaderFile.jsx";
import CryptoJS from 'crypto-js';
import { saveAs } from 'file-saver';

function Decrypt() {
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [decryptedFile, setDecryptedFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const decryptFile = () => {
    if (!encryptedFile) return;
    console.log(encryptedFile);
    try {
      const wordArray = CryptoJS.lib.WordArray.create(encryptedFile);
      const decryptedBytes = CryptoJS.AES.decrypt({ ciphertext: wordArray }, "halohalo");
      const byteArray = wordArrayToUint8Array(decryptedBytes);
      setDecryptedFile(byteArray);
      console.log(byteArray);
    } catch (error) {
      console.error("Decryption failed", error);
    }
  };

  function wordArrayToUint8Array(wordArray) {
    const byteArray = new Uint8Array(wordArray.sigBytes);
    for (let i = 0; i < wordArray.sigBytes; i++) {
      byteArray[i] = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    }
    return byteArray;
  }

  const handleDecryptedFileDownload = () => {
    if (!decryptedFile) return;

    const blob = new Blob([decryptedFile], { type: 'application/octet-stream' });
    saveAs(blob, fileName.replace('.encrypted', '.pdf'));
  };

  return (
    <div className="homepage">
      <Container>
        <Row className="title d-flex justify-content-between align-items-center">
          <Col className="col-spacing">
            <h1 className="titlePageText">Decrypt File</h1>
            <p style={{ fontSize: "25px", marginBottom: "10px" }}>Silakan Upload File Transkrip Nilai yang Terenkripsi</p>
            <ReaderFile setFile={setEncryptedFile} setFileName={setFileName} />
            {encryptedFile && <button className="button-decrypt" onClick={decryptFile}>Decrypt</button>}
          </Col>
          <Col className="col2">
            {decryptedFile && (
              <div>
                <p style={{ fontSize: "25px", textAlign: "center" }}>File Berhasil Terdekripsi!</p>
                <div className="buttonDiv">
                  <button className="button-download-decrypt" onClick={handleDecryptedFileDownload}>Download File Hasil Dekripsi</button>
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
