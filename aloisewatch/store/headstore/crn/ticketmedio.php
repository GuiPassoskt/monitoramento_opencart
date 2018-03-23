<?php

include '../../../dbconfig/db_headstore.php';
include '../class/HeadStore.php';

$data = new HeadStore($data["HEADSTORE"]);

$data->ticketmedio();

?>