-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 05 Lis 2023, 13:48
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `baza1`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `students`
--

INSERT INTO `students` (`id`, `name`, `surname`, `email`) VALUES
(1, 'Anna', 'Kowalska', 'anna.kowalska@example.com'),
(2, 'Jan', 'Nowak', 'jan.nowak@example.com'),
(3, 'Maria', 'Nowak', 'maria.nowak@example.com'),
(4, 'Piotr', 'Nowak', 'piotr.nowak@example.com'),
(5, 'Katarzyna', 'Wójcik', 'katarzyna.wojcik@example.com'),
(6, 'Andrzej', 'Wójcik', 'andrzej.wojcik@example.com'),
(7, 'Aleksandra', 'Kowalczyk', 'aleksandra.kowalczyk@example.com'),
(8, 'Michał', 'Kowalczyk', 'michal.kowalczyk@example.com'),
(9, 'Wojciech', 'Lewandowski', 'wojciech.lewandowski@example.com'),
(10, 'Magdalena', 'Lewandowska', 'magdalena.lewandowska@example.com'),
(11, 'Tomasz', 'Kaczmarek', 'tomasz.kaczmarek@example.com'),
(12, 'Ewa', 'Kaczmarek', 'ewa.kaczmarek@example.com'),
(13, 'Łukasz', 'Zieliński', 'lukasz.zielinski@example.com'),
(14, 'Natalia', 'Zielińska', 'natalia.zielinska@example.com'),
(15, 'Grzegorz', 'Szymański', 'grzegorz.szymanski@example.com');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `hoursAWeek` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `hoursAWeek`) VALUES
(1, 'Matematyka', 5),
(2, 'Fizyka', 4),
(3, 'Chemia', 3),
(4, 'Biologia', 3),
(5, 'Historia', 4),
(6, 'Geografia', 1),
(7, 'Informatyka', 4),
(8, 'Język angielski', 3),
(9, 'Język niemiecki', 3),
(10, 'WOS', 2),
(11, 'BHP', 1),
(12, 'Wychowanie fizyczne', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
