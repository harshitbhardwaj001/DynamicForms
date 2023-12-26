-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 05:46 AM
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
-- Database: `register`
--

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `f_id` int(20) NOT NULL,
  `doc_name` varchar(100) NOT NULL,
  `doc_desc` varchar(100) NOT NULL,
  `questions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`questions`)),
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`f_id`, `doc_name`, `doc_desc`, `questions`, `end_date`) VALUES
(54, 'GIGW Compliant Website', 'Add GIGW Compliant Website Data', '\"[{\\\"questionText\\\":\\\"Address of the wbsite/application\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Eg : https://www.csir.res.in\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"SSL Layer Implemented\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"option1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"},{\\\"optionText\\\":\\\"Option 3\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"STQC Done\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Yes\\\"},{\\\"optionText\\\":\\\"No\\\"}],\\\"open\\\":false,\\\"required\\\":false}]\"', '2023-12-26'),
(55, 'Server', 'Add Server Data', '\"[{\\\"questionText\\\":\\\"Device Name\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Serial Number\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Make\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Model\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Date of Purchase/Date of AMC\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"AMC valid upto\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Details of Purchase & AMC\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Single Party/Multi Party\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":true,\\\"required\\\":false}]\"', '2023-12-27'),
(57, 'Software', 'Add Software Data', '\"[{\\\"questionText\\\":\\\"URL\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Category\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Option 1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"},{\\\"optionText\\\":\\\"Option 3\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Platform\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Date of Installation\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"User Division\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":true,\\\"required\\\":true}]\"', '2023-11-30'),
(58, 'Server', 'Add Server Data', '\"[{\\\"questionText\\\":\\\"Device Name\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Serial Number\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Make\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Model\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Date of Purchase/Date of AMC/Date of Warranty\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":true,\\\"required\\\":true},{\\\"questionText\\\":\\\"AMC valid upto\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Details of Purchase & AMC\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Single Party/Multi Party\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false}]\"', '2023-11-30'),
(59, 'Test Form', 'Test Description', '\"[{\\\"questionText\\\":\\\"Test Question\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Option 1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Question\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Option 1\\\"}],\\\"open\\\":true,\\\"required\\\":false}]\"', '2023-12-23');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `lab_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`lab_id`, `name`, `username`, `password`) VALUES
(1, 'Admin', 'Admin', 'csir'),
(2, 'Lab1', 'user1', 'user1'),
(3, 'CSIR-AMPRI', 'AMPRI', 'AMPRI@123'),
(5, 'CSIR-CBRI', 'CBRI', 'CBRI@123'),
(6, 'CSIR-CCMB', 'CCMB', 'CCMB@123'),
(7, 'CSIR-CDRI', 'CDRI', 'CDRI@123'),
(8, 'CSIR-CECRI', 'CECRI', 'CECRI@123'),
(9, 'CSIR-CEERI', 'CEERI', 'CEERI@123'),
(10, 'CSIR-CFTRI', 'CFTRI', 'CFTRI@123'),
(11, 'CSIR-CGCRI', 'CGCRI', 'CGCRI@123'),
(12, 'CSIR-CIMAP', 'CIMAP', 'CIMAP@123'),
(13, 'CSIR-CLRI', 'CLRI', 'CLRI@123'),
(14, 'CSIR-CMERI', 'CMERI', 'CMERI@123'),
(15, 'CSIR-CRRI', 'CRRI', 'CRRI@123'),
(16, 'CSIR-CSIO', 'CSIO', 'CSIO@123'),
(17, 'CSIR-CSMCRI', 'CSMCRI', 'CSMCRI@123'),
(18, 'CSIR-4PI', '4PI', '4PI@123'),
(19, 'CSIR-IGIB', 'IGIB', 'IGIB@123'),
(20, 'CSIR-IICB', 'IICB', 'IICB@123'),
(21, 'CSIR-IICT', 'IICT', 'IICT@123'),
(22, 'CSIR-IIP', 'IIP', 'IIP@123'),
(23, 'CSIR-IMTECH', 'IMTECH', 'IMTECH@123'),
(24, 'CSIR-IITR', 'IITR', 'IITR@123'),
(25, 'CSIR-CSIR Madras Com', 'CSIRMC', 'CSIRMC@123'),
(26, 'CSIR-NAL', 'NAL', 'NAL@123'),
(27, 'CSIR-NBRI', 'NBRI', 'NBRI@123'),
(28, 'CSIR-NCL', 'NCL', 'NCL@123'),
(29, 'CSIR-NEERI', 'NEERI', 'NEERI@123'),
(30, 'CSIR-NGRI', 'NGRI', 'NGRI@123'),
(31, 'CSIR-NIO', 'NIO', 'NIO@123'),
(32, 'CSIR-NML', 'NML', 'NML@123'),
(33, 'CSIR-NPL', 'NPL', 'NPL@123'),
(34, 'CSIR-IHBT', 'IHBT', 'IHBT@123'),
(35, 'CSIR-IMMT', 'IMMT', 'IMMT@123'),
(36, 'CSIR-IIIM', 'IIIM', 'IIIM@123'),
(37, 'CSIR-NEIST', 'NEIST', 'NEIST@123'),
(38, 'CSIR-NIIST', 'NIIST', 'NIIST@123'),
(39, 'CSIR-SERC ', 'SERC', 'SERC@123'),
(40, 'CSIR-NIScPR', 'NIScPR', 'NIScPR@123'),
(41, 'CSIR-CIMFR', 'CIMFR', 'CIMFR@123'),
(42, 'CSIR-HRDC', 'HRDC', 'HRDC@123'),
(43, 'CSIR-CSIRHQ.', 'CSIRHQ', 'CSIRHQ@123'),
(44, 'CSIR-CBRI', 'CBRI', 'CBRI@123'),
(45, 'CSIR-CCMB', 'CCMB', 'CCMB@123'),
(46, 'CSIR-CDRI', 'CDRI', 'CDRI@123'),
(47, 'CSIR-CECRI', 'CECRI', 'CECRI@123'),
(48, 'CSIR-CEERI', 'CEERI', 'CEERI@123'),
(49, 'CSIR-CFTRI', 'CFTRI', 'CFTRI@123'),
(50, 'CSIR-CGCRI', 'CGCRI', 'CGCRI@123'),
(51, 'CSIR-CIMAP', 'CIMAP', 'CIMAP@123'),
(52, 'CSIR-CLRI', 'CLRI', 'CLRI@123'),
(53, 'CSIR-CMERI', 'CMERI', 'CMERI@123'),
(54, 'CSIR-CRRI', 'CRRI', 'CRRI@123'),
(55, 'CSIR-CSIO', 'CSIO', 'CSIO@123'),
(56, 'CSIR-CSMCRI', 'CSMCRI', 'CSMCRI@123'),
(57, 'CSIR-4PI', '4PI', '4PI@123'),
(58, 'CSIR-IGIB', 'IGIB', 'IGIB@123'),
(59, 'CSIR-IICB', 'IICB', 'IICB@123'),
(60, 'CSIR-IICT', 'IICT', 'IICT@123'),
(61, 'CSIR-IIP', 'IIP', 'IIP@123'),
(62, 'CSIR-IMTECH', 'IMTECH', 'IMTECH@123'),
(63, 'CSIR-IITR', 'IITR', 'IITR@123'),
(64, 'CSIR-CSIR Madras Com', 'CSIR Madras Complex', 'CSIRMC@123'),
(65, 'CSIR-NAL', 'NAL', 'NAL@123'),
(66, 'CSIR-NBRI', 'NBRI', 'NBRI@123'),
(67, 'CSIR-NCL', 'NCL', 'NCL@123'),
(68, 'CSIR-NEERI', 'NEERI', 'NEERI@123'),
(69, 'CSIR-NGRI', 'NGRI', 'NGRI@123'),
(70, 'CSIR-NIO', 'NIO', 'NIO@123'),
(71, 'CSIR-NML', 'NML', 'NML@123'),
(72, 'CSIR-NPL', 'NPL', 'NPL@123'),
(73, 'CSIR-IHBT', 'IHBT', 'IHBT@123'),
(74, 'CSIR-IMMT', 'IMMT', 'IMMT@123'),
(75, 'CSIR-IIIM', 'IIIM', 'IIIM@123'),
(76, 'CSIR-NEIST', 'NEIST', 'NEIST@123'),
(77, 'CSIR-NIIST', 'NIIST', 'NIIST@123'),
(78, 'CSIR-SERC ', 'SERC', 'SERC@123'),
(79, 'CSIR-NIScPR', 'NIScPR', 'NIScPR@123'),
(80, 'CSIR-CIMFR', 'CIMFR', 'CIMFR@123'),
(81, 'CSIR-HRDC', 'HRDC', 'HRDC@123'),
(82, 'CSIR-CSIRHQ.', 'CSIRHQ', 'CSIRHQ@123');

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `r_id` int(11) NOT NULL,
  `f_id` int(11) NOT NULL,
  `lab_id` varchar(20) NOT NULL,
  `responses` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`responses`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`r_id`, `f_id`, `lab_id`, `responses`) VALUES
