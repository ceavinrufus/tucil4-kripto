import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Table,
  Button,
  Container,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RSA from "../utils/RSA";
import ModifiedRC4 from "../utils/ModifiedRC4";
import Keccak from "../utils/Keccak";

const CourseForm = () => {
  const [publicKey, setPublicKey] = useState({ e: null, n: null });
  const [privateKey, setPrivateKey] = useState({ d: null, n: null });
  const [encryptionKey, setEncryptionKey] = useState("halohalo");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [ipk, setIpk] = useState(0);
  const [totalSks, setTotalSks] = useState(0);
  const [formData, setFormData] = useState({
    NIM: "",
    Nama: "",
    KodeMK1: "",
    NamaMatkul1: "",
    Nilai1: "",
    SKS1: "",
    KodeMK2: "",
    NamaMatkul2: "",
    Nilai2: "",
    SKS2: "",
    KodeMK3: "",
    NamaMatkul3: "",
    Nilai3: "",
    SKS3: "",
    KodeMK4: "",
    NamaMatkul4: "",
    Nilai4: "",
    SKS4: "",
    KodeMK5: "",
    NamaMatkul5: "",
    Nilai5: "",
    SKS5: "",
    KodeMK6: "",
    NamaMatkul6: "",
    Nilai6: "",
    SKS6: "",
    KodeMK7: "",
    NamaMatkul7: "",
    Nilai7: "",
    SKS7: "",
    KodeMK8: "",
    NamaMatkul8: "",
    Nilai8: "",
    SKS8: "",
    KodeMK9: "",
    NamaMatkul9: "",
    Nilai9: "",
    SKS9: "",
    KodeMK10: "",
    NamaMatkul10: "",
    Nilai10: "",
    SKS10: "",
    IPK: "",
    DigitalSignature: "",
  });
  // Buat tes
  // const [formData, setFormData] = useState({
  //   NIM: "18221162",
  //   Nama: "Ceavin Rufus De Prayer Purba",
  //   KodeMK1: "II2221",
  //   NamaMatkul1: "Manajemen Proyek STI",
  //   Nilai1: "A",
  //   SKS1: "3",
  //   KodeMK2: "II3220",
  //   NamaMatkul2: "Arsitektur Enterprise",
  //   Nilai2: "A",
  //   SKS2: "3",
  //   KodeMK3: "II3230",
  //   NamaMatkul3: "Keamanan Informasi",
  //   Nilai3: "A",
  //   SKS3: "3",
  //   KodeMK4: "II3240",
  //   NamaMatkul4: "Rekayasa Sistem dan Teknologi Informasi",
  //   Nilai4: "A",
  //   SKS4: "3",
  //   KodeMK5: "II3260",
  //   NamaMatkul5: "Platform dan Pengembangan Aplikasi Mobile",
  //   Nilai5: "A",
  //   SKS5: "3",
  //   KodeMK6: "II4031",
  //   NamaMatkul6: "Kriptografi dan Koding",
  //   Nilai6: "A",
  //   SKS6: "2",
  //   KodeMK7: "II4035",
  //   NamaMatkul7: "Sistem Cerdas",
  //   Nilai7: "A",
  //   SKS7: "2",
  //   KodeMK8: "II4035",
  //   NamaMatkul8: "Manajemen Produk",
  //   Nilai8: "A",
  //   SKS8: "2",
  //   KodeMK9: "II4472",
  //   NamaMatkul9: "Komunikasi Interpersonal",
  //   Nilai9: "A",
  //   SKS9: "2",
  //   KodeMK10: "II4090",
  //   NamaMatkul10: "Kerja Praktek",
  //   Nilai10: "A",
  //   SKS10: "2",
  //   IPK: "",
  //   DigitalSignature: "",
  // });

  const keccak = new Keccak(256);
  const rsa = new RSA();

  const initializeRSA = (e) => {
    e.preventDefault();
    const pubKey = { e: rsa.publicKey.e, n: rsa.publicKey.n };
    const priKey = { d: rsa.privateKey.d, n: rsa.publicKey.n };
    setPublicKey(pubKey);
    setPrivateKey(priKey);
  };

  const digitalSign = (form) => {
    keccak.update(form["NIM"]);
    keccak.update(form["Nama"]);
    for (let i = 1; i <= 10; i++) {
      keccak.update(form[`KodeMK${i}`]);
      keccak.update(form[`NamaMatkul${i}`]);
      keccak.update(form[`Nilai${i}`]);
      keccak.update(form[`SKS${i}`]);
    }
    keccak.update(form["IPK"]);
    const hash = keccak.hash();

    return btoa(rsa.encrypt(hash, privateKey));
  };

  const handleKeyChange = (e) => {
    setEncryptionKey(e.target.value);
  };

  useEffect(() => {
    // Check if error state has changed
    if (error) {
      const timeoutId = setTimeout(() => setError(""), 3000);

      return () => clearTimeout(timeoutId);
    }
    if (success) {
      const timeoutId = setTimeout(() => setSuccess(""), 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [error, success]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
      DigitalSignature: digitalSign({ ...formData, [field]: value }),
    });
  };

  useEffect(() => {
    const countIPK = () => {
      const ipMapping = {
        A: 4,
        AB: 3.5,
        B: 3,
        BC: 2.5,
        C: 2,
        D: 1,
        E: 0,
      };
      let totalSKS = 0;
      let hitungIpk = 0;
      for (let i = 1; i <= 10; i++) {
        const sks = formData[`SKS${i}`] ? Number(formData[`SKS${i}`]) : 0;
        const nilai = formData[`Nilai${i}`]
          ? ipMapping[formData[`Nilai${i}`]]
          : 0;
        totalSKS += sks;
        hitungIpk += sks * nilai;
      }
      setTotalSks(totalSKS);
      setIpk(parseFloat(totalSKS == 0 ? 0 : hitungIpk / totalSKS).toFixed(2));
    };
    countIPK();
  }, [formData]);

  const downloadPrivateKey = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(privateKey)], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "privateKey.pri";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadPublicKey = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(publicKey)], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "publicKey.pub";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      IPK: ipk.toString(),
      DigitalSignature: digitalSign({ ...formData, IPK: ipk.toString() }),
    });
  }, [ipk]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataSubmit = {
      ...formData,
      PublicKey: JSON.stringify(publicKey),
    };

    for (let key in formDataSubmit) {
      if (formDataSubmit[key].trim() === "") {
        setError("All fields are required.");
        return;
      }
    }

    if (encryptionKey.trim() === "") {
      setError("Encryption key is required.");
      return;
    }
    setError("");

    const rc4 = new ModifiedRC4(encryptionKey);

    const encryptedFormData = {};
    for (let key in formDataSubmit) {
      // if (Object.prototype.hasOwnProperty.call(formDataSubmit, key)) {
      //   encryptedFormData[key] = rc4.encrypt(String(formDataSubmit[key]));
      // }
      try {
        encryptedFormData[key] = btoa(rc4.encrypt(String(formDataSubmit[key])));
      } catch (error) {
        console.error("Error encoding: ", error);
      }
    }

    fetch("http://localhost:8081/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encryptedFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess("Data inserted successfully!");
          setError("");
        } else {
          setError("Insert failed. " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      });
  };

  return (
    <div className="homepage">
      <Row style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontWeight: "bold" }}>Data Akademik Mahasiswa</h1>
      </Row>

      <Container>
        {error && (
          <Alert variant="danger" onClose={() => setError("")} dismissible>
            {error}
          </Alert>
        )}
        {success && (
          <Alert variant="success" onClose={() => setSuccess("")} dismissible>
            {success}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                value={formData.Nama}
                onChange={(e) => handleInputChange("Nama", e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formNim">
              <Form.Label>NIM</Form.Label>
              <Form.Control
                type="text"
                value={formData.NIM}
                onChange={(e) => handleInputChange("NIM", e.target.value)}
              />
            </Form.Group>
          </Row>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Kode Mata Kuliah</th>
                <th>Nama Mata Kuliah</th>
                <th>SKS</th>
                <th>Nilai</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr style={{ width: "5%" }} key={index}>
                  <td>{index + 1}</td>
                  <td style={{ width: "25%" }}>
                    <Form.Control
                      type="text"
                      value={formData[`KodeMK${index + 1}`]}
                      onChange={(e) =>
                        handleInputChange(`KodeMK${index + 1}`, e.target.value)
                      }
                    />
                  </td>
                  <td style={{ width: "40%" }}>
                    <Form.Control
                      type="text"
                      value={formData[`NamaMatkul${index + 1}`]}
                      onChange={(e) =>
                        handleInputChange(
                          `NamaMatkul${index + 1}`,
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td style={{ width: "15%" }}>
                    <Form.Control
                      type="number"
                      value={Number(formData[`SKS${index + 1}`])
                        .toString()
                        .replace(/^(0+)|e/gi, "")}
                      onChange={(e) => {
                        handleInputChange(`SKS${index + 1}`, e.target.value);
                      }}
                    />
                  </td>
                  <td style={{ width: "15%" }}>
                    <Form.Select
                      value={formData[`Nilai${index + 1}`]}
                      onChange={(e) =>
                        handleInputChange(`Nilai${index + 1}`, e.target.value)
                      }
                    >
                      <option value={null}></option>
                      <option value="A">A</option>
                      <option value="AB">AB</option>
                      <option value="B">B</option>
                      <option value="BC">BC</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="T">T</option>
                    </Form.Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row className="form-row">
            <Col className="flex-row items-center">
              <p style={{ marginRight: 10 }}>IPK: </p>
              <p className="stats">{ipk.toString()} </p>
            </Col>
            <Col className="flex-row items-center">
              <p style={{ marginRight: 10 }}>Total SKS: </p>
              <p className="stats">{totalSks.toString()} </p>
            </Col>
          </Row>
          <Row className="form-row">
            <Col>
              <Form.Group controlId="formKey">
                <Form.Label>Encryption Key</Form.Label>
                <Form.Control
                  type="text"
                  value={encryptionKey}
                  readOnly
                  onChange={(e) => handleKeyChange(e)}
                />
              </Form.Group>
              <Button
                style={{ marginRight: "10px", marginTop: "10px" }}
                variant="primary"
                disabled={!privateKey.d || !privateKey.n}
                type="submit"
              >
                Submit
              </Button>
              <Button
                style={{ marginTop: "10px" }}
                variant="secondary"
                onClick={initializeRSA}
              >
                Generate Key RSA!
              </Button>
            </Col>
            <Col>
              <div className="keys">
                <div className="key">
                  <p>Your Public Key: </p>
                  {privateKey ? (
                    <>
                      <p>e: {publicKey.e}</p>
                      <p>n: {publicKey.n}</p>
                    </>
                  ) : (
                    <p style={{ color: "#ddd000" }}>Not generated yet</p>
                  )}
                  <Button
                    style={{ marginRight: "10px", marginTop: "10px" }}
                    variant="primary"
                    onClick={downloadPublicKey}
                    disabled={!publicKey.e || !publicKey.n}
                  >
                    Download
                  </Button>
                </div>
                <div className="key">
                  <p>Your Private Key: </p>
                  {privateKey ? (
                    <>
                      <p>d: {privateKey.d}</p>
                      <p>n: {privateKey.n}</p>
                    </>
                  ) : (
                    <p style={{ color: "#ddd000" }}>Not generated yet</p>
                  )}
                  <Button
                    style={{ marginRight: "10px", marginTop: "10px" }}
                    variant="primary"
                    onClick={downloadPrivateKey}
                    disabled={!privateKey.d || !privateKey.n}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CourseForm;
