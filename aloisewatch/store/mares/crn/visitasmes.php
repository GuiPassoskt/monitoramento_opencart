<?php
include '../../../dbconfig/db_maresbrasil.php';
include '../class/MaresBrasil.php';

$data = new MaresBrasil($data["MARESBRASIL"]);

$data->onlinesmes();

?>