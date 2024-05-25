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
  `Nama` varchar(255) DEFAULT NULL,
  `KodeMK1` varchar(100) DEFAULT NULL,
  `NamaMatkul1` varchar(255) DEFAULT NULL,
  `Nilai1` varchar(100) DEFAULT NULL,
  `SKS1` varchar(100) DEFAULT NULL,
  `KodeMK2` varchar(100) DEFAULT NULL,
  `NamaMatkul2` varchar(255) DEFAULT NULL,
  `Nilai2` varchar(100) DEFAULT NULL,
  `SKS2` varchar(100) DEFAULT NULL,
  `KodeMK3` varchar(100) DEFAULT NULL,
  `NamaMatkul3` varchar(255) DEFAULT NULL,
  `Nilai3` varchar(100) DEFAULT NULL,
  `SKS3` varchar(100) DEFAULT NULL,
  `KodeMK4` varchar(100) DEFAULT NULL,
  `NamaMatkul4` varchar(255) DEFAULT NULL,
  `Nilai4` varchar(100) DEFAULT NULL,
  `SKS4` varchar(100) DEFAULT NULL,
  `KodeMK5` varchar(100) DEFAULT NULL,
  `NamaMatkul5` varchar(255) DEFAULT NULL,
  `Nilai5` varchar(100) DEFAULT NULL,
  `SKS5` varchar(100) DEFAULT NULL,
  `KodeMK6` varchar(100) DEFAULT NULL,
  `NamaMatkul6` varchar(255) DEFAULT NULL,
  `Nilai6` varchar(100) DEFAULT NULL,
  `SKS6` varchar(100) DEFAULT NULL,
  `KodeMK7` varchar(100) DEFAULT NULL,
  `NamaMatkul7` varchar(255) DEFAULT NULL,
  `Nilai7` varchar(100) DEFAULT NULL,
  `SKS7` varchar(100) DEFAULT NULL,
  `KodeMK8` varchar(100) DEFAULT NULL,
  `NamaMatkul8` varchar(255) DEFAULT NULL,
  `Nilai8` varchar(100) DEFAULT NULL,
  `SKS8` varchar(100) DEFAULT NULL,
  `KodeMK9` varchar(100) DEFAULT NULL,
  `NamaMatkul9` varchar(255) DEFAULT NULL,
  `Nilai9` varchar(100) DEFAULT NULL,
  `SKS9` varchar(100) DEFAULT NULL,
  `KodeMK10` varchar(100) DEFAULT NULL,
  `NamaMatkul10` varchar(255) DEFAULT NULL,
  `Nilai10` varchar(100) DEFAULT NULL,
  `SKS10` varchar(100) DEFAULT NULL,
  `IPK` varchar(100) DEFAULT NULL,
  `DigitalSignature` TEXT DEFAULT NULL,
  `PublicKey` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentcourses`
--



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
