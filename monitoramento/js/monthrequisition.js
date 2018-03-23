/***********************************************
*	Company: Aloise Business				   *
*	Author: Guilherme Moreira				   *
*	Description: Requisição de Acessos Mensais *	
*	Date: 2017-02-03						   *
************************************************/
setInterval(function data(){
		
		x = new Date();
		var requisicao = x.getDate();
		console.log(requisicao);
		if(requisicao == 1){

			   $.get("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=online_month", function(resultado){
		      	console.log(resultado);
		       });


			   $.get("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=delete_online_month", function(resultado){
		      	console.log(resultado);
		       });
			
		}else{
			console.log("fail");
		}

	},150000);

setInterval(function rudata(){
		
		x = new Date();
		var requisicao = x.getDate();
		console.log(requisicao);
		if(requisicao == 1){

			   $.get("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=online_month", function(resultado){
		      	console.log(resultado);
		       });


			   $.get("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=delete_online_month", function(resultado){
		      	console.log(resultado);
		       });
			
		}else{
			console.log("fail");
		}

	},150000);

setInterval(function hsdata(){
		
		x = new Date();
		var requisicao = x.getDate();
		console.log(requisicao);
		if(requisicao == 1){

			   $.get("https://www.headstore.com.br/reports/?class=Controller_System_Main&method=online_month", function(resultado){
		      	console.log(resultado);
		       });


			   $.get("https://www.headstore.com.br/reports/?class=Controller_System_Main&method=delete_online_month", function(resultado){
		      	console.log(resultado);
		       });
			
		}else{
			console.log("fail");
		}

	},150000);

setInterval(function hsdata(){
		
		x = new Date();
		var requisicao = x.getDate();
		console.log(requisicao);
		if(requisicao == 1){

			   $.get("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=online_month", function(resultado){
		      	console.log(resultado);
		       });


			   $.get("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=delete_online_month", function(resultado){
		      	console.log(resultado);
		       });
			
		}else{
			console.log("fail");
		}

	},150000);

setInterval(function dlddata(){
		
		x = new Date();
		var requisicao = x.getDate();
		console.log(requisicao);
		if(requisicao == 1){

			   $.get("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=online_month", function(resultado){
		      	console.log(resultado);
		       });


			   $.get("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=delete_online_month", function(resultado){
		      	console.log(resultado);
		       });
			
		}else{
			console.log("fail");
		}

	},150000);
	




