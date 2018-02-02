-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Ven 02 Février 2018 à 06:17
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `time`
--

-- --------------------------------------------------------

--
-- Structure de la table `track`
--

CREATE TABLE `track` (
  `id` int(11) NOT NULL,
  `houres` int(11) NOT NULL,
  `minutes` int(11) NOT NULL,
  `seconds` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(512) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `track`
--

INSERT INTO `track` (`id`, `houres`, `minutes`, `seconds`, `date`, `description`) VALUES
(1, 5, 5, 5, '2012-02-25', 'hello world1'),
(2, 5, 5, 5, '2012-02-12', 'hello world2'),
(3, 5, 5, 5, '2018-02-02', 'hello world3'),
(4, 0, 0, 2, '2018-02-02', 'hello world4'),
(5, 0, 0, 2, '2018-02-02', 'hello world5'),
(6, 0, 0, 2, '2018-02-02', 'hello world6'),
(7, 0, 0, 2, '2018-02-02', 'hello world7'),
(8, 0, 0, 2, '2018-02-02', 'hello world8'),
(9, 0, 0, 2, '2018-02-02', 'hello world9'),
(10, 0, 0, 2, '2018-02-02', 'hello world10'),
(11, 0, 0, 2, '2018-02-02', 'hello world11'),
(12, 0, 0, 2, '2018-02-02', 'hello world12'),
(13, 0, 0, 1, '2018-02-02', 'hello world13'),
(14, 0, 0, 2, '2018-02-02', 'hello world14'),
(15, 1, 0, 0, '2018-02-02', 'hello world15'),
(16, 0, 0, 2, '2018-02-02', 'hello world16'),
(17, 1, 0, 0, '2018-02-02', 'hello world17'),
(18, 1, 0, 0, '2018-02-02', 'hello world18'),
(19, 1, 0, 0, '2018-02-02', 'hello world19'),
(20, 1, 0, 0, '2018-02-02', 'hello world20'),
(21, 1, 0, 0, '2018-02-02', 'hello world21'),
(22, 1, 0, 0, '2018-02-02', 'hello world22'),
(23, 1, 0, 0, '2018-02-02', 'hello world23'),
(24, 1, 0, 0, '2018-02-02', 'hello world24'),
(25, 1, 0, 0, '2018-02-02', 'hello world25'),
(26, 1, 0, 0, '2018-02-02', 'hello world26'),
(27, 0, 1, 0, '2018-02-02', 'hello world27'),
(28, 0, 1, 0, '2018-02-02', 'hello world28'),
(29, 0, 1, 0, '2018-02-02', 'hello world29'),
(30, 0, 4, 0, '2018-02-02', 'hello world30'),
(31, 0, 0, 2, '2018-02-02', 'hello world31'),
(32, 2, 1, 0, '2018-02-02', 'hello world32'),
(33, 0, 0, 7, '2018-02-02', 'hello world33'),
(34, 0, 0, 7, '2018-02-02', 'hello world34'),
(35, 0, 0, 5, '2018-02-02', 'hello world35');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `track`
--
ALTER TABLE `track`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `track`
--
ALTER TABLE `track`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
