/* Pega a data atual */
		hoje = new Date();
		var Y = hoje.getFullYear();
		var m = hoje.getMonth()+1;
		var d = hoje.getDate();
		var dataNow = (Y+'-'+ m +'-'+ d);
		console.log(dataNow);

		/* Pega a data do final do mês */
		var dd = new Date(Y, m, 0);
		var dataFinal = (Y+'-'+ m + '-' +dd.getDate());
		console.log(dataFinal);

		/* Primeiro dia do mês */
		var novadata = (Y+'-'+ m + '-' + (dd.getDate()-1));
		console.log(novadata);

		var iniciomes = (Y+'-'+ m + '-' + dd.getDate() - ((dd.getDate())-1));
		console.log(iniciomes);

		if(dataNow == dataFinal){

				$.ajax({
	            method: "post",
	            url: "https://localhost/oficinadotenista/reports/?class=Controller_System_Main&method=online_month",
	            data: data,
	        	success: function(data){
	            alert(data);
	        	}



		    });
			console.log("O mês  acabou");
		}else{
			console.log("voce ainda esta nesse mês");
		}