import RSA from "../utils/RSA";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ModifiedRC4 from "../utils/ModifiedRC4"

const Home = () => {
    const [publicKey, setPublicKey] = useState();
    const [privateKey, setPrivateKey] = useState();
    const [formData, setFormData] = useState({
        NIM: '',
        Nama: '',
        IPK: '',
        KodeMK1: '', NamaMatkul1: '', Nilai1: '', SKS1: '',
        KodeMK2: '', NamaMatkul2: '', Nilai2: '', SKS2: '',
        KodeMK3: '', NamaMatkul3: '', Nilai3: '', SKS3: '',
        KodeMK4: '', NamaMatkul4: '', Nilai4: '', SKS4: '',
        KodeMK5: '', NamaMatkul5: '', Nilai5: '', SKS5: '',
        KodeMK6: '', NamaMatkul6: '', Nilai6: '', SKS6: '',
        KodeMK7: '', NamaMatkul7: '', Nilai7: '', SKS7: '',
        KodeMK8: '', NamaMatkul8: '', Nilai8: '', SKS8: '',
        KodeMK9: '', NamaMatkul9: '', Nilai9: '', SKS9: '',
        KodeMK10: '', NamaMatkul10: '', Nilai10: '', SKS10: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const initializeRSA = (e) => {
        e.preventDefault();
        const rsa = new RSA();
        const pubKey = { e: rsa.publicKey.e, n: rsa.publicKey.n };
        const priKey = { d: rsa.privateKey.d, n: rsa.publicKey.n };
        setPublicKey(pubKey);
        setPrivateKey(priKey);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let key in formData) {
            if (formData[key].trim() === '') {
                setError('All fields are required.');
                return;
            }
        }
        setError('');

        const encryptionKey = 'halohalo'; // nanti diganti
        const rc4 = new ModifiedRC4(encryptionKey);
        
        const encryptedFormData = {};
        for (let key in formData) {
            if (formData.hasOwnProperty(key)) {
                encryptedFormData[key] = rc4.encrypt(String(formData[key]));
            }
        }

        fetch('http://localhost:8081/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(encryptedFormData)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setSuccess('Data inserted successfully!');
                    setError('');
                } else {
                    setError('Insert failed. ' + data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setError(error.message);
            });
    };

    return (
        <div className="homepage">
            <Container>
                <Row className="header-box d-flex align-items-center">
                    <Col xs={12}>
                        <h1 style={{paddingTop: "20px", fontWeight: "bold"}}>Tugas 4 Mata Kuliah II403 Kriptografi dan Koding</h1>
                    </Col>
                    <div className="separator">

                    </div>
                    <Col xs={4}>
                        <h4>Josua Adriel Sinabutar</h4>
                        <h5>18221065</h5>
                    </Col>
                    <Col xs={4}>
                        <h4>Tara Chandani Haryono</h4>
                        <h5>18221146</h5>
                    </Col>
                    <Col xs={4}>
                        <h4>Ceavin Rufus</h4>
                        <h5>18221162</h5>
                    </Col>
                </Row>
                <Row className="my-4">
                <h2>Data Akademik Mahasiswa</h2>
                    <Col>
                        <button
                            disabled={publicKey && privateKey}
                            onClick={initializeRSA}
                            className="generate-key-btn"
                        >
                            {publicKey && privateKey ? "Key Already Generated!" : "Generate Key RSA!"}
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {publicKey && privateKey && (
                            <div className="keys">
                                <div className="public-key">
                                    <p>Your Public Key: </p>
                                    <p>e: {publicKey.e}</p>
                                    <p>n: {publicKey.n}</p>
                                </div>
                                <div className="private-key">
                                    <p>Your Private Key: </p>
                                    <p>d: {privateKey.d}</p>
                                    <p>n: {privateKey.n}</p>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
                <form onSubmit={handleSubmit}>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {success && <div style={{ color: 'green' }}>{success}</div>}
                    <Row className="form-row">
                        <Col md={6}>
                            <label>NIM Mahasiswa:</label>
                            <textarea name="NIM" value={formData.NIM} onChange={handleInputChange} />
                        </Col>
                        <Col md={6}>
                            <label>Nama Mahasiswa:</label>
                            <textarea name="Nama" value={formData.Nama} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col md={6}>
                            <label>IPK:</label>
                            <textarea name="IPK" value={formData.IPK} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="mata-kuliah-section">
                            <h4>Mata Kuliah {index + 1}</h4>
                            <Row className="form-row">
                                <Col md={3}>
                                    <label>Kode:</label>
                                    <textarea
                                        name={`KodeMK${index + 1}`}
                                        value={formData[`KodeMK${index + 1}`]}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                                <Col md={3}>
                                    <label>Nama:</label>
                                    <textarea
                                        name={`NamaMatkul${index + 1}`}
                                        value={formData[`NamaMatkul${index + 1}`]}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                                <Col md={3}>
                                    <label>Nilai:</label>
                                    <textarea
                                        name={`Nilai${index + 1}`}
                                        value={formData[`Nilai${index + 1}`]}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                                <Col md={3}>
                                    <label>SKS:</label>
                                    <textarea
                                        name={`SKS${index + 1}`}
                                        value={formData[`SKS${index + 1}`]}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>
                        </div>
                    ))}
                    <Row className="form-row">
                        <Col>
                            <button type="submit" className="submit-btn">Submit</button>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    );
};

export default Home;
