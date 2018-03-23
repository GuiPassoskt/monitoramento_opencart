<?php

include '../../../dbconfig/db_headbrasil.php';
include '../class/HeadBrasil.php';

$data = new HeadBrasil($data["HEADBRASIL"]);

// $data->produtos();

$data->vendasmes();

?>