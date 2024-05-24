-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 18, 2024 at 06:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
-- Table structure for table `StudentCourses`
--

CREATE TABLE `StudentCourses` (
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
  `DigitalSignature` varbinary(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `StudentCourses`
--

INSERT INTO `StudentCourses` (`NIM`, `Nama`, `KodeMK1`, `NamaMatkul1`, `Nilai1`, `SKS1`, `KodeMK2`, `NamaMatkul2`, `Nilai2`, `SKS2`, `KodeMK3`, `NamaMatkul3`, `Nilai3`, `SKS3`, `KodeMK4`, `NamaMatkul4`, `Nilai4`, `SKS4`, `KodeMK5`, `NamaMatkul5`, `Nilai5`, `SKS5`, `KodeMK6`, `NamaMatkul6`, `Nilai6`, `SKS6`, `KodeMK7`, `NamaMatkul7`, `Nilai7`, `SKS7`, `KodeMK8`, `NamaMatkul8`, `Nilai8`, `SKS8`, `KodeMK9`, `NamaMatkul9`, `Nilai9`, `SKS9`, `KodeMK10`, `NamaMatkul10`, `Nilai10`, `SKS10`, `IPK`, `DigitalSignature`) VALUES
('NGFiNDA0ODYzZTM5NzdjZA==', 'M2FlYjQzYzcyZjVhMjY5MjVjZDU5Mzc0', 'MzJjNTA0ODUzYzM5', 'MjhlNTQ1YzA2YTY0Njc5ODQ5ZDRjMDVhYWRiNjFmNDdmMzcwOWRhYmQwZmY0ZTJkZGQxZWQ3MjEzYTAw', 'M2E=', 'NDg=', 'MzJjNTA0ODYzYTM5', 'MzZlZDU4ZDU2NTZjMmE5OTQ2OWFhMjdhYWNhYzA1MTNkMjdhOWRiZg==', 'M2E=', 'NDg=', 'MzJjNTA0ODUzYzM5', 'MjhlNTQ1YzA2YTY0Njc5ODQ5ZDRjMDVhYWRiNjFmNDdmMzcwOWRhYmQwZmY0ZTJkZGQxZWQ3MjEzYTAw', 'M2E=', 'NDg=', 'MzJjNTA0ODUzYzM5', 'MjhlNTQ1YzA2YTY0Njc5ODQ5ZDRjMDVhYWRiNjFmNDdmMzcwOWRhYmQwZmY0ZTJkZGQxZWQ3MjEzYTAw', 'M2E=', 'NDg=', 'MzJjNTA0ODUzYzM5', 'MjhlNTQ1YzA2YTY0Njc5ODQ5ZDRjMDVhYWRiNjFmNDdmMzcwOWRhYmQwZmY0ZTJkZGQxZWQ3MjEzYTAw', 'M2E=', 'NDg=', 'MzJjNTA0ODUzYzM5', 'MjhlNTQ1YzA2YTY0Njc5ODQ5ZDRjMDVhYWRiNjFmNDdmMzcwOWRhYmQwZmY0ZTJkZGQxZWQ3MjEzYTAw', 'M2E=', 'NDg=', 'MzJjNTA0ODUzYzM5', 'MjhlNTQ1YzA2YTY0Njc5ODQ5ZDRjMDVhYWRiNjFmNDdmMzcwOWRhYmQwZmY0ZTJkZGQxZWQ3MjEzYTAw', 'M2E=', 'NDg=', 'MzJjNTA0ODUzYzM5', 'MjhlNTQ1YzA2YTY0Njc5ODQ5ZDRjMDVhYWRiNjFmNDdmMzcwOWRhYmQwZmY0ZTJkZGQxZWQ3MjEzYTAw', 'M2E=', 'NDg=', 'MzJjNTA0ODUzYzM5', 'MjhlNTQ1YzA2YTY0Njc5ODQ5ZDRjMDVhYWRiNjFmNDdmMzcwOWRhYmQwZmY0ZTJkZGQxZWQ3MjEzYTAw', 'M2E=', 'NDg=', 'NDhhMjAyODE=', 'NDhiOTAxODU2ZDNkMjQ5ZDFjZDlkNDdhZWNmNTE0MGFmMjdhZDhiZmMwYmEzMzIzZDUwODkxNjQ2NzQyODVlOTgyYzMyOTkyNmJjZmNhYjUxZTY0NGEyYzkzMGE0NzMxOTkxODdiNWY2ZTIyNTU3MmMxMzk2MGNjZDVmMDgwMDQ=');


--
-- Indexes for dumped tables
--

--
-- Indexes for table `StudentCourses`
--
ALTER TABLE `StudentCourses`
  ADD PRIMARY KEY (`NIM`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
