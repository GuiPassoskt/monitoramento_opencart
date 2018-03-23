<?php 
	
	$data = array();
	define('DB_PREFIX','oc_');
    define('ANALYTICS','monitoramento@analyticsservice-198217.iam.gserviceaccount.com');

	 // Tennisport
    $db = new mysqli('localhost', 'root', '', 'opentest3');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["TESTE"] = $db;

 ?>