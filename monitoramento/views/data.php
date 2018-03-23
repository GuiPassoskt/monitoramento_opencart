<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");

//header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

	//conecta com o banco
	$con = mysql_connect("mysql.porta80.com.br","aloise","215487");
	if($con)mysql_select_db("aloise",$con);
	
	if(isset($_GET['configuration'])){
		configuration();
	}else{
	$store_id = $_POST['store_id'];
	$pedidos = $_POST['pedidos'];
	$vendas = $_POST['vendas'];
	$acessos = $_POST['acessos'];
	

	$display = "Select * from `company_conf` where `store_id`= '".$store_id."'";
	$response = mysql_query($display);
	print_r($response);
	
	if(mysql_num_rows($response) > 0){

			$sql = "UPDATE `company_conf` SET `store_id`='".$store_id."',`conf_order`='".$pedidos."',`conf_sold`='".$vendas."',`conf_access`='".$acessos."' WHERE `store_id` = '".$store_id."'";
			}else{

			$sql = "insert into `company_conf`(`store_id`,`conf_order`,`conf_sold`,`conf_access`)
			values ('".$store_id."','".$pedidos."','".$vendas."','".$acessos."')";

			}

	mysql_query($sql);

	}

	function configuration(){

		$result = "Select * from `company_conf`";
		$responseData = mysql_query($result);
		if(mysql_num_rows($responseData) > 0){
			$result = array();
			while ($row = mysql_fetch_assoc($responseData)) {
				$result[] = $row; 
			}
			echo json_encode($result,128);
		}

	}

?>