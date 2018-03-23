<?php

include '../../../dbconfig/db_trattodesign.php';
include '../class/TrattoDesign.php';

$data = new TrattoDesign($data["TRATTODESIGN"]);

$data->taxaconversao();

?>