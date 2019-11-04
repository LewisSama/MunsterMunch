
<?php

require_once '../vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('../src/Views');
$twig = new \Twig\Environment($loader);
echo $twig->render('salle_de_bain3.html.twig');
