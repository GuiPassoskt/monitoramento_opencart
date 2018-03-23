<?php
/* ===================== Tool Date Class ======================== 
	@author: Bruno Lee
	@data: 2014-08-11
	@description: This class makes all the date´s management

*/

class Tool_Date{
	
	/* ===================== Convert Data to Brazilian Format ======================== 
	@description: convert the date to brazilian format
	*/
	public static function convertDateFormatToBrazilian($date){
		$temp = explode("-",$date);
		return $temp[2].'/'.$temp[1].'/'.$temp[0];
		}
	

	/* ===================== Convert Data to Brazilian Format Without Year======================== 
	@description: convert the date to brazilian format without the year field
	*/
	public static function convertDateFormatToBrazilianWithoutYear($date){
		$temp = explode("-",$date);
		return $temp[2].'/'.$temp[1];
	}	
	
	public static function convertDateFormatToBrazilianWithTime($date){
		$temp = explode(" ",$date);
		$aux = explode("-",$temp[0]);
		return $aux[2].'/'.$aux[1].'/'.$aux[0].' '.'-'.' '.$temp[1];
	}
	/* ===================== Convert date to yyyy-mm-dd ======================== 
	@description: convert the date to american format in yyyy-mm-dd 
	*/
	public static function convertDateToYearMonthDay($date){
		$temp = explode("/",$date);
		if(isset($temp[2])&&(isset($temp[0]))&&(isset($temp[1])))
		return $temp[2].'-'.$temp[0].'-'.$temp[1];
		}
		

	public static function getDateWithoutTime($date){
		$temp = explode(" ",$date);
		return $temp[0];
		}

	
	/* ===================== Convert date mm/dd/yyyy to yyyy-mm-dd ======================== 
	@description: convert the date to american format from mm/dd/yyyy to yyyy-mm-dd 
	*/
	public static function convertDateMmDdYyyyToYyyyMmDd($date){
		$temp = explode("/",$date);
		if(isset($temp[2])&&(isset($temp[0]))&&(isset($temp[1])))
		return $temp[2].'-'.$temp[0].'-'.$temp[1];
		}
		
		
	/* ===================== Convert date mm/dd/yyyy to dd/mm/yyyy ======================== 
	@description: convert the date to american format from mm/dd/yyyy to dd/mm/yyyy 
	*/
	public static function convertDateMmDdYyyyToDdMmYyyy($date){
		$temp = explode("/",$date);
		if(isset($temp[2])&&(isset($temp[0]))&&(isset($temp[1])))
		return $temp[1].'/'.$temp[0].'/'.$temp[2];
		}	
		
		
	/* ===================== Convert date yyyy/mm/dd to dd/mm/yyyy ======================== 
	@description: convert the date to american format from yyyy/mm/dd to dd/mm/yyyy 
	*/
	public static function convertDateYyyyMmDd($date){
		$temp = explode("/",$date);
		if(isset($temp[2])&&(isset($temp[0]))&&(isset($temp[1])))
		return $temp[2].'/'.$temp[1].'/'.$temp[0];	
		}	
    
   
   	/* ===================== Convert date to brazilian format - time incluse ======================== 
	@description: convert date to brazilian format and takes out the time 
	*/
	public static function convertDateBrazilianFormatTime($date){
		$temp = explode("-",$date);
	  if(isset($temp[2]))
      {
        $temp2 = explode(" ",$temp[2]);
        $day =  $temp2[0];
        if(isset($temp2[0])) $day = $temp2[0];
        else $day = $temp[2];
        return $day."/".$temp[1]."/".$temp[0];
      }
       else return null;
    
		}		
		
		
	/* ===================== Set the Date Range ======================== 
	@description: recieves the range date and separates the dates in two positions in vector 
	*/
	public static function setDateRange($range){
		$temp = explode("-",$range);
		return $temp;
		}
		
		
	/* ===================== Period Range Method ======================== 
	@description: return the data of a range
	*/
	public static function periodRange($date){
		$temp = explode(" - ",$date);
		
		if(isset($temp[0]))$startDate = self::convertDateToYearMonthDay($temp[0]);
		if(isset($temp[1])){
			$finalDate = self::convertDateToYearMonthDay($temp[1]); 
				$dateRange = array(
				
							"startDate"	=>	$startDate,
							
							"finalDate"	=>	$finalDate
							);
							
				return $dateRange;
			}
		}
		

