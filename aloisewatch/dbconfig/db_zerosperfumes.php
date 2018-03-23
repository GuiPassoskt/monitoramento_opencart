<?php 

	$data = array();
	define('DB_PREFIX','zp_');
	define('ANALYTICS','monitoramento@analyticsservice-198217.iam.gserviceaccount.com');

	 // Zeros Perfumes
    $db = new mysqli('localhost', 'root', '', 'zeros_perfumes');
    if($db->connect_errno){
        echo 'Falha na conexao com o banco de dados';
        die();
    }
    $data["ZEROSPERFUMES"] =  $db;

 ?>