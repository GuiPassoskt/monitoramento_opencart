<?php

class conexao {
    public $host="dedb12.porta80.com.br";
    public $user="dld";
    public $pass="dld2014@@";
    public $database="aloise";
    public $connect="";
    public $select="";

    function __construct() {
        $this->connect=mysql_connect($this->host,$this->user,$this->pass) or die (mysql_error());
        $this->select=mysql_select_db($this->database,$this->connect) or die (mysql_error());
    }
}

$conexao = new conexao();


class usuarios_online{
     public $timeoutseconds = "";
     public $timestamp = "";
     public $timeout = "";
     public $ip_usuario = "";
     public $url = "";
     public $verifica = "";
     public $result_verifica = "";
     public $deleta = "";
     public $resultado = "";
	 public $resultado_total = "";
     public $usuarios = "";
	 public $usuarios_total = "";


 function __construct() {

    //Tempo em segundos que irá apagar os ips inativos
    $this->timeoutseconds = 120;
    $this->timestamp=time();
    $this->timeout= $this->timestamp - $this->timeoutseconds;

    //Pega o ip do usuario
    $this->ip_usuario = $_SERVER['REMOTE_ADDR'];
    //Pega a o url da página que o uuário entrou
	$this->url = $_SERVER['REQUEST_URI'];

    //Verifica se o ip do usuário já se encontra
    $this->verifica = mysql_query ("SELECT ip FROM visitante_online WHERE ip = '$this->ip_usuario'");
    $this->result_verifica = mysql_num_rows($this->verifica);

    //Se for encontrado, faz a atualizaçao do url e do segundos que a pessoa entrou
    if ($this->result_verifica > "0"){
    mysql_query("UPDATE visitante_online SET url='$this->url',timestamp='$this->timestamp' WHERE ip='$this->ip_usuario'") or die (mysql_error());

    //Caso nao sejá encontrado ele insere o ip a url e o tempo
    } else {
    mysql_query("INSERT INTO visitante_online (timestamp, ip, url) VALUES ('$this->timestamp','$this->ip_usuario','$this->url')") or die (mysql_error());
    }

    //Deleta os ips que já passaram dos 300 segundos
    $this->deleta=mysql_query("DELETE FROM visitante_online WHERE timestamp < $this->timeout") or die (mysql_error());
    $this->resultado=mysql_query("SELECT DISTINCT ip FROM visitante_online WHERE url='$this->url'") or die (mysql_error());
	$this->resultado_total=mysql_query("SELECT DISTINCT ip FROM visitante_online") or die (mysql_error());

    }
}
	
$usuarios_online = new usuarios_online();


?>