-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: May 24, 2024 at 05:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `akademik`
--

-- --------------------------------------------------------

--
-- Table structure for table `studentcourses`
--

CREATE TABLE `studentcourses` (
  `NIM` varchar(100) NOT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `KodeMK1` varchar(100) DEFAULT NULL,
  `NamaMatkul1` varchar(100) DEFAULT NULL,
  `Nilai1` varchar(100) DEFAULT NULL,
  `SKS1` varchar(100) DEFAULT NULL,
  `KodeMK2` varchar(100) DEFAULT NULL,
  `NamaMatkul2` varchar(100) DEFAULT NULL,
  `Nilai2` varchar(100) DEFAULT NULL,
  `SKS2` varchar(100) DEFAULT NULL,
  `KodeMK3` varchar(100) DEFAULT NULL,
  `NamaMatkul3` varchar(100) DEFAULT NULL,
  `Nilai3` varchar(100) DEFAULT NULL,
  `SKS3` varchar(100) DEFAULT NULL,
  `KodeMK4` varchar(100) DEFAULT NULL,
  `NamaMatkul4` varchar(100) DEFAULT NULL,
  `Nilai4` varchar(100) DEFAULT NULL,
  `SKS4` varchar(100) DEFAULT NULL,
  `KodeMK5` varchar(100) DEFAULT NULL,
  `NamaMatkul5` varchar(100) DEFAULT NULL,
  `Nilai5` varchar(100) DEFAULT NULL,
  `SKS5` varchar(100) DEFAULT NULL,
  `KodeMK6` varchar(100) DEFAULT NULL,
  `NamaMatkul6` varchar(100) DEFAULT NULL,
  `Nilai6` varchar(100) DEFAULT NULL,
  `SKS6` varchar(100) DEFAULT NULL,
  `KodeMK7` varchar(100) DEFAULT NULL,
  `NamaMatkul7` varchar(100) DEFAULT NULL,
  `Nilai7` varchar(100) DEFAULT NULL,
  `SKS7` varchar(100) DEFAULT NULL,
  `KodeMK8` varchar(100) DEFAULT NULL,
  `NamaMatkul8` varchar(100) DEFAULT NULL,
  `Nilai8` varchar(100) DEFAULT NULL,
  `SKS8` varchar(100) DEFAULT NULL,
  `KodeMK9` varchar(100) DEFAULT NULL,
  `NamaMatkul9` varchar(100) DEFAULT NULL,
  `Nilai9` varchar(100) DEFAULT NULL,
  `SKS9` varchar(100) DEFAULT NULL,
  `KodeMK10` varchar(100) DEFAULT NULL,
  `NamaMatkul10` varchar(100) DEFAULT NULL,
  `Nilai10` varchar(100) DEFAULT NULL,
  `SKS10` varchar(100) DEFAULT NULL,
  `IPK` varchar(100) DEFAULT NULL,
  `DigitalSignature` varchar(255) DEFAULT NULL,
  `PublicKey` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentcourses`
--

INSERT INTO `studentcourses` (`NIM`, `Nama`, `KodeMK1`, `NamaMatkul1`, `Nilai1`, `SKS1`, `KodeMK2`, `NamaMatkul2`, `Nilai2`, `SKS2`, `KodeMK3`, `NamaMatkul3`, `Nilai3`, `SKS3`, `KodeMK4`, `NamaMatkul4`, `Nilai4`, `SKS4`, `KodeMK5`, `NamaMatkul5`, `Nilai5`, `SKS5`, `KodeMK6`, `NamaMatkul6`, `Nilai6`, `SKS6`, `KodeMK7`, `NamaMatkul7`, `Nilai7`, `SKS7`, `KodeMK8`, `NamaMatkul8`, `Nilai8`, `SKS8`, `KodeMK9`, `NamaMatkul9`, `Nilai9`, `SKS9`, `KodeMK10`, `NamaMatkul10`, `Nilai10`, `SKS10`, `IPK`, `DigitalSignature`, `PublicKey`) VALUES
('NGFiNDA0ODYzZTM4NzFjZQ==', 'MzhlOTU3YzI2NjY3NjdhZTVkZGM5NTY4ZmY4MTEzMTNjNjY5ODhhN2M3YWQyNTEyYzUxY2MwMzQ=', 'MzJjNTA0ODYzZDM4', 'MzZlZDU4ZDU2NTZjMmE5OTQ2OWFiMDY5YjBiYzEzNThiNjQ4YmQ5Nw==', 'M2E=', 'NDg=', 'MzJjNTA1ODYzZDM5', 'M2FmZTQ1ZGQ3YjZjMmM4ODVkYzhjMDVlYjFiMTEzNDFlNjY5ODBhZGM3', 'M2E=', 'NDg=', 'MzJjNTA1ODYzYzM5', 'MzBlOTU3ZDk2ZTY3MjY5MjA4ZjM4ZTdkYjBiNzFiNTJlNTcy', 'M2E=', 'NDg=', 'MzJjNTA1ODYzYjM5', 'MjllOTVkZDU3NjY4MzQ5ZDA4ZTk4OTY4YWJhMDFiMTNmMjdhODdmZWY2YmE2ZTJjZGYwMmNkMzIzNjUyZmVlMTg3OTg2ZGNiM2Rk', 'M2E=', 'NDg=', 'MzJjNTA1ODYzOTM5', 'MmJlMDU3YzA2OTY2MzU5MTA4ZGU4MTc1ZmY5NTEzNWRmMTdlODRiY2MzYjE2MjIzZGU0ZWUzMjUzMzFiZGNlZTkyOWUzZmViMzNj', 'M2E=', 'NDg=', 'MzJjNTAyODQzYzM4', 'MzBmZTVmYzQ3YjY2MjA4ZTQ5ZGM4OTNiYmJhNDE4MTNkZDc0OGRiN2NjYjg=', 'M2E=', 'NDk=', 'MzJjNTAyODQzYzNj', 'MjhlNTQ1YzA2YTY0NjdiZjRkYzg4NDdhYWM=', 'M2E=', 'NDk=', 'MzJjNTAyODQzYzNj', 'MzZlZDU4ZDU2NTZjMmE5OTQ2OWFiMDY5YjBhMTAzNTg=', 'M2E=', 'NDk=', 'MzJjNTAyODAzODNi', 'MzBlMzViYzE2MTYwMmM5ZDViZDNjMDUyYjFiMTEzNDFlNjdlOWJhZGNkYjE2NDJl', 'M2E=', 'NDk=', 'MzJjNTAyODQzNjM5', 'MzBlOTQ0ZGU2ZTI5MTc4ZTQ5ZDE5NDdlYjQ=', 'M2E=', 'NDk=', 'NGZhMjA2ODQ=', 'MzZkODc3ODE0MTVkMGU4NDY1ZjlhMTYzOTFhZjI3NGFkODU4YThhN2VkOGI2ZTM4ZmQwNGM1NjYxNjM2ZmFiZmFmOWQ0NjkzMTFmOWE0ZTE2MDAwMzYyMGJmNjg2NTc5YjYzODBhNTMxNjQ1NzkzYmVjNGY2MTlkYTg5NmU1NGZhNjk4ZGIxNzM3OWE1YzE3NDdiZDczYzdiNTg1MDlkYjEwMDA5NGY1ZThiOWIwZGJkMzU1ODYwNTc2ZTQ0Mzg', 'MDBhZTUzOTYzNTNhNmJkZTQ2OThkYTJmZWRmMTQ1MDJhMzIyOTQ=');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `studentcourses`
--
ALTER TABLE `studentcourses`
  ADD PRIMARY KEY (`NIM`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
