<?php
include '../../../dbconfig/db_tennisplaza.php';
include '../class/TennisPlaza.php';

$data = new TennisPlaza($data["TENNISPLAZA"]);

$data->onlines();

?>