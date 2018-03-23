<?php

include '../../../dbconfig/db_teste.php';
include '../class/Teste.php';

$data = new Teste($data["TESTE"]);

$data->pedidosperdidoshoje();

?>