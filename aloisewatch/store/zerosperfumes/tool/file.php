<?php
/* ===================== Tool File Class ======================== 
	@author: Bruno Lee
	@data: 2015-01-20
	@description: This class makes all the file´s management

*/

abstract class Tool_File{


//Method to check if dir exists
	public static function dirExists($dirName){
		return is_dir($dirName) ? true : false;
	}

//Method to create a directory
	public static function createDir($dirName){
		if(!self::dirExists($dirName))mkdir($dirName);
	}

//Method to delete all files in directory
	public static function delAllFile($dirName){
		$countDelFile = 0;
		if(self::dirExists($dirName)){
			$directory = dir($dirName);

			while($file = $directory->read()){
				if(($file != '.')&&($file != '..')){
					unlink($dirName.$file);
					$countDelFile++;
				}
			}
			$directory->close();
			if($countDelFile>0)return true; else return false;
		}
		else return false;
	}


	public function forceDownload($path){
		header("Content-Type: application/pdf");
		header("Cache-Control: no-cache, must-revalidate");
		header("Pragma: no-cache");
		header("Expires: 0");
    	readfile($path);
    	flush();
	}



//Method to write in file
	public static function saveInFile($fileName,$text,$initPoint){
		$writeType = !$initPoint ? "a+" : "r+";
			try{
				if(file_exists($fileName)){
					$file = fopen($fileName,$writeType);
					fwrite($file, $text);
					fclose($file);
				}
				else {
					try{
						if($file =	fopen($fileName,"w+"))fclose($file);
						else throw new Exception("Falha ao abrir arquivo de edição, contacte o T.I.");						
					}catch(Exception $error){
						return $error->getMessage();
					}
					self::saveInFile($fileName,$text,$initPoint);
					throw new Exception("Arquivo não encontrado ou inexistente", 1);
				}
					
			}
			catch(Exception $error){
				return $error->getMessage();
			}
			
		return true;
	}


//Method to read File
	public static function readFile($fileName){
		$text = "";

		try{
			if(file_exists($fileName)){
				$fileName = fopen($fileName,"r+");
				while(!feof($fileName)){
					$text .= fgets($fileName);
				}
				fclose($fileName);
			}
			else throw new Exception("Arquivo não encontrado ou inexistente", 1);
			
		}
		catch(Exception $error){
			return $error->getMessage();
		}
		return $text;
	}


//Method to rewrite the file
	public static function rewriteFile($fileName){
		$text = "";
		$cont=1;
		try{
			if(file_exists($fileName)){
					
					$file = fopen($fileName,"r");
					while(!feof($file)){
						$temp=fgets($file);
						$text.= str_replace("$", $cont, $temp);
						$cont++;
					}


					fclose($file);
					unlink($fileName);
					$file = fopen($fileName,"w+");
					fwrite($file,$text);
					fclose($file);


				}
			else throw new Exception("Arquivo não encontrado ou inexistente", 1);
		}
		catch(Exception $error){
			return $error->getMessage();
		}
		return true;
	}



//method to delete a line from file
	public static function deleteLineFromFile($fileName,$lineNumber){
		try{
			if(file_exists($fileName)){
				$file = fopen($fileName,"r");
				$text = "";

				while(!feof($file)){


					$temp = fgets($file);
					if(self::searchChar($temp,"(".$lineNumber.")"))$text.="";
					else $text.=$temp;


				}
				fclose($file);
				unlink($fileName);
				if(self::saveInFile($fileName,$text,false))return true;

			}
			else throw new Exception("Arquivo não encontrado ou não existente",1);
		}
		catch(Exception $error){
			return $error->getMessage();
		}

		return true;

	}




//method to search the id, if find the id return true 
	public static function searchChar($string,$char){
		return strpos($string,$char);
	}


//method to delete file
	public static function delFile($fileName){
		try{
			if(file_exists($fileName)){
				return unlink($fileName);
			}
			else throw new Exception("Arquivo não encontrado ou não existente",1);
		}
		catch(Exception $error){
			return $error->getMessage();
		}
	}




	//method to back a string between special chars
	public static function getStringBetweenSpecialChars($fileName,$specialChar,$lineNumber){
		try{
			if(file_exists($fileName)){
				$file = fopen($fileName,"r");
				$result = array();
				$i = 1;
				while(!feof($file)){
					if($i==$lineNumber){
						$string = fgets($file);
						if(strcmp($specialChar,$string)){
							$temp = explode($specialChar,$string);
							if(isset($temp[1]))$result[] = $temp[1];
							if(isset($temp[2]) && isset($temp[3]))$result[] = $temp[2];
						}
					}$temp = fgets($file);
					$i++;
				}
				return $result;
			}
			else throw new Exception("Arquivo não encontrado ou não existente",1);
		}
		catch(Exception $error){
			return $error->getMessage();
		}

	}




	//method to return the lines quantity of file
	public static function linesQuantity($fileName){
		$cont = 0;
		try{
			if(file_exists($fileName)){
			
			 $file = fopen($fileName,"r");
			 while(!feof($file)){
			 	$temp = fgets($file);
			 	$cont++;
			 }
			 fclose($file);
			}else throw new Exception("Arquivo não encontrado ou não existente",1);
		}
		catch(Exception $error){
			return $error->getMessage();
		}
		 return $cont;
	}



	//method to generate a newNameToFile
	public static function newNameToFile($lenName){
		return substr(md5(uniqid(time())), 0, $lenName);
	}


	//method to check if file exists
	public static function fileExists($fileName){
		return file_exists($fileName) ? true : false;
	}


}

?>