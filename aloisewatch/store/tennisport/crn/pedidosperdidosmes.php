<?php

include '../../../dbconfig/db_tennisport.php';
include '../class/TennisPort.php';

$data = new TennisPort($data["TENNISPORT"]);

// $data->produtos();

$data->pedidosperdidosmes();

?>