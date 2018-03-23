<?php

include '../../../dbconfig/db_raquetesusadas.php';
include '../class/RaquetesUsadas.php';

$data = new RaquetesUsadas($data["RAQUETESUSADAS"]);

$data->pedidosperdidoshoje();

?>