(15, 49, 'Lab1', '\"{\\\"f_id\\\":49,\\\"doc_name\\\":\\\"Server Form\\\",\\\"doc_desc\\\":\\\"Server Desc\\\",\\\"questions\\\":[{\\\"questionText\\\":\\\"Address of the wbsite/application\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Eg : https://www.csir.res.in\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"SSL Layer Implemented\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"option1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"},{\\\"optionText\\\":\\\"Option 3\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"STQC Done\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Yes\\\"},{\\\"optionText\\\":\\\"No\\\"}],\\\"open\\\":false,\\\"required\\\":false}],\\\"end_date\\\":\\\"2023-11-25T18:30:00.000Z\\\",\\\"question_0\\\":\\\"csir.res.in\\\",\\\"question_1\\\":\\\"Option 2\\\",\\\"question_2\\\":\\\"No\\\"}\"'),
(32, 54, 'Lab1', '\"{\\\"f_id\\\":54,\\\"doc_name\\\":\\\"GIGW Compliant Website\\\",\\\"doc_desc\\\":\\\"Add GIGW Compliant Website Data\\\",\\\"questions\\\":[{\\\"questionText\\\":\\\"Address of the wbsite/application\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Eg : https://www.csir.res.in\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"SSL Layer Implemented\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"option1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"},{\\\"optionText\\\":\\\"Option 3\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"STQC Done\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Yes\\\"},{\\\"optionText\\\":\\\"No\\\"}],\\\"open\\\":false,\\\"required\\\":false}],\\\"end_date\\\":\\\"2023-11-25T18:30:00.000Z\\\",\\\"question_0\\\":\\\"csir.res.in\\\",\\\"question_1\\\":\\\"Option 3\\\",\\\"question_2\\\":\\\"No\\\",\\\"Remarks\\\":\\\"Test Remark\\\"}\"'),
(33, 57, 'Lab1', '\"{\\\"f_id\\\":57,\\\"doc_name\\\":\\\"Software\\\",\\\"doc_desc\\\":\\\"Add Software Data\\\",\\\"questions\\\":[{\\\"questionText\\\":\\\"URL\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Category\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Option 1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"},{\\\"optionText\\\":\\\"Option 3\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Platform\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Date of Installation\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"User Division\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":true,\\\"required\\\":true}],\\\"end_date\\\":\\\"2023-11-29T18:30:00.000Z\\\",\\\"question_0\\\":\\\"csir.res.in\\\",\\\"question_1\\\":\\\"Option 2\\\",\\\"question_2\\\":\\\"123\\\",\\\"question_3\\\":\\\"2023-11-30\\\",\\\"question_4\\\":\\\"Lab\\\"}\"'),
(34, 58, 'Lab1', '\"{\\\"f_id\\\":57,\\\"doc_name\\\":\\\"Software\\\",\\\"doc_desc\\\":\\\"Add Software Data\\\",\\\"questions\\\":[{\\\"questionText\\\":\\\"Category\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Option 1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"},{\\\"optionText\\\":\\\"Option 3\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Platform\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Date of Installation\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"User Division\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":true,\\\"required\\\":true}],\\\"end_date\\\":\\\"2023-11-29T18:30:00.000Z\\\",\\\"question_0\\\":\\\"csir.res.in\\\",\\\"question_1\\\":\\\"Option 2\\\",\\\"question_2\\\":\\\"123\\\",\\\"question_3\\\":\\\"2023-11-30\\\"}\"'),
(35, 54, 'CSIR-AMPRI', '\"{\\\"f_id\\\":54,\\\"doc_name\\\":\\\"GIGW Compliant Website\\\",\\\"doc_desc\\\":\\\"Add GIGW Compliant Website Data\\\",\\\"questions\\\":[{\\\"questionText\\\":\\\"Address of the wbsite/application\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Eg : https://www.csir.res.in\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"SSL Layer Implemented\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"option1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"},{\\\"optionText\\\":\\\"Option 3\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"STQC Done\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Yes\\\"},{\\\"optionText\\\":\\\"No\\\"}],\\\"open\\\":false,\\\"required\\\":false}],\\\"end_date\\\":\\\"2023-12-25T18:30:00.000Z\\\",\\\"question_0\\\":\\\"csir.res.in\\\",\\\"question_1\\\":\\\"Option 2\\\",\\\"question_2\\\":\\\"No\\\",\\\"Remarks\\\":\\\"Hello\\\"}\"'),
(36, 55, 'CSIR-CBRI', '\"{\\\"f_id\\\":55,\\\"doc_name\\\":\\\"Server\\\",\\\"doc_desc\\\":\\\"Add Server Data\\\",\\\"questions\\\":[{\\\"questionText\\\":\\\"Device Name\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Serial Number\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Make\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Model\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Date of Purchase/Date of AMC\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"AMC valid upto\\\",\\\"questionType\\\":\\\"date\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"Details of Purchase & AMC\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":false,\\\"required\\\":false},{\\\"questionText\\\":\\\"Single Party/Multi Party\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"\\\"}],\\\"open\\\":true,\\\"required\\\":false}],\\\"end_date\\\":\\\"2023-12-26T18:30:00.000Z\\\",\\\"question_0\\\":\\\"Test\\\",\\\"question_1\\\":\\\"123\\\",\\\"question_2\\\":\\\"21\\\",\\\"question_3\\\":\\\"21\\\",\\\"question_4\\\":\\\"2023-12-09\\\",\\\"question_5\\\":\\\"2023-12-15\\\",\\\"question_6\\\":\\\"Test\\\",\\\"question_7\\\":\\\"Test\\\",\\\"Remarks\\\":\\\"Test Remark\\\"}\"'),
(37, 54, 'CSIR-CBRI', '\"{\\\"f_id\\\":54,\\\"doc_name\\\":\\\"GIGW Compliant Website\\\",\\\"doc_desc\\\":\\\"Add GIGW Compliant Website Data\\\",\\\"questions\\\":[{\\\"questionText\\\":\\\"Address of the wbsite/application\\\",\\\"questionType\\\":\\\"Text\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Eg : https://www.csir.res.in\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"SSL Layer Implemented\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"option1\\\"},{\\\"optionText\\\":\\\"Option 2\\\"},{\\\"optionText\\\":\\\"Option 3\\\"}],\\\"open\\\":false,\\\"required\\\":true},{\\\"questionText\\\":\\\"STQC Done\\\",\\\"questionType\\\":\\\"radio\\\",\\\"options\\\":[{\\\"optionText\\\":\\\"Yes\\\"},{\\\"optionText\\\":\\\"No\\\"}],\\\"open\\\":false,\\\"required\\\":false}],\\\"end_date\\\":\\\"2023-12-25T18:30:00.000Z\\\",\\\"question_0\\\":\\\"csir.res.in\\\",\\\"question_1\\\":\\\"Option 3\\\",\\\"question_2\\\":\\\"Yes\\\",\\\"Remarks\\\":\\\"Test\\\"}\"');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`f_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`lab_id`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`r_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `f_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `lab_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `responses`
--
ALTER TABLE `responses`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
