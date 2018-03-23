<?php 
	
	$data = array();
	define('DB_PREFIX','td_');
    define('ANALYTICS','monitoramento@analyticsservice-198217.iam.gserviceaccount.com');

	 // Tratto Design
    $db = new mysqli('localhost', 'root', '', 'tratto_design');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["TRATTODESIGN"] = $db;

 ?>