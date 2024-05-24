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

const CourseForm = () => {
  const [publicKey, setPublicKey] = useState();
  const [privateKey, setPrivateKey] = useState();
  const [encryptionKey, setEncryptionKey] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
  });

  const initializeRSA = (e) => {
    e.preventDefault();
    const rsa = new RSA();
    const pubKey = { e: rsa.publicKey.e, n: rsa.publicKey.n };
    const priKey = { d: rsa.privateKey.d, n: rsa.publicKey.n };
    setPublicKey(pubKey);
    setPrivateKey(priKey);
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
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (formData[key].trim() === "") {
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
    for (let key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        encryptedFormData[key] = rc4.encrypt(String(formData[key]));
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
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Form.Control
                      type="text"
                      value={formData[`KodeMK${index + 1}`]}
                      onChange={(e) =>
                        handleInputChange(`KodeMK${index + 1}`, e.target.value)
                      }
                    />
                  </td>
                  <td>
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
                  <td>
                    <Form.Control
                      type="text"
                      value={formData[`SKS${index + 1}`]}
                      onChange={(e) =>
                        handleInputChange(`SKS${index + 1}`, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={formData[`Nilai${index + 1}`]}
                      onChange={(e) =>
                        handleInputChange(`Nilai${index + 1}`, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row className="form-row">
            <Col>
              <Form.Group controlId="formKey">
                <Form.Label>Encryption Key</Form.Label>
                <Form.Control
                  type="text"
                  value={encryptionKey}
                  onChange={(e) => handleKeyChange(e)}
                />
              </Form.Group>
              <Button
                style={{ marginRight: "10px", marginTop: "10px" }}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
              <Button
                style={{ marginTop: "10px" }}
                disabled={publicKey && privateKey}
                variant="secondary"
                onClick={initializeRSA}
              >
                {publicKey && privateKey
                  ? "Key Already Generated!"
                  : "Generate Key RSA!"}
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
