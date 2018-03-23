<?php

include '../../../dbconfig/db_zerosperfumes.php';
include '../class/ZerosPerfumes.php';

$data = new ZerosPerfumes($data["ZEROSPERFUMES"]);

$data->taxaconversao();

?>