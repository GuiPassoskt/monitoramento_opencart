<?php 

	$data = array();
	define('DB_PREFIX','');
	define('ANALYTICS','headstore@opencartot.iam.gserviceaccount.com');

	 // Head Store
    $db = new mysqli('dedb12.porta80.com.br', 'dld', 'dld2014@@', 'headstore');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["HEADSTORE"] = $db;

 ?>