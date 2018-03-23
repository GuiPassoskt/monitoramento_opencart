<?php 

	$data = array();
	define('DB_PREFIX','dld_');
	define('ANALYTICS','monitoramento@analyticsservice-198217.iam.gserviceaccount.com');

	 // Dld
    $db = new mysqli('dedb12.porta80.com.br', 'dld', 'dld2014@@', 'lojista');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["DLDLOJISTA"] = $db;

 ?>