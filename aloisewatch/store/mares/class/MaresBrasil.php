<?php

header("Access-Control-Allow-Origin: *");

include '../tool/date.php';

class MaresBrasil {

	public $db;
	public $produtos = array();

	public function __construct($novaconexao){    
		$this->db = $novaconexao;
	}

	// Consulta no 1° banco
	public function produtos(){
		$sql1 = "SELECT * FROM " . DB_PREFIX . "product";
		$resultado = $this->db->query($sql1);
		$this->produto = array();
        while ($produto = mysqli_fetch_assoc($resultado)){
            $this->produtos[] = $produto;
        }

        print_r($this->produtos);
		
	}

	//Consulta por pedidos ocorridos hoje
	public function pedidoshoje(){
		$date = date("Y-m-d");
		$sql = "select count(*) as total from " . DB_PREFIX . "order where order_status_id != 0 and `store_id` = 0 and date(date_added) between date('".$date."') and now()";
		$resultado = $this->db->query($sql);
		$response = null;
		while($pedido = mysqli_fetch_assoc($resultado)){
			$response = $pedido;
		}
		if($response['total'] == ''){
			$response['total'] = '0';
			echo json_encode($response);
		}else{
			echo json_encode($response);
		}
	}

	//Consulta por pedidos perdidos ocorridos hoje
	public function pedidosperdidoshoje(){
		$date = date("Y-m-d");
		$sql = "select count(*) as total from " . DB_PREFIX . "order where order_status_id = 0 and `store_id` = 0 and date(date_added) between date('".$date."') and now()";
		$resultado = $this->db->query($sql);
		$response = null;
		while($pedido = mysqli_fetch_assoc($resultado)){
			$response = $pedido;
		}
		if($response['total'] == ''){
			$response['total'] = '0';
			echo json_encode($response);
		}else{
			echo json_encode($response);
		}
	}

	//Consulta por pedidos ocorridos no mês
	public function pedidosmes(){
		$d = date("d");
		$m = date("m");
		$y = date("Y");
		$initialDate = ($y."-".$m."-01");
		$finalDate	 = Tool_Date::returnsCorrectLastDate($d,$m,$y);
		$sql = "select count(*) as total from " . DB_PREFIX . "order where order_status_id != 0 and `store_id` = 0 and date(date_added) between date('".$initialDate."')  and now()";
		$resultado = $this->db->query($sql);
		$response = null;
		while($pedido = mysqli_fetch_assoc($resultado)){
			$response = $pedido;
		}
		if($response['total'] == ''){
			$response['total'] = '0';
			echo json_encode($response);
		}else{
			echo json_encode($response);
		}

	}

	//Consulta por pedidos perdidos ocorridos no mês
	public function pedidosperdidosmes(){
		$d = date("d");
		$m = date("m");
		$y = date("Y");
		$initialDate = ($y."-".$m."-01");
		$finalDate	 = Tool_Date::returnsCorrectLastDate($d,$m,$y);
		$sql = "select count(*) as total from " . DB_PREFIX . "order where order_status_id = 0 and `store_id` = 0 and date(date_added) between date('".$initialDate."')  and now()";
		$resultado = $this->db->query($sql);
		$response = null;
		while($pedido = mysqli_fetch_assoc($resultado)){
			$response = $pedido;
		}
		if($response['total'] == ''){
			$response['total'] = '0';
			echo json_encode($response);
		}else{
			echo json_encode($response);
		}
	}

	//Consulta por vendas ocorridas hoje
	public function vendashoje(){
		$sql = "select sum(`total`) as total from " . DB_PREFIX . "order where order_status_id != 0 and `date_added` between curdate( ) and now( ) and `store_id`= 0";
		$resultado = $this->db->query($sql);
		$response = null;
		while($venda = mysqli_fetch_assoc($resultado)){
			$response = $venda;
		}
		if($response['total'] == ''){
			$response['total'] = '0';
			echo json_encode($response);
		}else{
			echo json_encode($response);
		}
	}

	//Consulta por vendas ocorridas no mês
	public function vendasmes(){
		$sql = "select sum(`total`) as total from " . DB_PREFIX . "order where order_status_id !=0 and `date_added` between date_sub( date(now()), interval day( now() ) -1 day ) and now() and `store_id`= 0";
		$resultado = $this->db->query($sql);
		$response = null;
		while($vendames = mysqli_fetch_assoc($resultado)){
			$response = $vendames;
		}
		if($response['total'] == ''){
			$response['total'] = '0';
			echo json_encode($response);
		}else{
			echo json_encode($response);
		}
	}

