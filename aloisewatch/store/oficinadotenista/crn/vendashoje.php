<?php

include '../../../dbconfig/db_oficinadotenista.php';
include '../class/OficinadoTenista.php';

$data = new OficinadoTenista($data["OFICINADOTENISTA"]);

// $data->produtos();

$data->vendashoje();

?>