	public static function getYear($value = ""){
			if($value!=""){
				$temp = explode("-",$value);
				return $temp[0];
			}
		}	
		
	
	public static function getMonth($value = ""){
		if($value!=""){
			$temp = explode("-",$value);
			return $temp[1];
		}
	}
	

	public static function getDay($value = ""){
		if($value!=""){
			$temp = explode("-",$value);
			return $temp[2];
		}
	}	


	public static function translateDay($day){
		$day = strtolower($day);
		switch($day){
			case "mon":
			$day =  "Seg";
			break;

			case "tue":
			$day =  "Ter";
			break;

			case "wed":
			$day =  "Qua";
			break;

			case "thu":
			$day =  "Qui";
			break;

			case "fri":
			$day =  "Sex";
			break;

			case "sat":
			$day =  "Sab";
			break;

			case "sun":
			$day =  "Dom";
			break;

		}
		return $day;
	}

	public static function translateMonthNumberToText($month){
		switch($month){
			case 1:
			$month = "Janeiro";
			break;

			case 2:
			$month = "Fevereiro";
			break;

			case 3:
			$month = "Março";
			break;

			case 4:
			$month = "Abril";
			break;

			case 5:
			$month = "Maio";
			break;

			case 6:
			$month = "Junho";
			break;

			case 7:
			$month = "Julho";
			break;

			case 8:
			$month = "Agosto";
			break;

			case 9:
			$month = "Setembro";
			break;

			case 10:
			$month = "Outubro";
			break;

			case 11:
			$month = "Novembro";
			break;

			case 12:
			$month = "Dezembro";
			break;
		}
		return $month;
	}
		
	public static function translateMonth($month){
		$month = strtolower($month);
		switch($month){
			case "jan":
			$month =  "01";
			break;

			case "feb":
			$month =  "02";
			break;

			case "mar":
			$month =  "03";
			break;

			case "apr":
			$month =  "04";
			break;			

			case "may":
			$month =  "05";
			break;

			case "jun":
			$month =  "06";
			break;

			case "jul":
			$month =  "07";
			break;

			case "aug":
			$month =  "08";
			break;

			case "sep":
			$month =  "09";
			break;

			case "oct":
			$month =  "10";
			break;

			case "nov":
			$month =  "11";
			break;	

			case "dec":
			$month =  "12";
			break;					
		}
		return $month;
	}


	public static function timeToSec($time){
		$str_time = $time;

		$str_time = preg_replace("/^([\d]{1,2})\:([\d]{2})$/", "00:$1:$2", $str_time);

		sscanf($str_time, "%d:%d:%d", $hours, $minutes, $seconds);

		return $hours * 3600 + $minutes * 60 + $seconds;
	}	



	public static function secToTime($sec){
		return gmdate("H:i:s", $sec);
	}



	public static function secToTimeDiff($sec){
		$init = $sec;
		$hours = floor($init / 3600);
		$minutes = floor(($init / 60) % 60);
		$seconds = $init % 60;
		if($minutes < 10)$minutes = "0".$minutes;
		if($seconds < 10)$seconds = "0".$seconds;
		return $hours.":".$minutes.":".$seconds;
	}



	public static function houToSec($time){
		return $time * 3600 ;
	}


	public static function getCurrentDayOfTheWeek(){
		return date("D");
	}


	public static function getCurrentDay(){
		return date("Y-m-d");
	}	
	
	public static function convertDatetoDays($date){

				return strtotime($date);
				
	}
	
	public static function differenceBetweenDates($initialDate,$finalDate){
			

			$diference =  $finalDate - $initialDate;
			return floor($diference / (60 * 60 * 24));
	}

	public static function returnsCorrectLastDate($day,$month,$year){
		return !checkdate($month,$day,$year) ? self::returnsCorrectLastDate(($day-1),$month,$year) : $year."-".$month."-".$day;
	}


}

?>