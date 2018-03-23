<?php
/* ===================== Tool Session Class ======================== 
	@author: Bruno Lee
	@data: 2014-08-13
	@description: This class makes all the sessions management

*/

class Tool_Session extends Controller_Page{
	
	// ======================== Class Variables ========================
	private $sessionId = 0;
	private $login;
	private $password;
	private $userId;
	private $logged = false;
	private $sessionStart = true;

	public $infMessage;
	

	
	
	// ======================== Class Construtor ======================== 		
	public function Tool_Session(){
		}

	
	
	
	/* =========================== Check Login Method ============================
	   description: Opens the form to login if the user is not logged.
	*/	
	public function checkLoginData($login,$password){

		if(isset($login) && isset($password)){
			$user = new Controller_System_User();		
			return $user->userExists($login,$password)== true ? true : false;
		}	
	}
	
	
	/* =========================== Request Credentials Method ============================
	   description: Opens the form to login if the user is not logged.
	*/
	public function requestCredentials($DATA = ""){
		if(isset($DATA["messageId"])){
			$messageId = $DATA["messageId"];
				if($messageId==2){
				parent::set("infMessage","<div class='alert alert-danger alert-dismissable'>
													<i class='fa fa-ban'></i>
													<b>Atenção!</b> Usuário ou senha incorretos. Por favor, tente novamente.
												</div>");
				}
				else if($messageId==3){
				parent::set("infMessage","<div class='alert alert-success alert-dismissable'>
																	<i class='fa fa-check'></i>
																	<b>Atenção!</b> Uma nova senha foi enviada para seu e-mail. 
																</div>");
				}
		}
			

		 parent::setTemplate("system/login.html");
		 parent::showTemplateNoChild();	
	}
	
	

	//Forgot My Password Method
	public function forgotMyPasswordForm($data){
		 parent::setTemplate("system/forgot_password.html");
		 parent::showTemplateNoChild();	
	}
	
	/* =========================== Login Method ============================
	   description: makes the user´s login.
	*/
	public function login($login,$password){
		 if(self::checkLoginData($login,$password)){
			 if($this->sessionStart && !isset($_SESSION)){
			 	
			      /* Define the time cache to private 'private' */
				  session_cache_limiter('private');
				  $cache_limiter = session_cache_limiter();
				  /* Define the cache time limit to 480 minutes equals to 8 hours */
				  session_cache_expire(2);
				  $cache_expire = session_cache_expire();
				  session_start();
				  $user = new Controller_System_User();
				  $user = $user->loadUser($login,$password);
				  $_SESSION["user_id"] = $user["user_id"];
				  $_SESSION["user_name"] = $user["user_name"];
				  $_SESSION["user_firstname"] = $user["user_firstname"];
				  $_SESSION["date_added"] = $user["date_added"];
				  if($user["user_image"]== null)
				  	$_SESSION["user_image"] = DIR_IMAGE."user/default/user.jpg";
				  else
				  $_SESSION["user_image"] = $user["user_image"];
				  $_SESSION["user_post"] = $user["user_post"];
				 
				 return true;
			}
			else
		  		return false;
		}
		 else
		 return false;
	}
	
	
	
	/* =========================== Logout Method ============================
	   description: makes the user logout.
	*/
	public function logout(){
		session_start();
		session_unset();
		session_destroy();
		ob_start();
		header("location:index.php");
		ob_end_flush(); 
		exit();
	}
	
	
	
	/* =========================== Is logged method ============================
	   description: checks if the session is started and returns true if is started.
	*/
	public function isLogged(){
		 
		if($this->sessionStart && !isset($_SESSION)) 
		{
			session_start();
		}
	}
	
	
	
	
	/* =========================== Is logged method ============================
	   description: checks if the session is started and returns true if is started.
	*/
	public function needLog(){
		 
		if(!isset($_SESSION)) 
		{
			return true;
		}
	}


	public static function getUserId(){
		return ($_SESSION["user_id"]);
	}

	public static function getUserName(){
		return ($_SESSION["user_firstname"]);
	}


	public function changeUserPassword($mail){
		$user = new Controller_System_User();
		$result = $user->changePasswordByMail($mail);
		return $result; 
	}

	public function sendNewPassword($mail){

		$email = new Tool_Mail($mail,"Nova senha de acesso E-DLD","","E-DLD");

		$result = self::changeUserPassword($mail);

		if($result != false) {
		$message = "

		 Olá! Você solicitou que uma nova senha fosse gerada e enviada para seu e-mail. Segue abaixo todas informações necessárias para fazer seu login no E-DLD. 

			 E-mail: ".$mail."
			 Senha: ".$result."
		";

		$email->set("message",$message);
		return $email->mail();
		}

	}
}
?>