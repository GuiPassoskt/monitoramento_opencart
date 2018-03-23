<?php
/* ===================== Tool Number Class ======================== 
	@author: Bruno Lee
	@data: 2014-08-11
	@description: This class makes all the number´s management

*/

abstract class Tool_Number{
	
	/* ===================== Convert currency to Brazilian Format Method ======================== 
	@description: convert the currency to brazilian format,return the real simbol R$
	*/
	public static function convertCurrencyToBrazilianFormatReal($currency){
		return "R$ ".number_format($currency,2,',','.');
		}
	
	
	//searchPostcode: recieves the postcode and search the results
	public static function searchPostcode($POSTCODE){
		$result = @file_get_contents("http://republicavirtual.com.br/web_cep.php?cep=".urlencode($POSTCODE)."&formato=query_string");
		if(!$result)$result = "&resultado=0&resultado_txt=erro+ao+buscar+cep";
		parse_str($result,$return);
		return $return;
	}	
		
	

	//postcode: recieves the postcode and validates	
	public static function postcode($POSTCODE){
		$result = null;

		if(is_array($POSTCODE) == true){

			$inPostcode = self::searchPostcode($POSTCODE[0]);
			$fnPostcode = self::searchPostcode($POSTCODE[1]);
			if(isset($inPostcode["cidade"])&& isset($fnPostcode["cidade"])){
				try{
					if(($inPostcode["cidade"] == $fnPostcode["cidade"])&&($inPostcode["cidade"]!="" && $fnPostcode["cidade"]!=""))return $inPostcode;
					else throw new Exception("Os ceps digitados não correspondem a mesma cidade ou um deles é inválido.");
				}
				catch(Exception $error){
					return $error->getMessage();
				}
			}
			else return false;
			
		}
		else{
			try{
				$result = self::searchPostcode($POSTCODE);
				if($result["resultado"])return $result;
				else throw new Exception("O cep digitado é inválido ou não foi encontrado.");
			}
			catch(Exception $error){
				return $error->getMessage();
			}
			
		}


	}
	














		
}

?>