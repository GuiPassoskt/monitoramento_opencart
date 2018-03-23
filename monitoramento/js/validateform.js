var CheckMaximo = 1;

function blockru() {
var Marcados = 1;
var objCheck = document.forms['form1'].elements['loja'];

//Percorrendo os checks para ver quantos foram selecionados:
for (var iLoop = 0; iLoop<objCheck.length; iLoop++) {
	//Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
	if (Marcados <= CheckMaximo) {
		if (objCheck[iLoop].checked) {
			Marcados++;
		}


			//Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
			for (var i=0; i<objCheck.length; i++) {
				objCheck[i].disabled = false;
			}	
	//Caso contrário, desabilitar o checkbox;
	//Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
	} else {
		for (var i=0; i<objCheck.length; i++) {
			if(objCheck[i].checked == false) {
				objCheck[i].disabled = true;
			}	
		}
	}
}
}

function blockot() {
var Marcados = 1;
var objCheck = document.forms['form1'].elements['loja'];

//Percorrendo os checks para ver quantos foram selecionados:
for (var iLoop = 0; iLoop<objCheck.length; iLoop++) {
	//Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
	if (Marcados <= CheckMaximo) {
		if (objCheck[iLoop].checked) {
			Marcados++;
		}


			//Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
			for (var i=0; i<objCheck.length; i++) {
				objCheck[i].disabled = false;
			}	
	//Caso contrário, desabilitar o checkbox;
	//Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
	} else {
		for (var i=0; i<objCheck.length; i++) {
			if(objCheck[i].checked == false) {
				objCheck[i].disabled = true;
			}	
		}
	}
}
}

function blockhs() {
var Marcados = 1;
var objCheck = document.forms['form1'].elements['loja'];

//Percorrendo os checks para ver quantos foram selecionados:
for (var iLoop = 0; iLoop<objCheck.length; iLoop++) {
	//Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
	if (Marcados <= CheckMaximo) {
		if (objCheck[iLoop].checked) {
			Marcados++;
		}


			//Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
			for (var i=0; i<objCheck.length; i++) {
				objCheck[i].disabled = false;
			}	
	//Caso contrário, desabilitar o checkbox;
	//Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
	} else {
		for (var i=0; i<objCheck.length; i++) {
			if(objCheck[i].checked == false) {
				objCheck[i].disabled = true;
			}	
		}
	}
}
}

function blockhb() {
var Marcados = 1;
var objCheck = document.forms['form1'].elements['loja'];

//Percorrendo os checks para ver quantos foram selecionados:
for (var iLoop = 0; iLoop<objCheck.length; iLoop++) {
	//Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
	if (Marcados <= CheckMaximo) {
		if (objCheck[iLoop].checked) {
			Marcados++;
		}


			//Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
			for (var i=0; i<objCheck.length; i++) {
				objCheck[i].disabled = false;
			}	
	//Caso contrário, desabilitar o checkbox;
	//Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
	} else {
		for (var i=0; i<objCheck.length; i++) {
			if(objCheck[i].checked == false) {
				objCheck[i].disabled = true;
			}	
		}
	}
}
}

function blockdld() {
var Marcados = 1;
var objCheck = document.forms['form1'].elements['loja'];

//Percorrendo os checks para ver quantos foram selecionados:
for (var iLoop = 0; iLoop<objCheck.length; iLoop++) {
	//Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
	if (Marcados <= CheckMaximo) {
		if (objCheck[iLoop].checked) {
			Marcados++;
		}


			//Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
			for (var i=0; i<objCheck.length; i++) {
				objCheck[i].disabled = false;
			}	
	//Caso contrário, desabilitar o checkbox;
	//Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
	} else {
		for (var i=0; i<objCheck.length; i++) {
			if(objCheck[i].checked == false) {
				objCheck[i].disabled = true;
			}	
		}
	}
}
}

		function validaform(){
			if(document.getElementById("pedidos").value < 1){
				bootbox.alert("Por Favor, preencha os pedidos corretamente!");
			document.getElementById("pedidos").focus();
			return false
			}
			if(document.getElementById("vendas").value < 1){
				bootbox.alert("Por Favor, preencha as vendas corretamente!");
			document.getElementById("vendas").focus();
			return false
			}
			if(document.getElementById("acessos").value < 1){
				bootbox.alert("Por Favor, preencha os acessos corretamente!");
			document.getElementById("acessos").focus();
			return false
			}
			  
		}
