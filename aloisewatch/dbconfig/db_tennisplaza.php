<?php 

	$data = array();
	define('DB_PREFIX','tp_');
	define('ANALYTICS','monitoramento@analyticsservice-198217.iam.gserviceaccount.com');

	// Tennis Plaza
    $db = new mysqli('localhost', 'root', '', 'tennisplaza');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["TENNISPLAZA"] = $db;


 ?>