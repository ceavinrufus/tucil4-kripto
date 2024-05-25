import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReaderFile from "../components/ReaderFile.jsx";
import CryptoJS from 'crypto-js';


function Decrypt() {
  const [encryptedFile, setEncryptedFile] = useState();
  const [decryptedFile, setDecryptedFile] = useState();
  const [fileName, setFileName] = useState();

  const decryptFile = () => {
    if (!encryptedFile) return;
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedFile, "halohalo");
    const decryptedContent = decryptedBytes.toString(CryptoJS.enc.Utf8);
    console.log('Decrypted content:', decryptedContent);
    setDecryptedFile(decryptedContent);
    console.log('Decrypted content:', decryptedFile);
  };

  const handleDecryptedFileDownload = () => {
    const blob = new Blob([decryptedFile]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      fileName.split(".")[0] +
      "_decrypted." +
      fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };
  
  return (
    <div className="homepage">
      <Container>
        <Row className="title d-flex justify-content-between align-items-center">
        <Col className="col-spacing">
            <h1 className="titlePageText">Decrypt File</h1>
            <p style={{ fontSize: "25px", marginBottom: "10px" }}>Silakan Upload File Transkrip Nilai yang Terenkripsi</p>
            <ReaderFile setFile={setEncryptedFile} setFileName={setFileName} />
            {encryptedFile && <button className="button-decrypt" onClick={decryptFile} >Decrypt</button>}
          </Col>
          <Col className="col2">
          {decryptedFile&&(
            <div>
              <p style={{ fontSize: "25px", textAlign: "center"}}>File Berhasil Terdekripsi!</p>
              <div className="buttonDiv">
                <button className="button-download-decrypt" onClick={handleDecryptedFileDownload}>Download File Hasil Dekripsi</button>
              </div>
            </div>)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Decrypt;
