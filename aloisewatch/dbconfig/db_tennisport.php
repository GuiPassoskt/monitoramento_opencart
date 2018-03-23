<?php 
	
	$data = array();
	define('DB_PREFIX','tn_');
    define('ANALYTICS','monitoramento@analyticsservice-198217.iam.gserviceaccount.com');

	 // Tennisport
    $db = new mysqli('localhost', 'root', '', 'tennisport');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["TENNISORT"] = $db;

 ?>