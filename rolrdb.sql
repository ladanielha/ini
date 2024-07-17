-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2024 at 11:00 AM
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
-- Database: `rolrdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `resto_id` int(10) NOT NULL,
  `menu_id` int(10) NOT NULL,
  `harga` int(20) NOT NULL,
  `kuantitas` int(20) NOT NULL,
  `total_harga` int(20) NOT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `user_id`, `resto_id`, `menu_id`, `harga`, `kuantitas`, `total_harga`, `updated_at`, `created_at`) VALUES
(3, 9, 2, 2, 25000, 3, 75000, '2024-01-07 17:31:28', '2024-01-07 17:31:28'),
(6, 7, 3, 9, 25000, 2, 50000, '2024-01-08 17:59:18', '2024-01-08 17:59:18'),
(7, 7, 3, 3, 12000, 2, 24000, '2024-01-08 17:59:21', '2024-01-08 17:59:21'),
(9, 7, 1, 1, 12000, 2, 24000, '2024-01-09 02:45:28', '2024-01-09 02:45:28');

-- --------------------------------------------------------

--
-- Table structure for table `datamakanan`
--

CREATE TABLE `datamakanan` (
  `makanan_id` bigint(20) UNSIGNED NOT NULL,
  `namamakanan` varchar(255) NOT NULL,
  `jenismakanan` varchar(255) NOT NULL,
  `namakota` varchar(200) NOT NULL,
  `harga` int(11) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `resto` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sertifikat` varchar(20) NOT NULL,
  `alamat` varchar(300) NOT NULL,
  `link` varchar(300) NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `datamakanan`
--

