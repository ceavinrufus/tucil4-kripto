const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "akademik",
  port: "3307",
});

app.get("/", (re, res) => {
  return res.json("From Backend Side");
});

app.get("/get", (req, res) => {
  const sql = "SELECT * FROM StudentCourses";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/insert", (req, res) => {
  const formData = req.body;

  const sql = `
      INSERT INTO StudentCourses (
        NIM, Nama, KodeMK1, NamaMatkul1, Nilai1, SKS1,
        KodeMK2, NamaMatkul2, Nilai2, SKS2,
        KodeMK3, NamaMatkul3, Nilai3, SKS3,
        KodeMK4, NamaMatkul4, Nilai4, SKS4,
        KodeMK5, NamaMatkul5, Nilai5, SKS5,
        KodeMK6, NamaMatkul6, Nilai6, SKS6,
        KodeMK7, NamaMatkul7, Nilai7, SKS7,
        KodeMK8, NamaMatkul8, Nilai8, SKS8,
        KodeMK9, NamaMatkul9, Nilai9, SKS9,
        KodeMK10, NamaMatkul10, Nilai10, SKS10,
        IPK
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    formData.NIM,
    formData.Nama,
    formData.KodeMK1,
    formData.NamaMatkul1,
    formData.Nilai1,
    formData.SKS1,
    formData.KodeMK2,
    formData.NamaMatkul2,
    formData.Nilai2,
    formData.SKS2,
    formData.KodeMK3,
    formData.NamaMatkul3,
    formData.Nilai3,
    formData.SKS3,
    formData.KodeMK4,
    formData.NamaMatkul4,
    formData.Nilai4,
    formData.SKS4,
    formData.KodeMK5,
    formData.NamaMatkul5,
    formData.Nilai5,
    formData.SKS5,
    formData.KodeMK6,
    formData.NamaMatkul6,
    formData.Nilai6,
    formData.SKS6,
    formData.KodeMK7,
    formData.NamaMatkul7,
    formData.Nilai7,
    formData.SKS7,
    formData.KodeMK8,
    formData.NamaMatkul8,
    formData.Nilai8,
    formData.SKS8,
    formData.KodeMK9,
    formData.NamaMatkul9,
    formData.Nilai9,
    formData.SKS9,
    formData.KodeMK10,
    formData.NamaMatkul10,
    formData.Nilai10,
    formData.SKS10,
    formData.IPK,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res
        .status(500)
        .json({ success: false, message: "Error inserting data", error: err });
    } else {
      res.status(200).json({ success: true, result });
    }
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
