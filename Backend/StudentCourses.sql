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
  `NIM` varchar(8) NOT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `KodeMK1` varchar(10) DEFAULT NULL,
  `NamaMatkul1` varchar(100) DEFAULT NULL,
  `Nilai1` varchar(3) DEFAULT NULL,
  `SKS1` int(11) DEFAULT NULL,
  `KodeMK2` varchar(10) DEFAULT NULL,
  `NamaMatkul2` varchar(100) DEFAULT NULL,
  `Nilai2` varchar(3) DEFAULT NULL,
  `SKS2` int(11) DEFAULT NULL,
  `KodeMK3` varchar(10) DEFAULT NULL,
  `NamaMatkul3` varchar(100) DEFAULT NULL,
  `Nilai3` varchar(3) DEFAULT NULL,
  `SKS3` int(11) DEFAULT NULL,
  `KodeMK4` varchar(10) DEFAULT NULL,
  `NamaMatkul4` varchar(100) DEFAULT NULL,
  `Nilai4` varchar(3) DEFAULT NULL,
  `SKS4` int(11) DEFAULT NULL,
  `KodeMK5` varchar(10) DEFAULT NULL,
  `NamaMatkul5` varchar(100) DEFAULT NULL,
  `Nilai5` varchar(3) DEFAULT NULL,
  `SKS5` int(11) DEFAULT NULL,
  `KodeMK6` varchar(10) DEFAULT NULL,
  `NamaMatkul6` varchar(100) DEFAULT NULL,
  `Nilai6` varchar(3) DEFAULT NULL,
  `SKS6` int(11) DEFAULT NULL,
  `KodeMK7` varchar(10) DEFAULT NULL,
  `NamaMatkul7` varchar(100) DEFAULT NULL,
  `Nilai7` varchar(3) DEFAULT NULL,
  `SKS7` int(11) DEFAULT NULL,
  `KodeMK8` varchar(10) DEFAULT NULL,
  `NamaMatkul8` varchar(100) DEFAULT NULL,
  `Nilai8` varchar(3) DEFAULT NULL,
  `SKS8` int(11) DEFAULT NULL,
  `KodeMK9` varchar(10) DEFAULT NULL,
  `NamaMatkul9` varchar(100) DEFAULT NULL,
  `Nilai9` varchar(3) DEFAULT NULL,
  `SKS9` int(11) DEFAULT NULL,
  `KodeMK10` varchar(10) DEFAULT NULL,
  `NamaMatkul10` varchar(100) DEFAULT NULL,
  `Nilai10` varchar(3) DEFAULT NULL,
  `SKS10` int(11) DEFAULT NULL,
  `IPK` decimal(3,2) DEFAULT NULL,
  `DigitalSignature` varbinary(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `StudentCourses`
--

INSERT INTO `StudentCourses` (`NIM`, `Nama`, `KodeMK1`, `NamaMatkul1`, `Nilai1`, `SKS1`, `KodeMK2`, `NamaMatkul2`, `Nilai2`, `SKS2`, `KodeMK3`, `NamaMatkul3`, `Nilai3`, `SKS3`, `KodeMK4`, `NamaMatkul4`, `Nilai4`, `SKS4`, `KodeMK5`, `NamaMatkul5`, `Nilai5`, `SKS5`, `KodeMK6`, `NamaMatkul6`, `Nilai6`, `SKS6`, `KodeMK7`, `NamaMatkul7`, `Nilai7`, `SKS7`, `KodeMK8`, `NamaMatkul8`, `Nilai8`, `SKS8`, `KodeMK9`, `NamaMatkul9`, `Nilai9`, `SKS9`, `KodeMK10`, `NamaMatkul10`, `Nilai10`, `SKS10`, `IPK`, `DigitalSignature`) VALUES
('18221001', 'Agus Santoso', 'II2130', 'Sistem dan Arsitektur Komputer', 'A', 3, 'II2250', 'Manajemen Basis Data', 'BC', 2, 'II2110', 'Matematika STI', 'AB', 3, 'II2260', 'Sistem Embedded', 'B', 3, 'II2111', 'Probabilitas dan Statistik', 'A', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'AB', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'A', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.45, NULL),
('18221002', 'Budi Prasetyo', 'II2130', 'Sistem dan Arsitektur Komputer', 'BC', 3, 'II2250', 'Manajemen Basis Data', 'AB', 2, 'II2110', 'Matematika STI', 'A', 3, 'II2260', 'Sistem Embedded', 'B', 3, 'II2111', 'Probabilitas dan Statistik', 'AB', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'A', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'AB', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.60, NULL),
('18221003', 'Citra Ayu', 'II2130', 'Sistem dan Arsitektur Komputer', 'AB', 3, 'II2250', 'Manajemen Basis Data', 'B', 2, 'II2110', 'Matematika STI', 'BC', 3, 'II2260', 'Sistem Embedded', 'A', 3, 'II2111', 'Probabilitas dan Statistik', 'BC', 3, 'II2230', 'Jaringan Komputer', 'AB', 3, 'II2220', 'Manajemen Sumber Daya STI', 'B', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'A', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'BC', 3, 'II3230', 'Keamanan Informasi', 'AB', 3, 3.50, NULL),
('18221004', 'Dewi Lestari', 'II2130', 'Sistem dan Arsitektur Komputer', 'BC', 3, 'II2250', 'Manajemen Basis Data', 'A', 2, 'II2110', 'Matematika STI', 'AB', 3, 'II2260', 'Sistem Embedded', 'B', 3, 'II2111', 'Probabilitas dan Statistik', 'A', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'AB', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'A', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.70, NULL),
('18221005', 'Eka Wibowo', 'II2130', 'Sistem dan Arsitektur Komputer', 'AB', 3, 'II2250', 'Manajemen Basis Data', 'BC', 2, 'II2110', 'Matematika STI', 'A', 3, 'II2260', 'Sistem Embedded', 'B', 3, 'II2111', 'Probabilitas dan Statistik', 'AB', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'A', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'AB', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.40, NULL),
('18221006', 'Fajar Nugroho', 'II2130', 'Sistem dan Arsitektur Komputer', 'BC', 3, 'II2250', 'Manajemen Basis Data', 'AB', 2, 'II2110', 'Matematika STI', 'A', 3, 'II2260', 'Sistem Embedded', 'B', 3, 'II2111', 'Probabilitas dan Statistik', 'AB', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'A', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'AB', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.55, NULL),
('18221007', 'Gita Pradana', 'II2130', 'Sistem dan Arsitektur Komputer', 'A', 3, 'II2250', 'Manajemen Basis Data', 'BC', 2, 'II2110', 'Matematika STI', 'AB', 3, 'II2260', 'Sistem Embedded', 'B', 3, 'II2111', 'Probabilitas dan Statistik', 'A', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'AB', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'A', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.65, NULL),
('18221008', 'Hadi Wijaya', 'II2130', 'Sistem dan Arsitektur Komputer', 'BC', 3, 'II2250', 'Manajemen Basis Data', 'AB', 2, 'II2110', 'Matematika STI', 'A', 3, 'II2260', 'Sistem Embedded', 'B', 3, 'II2111', 'Probabilitas dan Statistik', 'AB', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'A', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'AB', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.30, NULL),
('18221009', 'Indah Sari', 'II2130', 'Sistem dan Arsitektur Komputer', 'AB', 3, 'II2250', 'Manajemen Basis Data', 'B', 2, 'II2110', 'Matematika STI', 'BC', 3, 'II2260', 'Sistem Embedded', 'A', 3, 'II2111', 'Probabilitas dan Statistik', 'BC', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'A', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'AB', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.30, NULL),
('18221010', 'Indah Sari', 'II2130', 'Sistem dan Arsitektur Komputer', 'AB', 3, 'II2250', 'Manajemen Basis Data', 'B', 2, 'II2110', 'Matematika STI', 'BC', 3, 'II2260', 'Sistem Embedded', 'A', 3, 'II2111', 'Probabilitas dan Statistik', 'BC', 3, 'II2230', 'Jaringan Komputer', 'BC', 3, 'II2220', 'Manajemen Sumber Daya STI', 'A', 3, 'II2240', 'Analisis Kebutuhan Sistem', 'B', 3, 'II3160', 'Teknologi Sistem Terintegrasi', 'AB', 3, 'II3230', 'Keamanan Informasi', 'BC', 3, 3.30, NULL);

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