INSERT INTO `datamakanan` (`makanan_id`, `namamakanan`, `jenismakanan`, `namakota`, `harga`, `desc`, `gambar`, `resto`, `created_at`, `updated_at`, `sertifikat`, `alamat`, `link`, `store_id`) VALUES
(1, 'Docang', 'Nasi', 'Cirebon', 12000, 'Docang adalah nasi yang disajikan dengan tauge, tahu, tempe, dan oncom. Docang biasanya disiram dengan saus kacang dan kecap manis.', '1696530877.jpg', 'Docang Pak Kumis Khas Cirebon', '2023-10-04 21:34:37', '2023-10-04 21:34:37', 'ID32110006678560723', '7HM3+WPR, Jl. Tentara Pelajar, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/2rnKTFMYktccx2AH7', 1),
(2, 'Nasi Jamblang', 'Nasi', 'Cirebon', 25000, 'Nasi jamblang adalah nasi yang disajikan dengan lauk-pauk yang beragam, seperti tempe, tahu, telur, dan ayam. Nasi jamblang biasanya disajikan di atas daun pisang.', '1696531243.jpg', 'Nasi Jamblang Mbak Nur', '2023-10-04 21:40:43', '2023-10-04 21:40:43', 'ID32110007860960723', 'Jl. Cangkring 2 No.34, Kejaksan, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45123', 'https://maps.app.goo.gl/TuJUzzk2qAGoNf3A8', 2),
(3, 'Nasi Lengko', 'Nasi', 'Cirebon', 12000, 'Nasi lengko adalah nasi yang disajikan dengan tauge, tahu, tempe, lontong, dan kerupuk. Nasi lengko biasanya disiram dengan saus kacang dan kecap manis.', '1696531298.jpg', 'Empal Gentong H. Apud', '2023-10-04 21:41:38', '2023-10-04 21:41:38', 'ID32110001339090223', 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/MJadseGDCWZSYDWr5', 0),
(4, 'Empal Gentong', 'Lauk-pauk', 'Cirebon', 25000, 'Empal gentong adalah makanan berkuah yang terbuat dari daging sapi, santan, dan bumbu rempah. Empal gentong biasanya disajikan dengan nasi dan lalapan.', '1696531351.jpg', 'Empal Gentong H. Apud', '2023-10-04 21:42:31', '2023-10-04 21:42:31', 'ID32110001339090223', 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/MUCNB1Xec3bLDLnX7', 0),
(5, 'Empal Asem', 'lauk-pauk', 'Cirebon', 25000, 'Empal asem adalah makanan berkuah yang terbuat dari daging sapi, asam jawa, dan bumbu rempah. Empal asem biasanya disajikan dengan nasi dan lalapan.', '1696531425.jpg', 'Empal Gentong H. Apud', '2023-10-04 21:43:45', '2023-10-04 21:43:45', 'ID32110001339090223', 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/MUCNB1Xec3bLDLnX7', 0),
(6, 'Bubur Ayam Cirebon', 'Nasi', 'Cirebon', 12000, 'Bubur ayam Cirebon adalah bubur ayam yang disajikan dengan suwiran ayam, irisan cakue, dan kerupuk. Bubur ayam Cirebon biasanya ditambahkan dengan kuah kaldu yang gurih.', '1696531527.jpg', 'Bubur Ayam Cirebon Sahara', '2023-10-04 21:45:27', '2023-10-04 21:45:27', 'ID32110007563590723', 'Jl. Moh. Toha No.20, Kebonbaru, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45121', 'https://maps.app.goo.gl/DdL3uAGgjuaQ8SF49', 0),
(7, 'Mie Koclok', 'Mie', 'Cirebon', 12000, 'Mie koclok adalah mie yang disajikan dengan kuah kaldu yang gurih dan suwiran ayam. Mie koclok biasanya ditambahkan dengan potongan kol, daun bawang, dan daun seledri.', '1696531711.jpg', 'Mie Koclok Gombang Pak Rasita', '2023-10-04 21:48:31', '2023-10-04 21:48:31', 'ID32110003450800523', 'Jl. Bahagia No.2, Gombang, Kec. Plumbon, Kabupaten Cirebon, Jawa Barat 45155', 'https://maps.app.goo.gl/rf989NsSUsd6CcUY8', 0),
(8, 'Soto Ayam Cirebon', 'Soto', 'Cirebon', 12000, 'Soto ayam Cirebon adalah soto ayam yang disajikan dengan suwiran ayam, irisan tauge, dan kerupuk. Soto ayam Cirebon biasanya ditambahkan dengan kuah kaldu yang gurih.', '1696531892.jpg', 'Soto Ayam Khas Cirebon Hj. Mari\'ah', '2023-10-04 21:51:32', '2023-10-04 21:51:32', 'ID36220000002770220', 'Jl. Raya Plered-Su No.50, Weru Lor, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45154', 'https://maps.app.goo.gl/6C8aG4ACDZoHcNQf7', 0),
(9, 'Ikan Bakar Cirebon', 'Lauk-pauk', 'Cirebon', 25000, 'Ikan bakar Cirebon adalah ikan bakar yang disajikan dengan sambal dan lalapan. Ikan bakar Cirebon biasanya menggunakan ikan bandeng, tongkol, atau kakap.', '1696532054.jpg', 'Rumah Makan Nelayan Jaya', '2023-10-04 21:54:14', '2023-10-04 21:54:14', 'ID33120000133550120', 'Jl. Pekarungan No.18, Panjunan, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45112', 'https://maps.app.goo.gl/2K5234npA9Nm6bRe9', 0),
(10, 'Ikan Asam Manis Cirebon', 'Lauk-pauk', 'Cirebon', 25000, 'Ikan asam manis Cirebon adalah ikan yang dimasak dengan bumbu asam manis. Ikan asam manis Cirebon biasanya menggunakan ikan bandeng, tongkol, atau kakap.', '1696532134.jpg', 'Rumah Makan Nelayan Jaya', '2023-10-04 21:55:34', '2023-10-04 21:55:34', 'ID00120000148921121', 'Jl. Pekarungan No.18, Panjunan, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45112', 'https://maps.app.goo.gl/2K5234npA9Nm6bRe9', 0),
(11, 'Tahu Gejrot', 'Jajanan', 'Cirebon', 6000, 'Tahu gejrot adalah makanan khas Cirebon, Jawa Barat, yang terbuat dari tahu yang digoreng kemudian dipotong-potong dan disajikan dengan kuah gula merah dan kecap manis.', '1696768863.jpg', 'Empal Gentong H. Apud', '2023-10-07 15:41:03', '2023-10-07 15:41:03', 'ID32110001339090223', 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/Mw4bsUBpCQXFpCFV6', 0),
(12, 'Ketoprak Cirebon', 'Nasi', 'Cirebon', 10000, 'Ketupat atau lontong yang dicampur dengan tahu, bihun, mentimun, dan telur dadar, kemudian disiram dengan bumbu kacang.', '1697399893.jpg', 'Ketoprak Drajat', '2023-10-14 22:58:13', '2023-10-14 22:58:13', 'ID32110002230860223', 'Jl. Pangeran Drajat No.18, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'https://maps.app.goo.gl/E4eZ8qu773KkN56M8', 0),
(13, 'Sate Kalong', 'Lauk', 'Cirebon', 15000, 'Sate ayam yang dimasak dengan bumbu rempah-rempah dan dibakar menggunakan arang.', '1697400098.jpg', 'Sate Kalong Jalan Kesambi Dalam', '2023-10-14 23:01:38', '2023-10-14 23:01:38', 'ID33410000001000420', 'No., Jalan Kesambi Dalam No.102, Kesambi, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'https://maps.app.goo.gl/y2rTMmcJroupst4p8', 0),
(14, 'Gado-gado Ayam', 'Lauk-pauk', 'Cirebon', 15000, 'Gado-gado yang terdiri dari sayuran, tahu, tempe, ayam, dan telur, kemudian disiram dengan bumbu kacang.', '1697400546.jpg', 'Gado-Gado Ayam Mang Djum Cirebon\n', '2023-10-14 23:09:06', '2023-10-14 23:09:06', 'ID32110006585880723', 'No.53, Pulasaren, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45116', 'https://maps.app.goo.gl/qQH5hoYbXAkXAPxe7', 0),
(15, 'Kerupuk Melarat', 'Jajanan', 'Cirebon', 10000, 'Kerupuk yang terbuat dari adonan tepung terigu dan digoreng tanpa menggunakan minyak goreng.', '1697400831.jpg', 'Senang Oleh Khas Cirebon', '2023-10-14 23:13:51', '2023-10-14 23:13:51', 'ID32110008561050823', 'Jl. Sukalila Selatan No.55, Pekalangan, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45123', 'https://maps.app.goo.gl/gsU8wtzPU7hesFBR6', 0),
(16, 'Sate Kentang', 'Sate', 'Cirebon', 10000, 'Sate kentang yang dimasak dengan bumbu kecap manis dan bawang merah dan ditaburi bumbu jamblang.', '1697401189.jpg', 'Nasi Jamblang Mang Dul', '2023-10-14 23:19:49', '2023-10-14 23:19:49', 'ID32210000112510221', 'Jl. DR. Cipto Mangunkusumo No.8, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/oq7PdW27KDouPjg39', 0),
(17, 'Nasi Bogana', 'Nasi', 'Cirebon', 15000, 'Nasi putih yang disajikan dengan berbagai lauk pauk, seperti empal, tahu, tempe, dan sayuran.', '1697401601.jpg', 'Kantin Anugerah', '2023-10-14 23:26:41', '2023-10-14 23:26:41', 'ID31120000162590921', 'Jl. Gn. Agung No.1, Larangan, Kec. Harjamukti, Kota Cirebon, Jawa Barat 45141', 'https://maps.app.goo.gl/Bg7W9HfGf9Dj8w8n9', 0),
(18, 'Gepu', 'Jajanan', 'Cirebon', 5000, 'Gepu adalah makanan yang berbahan dasar singkong. Bentuk yang menyerupai bakwan ini memiliki isi mirip dengan oncom.', '1697402506.jpg', 'Kantin Anugerah', '2023-10-14 23:41:46', '2023-10-14 23:41:46', 'ID14420000072160221', 'Jl. Gn. Agung No.1, Larangan, Kec. Harjamukti, Kota Cirebon, Jawa Barat 45141', 'https://maps.app.goo.gl/X8wj8EG3XJkUCrKM6', 0),
(19, 'Rujak Kangkung', 'Lauk-pauk', 'Cirebon', 10000, 'Kangkung yang direbus dan dicampur dengan bumbu rujak.', '1697402745.jpg', 'Kuliner Ibu Mega', '2023-10-14 23:45:45', '2023-10-14 23:45:45', 'ID33110003157150523', 'Jl. Rajawali Raya No.30-31, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'https://maps.app.goo.gl/LQmLqu6kVdfgUSNMA', 0),
(20, 'Pedesan Entog', 'Lauk-pauk', 'Cirebon', 30000, 'Pedesan entog adalah hidangan khas Cirebon yang terbuat dari daging entog yang dimasak dengan kuah santan yang gurih dan pedas. Daging entognya empuk dan bumbunya meresap hingga ke dalam.', '1697403333.jpg', 'Pedesan Entog Mas Nana Megu Gede', '2023-10-14 23:55:33', '2023-10-14 23:55:33', 'ID31110003281460523', 'Jl. Fatahillah Blok Kawung No.80, Megu Gede, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45611', 'https://maps.app.goo.gl/qnDfGVDMXc1VjBLg9', 0),
(21, 'Pecak Bandeng', 'Lauk-pauk', 'Serang', 30000, 'Salah satu makanan khas Banten yang mungkin akan sangat digemari para pecinta pedas adalah pecak bandeng. Ikan bandeng yang diolah dengan bumbu pedas ini dijamin bikin nagih.', '1699242481.jpg', 'Saung Dolet', NULL, '2023-11-05 13:48:01', 'ID36110000075001120', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'https://maps.app.goo.gl/vWfwWoHxqTVsJb1h8', 0),
(22, 'Angeun Lada', 'Lauk-pauk', 'Serang', 20000, 'Terbuat dari daging sapi yang diberi bumbu khas', '1699242514.jpg', 'RM. Angeun Lada', NULL, '2023-11-05 13:48:34', 'ID36110007301760723', 'Jl. Ciruas - Petir No.32, Sindangsari, Kec. Petir, Kabupaten Serang, Banten 42172', 'https://maps.app.goo.gl/Dm1sn2Q3vdqpxnoK6', 0),
(23, 'Pecak Belut', 'Lauk-pauk', 'Serang', 20000, 'Ikan belut memang memiliki cita rasa yang gurih dan manis terlebih jika dicampur dengan ulegan sambal diatas cobek bersatu dengan nasi, tentu rasanya akan semakin nikmat dan lezat.', '1699242535.png', 'Saung Dolet', NULL, '2023-11-05 13:48:55', 'ID36120000195471220', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'https://maps.app.goo.gl/Sbz9eJiJSVGeFGpB8', 0),
(24, 'Sate Bandeng', 'Lauk-pauk', 'Serang', 42000, 'Daging ikan bandeng biasanya akan dihaluskan dan kemudian dicampur dengan rempah-rempah pilihan. Selanjutnya, ikan bandeng yang sudah dibumbui akan dibungkus dengan daun pisang dan dibakar.', '1699242558.jpg', 'Bilvie Food', NULL, '2023-11-05 13:49:18', 'ID36310000005890320', 'Jl. Akses Tol Serang Tim., Panancangan, Kec. Cipocok Jaya, Kota Serang, Banten 42124', 'https://maps.app.goo.gl/oUUWnbsrTkWQnKwv7', 0),
(25, 'Rabeg Banten', 'Lauk-pauk', 'Serang', 31000, 'Rabeg adalah masakan berkuah dari olahan daging kambing (kadang campur jeroan) kuah Rabeg itu ya berasal dari kaldu daging kambing.', '1699242599.jpg', 'PAWON WONK KITE', NULL, '2023-11-05 13:49:59', 'ID36120000195471220', 'Jl. Rejana Bawah No.16-12, Rw. Arum, Banten 42436', 'https://maps.app.goo.gl/7dYrDHkNxG2GiJJ76', 0),
(26, 'Gerem Asem', 'Lauk-pauk', 'Serang', 31000, 'Gerem Asem. Gerem asem adalah olahan mirip sup tapi dengan cita rasa pedas asam asin yang gurih.', '1699242691.jpg', 'Pawon Kite', NULL, '2023-11-05 13:51:31', 'ID36120000195471220', 'Jl. Rejana Bawah No.16-12, Rw. Arum, Banten 42436', 'https://maps.app.goo.gl/7dYrDHkNxG2GiJJ76', 0),
(27, 'Nasi Uduk Serang', 'Lauk-pauk', 'Serang', 10000, 'Menu masakan khas yang menjadi teman nasi uduk. Ada telur balado, ayam goreng, mie goreng, bihun goreng, dasar telur, empal, daging, kikil, berbagai macam gorengan yang memiliki harga sangat terjangkau.', '1699242845.jpg', 'Nasi Uduk Ibu Mail', NULL, '2023-11-05 13:54:05', 'ID14110008722690723', 'V5P8+4C7, Cimuncang, Serang, Serang City, Banten 42111', 'https://maps.app.goo.gl/fwjv3dDuXFxjkUSq9', 0),
(28, 'Nasi Gonjleng', 'Nasi', 'Serang', 10000, 'Makanan dengan lauk utama daging kuah rabeg tersebut, memiliki cita rasa khas yang kaya dengan unsur rempah-rempah.', '1699243280.jpg', 'Saung Dolet', NULL, '2023-11-05 14:01:20', 'ID36110007839800723', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'https://maps.app.goo.gl/XSfZzEbCgxj43TDH9', 0),
(29, 'Nasi Bakar Sumsum', 'Nasi', 'Serang', 10000, 'bahan bakunya bukanlah sumsum sapi ataupun kambing, melainkan kerbau. Pemilihan sumsum kerbau ada alasannya tersendiri. Tekstur dari sumsum kerbau ini lebih padat.', '1699243320.jpg', 'Nasi Bakar Sumsum Mang Puri Asli', NULL, '2023-11-05 14:02:00', 'ID18110001164391122', 'Jl. Kelapa Dua, Lontarbaru, Kec. Serang, Kota Serang, Banten 42115', 'https://maps.app.goo.gl/43sq6AvQYnjAfEc27', 0),
(30, 'Balok Menes', 'Lauk-pauk', 'Serang', 5000, 'Kue Balok Menes memiliki bentuk dan rasa yang mirip getuk. Tetapi di atasnya bukan parutan kelapa, melainkan taburan bawang goreng dan serundeng sebagai topingnya.', '1699243341.jpg', 'Kue Balok Babakan Hj. Djamsinah', NULL, '2023-11-05 14:02:21', 'ID36110008327820823', 'Jl. Raya Labuan - Pandeglang, Montor, Kec. Pagelaran, Kabupaten Pandeglang, Banten 42265', 'https://maps.app.goo.gl/F5X4A7CbBtSkGD599', 0),
(31, 'Ketan Bintul', 'Jajanan', 'Serang', 10000, 'Ketan bintul adalah makanan khas Banten berbahan ketan dan taburan serundeng sejenis kelapa parut yang disangrai dengan rempah-rempah. Bisa pula disajikan dengan gulai kambing atau semur daging.', '1699243358.jpg', 'Ketan Bintul \"Teh Ipah\"', NULL, '2023-11-05 14:02:38', 'ID32110001573771222', 'Jl. Maulana Hasanudin No.82, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', 'https://maps.app.goo.gl/oeKJwyLa9XV93deY7', 0),
(32, 'Sambel Buroq', 'Jajanan', 'Serang', 5000, 'Keunikan sambal buroq ini terletak pada penggunaan bahan utamanya, yakni kulit melinjo yang menghasilkan cita rasa yang khas dan menggugah selera.', '1699243377.jpg', 'Saung Dolet', NULL, '2023-11-05 14:02:57', 'ID36110007839800723', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'https://maps.app.goo.gl/XSfZzEbCgxj43TDH9', 0),
(33, 'Opak Khas Banten', 'Jajanan', 'Serang', 15000, 'Opak adalah makanan goreng, dibuat dari ubi kayu (singkong) yang digiling dan dibumbui, dibentuk bundar dan pipih, dijemur hingga kering.', '1699243405.jpg', 'Citra Gading', NULL, '2023-11-05 14:03:25', 'ID36110000072691120', 'Jl. Citra Gading, Cipocok Jaya, Kec. Cipocok Jaya, Kota Serang, Banten 42121', 'https://maps.app.goo.gl/YacNqW5ArRHghAT57', 0),
(34, 'Kue Jojorong Khas Banten', 'Jajanan', 'Serang', 1000, 'Makanan ini berbahan dasar tepung beras dan santan kelapa yang bagian dalamnya diberi gula aren. Tempat atau mangkuk kuenya berbentuk persegi dan terbuat dari daun pisang', '1699243437.jpg', 'Kue Jojorong Ibu Sahati', NULL, '2023-11-05 14:03:57', 'ID36110003254480523', 'Kp. Peujeuh, RT.005/RW.001, Bojong Pandan, Kec. Tunjung Teja, Kabupaten Serang, Banten 42174', 'https://maps.app.goo.gl/N492WwxkPdt6Wf3H8', 0),
(35, 'Tepung Beras', 'Jajanan', 'Serang', 1000, 'Cita rasa kue pasung enggak perlu diragukan lagi karena memiliki rasa yang manis dan legit di mulut. Uniknya, wadah kue pasung ini terbuat dari gulungan daun pisang yang kemudian dibentuk seperti kerucut.', '1699243458.jpg', 'Dapur Ma\'cam Kue Ibu Samsiah', NULL, '2023-11-05 14:04:18', 'ID33110004620530623', 'Jl. Garuda Jl. Cimuncang No.31, RT.01/RW.14, Warakas, Kec. Serang, Kota Serang, Banten 42111', 'https://maps.app.goo.gl/vveV8govfadMqmceA', 0),
(36, 'Emping Melinjo', 'Jajanan', 'Serang', 22000, 'Emping adalah sejenis camilan atau makanan ringan terbuat dari biji melinjo. Emping memiliki rasa sedikit pahit', '1699242652.jpg', 'ZILFI oleh-oleh banten', NULL, '2023-11-05 13:50:52', 'ID18110003166140523', 'Pasar Lama, Jl. Maulana Hasanudin, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', 'https://maps.app.goo.gl/VLW9BME8GQWBhvhB8', 0),
(37, 'Gipang', 'Jajanan', 'Serang', 27500, 'Gipang adalah salah satu makanan khas yang terbuat dari beras ketan dan sirup gula, berbentuk persegi panjang, dan memiliki rasa yang manis.', '1699242635.jpg', 'ZILFI oleh-oleh banten', NULL, '2023-11-05 13:50:35', 'ID1811000316614052', 'Pasar Lama, Jl. Maulana Hasanudin, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', '	\r\nhttps://maps.app.goo.gl/VLW9BME8GQWBhvhB8', 0),
(39, 'cek', 'cek', 'Serang', 10000, 'cek', '1704790284.png', 'link', '2024-01-09 01:51:24', '2024-01-09 01:51:24', 'id12345678', 'link', 'link', 1),
(40, 'Nasi', 'nasi', 'CIrebon', 10000, 'qweqwe', '1704792685.png', 'asd', '2024-01-09 02:31:25', '2024-01-09 02:31:25', 'id123123123', 'asd', 'asd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `datamakanancirebon`
--

CREATE TABLE `datamakanancirebon` (
  `makanan_id` bigint(20) UNSIGNED NOT NULL,
  `namamakanan` varchar(255) NOT NULL,
  `jenismakanan` varchar(255) NOT NULL,
  `namakota` varchar(200) NOT NULL,
  `harga` int(11) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `resto` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sertifikat` varchar(20) NOT NULL,
  `alamat` varchar(300) NOT NULL,
  `link` varchar(300) NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `datamakanancirebon`
--

INSERT INTO `datamakanancirebon` (`makanan_id`, `namamakanan`, `jenismakanan`, `namakota`, `harga`, `desc`, `gambar`, `resto`, `created_at`, `updated_at`, `sertifikat`, `alamat`, `link`, `store_id`) VALUES
(1, 'Docang', 'Nasi', 'Cirebon', 12000, 'Docang adalah nasi yang disajikan dengan tauge, tahu, tempe, dan oncom. Docang biasanya disiram dengan saus kacang dan kecap manis.', '1696530877.jpg', 'Docang Pak Kumis Khas Cirebon', '2023-10-05 04:34:37', '2023-10-05 04:34:37', 'ID32110006678560723', '7HM3+WPR, Jl. Tentara Pelajar, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/2rnKTFMYktccx2AH7', 0),
(2, 'Nasi Jamblang', 'Nasi', 'Cirebon', 25000, 'Nasi jamblang adalah nasi yang disajikan dengan lauk-pauk yang beragam, seperti tempe, tahu, telur, dan ayam. Nasi jamblang biasanya disajikan di atas daun pisang.', '1696531243.jpg', 'Nasi Jamblang Mbak Nur', '2023-10-05 04:40:43', '2023-10-05 04:40:43', 'ID32110007860960723', 'Jl. Cangkring 2 No.34, Kejaksan, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45123', 'https://maps.app.goo.gl/TuJUzzk2qAGoNf3A8', 0),
(3, 'Nasi Lengko', 'Nasi', 'Cirebon', 12000, 'Nasi lengko adalah nasi yang disajikan dengan tauge, tahu, tempe, lontong, dan kerupuk. Nasi lengko biasanya disiram dengan saus kacang dan kecap manis.', '1696531298.jpg', 'Empal Gentong H. Apud', '2023-10-05 04:41:38', '2023-10-05 04:41:38', 'ID32110001339090223', 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/MJadseGDCWZSYDWr5', 0),
(4, 'Empal Gentong', 'Lauk-pauk', 'Cirebon', 25000, 'Empal gentong adalah makanan berkuah yang terbuat dari daging sapi, santan, dan bumbu rempah. Empal gentong biasanya disajikan dengan nasi dan lalapan.', '1696531351.jpg', 'Empal Gentong H. Apud', '2023-10-05 04:42:31', '2023-10-05 04:42:31', 'ID32110001339090223', 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/MUCNB1Xec3bLDLnX7', 0),
(5, 'Empal Asem', 'lauk-pauk', 'Cirebon', 25000, 'Empal asem adalah makanan berkuah yang terbuat dari daging sapi, asam jawa, dan bumbu rempah. Empal asem biasanya disajikan dengan nasi dan lalapan.', '1696531425.jpg', 'Empal Gentong H. Apud', '2023-10-05 04:43:45', '2023-10-05 04:43:45', 'ID32110001339090223', 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/MUCNB1Xec3bLDLnX7', 0),
(6, 'Bubur Ayam Cirebon', 'Nasi', 'Cirebon', 12000, 'Bubur ayam Cirebon adalah bubur ayam yang disajikan dengan suwiran ayam, irisan cakue, dan kerupuk. Bubur ayam Cirebon biasanya ditambahkan dengan kuah kaldu yang gurih.', '1696531527.jpg', 'Bubur Ayam Cirebon Sahara', '2023-10-05 04:45:27', '2023-10-05 04:45:27', 'ID32110007563590723', 'Jl. Moh. Toha No.20, Kebonbaru, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45121', 'https://maps.app.goo.gl/DdL3uAGgjuaQ8SF49', 0),
(7, 'Mie Koclok', 'Mie', 'Cirebon', 12000, 'Mie koclok adalah mie yang disajikan dengan kuah kaldu yang gurih dan suwiran ayam. Mie koclok biasanya ditambahkan dengan potongan kol, daun bawang, dan daun seledri.', '1696531711.jpg', 'Mie Koclok Gombang Pak Rasita', '2023-10-05 04:48:31', '2023-10-05 04:48:31', 'ID32110003450800523', 'Jl. Bahagia No.2, Gombang, Kec. Plumbon, Kabupaten Cirebon, Jawa Barat 45155', 'https://maps.app.goo.gl/rf989NsSUsd6CcUY8', 0),
(8, 'Soto Ayam Cirebon', 'Soto', 'Cirebon', 12000, 'Soto ayam Cirebon adalah soto ayam yang disajikan dengan suwiran ayam, irisan tauge, dan kerupuk. Soto ayam Cirebon biasanya ditambahkan dengan kuah kaldu yang gurih.', '1696531892.jpg', 'Soto Ayam Khas Cirebon Hj. Mari\'ah', '2023-10-05 04:51:32', '2023-10-05 04:51:32', 'ID36220000002770220', 'Jl. Raya Plered-Su No.50, Weru Lor, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45154', 'https://maps.app.goo.gl/6C8aG4ACDZoHcNQf7', 0),
(9, 'Ikan Bakar Cirebon', 'Lauk-pauk', 'Cirebon', 25000, 'Ikan bakar Cirebon adalah ikan bakar yang disajikan dengan sambal dan lalapan. Ikan bakar Cirebon biasanya menggunakan ikan bandeng, tongkol, atau kakap.', '1696532054.jpg', 'Rumah Makan Nelayan Jaya', '2023-10-05 04:54:14', '2023-10-05 04:54:14', 'ID33120000133550120', 'Jl. Pekarungan No.18, Panjunan, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45112', 'https://maps.app.goo.gl/2K5234npA9Nm6bRe9', 0),
(10, 'Ikan Asam Manis Cirebon', 'Lauk-pauk', 'Cirebon', 25000, 'Ikan asam manis Cirebon adalah ikan yang dimasak dengan bumbu asam manis. Ikan asam manis Cirebon biasanya menggunakan ikan bandeng, tongkol, atau kakap.', '1696532134.jpg', 'Rumah Makan Nelayan Jaya', '2023-10-05 04:55:34', '2023-10-05 04:55:34', 'ID00120000148921121', 'Jl. Pekarungan No.18, Panjunan, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45112', 'https://maps.app.goo.gl/2K5234npA9Nm6bRe9', 0),
(11, 'Tahu Gejrot', 'Jajanan', 'Cirebon', 6000, 'Tahu gejrot adalah makanan khas Cirebon, Jawa Barat, yang terbuat dari tahu yang digoreng kemudian dipotong-potong dan disajikan dengan kuah gula merah dan kecap manis.', '1696768863.jpg', 'Empal Gentong H. Apud', '2023-10-07 22:41:03', '2023-10-07 22:41:03', 'ID32110001339090223', 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/Mw4bsUBpCQXFpCFV6', 0),
(12, 'Ketoprak Cirebon', 'Nasi', 'Cirebon', 10000, 'Ketupat atau lontong yang dicampur dengan tahu, bihun, mentimun, dan telur dadar, kemudian disiram dengan bumbu kacang.', '1697399893.jpg', 'Ketoprak Drajat', '2023-10-15 05:58:13', '2023-10-15 05:58:13', 'ID32110002230860223', 'Jl. Pangeran Drajat No.18, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'https://maps.app.goo.gl/E4eZ8qu773KkN56M8', 0),
(13, 'Sate Kalong', 'Lauk', 'Cirebon', 15000, 'Sate ayam yang dimasak dengan bumbu rempah-rempah dan dibakar menggunakan arang.', '1697400098.jpg', 'Sate Kalong Jalan Kesambi Dalam', '2023-10-15 06:01:38', '2023-10-15 06:01:38', 'ID33410000001000420', 'No., Jalan Kesambi Dalam No.102, Kesambi, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'https://maps.app.goo.gl/y2rTMmcJroupst4p8', 0),
(14, 'Gado-gado Ayam', 'Lauk-pauk', 'Cirebon', 15000, 'Gado-gado yang terdiri dari sayuran, tahu, tempe, ayam, dan telur, kemudian disiram dengan bumbu kacang.', '1697400546.jpg', 'GADO-GADO AYAM MANG DJUM CIREBON\r\n', '2023-10-15 06:09:06', '2023-10-15 06:09:06', 'ID32110006585880723', 'No.53, Pulasaren, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45116', 'https://maps.app.goo.gl/qQH5hoYbXAkXAPxe7', 0),
(15, 'Kerupuk Melarat', 'Jajanan', 'Cirebon', 10000, 'Kerupuk yang terbuat dari adonan tepung terigu dan digoreng tanpa menggunakan minyak goreng.', '1697400831.jpg', 'Senang Oleh Khas Cirebon', '2023-10-15 06:13:51', '2023-10-15 06:13:51', 'ID32110008561050823', 'Jl. Sukalila Selatan No.55, Pekalangan, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45123', 'https://maps.app.goo.gl/gsU8wtzPU7hesFBR6', 0),
(16, 'Sate Kentang', 'Sate', 'Cirebon', 10000, 'Sate kentang yang dimasak dengan bumbu kecap manis dan bawang merah dan ditaburi bumbu jamblang.', '1697401189.jpg', 'Nasi Jamblang Mang Dul', '2023-10-15 06:19:49', '2023-10-15 06:19:49', 'ID32210000112510221', 'Jl. DR. Cipto Mangunkusumo No.8, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131', 'https://maps.app.goo.gl/oq7PdW27KDouPjg39', 0),
(17, 'Nasi Bogana', 'Nasi', 'Cirebon', 15000, 'Nasi putih yang disajikan dengan berbagai lauk pauk, seperti empal, tahu, tempe, dan sayuran.', '1697401601.jpg', 'Kantin ANUGERAH', '2023-10-15 06:26:41', '2023-10-15 06:26:41', 'ID31120000162590921', 'Jl. Gn. Agung No.1, Larangan, Kec. Harjamukti, Kota Cirebon, Jawa Barat 45141', 'https://maps.app.goo.gl/Bg7W9HfGf9Dj8w8n9', 0),
(18, 'Gepu', 'Jajanan', 'Cirebon', 5000, 'Gepu adalah makanan yang berbahan dasar singkong. Bentuk yang menyerupai bakwan ini memiliki isi mirip dengan oncom.', '1697402506.jpg', 'Kantin ANUGERAH', '2023-10-15 06:41:46', '2023-10-15 06:41:46', 'ID14420000072160221', 'Jl. Gn. Agung No.1, Larangan, Kec. Harjamukti, Kota Cirebon, Jawa Barat 45141', 'https://maps.app.goo.gl/X8wj8EG3XJkUCrKM6', 0),
(19, 'Rujak Kangkung', 'Lauk-pauk', 'Cirebon', 10000, 'Kangkung yang direbus dan dicampur dengan bumbu rujak.', '1697402745.jpg', 'Kuliner Ibu Mega', '2023-10-15 06:45:45', '2023-10-15 06:45:45', 'ID33110003157150523', 'Jl. Rajawali Raya No.30-31, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'https://maps.app.goo.gl/LQmLqu6kVdfgUSNMA', 0),
(20, 'Pedesan Entog', 'Lauk-pauk', 'Cirebon', 30000, 'Pedesan entog adalah hidangan khas Cirebon yang terbuat dari daging entog yang dimasak dengan kuah santan yang gurih dan pedas. Daging entognya empuk dan bumbunya meresap hingga ke dalam.', '1697403333.jpg', 'Pedesan Entog Mas Nana Megu Gede', '2023-10-15 06:55:33', '2023-10-15 06:55:33', 'ID31110003281460523', 'Jl. Fatahillah Blok Kawung No.80, Megu Gede, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45611', 'https://maps.app.goo.gl/qnDfGVDMXc1VjBLg9', 0),
(21, 'Pecak Bandeng', 'Lauk-pauk', 'Serang', 30000, 'Salah satu makanan khas Banten yang mungkin akan sangat digemari para pecinta pedas adalah pecak bandeng. Ikan bandeng yang diolah dengan bumbu pedas ini dijamin bikin nagih.', '1699242481.jpg', 'Saung Dolet', NULL, '2023-11-05 20:48:01', 'ID36110000075001120', '', '', 0),
(22, 'Angeun Lada', 'Lauk-pauk', 'Serang', 20000, 'Terbuat dari daging sapi yang diberi bumbu khas', '1699242514.jpg', 'RM. Angeun Lada', NULL, '2023-11-05 20:48:34', 'ID36110007301760723', 'Jl. Ciruas - Petir No.32, Sindangsari, Kec. Petir, Kabupaten Serang, Banten 42172', 'https://maps.app.goo.gl/Dm1sn2Q3vdqpxnoK6', 0),
(23, 'Pecak Belut', 'Lauk-pauk', 'Serang', 20000, 'Ikan belut memang memiliki cita rasa yang gurih dan manis terlebih jika dicampur dengan ulegan sambal diatas cobek bersatu dengan nasi, tentu rasanya akan semakin nikmat dan lezat.', '1699242535.png', 'Saung Dolet', NULL, '2023-11-05 20:48:55', 'ID36120000195471220', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'https://maps.app.goo.gl/Sbz9eJiJSVGeFGpB8', 0),
(24, 'Sate Bandeng', 'Lauk-pauk', 'Serang', 42000, 'Daging ikan bandeng biasanya akan dihaluskan dan kemudian dicampur dengan rempah-rempah pilihan. Selanjutnya, ikan bandeng yang sudah dibumbui akan dibungkus dengan daun pisang dan dibakar.', '1699242558.jpg', 'Bilvie Food', NULL, '2023-11-05 20:49:18', 'ID36310000005890320', 'jln jendral sudirman, samping indo mart arah tol Serang timur, samping RS Sari asih, akses tol Serang timur Kota Serang, Banten 42124', 'https://maps.app.goo.gl/UMVepgGE2DXmFkDE7', 0),
(25, 'Rabeg Banten', 'Lauk-pauk', 'Serang', 31000, 'Rabeg adalah masakan berkuah dari olahan daging kambing (kadang campur jeroan) kuah Rabeg itu ya berasal dari kaldu daging kambing.', '1699242599.jpg', 'PAWON WONK KITE', NULL, '2023-11-05 20:49:59', 'ID36120000195471220', 'Jl. Rejana Bawah No.16-12, Rw. Arum, Banten 42436', 'https://maps.app.goo.gl/7dYrDHkNxG2GiJJ76', 0),
(26, 'Gerem Asem', 'Lauk-pauk', 'Serang', 31000, 'Gerem Asem. Gerem asem adalah olahan mirip sup tapi dengan cita rasa pedas asam asin yang gurih.', '1699242691.jpg', 'PAWON WONK KITE', NULL, '2023-11-05 20:51:31', 'ID36120000195471220', 'Jl. Rejana Bawah No.16-12, Rw. Arum, Banten 42436', 'https://maps.app.goo.gl/7dYrDHkNxG2GiJJ76', 0),
(27, 'Nasi Uduk Serang', 'Lauk-pauk', 'Serang', 10000, 'Menu masakan khas yang menjadi teman nasi uduk. Ada telur balado, ayam goreng, mie goreng, bihun goreng, dasar telur, empal, daging, kikil, berbagai macam gorengan yang memiliki harga sangat terjangkau.', '1699242845.jpg', 'Nasi Uduk Ibu Mail', NULL, '2023-11-05 20:54:05', 'ID14110008722690723', 'V5P8+4C7, Cimuncang, Serang, Serang City, Banten 42111', 'https://maps.app.goo.gl/fwjv3dDuXFxjkUSq9', 0),
(28, 'Nasi Gonjleng', 'Nasi', 'Serang', 10000, 'Makanan dengan lauk utama daging kuah rabeg tersebut, memiliki cita rasa khas yang kaya dengan unsur rempah-rempah.', '1699243280.jpg', 'Saung Dolet', NULL, '2023-11-05 21:01:20', 'ID36110007839800723', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'https://maps.app.goo.gl/XSfZzEbCgxj43TDH9', 0),
(29, 'Nasi Bakar Sumsum', 'Nasi', 'Serang', 10000, 'bahan bakunya bukanlah sumsum sapi ataupun kambing, melainkan kerbau. Pemilihan sumsum kerbau ada alasannya tersendiri. Tekstur dari sumsum kerbau ini lebih padat.', '1699243320.jpg', 'Nasi Bakar Sumsum Mang Puri Asli', NULL, '2023-11-05 21:02:00', 'ID18110001164391122', 'Jl. Kelapa Dua, Lontarbaru, Kec. Serang, Kota Serang, Banten 42115', 'https://maps.app.goo.gl/43sq6AvQYnjAfEc27', 0),
(30, 'Balok Menes', 'Lauk-pauk', 'Serang', 5000, 'Kue Balok Menes memiliki bentuk dan rasa yang mirip getuk. Tetapi di atasnya bukan parutan kelapa, melainkan taburan bawang goreng dan serundeng sebagai topingnya.', '1699243341.jpg', 'Kue Balok Babakan Hj. Djamsinah', NULL, '2023-11-05 21:02:21', 'ID36110008327820823', 'Jl. Raya Labuan - Pandeglang, Montor, Kec. Pagelaran, Kabupaten Pandeglang, Banten 42265', 'https://maps.app.goo.gl/F5X4A7CbBtSkGD599', 0),
(31, 'Ketan Bintul', 'Jajanan', 'Serang', 10000, 'Ketan bintul adalah makanan khas Banten berbahan ketan dan taburan serundeng sejenis kelapa parut yang disangrai dengan rempah-rempah. Bisa pula disajikan dengan gulai kambing atau semur daging.', '1699243358.jpg', 'Ketan Bintul \"Teh Ipah\"', NULL, '2023-11-05 21:02:38', 'ID32110001573771222', 'Jl. Maulana Hasanudin No.82, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', 'https://maps.app.goo.gl/oeKJwyLa9XV93deY7', 0),
(32, 'Sambel Buroq', 'Jajanan', 'Serang', 5000, 'Keunikan sambal buroq ini terletak pada penggunaan bahan utamanya, yakni kulit melinjo yang menghasilkan cita rasa yang khas dan menggugah selera.', '1699243377.jpg', 'Saung Dolet', NULL, '2023-11-05 21:02:57', 'ID36110007839800723', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'https://maps.app.goo.gl/XSfZzEbCgxj43TDH9', 0),
(33, 'Opak Khas Banten', 'Jajanan', 'Serang', 15000, 'Opak adalah makanan goreng, dibuat dari ubi kayu (singkong) yang digiling dan dibumbui, dibentuk bundar dan pipih, dijemur hingga kering.', '1699243405.jpg', 'CITRA Gading', NULL, '2023-11-05 21:03:25', 'ID36110000072691120', 'Jl. Citra Gading, Cipocok Jaya, Kec. Cipocok Jaya, Kota Serang, Banten 42121', 'https://maps.app.goo.gl/YacNqW5ArRHghAT57', 0),
(34, 'Kue Jojorong Khas Banten', 'Jajanan', 'Serang', 1000, 'Makanan ini berbahan dasar tepung beras dan santan kelapa yang bagian dalamnya diberi gula aren. Tempat atau mangkuk kuenya berbentuk persegi dan terbuat dari daun pisang', '1699243437.jpg', 'Kue Jojorong Ibu Sahati', NULL, '2023-11-05 21:03:57', 'ID36110003254480523', 'Kp. Peujeuh, RT.005/RW.001, Bojong Pandan, Kec. Tunjung Teja, Kabupaten Serang, Banten 42174', 'https://maps.app.goo.gl/N492WwxkPdt6Wf3H8', 0),
(35, 'Tepung Beras', 'Jajanan', 'Serang', 1000, 'Cita rasa kue pasung enggak perlu diragukan lagi karena memiliki rasa yang manis dan legit di mulut. Uniknya, wadah kue pasung ini terbuat dari gulungan daun pisang yang kemudian dibentuk seperti kerucut.', '1699243458.jpg', 'Dapur Ma\'cam Kue Ibu Samsiah', NULL, '2023-11-05 21:04:18', 'ID33110004620530623', 'Jl. Garuda Jl. Cimuncang No.31, RT.01/RW.14, Warakas, Kec. Serang, Kota Serang, Banten 42111', 'https://maps.app.goo.gl/vveV8govfadMqmceA', 0),
(36, 'Emping Melinjo', 'Jajanan', 'Serang', 22000, 'Emping adalah sejenis camilan atau makanan ringan terbuat dari biji melinjo. Emping memiliki rasa sedikit pahit', '1699242652.jpg', 'ZILFI oleh-oleh banten', NULL, '2023-11-05 20:50:52', 'ID18110003166140523', 'Pasar Lama, Jl. Maulana Hasanudin, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', 'https://maps.app.goo.gl/VLW9BME8GQWBhvhB8', 0),
(37, 'Gipang', 'Jajanan', 'Serang', 27500, 'Gipang adalah salah satu makanan khas yang terbuat dari beras ketan dan sirup gula, berbentuk persegi panjang, dan memiliki rasa yang manis.', '1699242635.jpg', 'ZILFI oleh-oleh banten', NULL, '2023-11-05 20:50:35', 'ID1811000316614052', 'Pasar Lama, Jl. Maulana Hasanudin, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', '	\r\nhttps://maps.app.goo.gl/VLW9BME8GQWBhvhB8', 0);

-- --------------------------------------------------------

--
-- Table structure for table `datawisata`
--

CREATE TABLE `datawisata` (
  `wisata_id` bigint(20) UNSIGNED NOT NULL,
  `namatempat` varchar(255) NOT NULL,
  `jeniswisata` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `jambuka` int(11) NOT NULL,
  `jamtutup` int(11) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `namakota` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `datawisata`
--

INSERT INTO `datawisata` (`wisata_id`, `namatempat`, `jeniswisata`, `alamat`, `harga`, `jambuka`, `jamtutup`, `desc`, `gambar`, `link`, `namakota`, `created_at`, `updated_at`) VALUES
(1, 'Kampung Sabin', 'Wisata Budaya', 'Kawasan Kota Baru Keandra, Jl. Nyi Ageng Serang, Sindangjawa, Kec. Dukupuntang, Kabupaten Cirebon', 30000, 10, 20, 'Selain pesona alamnya, Kampung Sabin juga kaya akan budaya dan tradisi lokal. Penduduk setempat seringkali menjalankan kehidupan pedesaan tradisional, yang memungkinkan pengunjung untuk merasakan atmosfer kehidupan pedesaan yang tenang dan sederhana.', '1697092680.jpg', 'https://cdn.idntimes.com/content-images/post/20211021/241314129-966385807271079-3296120524309551568-n-a4804988daad6f1c818150b825e9bce9_600x400.jpg', 'Cirebon', '2023-09-26 12:52:46', '2023-10-13 14:22:09'),
(5, 'Kawasan Batik Trusmi', 'Wisata Budaya', 'Jl. Syekh Datul Kahfi, Weru Kidul, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45154', 5000, 7, 21, 'Objek wisata ini merupakan pusat industri batik yang ada di daerah Weru, Cirebon. Selain menjadi sentra industri batik, Kampung Batik Trusmi ini juga menjadi tempat wisata kuliner. Setidaknya ada lebih dari 3000 tenaga kerja yang mengrajin batik.', '1697095278.jpg', 'https://www.google.com/maps/place/Kawasan+Batik+Trusmi/@-6.7173771,108.4125007,12.31z/data=!4m6!3m5!1s0x2e6ee19c9e516c47:0x965ae37c3931ba44!8m2!3d-6.7055012!4d108.5075497!16s%2Fg%2F11scz2842q?entry=ttu', 'Cirebon', '2023-09-26 23:51:43', '2023-10-22 09:38:44'),
(6, 'Wisata Kera Plangon', 'Wisata Alam', 'Babakan, Kec. Sumber, Kabupaten Cirebon', 5000, 6, 23, 'Satwa monyet, memberi kacang untuk monyet, suasana hutan, interaksi dengan monyet\'', 'Wisata-Plangon-Cirebon.jpg', 'https://www.google.com/maps/place/Wisata+Kera+Plangon/@-6.773455,108.4839891,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f1ef8fec012c9:0x678f5f80928984c!8m2!3d-6.773455!4d108.4839891!16s%2Fg%2F11b6rf922q?entry=ttu', 'Cirebon', '2023-09-28 14:49:01', '2023-09-28 14:49:01'),
(7, 'Keraton Kasepuhan Cirebon', 'Wisata Religi', 'Jl. Kasepuhan No.43, Kesepuhan, Kec. Lemahwungkuk, Kota Cirebon', 20000, 8, 16, 'Terdapat museum pusaka yang disuguhkan bagi wisatawan berisi singgasana sultan, kereta kencana Singa Barong, dan benda-benda bersejarah lainnya.', 'keraton.jpg', 'https://www.google.com/maps/place/Keraton+Kasepuhan+Cirebon/@-6.7263338,108.5684312,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6ee263eaaaaaab:0x20ea18cbfb1df195!8m2!3d-6.7263338!4d108.5710061!16s%2Fm%2F0drx7c7?entry=ttu', 'Cirebon', '2023-09-28 14:50:42', '2023-09-28 14:50:42'),
(8, 'Cirebon Waterland Ade Irma Suryani', 'Wisata Buatan', 'Jl. Yos Sudarso No.1, Lemahwungkuk, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat', 35000, 9, 18, 'pinggir pantai, akomodasi penginapan, pemandangan pantai, restoran bertema kapal, dermaga, pemandangan matahari terbit, destinasi wisata keluarga', '1696272937.jpg', 'https://www.google.com/maps/place/Cirebon+Waterland+Ade+Irma+Suryani/@-6.7175191,108.5707838,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6ee28633008ab7:0xa45b9be49b4a148d!8m2!3d-6.7175191!4d108.5733587!16s%2Fg%2F1hm69wzfy?entry=ttu', 'Cirebon', '2023-09-28 15:24:15', '2023-10-22 11:01:50'),
(9, 'Mangrove Kasih Sayang, Mundu', 'Wisata Alam', 'Mundupesisir, Mundu, Cirebon', 2000, 6, 23, 'Jembatan, spot foto, kamar mandi umum, tempat bersantai, area parkir, musala, tempat sampah.', 'mangrove-mundu.jpg', 'https://www.google.com/maps/place/Wisata+Zona+Mangrove+Kasih+Sayang/@-6.7564535,108.5947708,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f1d3cd252922d:0xdf90e87ca2fb7723!8m2!3d-6.7564535!4d108.5973457!16s%2Fg%2F11hblm6b63?entry=ttu', 'Cirebon', '2023-09-29 03:52:34', '2023-09-29 03:52:34'),
(11, 'Danau Setu Patok', 'Wisata Alam', 'Patapan, Kec. Beber, Kabupaten Cirebon', 5000, 4, 23, 'Keindahan sore hari, pemandangan danau eksotis, suasana pagi hari, bagus untuk foto, bagus saat cuaca cerah, pemandangan bukit yang elok, trek joging', '1696759981.jpg', 'https://www.google.com/maps/place/Setu+Patok/@-6.786111,108.5647222,15z/data=!3m1!4b1!4m6!3m5!1s0x2e6f1c5e7d72248f:0xe9feb4e1db9cca2d!8m2!3d-6.7861111!4d108.5647222!16s%2Fg%2F11b_03vp0l?entry=ttu', 'Cirebon', '2023-10-07 20:13:01', '2023-10-07 20:13:01'),
(12, 'Taman Sari Gua Sunyaragi', 'Wisata Budaya', 'Sunyaragi, Kec. Kesambi, Kota Cirebon, Jawa Barat 45132', 15000, 6, 23, 'Gua Sunyaragi  adalah adalah sebuah gua buatan mirip candi yang disebut Gua Sunyaragi, atau Taman  Sunyaragi, atau sering disebut', 'Gua-Sunyaragi.jpg', 'https://www.google.com/maps/place/Taman+Wisata+Goa+Sunyaragi+Cirebon/@-6.7367683,108.5404852,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f1df257d4d4fb:0x8d4ea2ef1ff1103d!8m2!3d-6.7367683!4d108.5430601!16s%2Fg%2F120s1tt4?entry=ttu', 'Cirebon', '2023-09-28 14:54:49', '2023-09-28 14:54:49'),
(15, 'Gunung Ciremai', 'Wisata Alam', 'Gn Ciremai', 75000, 1, 24, 'Pemandanganan Gunung tertinggi di Jawa Barat', 'gunung-ciremai.jpg', 'https://www.google.com/maps/place/Gunung+Ciremai+Tourist+Information+Center/@-6.9155056,108.3676745,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f3cdcecf0587d:0xe6f5af22a0f78fc!8m2!3d-6.9155056!4d108.3702494!16s%2Fg%2F11gbxh5gr3?entry=ttu', 'Cirebon', '2023-09-29 03:58:41', '2023-09-29 03:58:41'),
(17, 'Banyu Panas', 'EKOWISATA', 'Jalan Raya, Palimanan Bar., Kec. Palimanan, Kabupaten Cirebon, Jawa Barat 45161', 4000, 7, 16, 'Daya tarik yang pertama dari objek wisata Banyu Panas Palimanan Gempol adalah kolam yang bermanfaat juga sebagai tempat terapi, khususnya bagi mereka yang mempunyai penyakit kulitFasilitas yang terdapat di tempat wisata ini sudah cukup memadai. Seperti te', '1697110758.jpeg', 'https://www.google.co.id/maps/place/Wisata+Banyu+Panas+Gempol-Palimanan/@-6.712252,108.3978076,17z/data=!4m9!1m2!2m1!1sbanyu+panas+palimanan!3m5!1s0x2e6edfb42f3978c3:0x738f5b50b3f9e611!8m2!3d-6.7126849!4d108.3991874!16s%2Fg%2F11cnmzwyq_?entry=ttu', 'Cirebon', '2023-10-11 21:39:18', '2023-10-11 21:39:18'),
(18, 'Batu Lawang', 'Ekowisata', 'Cupang, Kec. Gempol, Kabupaten Cirebon, Jawa Barat', 10000, 6, 18, 'Obyek Wisata Alam Batu Lawang di Cirebon memang rekomended untuk dijadikan tempat rekreasi bersama keluarga, teman, atau orang terdekat. Wisata Alam di Cilegon menyajikan pemandangan alam yang sejuk nan indah. Salah satu keindahan yang menjadi daya tarik ', '1697110981.jpg', 'https://www.google.com/maps/place/Batu+Lawang+Cirebon/@-6.7277257,108.3781715,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6edf7700000001:0x6184c1b9c1112bde!8m2!3d-6.7277257!4d108.3807464!16s%2Fg%2F11gcx_35c4?entry=ttu', 'Cirebon', '2023-10-11 21:43:01', '2023-10-11 21:43:01'),
(19, 'Kura Kura Belawa', 'Ekowisata', 'Desa Belawa, Kecamatan Lemahabang, Kabupaten Cirebon, Jawa Barat.', 5000, 8, 17, 'Belawa Cirebon  atau nama tempat wisatanya Cikuya merupakan destinasi wisata dan edukasi keluarga di Cirebon yang menyuguhkan keunikan hewan kura-kura khas Belawa.  Belawa adalah nama daerah yang ada di Kabupaten Cirebon. Dan Belawa adalah jenis kura kura', '1697111264.jpg', 'https://www.google.com/maps/place/Wisata+Kura-Kura+Belawa/@-6.8321074,108.5827114,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f1b13b17d22b1:0x39762d86b06abb10!8m2!3d-6.8321074!4d108.5852863!16s%2Fg%2F11b6pjvvgf?entry=ttu', 'Cirebon', '2023-10-11 21:47:44', '2023-10-11 21:47:44'),
(20, 'Bukit Gronggong', 'Wisata Buatan', 'Jl. KH. Moh Yahya, Dusun Manis, Ambulu, Kec. Losari, Kabupaten Cirebon, Jawa Barat 45192', 5000, 1, 23, 'Bukit Gronggong memiliki ciri khas dengan panorama di atas bukit yang sangat indah. Sejauh mata memandang anda akan dimanjakan dengan view Kota Cirebon dari ketinggian. Terdapat cafe resto, spot foto yang aesthetic dan penginapan \r\nBukit Gronggong menghad', '1697111466.jpg', 'https://www.google.com/maps/place/Bukit+Gronggong/@-6.7811647,108.5192047,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f1e9d4d3629d1:0x7ef0a6b8a94a3398!8m2!3d-6.7811647!4d108.5217796!16s%2Fg%2F11c0rpm29r?entry=ttu', 'Cirebon', '2023-10-11 21:51:06', '2023-10-11 21:51:31'),
(21, 'Mangrove Caplok Barong Ambulu', 'Ekowisata', 'Jl. KH. Moh Yahya, Dusun Manis, Ambulu, Kec. Losari, Kabupaten Cirebon, Jawa Barat 45192', 5000, 6, 18, 'Kawasan Hutan Mangrove Caplok Barong merupakan sebuah ekowisata yang terletak di Cirebon Timur. Di tempat dengan hutan mangrove sepanjang kurang lebih 300 meter ini, pengunjung dapat berkeliling hutan mangrove melalui jembatan bambu yang tersedia sepanjan', '1697111649.jpg', 'https://www.google.com/maps/search/manggrove+caplok+barong+ambulu+/@-6.8080997,108.8018893,17z/data=!3m1!4b1?entry=ttu', 'Cirebon', '0000-00-00 00:00:00', '2023-10-11 21:54:09'),
(22, 'Kawasan Sunan Gunung Jati', 'Wisata Ziarah', 'Alun-Alun Ciledug No. 53, Astana, Kecamatan Gunung Jati, Kabupaten Cirebon', 2000, 1, 23, 'Makam Sunan Gunung Jati terletak di area pemakaman yang paling tinggi, atau biasa disebut dengan pintu ke 9. Untuk menuju lokasi utama Makam Sunan Gunung Jati terdapat akses berupa tangga melalui beberapa pintu utama yang berjumlah 9 pintu. Terdapat makam', '1697111750.jpeg', 'https://www.google.com/maps/place/Makam+Sunan+Gunung+Jati/@-6.6711822,108.5352801,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f1df535197233:0x44c868e9be858a42!8m2!3d-6.6711822!4d108.540151!16s%2Fg%2F12hz1zqsl?entry=ttu', 'Cirebon', '2023-10-11 21:55:50', '2023-10-18 22:01:59'),
(26, 'Talaga Langit', 'Wisata Alam', 'Desa Sinarrancang, Mundu, Cirebon', 15000, 7, 17, 'objek wisata ini memiliki banyak daya tarik. Mulai dari lokasinya yang masih dikelilingi alam yang hijau dan indah. Berbagai macam spot foto menarik, kolam renang, kolam terapi, dan restoran. Lebih unik lagi, tempat ini juga memiliki museum outdoor bertem', '1698017698.jpg', 'https://www.google.com/maps/place/Talaga+langit/@-6.7981875,108.5674876,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f1dfe2d3d57cd:0x32fd5afa0060fedf!8m2!3d-6.7981875!4d108.5700625!16s%2Fg%2F11pgrjtyyd?entry=ttu', 'Cirebon', '2023-10-22 09:34:58', '2023-10-22 09:34:58'),
(27, 'Petilasan Mbah Kuwu Sangkan', 'Wisata Ziarah', 'Desa Cirebon Girang, Kecamatan Talun, Cirebon.', 5000, 1, 23, 'Cirebon identik dengan Pangeran Cakrabuana. Namanya diabadikan dengan sebutan Mbah Kuwu Cirebon.\r\nPangeran Cakrabuana adalah tokoh sentral cikal bakal lahirnya Cirebon. Pangeran Cakrabuana memiliki sejumlah nama yang populer. Kini makam nya menjadi tempat', '1698018393.jfif', 'https://www.google.com/maps/place/Petilasan+Mbah+Kuwu+Sangkan/@-6.7784003,108.4954583,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f19dcc90d6d2b:0x9b52b958cafcb80e!8m2!3d-6.7784003!4d108.4980332!16s%2Fg%2F11c4bcrlm4?entry=ttu', 'Cirebon', '2023-10-22 09:46:33', '2023-10-22 09:46:33'),
(28, 'Pantai Kejawanan', 'Wisata Alam', 'Jl. Kalijaga No.90, Pegambiran, Kec. Lemahwungkuk, Kota Cirebon,', 5000, 9, 17, 'Cirebon memiliki pantai eksotis dengan pasir hitamnya, yaitu Pantai Kejawanan. Menawarkan daya tarik tersendiri bagi wisatawan untuk menghabiskan waktu luangnya. Di mana, pantai ini memiliki garis pantai yang panjang dan luas. Ombaknya pun tidak terlalu t', '1698019704.jpg', 'https://www.google.com/maps/place/Pantai+Indah+Kejawanan+Cirebon/@-6.733613,108.5832161,17z/data=!4m14!1m7!3m6!1s0x2e6f1d644fadef95:0x8a0e2fb918b655bd!2sPrahu+wisata+kejawanan!8m2!3d-6.733613!4d108.585791!16s%2Fg%2F11dyj4m6y!3m5!1s0x2e6f1d64680065a1:0x2d0', 'Cirebon', '2023-10-22 10:08:24', '2023-10-22 10:08:24'),
(29, 'Waterboom Jempol', 'Kolam Renang', 'Jl. Tol Kanci - Pejagan No.Km.233, Ciledug Lor, Kec. Ciledug, Kabupaten Cirebon', 25000, 8, 15, '. Tempat ini merupakan wisata yang menyediakan berbagai wahana air dan taman keluarga. Tersedia juga banyak spot foto tiga dimensi yang sangat digemari wisatawan.\r\n\r\nTaman wisata permainan air ini sudah berdiri sejak tahun 2012. Lokasi yang strategis dan ', '1698019962.jpg', 'https://www.google.com/maps/place/Jempol+Waterboom+Ciledug/@-6.8945074,108.7476788,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6f088f904d0eab:0xce51b39180f2d825!8m2!3d-6.8945074!4d108.7502537!16s%2Fg%2F11b6d1qx_w?entry=ttu', 'Cirebon', '2023-10-22 10:12:42', '2023-10-22 10:12:42'),
(30, 'Kawasan Kota Tua Cirebon', 'Wisata Budaya', 'Jl. Pasuketan, Lemahwungkuk, Kec. Lemahwungkuk, Kota Cirebon', 2000, 7, 22, 'Kota Tua Cirebon merupakan lokasi dengan sejumlah gedung-gedung tua bergaya kolonial Belanda, termasuk salah satunya gedung British American Tobbaco (BAT).', '1698020352.jpg', 'https://www.google.com/maps/search/kota+tua+cirebon/@-6.7191476,108.5668169,17z/data=!3m1!4b1?entry=ttu', 'Cirebon', '2023-10-22 10:19:12', '2023-10-22 10:19:12'),
(31, 'Desa Wisata Bantar Agung', 'Ekowisata', 'Desa Bantaragung', 30000, 8, 20, 'Dikabarkan kalau desa ini sudah ada sejak tahun 1200-an, saat Pangeran Timbang Pinayungan berhasil mengatasi gangguan keamanan desa dan menjadi Kuwu (kepala desa) pertama. Di sinilah awal dari lahirnya juara-juara dunia terutama di bidang pencak silat. De', '1698020658.jpg', 'https://www.google.com/maps/place/Bantaragung,+Kec.+Sindangwangi,+Kabupaten+Majalengka,+Jawa+Barat/@-6.8491597,108.349644,13z/data=!3m1!4b1!4m6!3m5!1s0x2e6f225061faa71b:0x10908a48d6872547!8m2!3d-6.8387932!4d108.3949661!16s%2Fg%2F1216xct2?entry=ttu', 'Cirebon', '2023-10-22 10:24:18', '2023-10-22 11:12:18'),
(32, 'Keraton Kanoman', 'Wisata Budaya', 'Jl. Kanoman No.40, Lemahwungkuk, Kec. Lemahwungkuk, Kota Cirebon', 7000, 9, 17, 'Keraton Kanoman adalah salah satu dari dua bangunan kesultanan Cirebon, setelah berdiri keraton Kanoman pada tahun 1678 M kesultanan Cirebon terdiri dari keraton Kasepuhan dan keraton Kanoman. Kebesaran Islam di Jawa bagian barat tidak lepas dari Cirebon.', '1698021060.jpg', 'https://www.google.com/maps/place/Keraton+Kanoman/@-6.7223931,108.5652491,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6ee25deaaaaaab:0xb5cb14c3d5f80987!8m2!3d-6.7223931!4d108.567824!16s%2Fm%2F0ds8gdp?entry=ttu', 'Cirebon', '2023-10-22 10:31:00', '2023-10-22 10:31:00'),
(33, 'Pasa Kanoman Pecinan Cirebon', 'Wisata Budaya', 'Jamblang, Kec. Jamblang, Kabupaten Cirebon, Jawa Barat 45156', 2000, 9, 22, 'Terdapat kuliner dan  sejarah penginggalan budaya keturunan cina dan didekatnya terdapat kampung arab yangmenjadi cikal bakal Cirebon pada masa kejayaan jalur sutra.', '1698022145.jpg', 'https://www.google.com/maps/place/Pasar+Kanoman+Cirebon/@-6.7208216,108.5574726,15z/data=!4m10!1m2!2m1!1spasar+kanoman+!3m6!1s0x2e6ee3a09e689a13:0x35156abbce0602d6!8m2!3d-6.7208216!4d108.5677723!15sCg1wYXNhciBrYW5vbWFuWg8iDXBhc2FyIGthbm9tYW6SAQZtYXJrZXTgA', 'Serang', '2023-10-22 10:49:05', '2023-10-22 10:49:05'),
(34, 'Masjid Agung Banten', 'Wisata Religi', 'Jl. Komp. Masjid Agung Banten, RT./RW/RW.001/011, Banten, Kec. Kasemen, Kota Serang, Banten 42191', 0, 1, 23, 'Masjid Agung Banten adalah salah satu monumen bersejarah yang menakjubkan yang terletak di Kota Serang, Provinsi Banten, Indonesia. Masjid ini adalah salah satu contoh indah arsitektur Islam klasik dengan pengaruh Sunda Kelapa yang khas. Bangunan megah in', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FMasjid_Agung_Banten&psig=AOvVaw1U8lOkb_lfpkvPlPSxupqT&ust=1699949719383000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNj3o6vEwIIDFQAAAAAdAAAAABAE', 'https://maps.app.goo.gl/nxfwZFqwoJuczXKP6', 'Serang', NULL, NULL),
(35, 'Pantai Anyer', 'Wisata Alam', 'Jl. Raya Karang Bolong, Bandulu, Kec. Anyar, Kabupaten Serang, Banten 42166', 50000, 1, 23, 'Pantai Anyer adalah salah satu destinasi pantai paling terkenal di Indonesia yang terletak di Kabupaten Serang, Provinsi Banten. Pantai ini menawarkan pesona alam yang luar biasa dengan pemandangan laut yang luas dan pasir putih yang lembut. Pantai Anyer ', 'https://lh5.googleusercontent.com/p/AF1QipM7FjarK9UDtZrYA-RAE0rKpm5WdniccDBo0tKh=w408-h544-k-no', 'https://maps.app.goo.gl/oZKpkYDf54UzWgus5', 'Serang', NULL, NULL),
(36, 'Benteng Speelwijk', 'Wisata Budaya', 'X592+G74, Kampung Pamarican, Banten, Kec. Kasemen, Kota Serang, Banten 42191', 10000, 1, 23, 'Benteng Speelwijk adalah salah satu peninggalan bersejarah yang memukau yang terletak di Pulau Banten, Indonesia. Benteng ini memiliki sejarah yang kaya dan pernah menjadi bagian penting dari sistem pertahanan Belanda di Indonesia pada masa kolonial. Kono', 'https://lh5.googleusercontent.com/p/AF1QipNsYx1eWC3Kvc__-mJ1UaRsHN7AGOqSJl_DGGyg=w408-h306-k-no', 'https://maps.app.goo.gl/bjw5HHN2TGxMuB56A', 'Serang', NULL, NULL),
(37, 'Museum Negeri Banten', 'Wisata Budaya', 'Jl. Masjid Agung Banten, Banten, Kec. Kasemen, Kota Serang, Banten 42191', 0, 9, 15, 'Museum Negeri Banten adalah sebuah institusi budaya yang menarik yang terletak di Kota Serang, Provinsi Banten, Indonesia. Museum ini merupakan penjaga sejumlah koleksi bersejarah yang memperlihatkan kekayaan budaya dan sejarah daerah Banten. Bangunan mus', 'https://lh5.googleusercontent.com/p/AF1QipOFh9c0yij3v_5mxo232DszBxtvvbNcZ89RcLT9=w408-h306-k-no', 'https://maps.app.goo.gl/3R8beFA1uyW1ui4T8', 'Serang', NULL, NULL),
(38, 'Pulau Sangiang', 'Ekowisata', 'Sangiang, East Sepatan, Tangerang, Banten', 0, 1, 23, 'Pulau Sangiang adalah sebuah surga tersembunyi yang terletak di Selat Sunda, dekat dengan Pulau Banten di Indonesia. Pulau ini adalah perpaduan sempurna antara keindahan alam tropis dan kekayaan bawah laut yang spektakuler. Pulau Sangiang memiliki pantai-', 'https://lh5.googleusercontent.com/p/AF1QipPNoxO1zfT3sHcLnBkRuW99E_WGbb5aYXQcFnDX=w408-h306-k-no', 'https://maps.app.goo.gl/2ydoy7sk3pmHe2nc9', 'Serang', NULL, NULL),
(39, 'Pulau Lima', 'Ekowisata', 'Banten, Kasemen, Serang City, Banten', 0, 1, 23, 'Pulau Lima merupakan salah satu pulau yang berada di Samudra Hindia. Pulau ini berada di sisi barat Pulau Jawa. Pulau ini Masuk ke dalam gugusan Kepulauan Jawa.', 'https://www.google.com/maps/place/Pulau+Lima/@-6.0013889,106.155,3a,75y/data=!3m8!1e2!3m6!1sAF1QipPhLOXDum4rHNk591Mun26emhWwR-7aFklDfVJ2!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPhLOXDum4rHNk591Mun26emhWwR-7aFklDfVJ2%3Dw152-h86-k-no!7', 'https://maps.app.goo.gl/cN85AmN4aYgjM5SK8', 'Serang', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `transaksi_id` int(20) NOT NULL,
  `user_id` int(20) NOT NULL,
  `store_id` int(20) NOT NULL,
  `menu_id` int(20) NOT NULL,
  `kuantitas` int(20) NOT NULL,
  `harga_total` int(20) NOT NULL,
  `tanggal_transaksi` date NOT NULL,
  `status_pembayaran` tinyint(1) NOT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

CREATE TABLE `kota` (
  `kota_id` bigint(20) UNSIGNED NOT NULL,
  `namakota` varchar(255) NOT NULL,
  `gambar` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`kota_id`, `namakota`, `gambar`) VALUES
(1, 'Cirebon', 'https://media.istockphoto.com/id/970988684/photo/cirebon-train-station.jpg?s=170667a&w=0&k=20&c=5j5-NAGjSIrDOLDHlsYCXZ-4KJ9W4rgYj9ZbMv4ULIw='),
(2, 'Serang', 'https://asset.kompas.com/crops/v1pAMzDSsn4oN71_ppIUChSANAI=/0x0:1080x720/780x390/data/photo/2021/12/15/61b96f894199b.jpg'),
(3, 'Palembang', 'https://t4.ftcdn.net/jpg/02/99/09/05/360_F_299090527_n2chCeSRhq9BJMRoHUZxFDRmZmWJKNwy.jpg'),
(4, 'Cilegon', 'https://thumb.viva.id/vivabanten/1265x711/2023/01/28/63d51589ceb3d-kota-cilegon_banten.jpg'),
(5, 'Semarang', 'https://www.shutterstock.com/shutterstock/videos/1069132789/thumb/7.jpg?ip=x480'),
(6, 'Padang', 'https://i.pinimg.com/originals/f6/08/96/f608963629b77d9695017b3de60d2bac.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `makananserang`
--

CREATE TABLE `makananserang` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `nama` varchar(255) NOT NULL,
  `bahan_utama` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `desc` varchar(500) DEFAULT NULL,
  `sumber_protein` int(11) DEFAULT NULL,
  `penyajian` int(11) DEFAULT NULL,
  `harga_m` int(11) DEFAULT NULL,
  `porsi` int(11) DEFAULT NULL,
  `nama_resto` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `sertifikat` varchar(255) NOT NULL,
  `link` varchar(500) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `makananserang`
--

INSERT INTO `makananserang` (`id`, `gambar`, `nama`, `bahan_utama`, `harga`, `desc`, `sumber_protein`, `penyajian`, `harga_m`, `porsi`, `nama_resto`, `alamat`, `sertifikat`, `link`, `created_at`, `updated_at`) VALUES
(4, 'gambar/Jmo7XA2e4qnVFnDNjRuuflR8wBglQV-metacGVjYWsgYmFuZGVuZy5qcGc=-.jpg', 'Pecak Bandeng', 'Ikan Bandeng', 30000, 'Salah satu makanan khas Banten yang mungkin akan sangat digemari para pecinta pedas adalah pecak bandeng. Ikan bandeng yang diolah dengan bumbu pedas ini dijamin bikin nagih.', 3, 4, 3, 5, 'Saung Dolet', 'Jl. KH.Sochari No.7, Sumurpecung, Kec. Serang, Kota Serang, Banten 42118', 'ID36110000075001120', 'https://maps.app.goo.gl/nNc1DhDrZWGxoYzMA', '2023-09-25 16:59:06', '2023-10-08 01:49:14'),
(5, 'gambar/2agZqRY8rcTYfUPOkJzeDwpyA4IgVs-metaQW5nZXVuLUxhZGEuanBn-.jpg', 'Angeun Lada', 'Daging Sapi', 20000, 'Terbuat dari daging sapi yang diberi bumbu khas', 3, 4, 2, 3, 'RM. Angeun Lada', 'Jl. Ciruas - Petir No.32, Sindangsari, Kec. Petir, Kabupaten Serang, Banten 42172', 'ID36110007301760723', 'https://maps.app.goo.gl/Dm1sn2Q3vdqpxnoK6', '2023-09-25 17:03:19', '2023-10-08 01:10:49'),
(6, 'gambar/DHhW4mpn4FqoSpwbyzbMu2qpVCv5QJ-metacGVjYWsgYmVsdXQucG5n-.png', 'Pecak Belut', 'Daging Ikan', 20000, 'Ikan belut memang memiliki cita rasa yang gurih dan manis terlebih jika dicampur dengan ulegan sambal diatas cobek bersatu dengan nasi, tentu rasanya akan semakin nikmat dan lezat.', 5, 4, 2, 3, 'Saung Dolet', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'ID36120000195471220', 'https://maps.app.goo.gl/Sbz9eJiJSVGeFGpB8', '2023-09-25 17:07:11', '2023-10-08 01:17:20'),
(7, 'gambar/vTMsXUxlHD1KaBgflsvU2DwRSYecon-metac2F0ZSBiYW5kZW5nLmpwZw==-.jpg', 'Sate Bandeng', 'Daging Ikan', 42000, 'Daging ikan bandeng biasanya akan dihaluskan dan kemudian dicampur dengan rempah-rempah pilihan. Selanjutnya, ikan bandeng yang sudah dibumbui akan dibungkus dengan daun pisang dan dibakar.', 3, 4, 4, 4, 'Bilvie Food', 'jln jendral sudirman, samping indo mart arah tol Serang timur, samping RS Sari asih, akses tol Serang timur Kota Serang, Banten 42124', 'ID36310000005890320', 'https://maps.app.goo.gl/UMVepgGE2DXmFkDE7', '2023-09-25 17:10:27', '2023-10-08 01:16:48'),
(9, 'gambar/TRxJrqUKZZaBmw9MotEIITuoYjqEwo-metacmFiZWcuanBlZw==-.jpg', 'Rabeg Banten', 'Daging Kambing', 31000, 'Rabeg adalah masakan berkuah dari olahan daging kambing (kadang campur jeroan) kuah Rabeg itu ya berasal dari kaldu daging kambing. ', 3, 4, 3, 3, 'PAWON WONK KITE', 'Jl. Rejana Bawah No.16-12, Rw. Arum, Banten 42436', 'ID36120000195471220', 'https://maps.app.goo.gl/7dYrDHkNxG2GiJJ76', '2023-09-25 17:17:16', '2023-10-08 01:29:24'),
(29, 'gambar/CnWfMv1cHekYKhn2B5dFECqxnnlQ6U-metaZ2VyZW0uanBn-.jpg', 'Gerem Asem', 'Daging Ayam', 31000, 'Gerem Asem. Gerem asem adalah olahan mirip sup tapi dengan cita rasa pedas asam asin yang gurih.', 4, 4, 3, 3, 'PAWON WONK KITE', 'Jl. Rejana Bawah No.16-12, Rw. Arum, Banten 42436', 'ID36120000195471220', 'https://maps.app.goo.gl/7dYrDHkNxG2GiJJ76', '2023-10-08 01:26:50', '2023-10-08 01:26:50'),
(31, 'gambar/WLgh0A2r1ncddaxRQWqJjpk6d3pyeV-metabmFzaSB1ZHVrIHNlcmFuZy5qcGc=-.jpg', 'Nasi Uduk Serang', 'Nasi', 10000, 'Menu masakan khas yang menjadi teman nasi uduk. Ada telur balado, ayam goreng, mie goreng, bihun goreng, dasar telur, empal, daging, kikil, berbagai macam gorengan yang memiliki harga sangat terjangkau.', 3, 4, 1, 3, 'Nasi Uduk Ibu Mail', 'V5P8+4C7, Cimuncang, Serang, Serang City, Banten 42111', 'ID14110008722690723', 'https://maps.app.goo.gl/fwjv3dDuXFxjkUSq9', '2023-10-19 12:43:37', '2023-10-19 12:43:37'),
(32, 'gambar/r4d0rsyCqdizFvWs6xHYYDox9vDZoq-metabmFzaSBnb25qbGVuZy5qcGc=-.jpg', 'Nasi Gonjleng', 'Nasi', 10000, 'Makanan dengan lauk utama daging kuah rabeg tersebut, memiliki cita rasa khas yang kaya dengan unsur rempah-rempah.', 4, 4, 1, 3, 'Saung Dolet', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'ID36110007839800723', 'https://maps.app.goo.gl/XSfZzEbCgxj43TDH9', '2023-10-19 12:48:50', '2023-10-19 12:59:42'),
(33, 'gambar/ztsC9ueFYAdff3sCFcmoojFtoSagqp-metabmFzaSBiYWthciBzdW1zdW0uanBn-.jpg', 'Nasi Bakar Sumsum', 'Nasi', 10000, 'bahan bakunya bukanlah sumsum sapi ataupun kambing, melainkan kerbau. Pemilihan sumsum kerbau ada alasannya tersendiri. Tekstur dari sumsum kerbau ini lebih padat.', 3, 4, 1, 3, 'Nasi Bakar Sumsum Mang Puri Asli', 'Jl. Kelapa Dua, Lontarbaru, Kec. Serang, Kota Serang, Banten 42115', 'ID18110001164391122', 'https://maps.app.goo.gl/43sq6AvQYnjAfEc27', '2023-10-19 12:52:07', '2023-10-19 13:24:20'),
(34, 'gambar/3IBhKDmCqdsoxlUHMgPjJuaOkxGPIg-metaYmFsb2sgbWVuZXMuanBlZw==-.jpg', 'Balok Menes', 'Nabati', 5000, 'Kue Balok Menes memiliki bentuk dan rasa yang mirip getuk. Tetapi di atasnya bukan parutan kelapa, melainkan taburan bawang goreng dan serundeng sebagai topingnya. ', 3, 4, 1, 3, 'Kue Balok Babakan Hj. Djamsinah', 'Jl. Raya Labuan - Pandeglang, Montor, Kec. Pagelaran, Kabupaten Pandeglang, Banten 42265', 'ID36110008327820823', 'https://maps.app.goo.gl/F5X4A7CbBtSkGD599', '2023-10-19 12:55:08', '2023-10-19 13:25:00'),
(35, 'gambar/3seUjwXTnuNQCFuNV5MSBTYt0G0rDA-metaa2V0YW4gYmludHVsLmpwZw==-.jpg', 'Ketan Bintul', 'Ketan Beras', 10000, 'Ketan bintul adalah makanan khas Banten berbahan ketan dan taburan serundeng sejenis kelapa parut yang disangrai dengan rempah-rempah. Bisa pula disajikan dengan gulai kambing atau semur daging.', 2, 4, 1, 3, 'Ketan Bintul \"Teh Ipah\"', 'Jl. Maulana Hasanudin No.82, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', 'ID32110001573771222', 'https://maps.app.goo.gl/oeKJwyLa9XV93deY7', '2023-10-19 12:58:29', '2023-10-19 12:58:29'),
(36, 'gambar/n8xrbLnihgv4mxZ1oFwQy7fBuLplVE-metac2FtYmVsIGJ1cm9nLkpQRw==-.jpg', 'Sambel Buroq', 'Sambal', 5000, 'Keunikan sambal buroq ini terletak pada penggunaan bahan utamanya, yakni kulit melinjo yang menghasilkan cita rasa yang khas dan menggugah selera.', 3, 4, 1, 2, 'Saung Dolet', 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'ID36110007839800723', 'https://maps.app.goo.gl/XSfZzEbCgxj43TDH9', '2023-10-19 13:04:10', '2023-10-19 13:04:10'),
(37, 'gambar/SKq8d5mBn7rlweUMuEfgfU4R4XGTMc-metab3Bhay5qcGVn-.jpg', 'Opak Khas Banten', 'Singkong', 15000, 'Opak adalah makanan goreng, dibuat dari ubi kayu (singkong) yang digiling dan dibumbui, dibentuk bundar dan pipih, dijemur hingga kering.', 2, 4, 1, 5, 'CITRA Gading', 'Jl. Citra Gading, Cipocok Jaya, Kec. Cipocok Jaya, Kota Serang, Banten 42121', 'ID36110000072691120', 'https://maps.app.goo.gl/YacNqW5ArRHghAT57', '2023-10-19 13:07:42', '2023-10-19 13:07:42'),
(38, NULL, 'Kue Jojorong Khas Banten', 'Tepung Beras', 1000, 'Makanan ini berbahan dasar tepung beras dan santan kelapa yang bagian dalamnya diberi gula aren. Tempat atau mangkuk kuenya berbentuk persegi dan terbuat dari daun pisang.', 3, 5, 1, 2, 'Kue Jojorong Ibu Sahati', 'Kp. Peujeuh, RT.005/RW.001, Bojong Pandan, Kec. Tunjung Teja, Kabupaten Serang, Banten 42174', 'ID36110003254480523', 'https://maps.app.goo.gl/N492WwxkPdt6Wf3H8', '2023-10-19 13:10:33', '2023-10-25 02:10:48'),
(39, 'gambar/Kco8kBgfh9WGTTeyo26RxJE0bFixZk-metaa3VlIHBhc3VuZy5qcGc=-.jpg', 'Pasung Merah Khas Banten', 'Tepung Beras', 1000, 'Cita rasa kue pasung enggak perlu diragukan lagi karena memiliki rasa yang manis dan legit di mulut. Uniknya, wadah kue pasung ini terbuat dari gulungan daun pisang yang kemudian dibentuk seperti kerucut. ', 3, 4, 1, 1, 'Dapur Ma\'cam Kue Ibu Samsiah', 'Jl. Garuda Jl. Cimuncang No.31, RT.01/RW.14, Warakas, Kec. Serang, Kota Serang, Banten 42111', 'ID33110004620530623', 'https://maps.app.goo.gl/vveV8govfadMqmceA', '2023-10-19 13:14:07', '2023-10-19 13:14:07'),
(40, 'gambar/K96DvNEUxBzGLdeCzjHOEunTam7nVB-metaZW1waW5nIG1lbGluam8uanBn-.jpg', 'Emping Melinjo', 'Nabati', 22000, 'Emping adalah sejenis camilan atau makanan ringan terbuat dari biji melinjo. Emping memiliki rasa sedikit pahit', 2, 4, 2, 3, 'ZILFI oleh-oleh banten', 'Pasar Lama, Jl. Maulana Hasanudin, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', 'ID18110003166140523', 'https://maps.app.goo.gl/VLW9BME8GQWBhvhB8', '2023-10-19 13:17:51', '2023-10-19 13:17:51'),
(41, 'gambar/vbbMGfmhLMnByFqjb659meOkZaOnxX-metaR2lwYW5nLmpwZWc=-.jpg', 'Gipang', 'Ketan Beras', 27500, 'Gipang adalah salah satu makanan khas yang terbuat dari beras ketan dan sirup gula, berbentuk persegi panjang, dan memiliki rasa yang manis.', 2, 4, 2, 4, 'ZILFI oleh-oleh banten', 'Pasar Lama, Jl. Maulana Hasanudin, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', 'ID18110003166140523', 'https://maps.app.goo.gl/VLW9BME8GQWBhvhB8', '2023-10-19 13:23:07', '2023-10-19 13:23:07');

-- --------------------------------------------------------

--
-- Table structure for table `menudbs`
--

CREATE TABLE `menudbs` (
  `menu_id` bigint(20) UNSIGNED NOT NULL,
  `store_id` bigint(20) UNSIGNED NOT NULL,
  `namamakanan` varchar(255) NOT NULL,
  `jenismakanan` varchar(255) NOT NULL,
  `stok` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `makanan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menudbs`
--

INSERT INTO `menudbs` (`menu_id`, `store_id`, `namamakanan`, `jenismakanan`, `stok`, `harga`, `desc`, `gambar`, `created_at`, `updated_at`, `makanan_id`) VALUES
(1, 1, 'Docang', 'Nasi', 10, 12000, 'Docang adalah nasi yang disajikan dengan tauge, tahu, tempe, dan oncom. Docang biasanya disiram dengan saus kacang dan kecap manis.', '1696530877.jpg', NULL, NULL, 1),
(2, 2, 'Nasi Jamblang', 'Nasi', 10, 25000, 'Nasi jamblang adalah nasi yang disajikan dengan lauk-pauk yang beragam, seperti tempe, tahu, telur, dan ayam. Nasi jamblang biasanya disajikan di atas daun pisang.', '1696531243.jpg', NULL, NULL, 1),
(3, 3, 'Nasi Lengko', 'Nasi', 10, 12000, 'Nasi lengko adalah nasi yang disajikan dengan tauge, tahu, tempe, lontong, dan kerupuk. Nasi lengko biasanya disiram dengan saus kacang dan kecap manis.', '1696531298.jpg', NULL, NULL, 1),
(9, 3, 'Empal Gentong', 'Lauk-pauk', 10, 25000, 'Empal gentong adalah makanan berkuah yang terbuat dari daging sapi, santan, dan bumbu rempah. Empal gentong biasanya disajikan dengan nasi dan lalapan.', '1696531351.jpg', NULL, NULL, 0),
(10, 3, 'Empal Asem', 'Lauk-pauk', 10, 25000, 'Empal asem adalah makanan berkuah yang terbuat dari daging sapi, asam jawa, dan bumbu rempah. Empal asem biasanya disajikan dengan nasi dan lalapan.', '1696531425.jpg', NULL, NULL, 0),
(12, 4, 'Bubur Ayam Cirebon', 'Nasi', 10, 12000, 'Bubur ayam Cirebon adalah bubur ayam yang disajikan dengan suwiran ayam, irisan cakue, dan kerupuk. Bubur ayam Cirebon biasanya ditambahkan dengan kuah kaldu yang gurih.', '1696531527.jpg', NULL, NULL, 0),
(14, 5, 'Mie Koclok', 'Mie', 10, 12000, 'Mie koclok adalah mie yang disajikan dengan kuah kaldu yang gurih dan suwiran ayam. Mie koclok biasanya ditambahkan dengan potongan kol, daun bawang, dan daun seledri.', '1696531711.jpg', NULL, NULL, 0),
(15, 6, 'Soto Ayam Cirebon', 'Soto', 10, 12000, 'Soto ayam Cirebon adalah soto ayam yang disajikan dengan suwiran ayam, irisan tauge, dan kerupuk. Soto ayam Cirebon biasanya ditambahkan dengan kuah kaldu yang gurih.', '1696531892.jpg', NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_09_16_105420_create_datawisata', 1),
(6, '2023_09_25_110109_create_nilaialt', 1),
(7, '2023_09_29_104554_create_nilaipv', 1),
(8, '2023_09_29_135940_create_temprank', 1),
(9, '2023_10_25_071654_table_kota', 2),
(10, '2023_11_05_012437_create_datamakanan', 3),
(11, '2023_11_14_034731_caroseldb', 4),
(12, '2023_11_20_033317_create_restorandbs_table', 5),
(13, '2023_11_20_035352_create_menudbs_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `nilaialt`
--

CREATE TABLE `nilaialt` (
  `nilaialt_id` bigint(20) UNSIGNED NOT NULL,
  `wisata_id` bigint(20) UNSIGNED NOT NULL,
  `rate_fasilitas` decimal(10,5) NOT NULL,
  `rate_pelayanan` decimal(10,5) NOT NULL,
  `rate_ramahkeluarga` decimal(10,5) NOT NULL,
  `rate_akomodasi` decimal(10,5) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nilaialt`
--

INSERT INTO `nilaialt` (`nilaialt_id`, `wisata_id`, `rate_fasilitas`, `rate_pelayanan`, `rate_ramahkeluarga`, `rate_akomodasi`, `created_at`, `updated_at`) VALUES
(1, 1, 0.80000, 0.70000, 0.70000, 0.80000, '2023-10-07 13:22:35', '2023-10-22 10:56:22'),
(2, 5, 1.00000, 0.90000, 0.80000, 0.90000, '2023-09-26 16:51:43', '2023-10-22 10:56:51'),
(3, 6, 0.70000, 0.70000, 0.80000, 0.90000, '2023-09-28 07:49:01', '2023-10-22 10:57:04'),
(4, 7, 0.90000, 0.80000, 0.80000, 0.80000, '2023-09-28 07:50:42', '2023-10-22 10:57:20'),
(5, 8, 0.90000, 0.80000, 1.00000, 0.90000, '2023-09-28 07:54:49', '2023-10-22 10:57:41'),
(6, 9, 0.70000, 0.60000, 0.70000, 0.40000, '2023-09-28 08:24:15', '2023-10-22 10:58:04'),
(7, 11, 0.90000, 0.80000, 0.80000, 0.60000, '2023-09-29 03:58:41', '2023-10-22 10:58:40'),
(8, 12, 0.90000, 0.90000, 0.80000, 0.80000, '2023-09-29 03:58:41', '2023-10-22 10:59:04'),
(10, 13, 0.25000, 0.25000, 0.25000, 0.25000, '2023-10-07 20:13:01', '2023-10-07 20:13:01'),
(11, 15, 0.20000, 0.20000, 0.20000, 0.40000, NULL, NULL),
(12, 17, 0.60000, 0.70000, 0.60000, 0.70000, '2023-10-11 21:39:18', '2023-10-22 11:02:15'),
(13, 18, 0.90000, 0.80000, 0.90000, 0.70000, '2023-10-11 21:43:01', '2023-10-22 11:02:53'),
(14, 19, 0.80000, 0.90000, 0.80000, 0.80000, '2023-10-11 21:47:44', '2023-10-22 11:03:18'),
(15, 20, 0.70000, 0.70000, 0.50000, 0.70000, '2023-10-11 21:51:06', '2023-10-22 11:05:00'),
(16, 21, 0.50000, 0.60000, 0.70000, 0.50000, '2023-10-11 21:54:09', '2023-10-22 11:05:34'),
(17, 22, 0.70000, 0.80000, 0.70000, 0.70000, '2023-10-11 21:55:50', '2023-10-22 11:06:03'),
(21, 26, 0.70000, 0.80000, 0.70000, 0.50000, '2023-10-22 09:34:58', '2023-10-22 11:06:47'),
(22, 27, 0.60000, 0.70000, 0.70000, 0.50000, '2023-10-22 09:46:33', '2023-10-22 11:07:08'),
(23, 28, 0.70000, 0.70000, 0.90000, 0.80000, '2023-10-22 10:08:24', '2023-10-22 11:07:37'),
(24, 29, 0.90000, 0.80000, 0.90000, 0.60000, '2023-10-22 10:12:42', '2023-10-22 11:07:57'),
(25, 30, 0.60000, 0.50000, 0.60000, 0.80000, '2023-10-22 10:19:12', '2023-10-22 11:09:07'),
(26, 31, 0.60000, 0.80000, 0.90000, 0.80000, '2023-10-22 10:24:19', '2023-10-22 11:09:43'),
(27, 32, 0.60000, 0.70000, 0.70000, 0.80000, '2023-10-22 10:31:00', '2023-10-22 11:10:04'),
(28, 33, 0.60000, 0.70000, 0.50000, 0.50000, '2023-10-22 10:49:05', '2023-10-22 11:10:38'),
(29, 41, 0.25000, 0.25000, 0.25000, 0.25000, '2024-01-09 01:19:15', '2024-01-09 01:19:15');

-- --------------------------------------------------------

--
-- Table structure for table `nilaimakananahp`
--

CREATE TABLE `nilaimakananahp` (
  `nilaialt_id` bigint(20) UNSIGNED NOT NULL,
  `makanan_id` bigint(20) UNSIGNED NOT NULL,
  `rate_harga` decimal(8,2) NOT NULL,
  `rate_kualitas` decimal(8,2) NOT NULL,
  `rate_gizi` decimal(8,2) NOT NULL,
  `rate_porsi` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nilaimakananahp`
--

INSERT INTO `nilaimakananahp` (`nilaialt_id`, `makanan_id`, `rate_harga`, `rate_kualitas`, `rate_gizi`, `rate_porsi`, `created_at`, `updated_at`) VALUES
(1, 1, 0.13, 0.20, 0.20, 0.23, NULL, NULL),
(2, 2, 0.13, 0.23, 0.20, 0.23, '2023-09-26 16:51:43', '2023-09-29 16:51:43'),
(3, 3, 0.20, 0.18, 0.18, 0.23, '2023-09-28 07:49:01', '2023-09-28 07:49:01'),
(4, 4, 0.10, 0.25, 0.20, 0.20, '2023-09-28 07:50:42', '2023-09-28 07:50:42'),
(5, 5, 0.10, 0.23, 0.25, 0.20, '2023-09-28 07:54:49', '2023-09-28 07:54:49'),
(6, 6, 0.18, 0.15, 0.18, 0.18, '2023-09-28 08:24:15', '2023-09-28 08:24:15'),
(7, 7, 0.15, 0.15, 0.10, 0.18, NULL, NULL),
(8, 8, 0.23, 0.23, 0.18, 0.20, NULL, NULL),
(9, 9, 0.18, 0.25, 0.23, 0.23, NULL, NULL),
(10, 10, 0.20, 0.25, 0.25, 0.23, NULL, NULL),
(11, 11, 0.13, 0.18, 0.15, 0.18, '2023-10-11 02:51:22', '2023-10-11 02:51:22'),
(12, 12, 0.18, 0.18, 0.15, 0.23, '2023-10-11 22:58:16', '2023-10-11 22:58:16'),
(13, 13, 0.20, 0.20, 0.18, 0.20, '2023-10-15 05:58:13', '2023-10-15 05:58:13'),
(14, 14, 0.13, 0.18, 0.20, 0.23, '2023-10-15 06:01:38', '2023-10-15 06:01:38'),
(15, 15, 0.10, 0.13, 0.13, 0.15, '2023-10-15 06:09:06', '2023-10-15 06:09:06'),
(16, 16, 0.18, 0.23, 0.23, 0.20, '2023-10-15 06:13:51', '2023-10-15 06:13:51'),
(17, 17, 0.23, 0.25, 0.25, 0.25, '2023-10-15 06:19:49', '2023-10-15 06:19:49'),
(18, 18, 0.15, 0.18, 0.20, 0.18, '2023-10-15 06:26:41', '2023-10-15 06:26:41'),
(19, 19, 0.08, 0.15, 0.13, 0.15, '2023-10-15 06:41:46', '2023-10-15 06:41:46'),
(20, 20, 0.10, 0.20, 0.20, 0.23, '2023-10-15 06:45:45', '2023-10-15 06:45:45'),
(41, 24, 0.25, 0.25, 0.25, 0.25, '2023-10-20 00:52:27', '2023-10-20 00:52:27');

-- --------------------------------------------------------

--
-- Table structure for table `nilaimakanancirebon`
--

CREATE TABLE `nilaimakanancirebon` (
  `nilaialt_id` bigint(20) UNSIGNED NOT NULL,
  `makanan_id` bigint(20) UNSIGNED NOT NULL,
  `rate_harga` decimal(10,5) NOT NULL,
  `rate_kualitas` decimal(10,5) NOT NULL,
  `rate_gizi` decimal(10,5) NOT NULL,
  `rate_porsi` decimal(10,5) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nilaimakanancirebon`
--

INSERT INTO `nilaimakanancirebon` (`nilaialt_id`, `makanan_id`, `rate_harga`, `rate_kualitas`, `rate_gizi`, `rate_porsi`, `created_at`, `updated_at`) VALUES
(1, 1, 0.12500, 0.20000, 0.20000, 0.22500, NULL, NULL),
(2, 2, 0.12500, 0.22500, 0.20000, 0.22500, '2023-09-26 16:51:43', '2023-09-29 16:51:43'),
(3, 3, 0.20000, 0.17500, 0.17500, 0.22500, '2023-09-28 07:49:01', '2023-09-28 07:49:01'),
(4, 4, 0.10000, 0.25000, 0.20000, 0.20000, '2023-09-28 07:50:42', '2023-09-28 07:50:42'),
(5, 5, 0.10000, 0.22500, 0.25000, 0.20000, '2023-09-28 07:54:49', '2023-09-28 07:54:49'),
(6, 6, 0.17500, 0.15000, 0.17500, 0.17500, '2023-09-28 08:24:15', '2023-09-28 08:24:15'),
(7, 7, 0.15000, 0.15000, 0.10000, 0.17500, NULL, NULL),
(8, 8, 0.22500, 0.22500, 0.17500, 0.20000, NULL, NULL),
(9, 9, 0.17500, 0.25000, 0.22500, 0.22500, NULL, NULL),
(10, 10, 0.20000, 0.25000, 0.25000, 0.22500, NULL, NULL),
(11, 11, 0.12500, 0.17500, 0.15000, 0.17500, '2023-10-11 02:51:22', '2023-10-11 02:51:22'),
(12, 12, 0.17500, 0.17500, 0.15000, 0.22500, '2023-10-11 22:58:16', '2023-10-11 22:58:16'),
(13, 13, 0.20000, 0.20000, 0.17500, 0.20000, '2023-10-15 05:58:13', '2023-10-15 05:58:13'),
(14, 14, 0.12500, 0.17500, 0.20000, 0.22500, '2023-10-15 06:01:38', '2023-10-15 06:01:38'),
(15, 15, 0.10000, 0.12500, 0.12500, 0.15000, '2023-10-15 06:09:06', '2023-10-15 06:09:06'),
(16, 16, 0.17500, 0.22500, 0.22500, 0.20000, '2023-10-15 06:13:51', '2023-10-15 06:13:51'),
(17, 17, 0.22500, 0.25000, 0.25000, 0.25000, '2023-10-15 06:19:49', '2023-10-15 06:19:49'),
(18, 18, 0.15000, 0.17500, 0.20000, 0.17500, '2023-10-15 06:26:41', '2023-10-15 06:26:41'),
(19, 19, 0.07500, 0.15000, 0.12500, 0.15000, '2023-10-15 06:41:46', '2023-10-15 06:41:46'),
(20, 20, 0.10000, 0.20000, 0.20000, 0.22500, '2023-10-15 06:45:45', '2023-10-15 06:45:45'),
(41, 24, 0.25000, 0.25000, 0.25000, 0.25000, '2023-10-20 00:52:27', '2023-10-20 00:52:27');

-- --------------------------------------------------------

--
-- Table structure for table `nilaimakanansaw`
--

CREATE TABLE `nilaimakanansaw` (
  `nilaialt_id` bigint(20) UNSIGNED NOT NULL,
  `makanan_id` bigint(20) UNSIGNED NOT NULL,
  `rate_harga` int(11) DEFAULT NULL,
  `rate_kualitas` int(11) DEFAULT NULL,
  `rate_gizi` int(11) DEFAULT NULL,
  `rate_porsi` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nilaimakanansaw`
--

INSERT INTO `nilaimakanansaw` (`nilaialt_id`, `makanan_id`, `rate_harga`, `rate_kualitas`, `rate_gizi`, `rate_porsi`, `created_at`, `updated_at`) VALUES
(0, 21, 3, 4, 3, 5, NULL, NULL),
(2, 22, 3, 4, 2, 3, NULL, NULL),
(3, 23, 5, 4, 2, 3, NULL, NULL),
(4, 24, 3, 4, 4, 4, NULL, NULL),
(5, 25, 3, 4, 3, 3, NULL, NULL),
(6, 26, 4, 4, 3, 3, NULL, NULL),
(7, 27, 3, 4, 1, 3, NULL, NULL),
(8, 28, 4, 4, 1, 3, NULL, NULL),
(9, 29, 3, 4, 1, 3, NULL, NULL),
(10, 30, 3, 4, 1, 3, NULL, NULL),
(11, 31, 2, 4, 1, 3, NULL, NULL),
(12, 32, 3, 4, 1, 2, NULL, NULL),
(13, 33, 2, 4, 1, 5, NULL, NULL),
(14, 34, 3, 5, 1, 2, NULL, NULL),
(15, 35, 3, 4, 1, 1, NULL, NULL),
(16, 36, 2, 4, 2, 3, NULL, NULL),
(17, 37, 2, 4, 2, 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `nilaipv`
--

CREATE TABLE `nilaipv` (
  `nilaipv_id` bigint(20) UNSIGNED NOT NULL,
  `wisata_id` int(11) NOT NULL,
  `pv_fasilitas` decimal(8,2) NOT NULL,
  `pv_pelayanan` decimal(8,2) NOT NULL,
  `pv_ramahkeluarga` decimal(8,2) NOT NULL,
  `pv_akomodasi` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nilaiwisatasaw`
--

CREATE TABLE `nilaiwisatasaw` (
  `nilaialt_id` bigint(20) UNSIGNED NOT NULL,
  `wisata_id` bigint(20) UNSIGNED NOT NULL,
  `rate_fasilitas` decimal(8,2) NOT NULL,
  `rate_pelayanan` decimal(8,2) NOT NULL,
  `rate_ramahkeluarga` decimal(8,2) NOT NULL,
  `rate_akomodasi` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nilaiwisatasaw`
--

INSERT INTO `nilaiwisatasaw` (`nilaialt_id`, `wisata_id`, `rate_fasilitas`, `rate_pelayanan`, `rate_ramahkeluarga`, `rate_akomodasi`, `created_at`, `updated_at`) VALUES
(1, 34, 5.00, 4.00, 3.00, 3.00, NULL, NULL),
(2, 35, 4.00, 5.00, 3.00, 3.00, NULL, NULL),
(3, 36, 3.00, 4.00, 3.00, 3.00, NULL, NULL),
(4, 37, 4.00, 3.00, 3.00, 4.00, NULL, NULL),
(5, 38, 4.00, 4.00, 3.00, 3.00, NULL, NULL),
(6, 39, 5.00, 4.00, 4.00, 3.00, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restorandbs`
--

CREATE TABLE `restorandbs` (
  `store_id` bigint(20) UNSIGNED NOT NULL,
  `menu_id` int(11) NOT NULL,
  `namarestoran` varchar(255) NOT NULL,
  `gambarrestoran` varchar(255) NOT NULL,
  `jambuka` int(11) NOT NULL,
  `jamtutup` int(11) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `kota` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `restorandbs`
--

INSERT INTO `restorandbs` (`store_id`, `menu_id`, `namarestoran`, `gambarrestoran`, `jambuka`, `jamtutup`, `alamat`, `kota`, `link`, `created_at`, `updated_at`) VALUES
(1, 1, 'Docang Pak Kumis Khas Cirebon', 'Docang Pak Kumis.jpg', 6, 21, 'Jl. Tentara Pelajar, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131', 'Cirebon', 'https://maps.app.goo.gl/qFr3NCR7NesKAjbS9', NULL, NULL),
(2, 1, 'Nasi Jamblang Mbak Nur', 'Nasi jamblang ibu nur.jpg', 7, 21, 'Jl. Cangkring 2 No.34, Kejaksan, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45123', 'Cirebon', 'https://maps.app.goo.gl/TuJUzzk2qAGoNf3A8', NULL, NULL),
(3, 1, 'Empal Gentong H. Apud', 'Empal Gentong H Apud.jpg', 9, 21, 'Jl. Tuparev No.43B, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45131', 'Cirebon', 'https://maps.app.goo.gl/MUCNB1Xec3bLDLnX7', NULL, NULL),
(4, 0, 'Bubur Ayam Cirebon Sahara', 'Bubur Ayam Cirebon Sahara.jpg', 6, 21, '7HM3+WPR, Jl. Tentara Pelajar, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131', 'Cirebon', 'https://maps.app.goo.gl/DdL3uAGgjuaQ8SF49', NULL, NULL),
(5, 0, 'Mie Koclok Gombang Pak Rasita', 'Mie Koclok Gombang Pak Rasita.jpg', 10, 16, 'Jl. Bahagia No.2, Gombang, Kec. Plumbon, Kabupaten Cirebon, Jawa Barat 45155', 'Cirebon', 'https://maps.app.goo.gl/rf989NsSUsd6CcUY8', NULL, NULL),
(6, 0, 'Soto Ayam Khas Cirebon Hj. Mari\'ah', 'Soto Ayam Khas Cirebon Hj. Mari\'ah.jpg', 7, 15, 'Jl. Raya Plered-Su No.50, Weru Lor, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45154', 'Cirebon', 'https://maps.app.goo.gl/6C8aG4ACDZoHcNQf7', NULL, NULL),
(7, 0, 'Rumah Makan Nelayan Jaya', 'Rumah Makan Nelayan Jaya.jpg', 10, 22, 'Jl. Pekarungan No.18, Panjunan, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45112', 'Cirebon', 'https://maps.app.goo.gl/2K5234npA9Nm6bRe9', NULL, NULL),
(8, 0, 'Ketoprak Drajat', 'Ketoprak Drajat.jpg', 5, 24, 'Jl. Pangeran Drajat No.18, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'Cirebon', 'https://maps.app.goo.gl/E4eZ8qu773KkN56M8', NULL, NULL),
(9, 0, 'Sate Kalong Jalan Kesambi Dalam', 'Sate Kalong Jalan Kesambi Dalam.jpg', 0, 0, 'No., Jalan Kesambi Dalam No.102, Kesambi, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'Cirebon', 'https://maps.app.goo.gl/y2rTMmcJroupst4p8', NULL, NULL),
(10, 0, 'Gado-Gado Ayam Mang Djum Cirebon\r\n', 'Gado-Gado Ayam Mang Djum Cirebon.jpg', 6, 15, 'No.53, Pulasaren, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45116', 'Cirebon', 'https://maps.app.goo.gl/qQH5hoYbXAkXAPxe7', NULL, NULL),
(11, 0, 'Senang Oleh Khas Cirebon', 'Senang Oleh Khas Cirebon.jpg', 8, 18, 'Jl. Sukalila Selatan No.55, Pekalangan, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45123', 'Cirebon', 'https://maps.app.goo.gl/gsU8wtzPU7hesFBR6', NULL, NULL),
(12, 0, 'Nasi Jamblang Mang Dul', 'Nasi Jamblang Mang Dul.jpg', 0, 0, 'Jl. DR. Cipto Mangunkusumo No.8, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131', 'Cirebon', 'https://maps.app.goo.gl/oq7PdW27KDouPjg39', NULL, NULL),
(13, 0, 'Kantin Anugerah', 'Kantin Anugerah.jpg', 10, 20, 'Jl. Gn. Agung No.1, Larangan, Kec. Harjamukti, Kota Cirebon, Jawa Barat 45141', 'Cirebon', 'https://maps.app.goo.gl/X8wj8EG3XJkUCrKM6', NULL, NULL),
(14, 0, 'Kuliner Ibu Mega', 'Kuliner Ibu Mega.jpg', 10, 21, 'Jl. Rajawali Raya No.30-31, Drajat, Kec. Kesambi, Kota Cirebon, Jawa Barat 45133', 'Cirebon', 'https://maps.app.goo.gl/LQmLqu6kVdfgUSNMA', NULL, NULL),
(15, 0, 'Pedesan Entog Mas Nana Megu Gede', 'Pedesan Entog Mas Nana Megu Gede.jpg', 9, 22, 'Jl. Fatahillah Blok Kawung No.80, Megu Gede, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45611', 'Cirebon', 'https://maps.app.goo.gl/qnDfGVDMXc1VjBLg9', NULL, NULL),
(16, 0, 'Saung Dolet', 'Saung Dolet.jpg', 9, 20, 'Jl. Raya Palka No.KM 06, Cipelem, Paleh, Kec. Pabuaran, Kabupaten Serang, Banten 42163', 'Serang', 'https://maps.app.goo.gl/vWfwWoHxqTVsJb1h8', NULL, NULL),
(17, 0, 'RM. Angeun Lada', 'RM. Angeun Lada.jpg', 10, 21, 'Jl. Ciruas - Petir No.32, Sindangsari, Kec. Petir, Kabupaten Serang, Banten 42172', 'Serang', 'https://maps.app.goo.gl/JrnptVYdx4oT6xdJ7', NULL, NULL),
(18, 0, 'Bilvie Food', 'Bilvie Food.jpg', 0, 0, 'Jl. Akses Tol Serang Tim., Panancangan, Kec. Cipocok Jaya, Kota Serang, Banten 42124', 'Serang', 'https://maps.app.goo.gl/oUUWnbsrTkWQnKwv7', NULL, NULL),
(19, 0, 'Pawon Kite', 'Pawon Kite.jpg', 11, 16, 'Jl. Rejana Bawah No.16-12, Rw. Arum, Banten 42436', 'Serang', 'https://maps.app.goo.gl/z8xsGERrh9BE1ckHA', NULL, NULL),
(20, 0, 'Nasi Uduk Ibu Mail', 'Nasi Uduk Ibu Mail.jpg', 3, 15, 'V5P8+4C7, Cimuncang, Serang, Serang City, Banten 42111', 'Serang', 'https://maps.app.goo.gl/oyZMq7fEzaCk7fco7', NULL, NULL),
(21, 0, 'Nasi Bakar Sumsum Mang Puri Asli', 'Nasi Bakar Sumsum Mang Puri Asli.jpg', 15, 22, 'Jl. Kelapa Dua, Lontarbaru, Kec. Serang, Kota Serang, Banten 42115', 'Serang', 'https://maps.app.goo.gl/TcsyMSkuwaK9tMLH7', NULL, NULL),
(22, 0, 'Kue Balok Babakan Hj. Djamsinah', 'Kue Balok Babakan Hj. Djamsinah.jpg', 8, 20, 'JV4G+VQH, Jl. Raya Labuan - Pandeglang, Montor, Kec. Pagelaran, Kabupaten Pandeglang, Banten 42265', 'Serang', 'JV4G+VQH, Jl. Raya Labuan - Pandeglang, Montor, Kec. Pagelaran, Kabupaten Pandeglang, Banten 42265', NULL, NULL),
(23, 0, 'Ketan Bintul \"Teh Ipah\"', 'Ketan Bintul Teh Ipah.jpg', 12, 18, 'Jl. Maulana Hasanudin No.82, Kotabaru, Kec. Serang, Kota Serang, Banten 42112', 'Serang', 'https://maps.app.goo.gl/oeKJwyLa9XV93deY7', NULL, NULL),
(24, 0, 'Citra Gading', 'Citra Gading.jpg', 0, 0, 'Komplek Citra Gading Blok.E 5 No.26, 002/006, Karundang, Kec. Cipocok Jaya, Kota Serang, Banten 42121', 'Serang', 'https://maps.app.goo.gl/AYQH4ddFaUdwFMSTA', NULL, NULL),
(25, 0, 'Kue Jojorong Ibu Sahati', 'Kue Jojorong Ibu Sahati.jpg', 7, 18, 'Q4CG+HHG, Kp. Kareo Kulon, RT.04/RW.02, Sukamanah, Kec. Baros, Kabupaten Serang, Banten 42173', 'Serang', 'https://maps.app.goo.gl/N492WwxkPdt6Wf3H8', NULL, NULL),
(26, 0, 'Dapur Ma\'cam Kue Ibu Samsiah', 'Dapur Ma\'cam Kue Ibu Samsiah.jpg', 5, 22, 'Jl. Garuda Jl. Cimuncang No.31, RT.01/RW.14, Warakas, Kec. Serang, Kota Serang, Banten 42111', 'Serang', 'https://maps.app.goo.gl/FuBTxxKHfbJSjo8D9', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `temprank`
--

CREATE TABLE `temprank` (
  `rank_id` bigint(20) UNSIGNED NOT NULL,
  `nilaialt_id` int(11) NOT NULL,
  `wisata_id` int(11) NOT NULL,
  `rate_fasilitas` decimal(8,2) NOT NULL,
  `rate_pelayanan` decimal(8,2) NOT NULL,
  `rate_ramahkeluarga` decimal(8,2) NOT NULL,
  `rate_akomodasi` decimal(8,2) NOT NULL,
  `score` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `thumbnail`
--

CREATE TABLE `thumbnail` (
  `nail_id` bigint(20) UNSIGNED NOT NULL,
  `namagambar` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `thumbnail`
--

INSERT INTO `thumbnail` (`nail_id`, `namagambar`, `gambar`, `created_at`, `updated_at`) VALUES
(1, 'makanan nusantara1', 'thumbnail1.jpg', NULL, NULL),
(2, 'makanan nusantara 2', 'thumbnail2.jpg', NULL, NULL),
(3, 'wisata nusantara1', 'thumbnail3.jpg', NULL, NULL),
(4, 'wisata nusantara2', 'thumbnail4.jpg', NULL, NULL),
(5, 'makanan nusantara3', 'thumbnail5.jpg', NULL, NULL),
(6, 'wisata nusantara 3', 'thumbnail6.jpg', NULL, NULL),
(7, 'wisata nusantara 4', 'thumbnail7.jpg', NULL, NULL),
(8, 'wisata nusantara 5', 'thumbnail8.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Sembako', 'sembako@gmail.com', NULL, '$2y$10$uqTtulicJVMeS/rvrqsEX.mPPMZpcon0sPXyNFDgD8nQZCC01.vLu', 'Admin', NULL, '2023-10-24 23:48:22', '2023-10-24 23:48:22'),
(2, 'Store1', 'store1@gmail.com', NULL, '$2y$10$Fq/YtzQhcqMISZ44i17wTeMUMNMgAHyni5u12H0UxvO9bvzCu/g/G', 'Store', NULL, '2023-10-24 23:49:43', '2023-10-24 23:49:43'),
(3, 'fred', 'frederickchang75@gmail.com', NULL, '$2y$10$E3pWDaimdy/ABLAnGSFHFOTbPQw/kpLef.5FQZ4MXZURj4NnSkudC', 'User', NULL, '2023-10-25 00:02:42', '2023-10-25 00:02:42'),
(4, 'dd', 'dd@gmail.com', NULL, '$2y$10$xzpCtPMjfThQav.eZyIBJOFASlvGZv8yi.zkPe6T2AWdvQZe7Wow6', 'Store', NULL, '2023-10-25 22:35:55', '2023-10-25 22:35:55'),
(5, 'gogo', 'gogo@gmail.com', NULL, '$2y$10$i5jK33V/clwPfQzxD1HVnu3vuFgneS2h2jxN9usiVtonbQgbaI64G', 'Store', NULL, '2023-10-25 22:44:11', '2023-10-25 22:44:11'),
(6, 'Frd', 'fed@gmail.com', NULL, '$2y$10$1DjcICFQzD7eo3p7ovPo9eUodmtknsNH7SMniVnlRonp.QBxhSuFC', 'User', NULL, '2023-11-03 00:37:13', '2023-11-03 00:37:13'),
(7, 'admin', 'laurentiusdaniel0@gmail.com', NULL, '$2y$10$Ys7mTOcRaTnpfa2h0LJSPOdTnicET9u1Sr3Tjx1gznMEoQEuPn0ci', 'User', NULL, '2024-01-02 04:21:13', '2024-01-02 04:21:13'),
(8, 'admin', 'admin@gmail.com', NULL, '$2y$10$PrbuLuVCUcDA/MRdAa.jX.r3JWfLp8jHi2BQLkghNcqO37rOH25F6', 'Admin', NULL, '2024-01-05 19:42:26', '2024-01-05 19:42:26'),
(9, 'user1', 'user@gmail.com', NULL, '$2y$10$Uu7HRH9qS175AYt1bi3hd.s7RLBXJHJRTMFQOhI4IEtqieO5OeMrG', 'User', NULL, '2024-01-07 17:31:19', '2024-01-07 17:31:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `datamakanan`
--
ALTER TABLE `datamakanan`
  ADD PRIMARY KEY (`makanan_id`);

--
-- Indexes for table `datamakanancirebon`
--
ALTER TABLE `datamakanancirebon`
  ADD PRIMARY KEY (`makanan_id`);

--
-- Indexes for table `datawisata`
--
ALTER TABLE `datawisata`
  ADD PRIMARY KEY (`wisata_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`transaksi_id`);

--
-- Indexes for table `kota`
--
ALTER TABLE `kota`
  ADD PRIMARY KEY (`kota_id`);

--
-- Indexes for table `menudbs`
--
ALTER TABLE `menudbs`
  ADD PRIMARY KEY (`menu_id`),
  ADD KEY `menudbs_store_id_foreign` (`store_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nilaialt`
--
ALTER TABLE `nilaialt`
  ADD PRIMARY KEY (`nilaialt_id`);

--
-- Indexes for table `nilaimakanansaw`
--
ALTER TABLE `nilaimakanansaw`
  ADD PRIMARY KEY (`nilaialt_id`);

--
-- Indexes for table `nilaipv`
--
ALTER TABLE `nilaipv`
  ADD PRIMARY KEY (`nilaipv_id`);

--
-- Indexes for table `nilaiwisatasaw`
--
ALTER TABLE `nilaiwisatasaw`
  ADD PRIMARY KEY (`nilaialt_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `restorandbs`
--
ALTER TABLE `restorandbs`
  ADD PRIMARY KEY (`store_id`);

--
-- Indexes for table `temprank`
--
ALTER TABLE `temprank`
  ADD PRIMARY KEY (`rank_id`);

--
-- Indexes for table `thumbnail`
--
ALTER TABLE `thumbnail`
  ADD PRIMARY KEY (`nail_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `datamakanan`
--
ALTER TABLE `datamakanan`
  MODIFY `makanan_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `datamakanancirebon`
--
ALTER TABLE `datamakanancirebon`
  MODIFY `makanan_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `datawisata`
--
ALTER TABLE `datawisata`
  MODIFY `wisata_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `transaksi_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kota`
--
ALTER TABLE `kota`
  MODIFY `kota_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `menudbs`
--
ALTER TABLE `menudbs`
  MODIFY `menu_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `nilaialt`
--
ALTER TABLE `nilaialt`
  MODIFY `nilaialt_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `nilaimakanansaw`
--
ALTER TABLE `nilaimakanansaw`
  MODIFY `nilaialt_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `nilaipv`
--
ALTER TABLE `nilaipv`
  MODIFY `nilaipv_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nilaiwisatasaw`
--
ALTER TABLE `nilaiwisatasaw`
  MODIFY `nilaialt_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restorandbs`
--
ALTER TABLE `restorandbs`
  MODIFY `store_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `temprank`
--
ALTER TABLE `temprank`
  MODIFY `rank_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thumbnail`
--
ALTER TABLE `thumbnail`
  MODIFY `nail_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menudbs`
--
ALTER TABLE `menudbs`
  ADD CONSTRAINT `menudbs_store_id_foreign` FOREIGN KEY (`store_id`) REFERENCES `restorandbs` (`store_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
