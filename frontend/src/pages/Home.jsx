import RSA from "../utils/RSA";
import React, {useState} from "react";

const Home = () => {
    const [publicKey, setPublicKey] = useState();
    const [privateKey, setPrivateKey] = useState();
    const [formData, setFormData] = useState({
        NIM: '',
        Nama: '',
        KodeMK1: '',
        NamaMatkul1: '',
        Nilai1: '',
        SKS1: '',
        KodeMK2: '',
        NamaMatkul2: '',
        Nilai2: '',
        SKS2: '',
        KodeMK3: '',
        NamaMatkul3: '',
        Nilai3: '',
        SKS3: '',
        KodeMK4: '',
        NamaMatkul4: '',
        Nilai4: '',
        SKS4: '',
        KodeMK5: '',
        NamaMatkul5: '',
        Nilai5: '',
        SKS5: '',
        KodeMK6: '',
        NamaMatkul6: '',
        Nilai6: '',
        SKS6: '',
        KodeMK7: '',
        NamaMatkul7: '',
        Nilai7: '',
        SKS7: '',
        KodeMK8: '',
        NamaMatkul8: '',
        Nilai8: '',
        SKS8: '',
        KodeMK9: '',
        NamaMatkul9: '',
        Nilai9: '',
        SKS9: '',
        KodeMK10: '',
        NamaMatkul10: '',
        Nilai10: '',
        SKS10: '',
        IPK: ''
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
                setSuccess('s');
                return;
            }
        }
        setError('');
        fetch('http://localhost:8081/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
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
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <button
                disabled={publicKey && privateKey}
                onClick={initializeRSA}
            >
                {publicKey && privateKey ? "Key Already Generated" : "Generate Key"}
            </button>
            <div>
                {publicKey && privateKey && (
                    <div>
                        <div>
                            <p>Your Public Key: </p>
                            <p>e: {publicKey.e} </p>
                            <p>n: {publicKey.n}</p>
                        </div>
                        <div>
                            <p>Your Private Key: </p>
                            <p>d: {privateKey.d}</p>
                            <p>n: {privateKey.n}</p>
                        </div>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit}>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {success && <div style={{ color: 'green' }}>{success}</div>}
                <label>
                    NIM:
                    <textarea name="NIM" value={formData.NIM} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="Nama" value={formData.Nama} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 1:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK1" value={formData.KodeMK1} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul1" value={formData.NamaMatkul1} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai1" value={formData.Nilai1} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS1:
                    <textarea name="SKS1" value={formData.SKS1} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 2:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK2" value={formData.KodeMK2} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul2" value={formData.NamaMatkul2} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai2" value={formData.Nilai2} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS2" value={formData.SKS2} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 3:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK3" value={formData.KodeMK3} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul3" value={formData.NamaMatkul3} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai3" value={formData.Nilai3} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS3" value={formData.SKS3} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 4:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK4" value={formData.KodeMK4} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul4" value={formData.NamaMatkul4} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai4" value={formData.Nilai4} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS4" value={formData.SKS4} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 5:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK5" value={formData.KodeMK5} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul5" value={formData.NamaMatkul5} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai5" value={formData.Nilai5} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS5" value={formData.SKS5} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 6:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK6" value={formData.KodeMK6} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul6" value={formData.NamaMatkul6} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai6" value={formData.Nilai6} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS6" value={formData.SKS6} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 7:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK7" value={formData.KodeMK7} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul7" value={formData.NamaMatkul7} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai7" value={formData.Nilai7} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS7" value={formData.SKS7} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 8:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK8" value={formData.KodeMK8} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul8" value={formData.NamaMatkul8} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai8" value={formData.Nilai8} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS8" value={formData.SKS8} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 2:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK9" value={formData.KodeMK9} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul9" value={formData.NamaMatkul9} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai9" value={formData.Nilai9} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS9" value={formData.SKS9} onChange={handleInputChange} />
                </label>
                <br />
                <p>Mata Kuliah 10:</p>
                <label>
                    Kode:
                    <textarea name="KodeMK10" value={formData.KodeMK10} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nama:
                    <textarea name="NamaMatkul10" value={formData.NamaMatkul10} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Nilai:
                    <textarea name="Nilai10" value={formData.Nilai10} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    SKS:
                    <textarea name="SKS10" value={formData.SKS10} onChange={handleInputChange} />
                </label>
                <br />
                <p></p>
                <label>
                    IPK:
                    <textarea name="IPK" value={formData.IPK} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;
