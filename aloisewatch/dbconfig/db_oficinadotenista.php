<?php 

	$data = array();
	define('DB_PREFIX','ot_');
	define('ANALYTICS','monitoramento@analyticsservice-198217.iam.gserviceaccount.com');

	// Oficina do Tenista
    $db = new mysqli('dedb12.porta80.com.br', 'dld', 'dld2014@@', 'oficinadotenista');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["OFICINADOTENISTA"] = $db;

 ?>