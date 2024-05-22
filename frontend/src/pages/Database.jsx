import { useState, useEffect } from "react";
// import { data as d } from "../../db/dummy";

function Database() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/get")
      .then((res) => res.json())
      .then((data) => setData(data))
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
  ];

  const cellStyle = {
    padding: "10px", // Adjust the padding as needed
    border: "1px solid #ddd", // Optional: add borders to cells for better visualization
  };

  return (
    <div>
      <h1>Database Akademik</h1>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={cellStyle}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} style={cellStyle}>
                    {item[col]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Database;