	public function onlines(){
		include '../../../google/CustomAnalytcs_class.php';
		$service_account_email = ANALYTICS;
		// $key_file_location = 'GoogleAnalytics-fa32e1a557ad.p12';
		$key_file_location = '../data/key.p12';
		$analytics = new CustomAnalytcs_class($service_account_email, $key_file_location);
		// $sessiondata = $analytics->getSessonData();
		$realtimedata = $analytics->getRealtimeData();

		$data = array();
		$data['total'] =  $realtimedata['activeusers'];
		if($data['total'] == ''){
		    $response['total'] = '0';
		    echo json_encode($response);
		}else{
		    echo json_encode($data);    
		}
	}

	public function onlinesmes(){
		require '../../../google/gapi.class.php';

	    $ga = new gapi(ANALYTICS, "../data/key.p12");
	    
	    //ID do perfil do site
	    $id = '171744989';
	    
	    //Busca os pageviews e visitas do mês atual
	    $inicio = date('Y-m-01'); //Atribui o 1º dia do mês atual
	    $fim = date('Y-m-t'); //Atribui o último dia do mês atual
	    
	    $ga->requestReportData($id, 'month', array('pageviews', 'visits'), null, null, $inicio, $fim, null, null);
	    $data = array();
	    foreach ($ga->getResults() as $dados) {
	       $data['total'] = $dados->getVisits();
	    }

	    if($data['total'] == ''){
	    $response['total'] = '0';
	      echo json_encode($response);
	    }else{
	      echo json_encode($data);    
	    }
	}

	//Ticket Medio: Vendas totais mensais 
	//dividido por numero de pedidos do mês
	public function ticketmedio(){

		$d = date("d");
		$m = date("m");
		$y = date("Y");
		$initialDate = ($y."-".$m."-01");
		$finalDate	 = Tool_Date::returnsCorrectLastDate($d,$m,$y);

		$sql1 = "select sum(`total`) as total from " . DB_PREFIX . "order where order_status_id !=0 and `date_added` between date_sub( date(now()), interval day( now() ) -1 day ) and now() and `store_id`= 0";
		$resultado1 = $this->db->query($sql1);

		$sql2 = "select count(*) as total from " . DB_PREFIX . "order where order_status_id != 0 and `store_id` = 0 and date(date_added) between date('".$initialDate."')  and now()";
		$resultado2 = $this->db->query($sql2);

		$response = null; $response1 = null; $response2 = null;
		while($vendames = mysqli_fetch_assoc($resultado1)){
			$response1 = $vendames;
		}
		while($pedidosmes = mysqli_fetch_assoc($resultado2)){
			$response2 = $pedidosmes;
		}
		$response['total'] = round($response1['total']/$response2['total']);
		if($response['total'] == ''){
			$response['total'] = '0';
			echo json_encode($response);
		}else{
			echo json_encode($response);
		}
	}

	public function taxaconversao(){
		/**************** Onlines Mes ****************/ 
		require '../../../google/gapi.class.php';
	    $ga = new gapi(ANALYTICS, "../data/key.p12");
	    //ID do perfil do site
	    $id = '171744989';  
	    $inicio = date('Y-m-01'); //Atribui o 1º dia do mês atual
	    $fim = date('Y-m-t'); //Atribui o último dia do mês atual
	    $ga->requestReportData($id, 'month', array('pageviews', 'visits'), null, null, $inicio, $fim, null, null);
	    $data = array();
	    foreach ($ga->getResults() as $dados) {
	       $data['total'] = $dados->getVisits();
	    }
		/***************** Pedidos Mes *****************/ 
		$d = date("d");
		$m = date("m");
		$y = date("Y");
		$initialDate = ($y."-".$m."-01");
		$finalDate	 = Tool_Date::returnsCorrectLastDate($d,$m,$y);
		$sql = "select count(*) as total from `" . DB_PREFIX . "order` where order_status_id != 0 and `store_id` = 0 and date(date_added) between date('".$initialDate."')  and now()";
		$resultado1 = $this->db->query($sql);
		$response1 = null;
		while($pedido = mysqli_fetch_assoc($resultado1)){
			$response1 = $pedido;
		}
		/**********************************************/ 
		$result = null;
		if($response1['total'] > 0){
			$result['total'] = $data['total']/$response1['total'];
			$result['total'] = number_format($result['total'],4);
			echo json_encode($result);
		}else{
			$result['total'] = '0';
			echo json_encode($result);
		}	
	}


}

?>