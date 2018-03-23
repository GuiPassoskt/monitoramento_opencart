<?php

include '../../../dbconfig/db_dldlojista.php';
include '../class/DldLojista.php';

$data = new DldLojista($data["DLDLOJISTA"]);

// $data->produtos();

$data->pedidosmes();

?>