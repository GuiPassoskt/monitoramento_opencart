<?php 

	$data = array();
	define('DB_PREFIX','hb_');
	define('ANALYTICS','headbrasil@opencartot.iam.gserviceaccount.com');

	// Head Brasil
    $db = new mysqli('dedb12.porta80.com.br', 'dld', 'dld2014@@', 'headbrasil');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["HEADBRASIL"] = $db;

 ?>