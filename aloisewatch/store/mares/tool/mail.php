<?php
class Tool_Mail {

	private $to;
	private $subject;
	private $message;
	private $from;
	private $headers;

	public function Tool_Mail($to,$subject,$message,$from){
		$this->to = $to;
		$this->subject = $subject;
		$this->message = $message;
		$this->from = $from;

	}

	public function set($var,$value){
		$this->$var = $value;
	}

	public function setHtmlHeader(){
			$this->headers = "MIME-Version: 1.0" . "\r\n";
			$this->headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

			// More this->headers
			$this->headers .= "From: ".$this->from."<ecommerce@dld.com.br>" . "\r\n";
			//$this->headers .= 'Cc: myboss@example.com' . "\r\n"; copy
	}

	public function mail(){
		self::setHtmlHeader();
		return mail($this->to,$this->subject,$this->message,$this->headers);
	}



}

?> 