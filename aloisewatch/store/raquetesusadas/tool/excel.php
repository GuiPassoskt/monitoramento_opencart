<?php
/* ===================== Tool Excel Class ======================== 
	@author: Bruno Lee
	@data: 2015-01-14
	@description: This class makes the excel export
	@summary:
		MET001:CONSTRUCT -> construct from class
		MET002:exportToExcel -> method to export to excel: recieves que query pointer
		MET003:createsTableHeader -> creates the table header
		MET004:arrayResult -> creates an array with the query results
		MET005:createsHeaders -> creates the file header, set the last modification date, set to file do not keep in cache and forces download.
*/

class Tool_Excel{
	
	private $temp;
	private $aux;
	private $table;
	private $file;

	//MET002:CONSTRUCT
	public function Tool_Excel(){

		$this->file = "export.xls";
	}




	//MET003:createsTableHeader
	public function createsTableHeader($data){
		//first: identifies the array size 
		$arraySize = count($data);
		//secound: do a loop creating a new tableHeader;
		$tableHeader = "<table border='1px'><tr>";
		for($count = 0; $count< $arraySize; $count++)if(isset($data[$count]))$tableHeader.= "<td>".$data[$count]."</td>";
		//third: closes the table;
		$tableHeader.="</tr>";
		//fourth: finally returns the tableHeader array;
		return $tableHeader;
	}



	//MET004:arrayResult
	public function arrayResult($query,$col = ""){
		$i = 1;
		$x = mysql_num_rows($query);
		$this->temp = 0;
		//identifies the array size;
		$arraySize = count($col);
		$this->table.= "<tr>";
		if($x >0){
			while($row = mysql_fetch_array($query))	{

				while($this->temp < $arraySize){
					 if(isset($col[$this->temp])){
					 	$this->aux = $row[$col[$this->temp]];
					 	$this->table.="<td>".$this->aux."</td>" ;
					 	$this->temp++;
					 }
				}
				if($this->temp == $arraySize){
					   $this->temp=0;
					   $this->table.="</tr>";
				}

				if($i < $x) $this->table.="<tr>";
				$i++;	
				}
			$this->table .= "</table>";
			return $this->table;	
			}
		else return false;	
		
	}




	//MET005:createsHeaders
	public function createsHeaders(){
		    header ("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
		    header ("Last-Modified: " . gmdate("D,d M YH:i:s") . " GMT");
		    header ("Cache-Control: no-cache, must-revalidate");
		    header ("Pragma: no-cache");
		    header ("Content-type: application/x-msexcel");
		    header ("Content-Disposition: attachment; filename={$this->file}" );
		    header ("Content-Description: PHP Generated Data" );
	}




	//MET006:excelExport
	public function excelExport($fileName = "",$query,$tableCols){
		if($fileName!="")$this->file = $fileName;
		if($query!=null && isset($tableCols)){
			$this->table = self::createsTableHeader($tableCols);
			$this->table = self::arrayResult($query,$tableCols);
			self::createsHeaders();
			echo $this->table;
		}
		else return false;

	}


}

?>