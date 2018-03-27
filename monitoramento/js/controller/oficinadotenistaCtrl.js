var app = app || {};

app.controller('oficinadotenistaCtrl', function($scope,$http,$timeout,textToSpeech,notify){

	$scope.title = {
						lj1:"Raquetes Usadas",
						lj2:"Oficina do tenista",
						lj3:"Head Store",
						lj4:"Head Brasil",
						lj5:"DLD Lojista"
				};


		/*===================================== Oficina do tenista ==================================*/

        $http({
            method: 'GET',
            url: util.service.otorderday,
        }).success(function (response) {
             var otorder = response;
             if((otorder.total == null)||(otorder.total == 0)){
                otorder.total = '0.00';
            }
             $scope.otorderdayFormat = parseInt(otorder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.otlostorderday,
        }).success(function (response) {
             var otlostorder = response;
             if((otlostorder.total == null)||(otlostorder.total == 0)){
                otlostorder.total = '0.00';
            }
             $scope.otlostorderdayFormat = parseInt(otlostorder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.otordermonth,
        }).success(function (response) {
            var otorder = response;
            if((otorder.total == null)||(otorder.total == 0)){
            	otorder.total = '0.00';
            }
            $scope.otorderFormat = parseInt(otorder.total);
            $scope.pedidoot = parseInt(OficinadoTenista.conf_order);
            if($scope.otorderFormat >= $scope.pedidoot){ //Função Correta de Verificação
            	otVoxorder();
            	notify({ 
             				message:'Loja Oficina do Tenista supera expectativas de pedidos!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

        $http({
            method: 'GET',
            url: util.service.otlostordermonth,
        }).success(function (response) {
             var otlostordermonth = response;
             if((otlostordermonth.total == null)||(otlostordermonth.total == 0)){
                otlostordermonth.total = '0.00';
            }
             $scope.otlostordermonthFormat = parseInt(otlostordermonth.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.otsoldmonth,
        }).success(function (response) {
            var otsold = response;
            if((otsold.total == null)||(otsold.total == 0)){
            	otsold.total = '0.00';
            }
            $scope.otsoldFormat = parseFloat(otsold.total);
            $scope.vendaot = parseFloat(OficinadoTenista.conf_sold);
            $scope.otsoldBR = convert($scope.otsoldFormat);
            if($scope.otsoldFormat >= $scope.vendaot){ //Função Correta de Verificação
            	otVoxsold();
            	notify({ 
             				message:'Loja Oficina do Tenista supera expectativas de vendas!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });


        $http({
            method: 'GET',
            url: util.service.otsoldday,
        }).success(function (response) {
            var otsoldday = response;
            if((otsoldday.total == null)||(otsoldday.total == 0)){
            	otsoldday.total = '0.00';
            }
            $scope.otsolddayFormat = parseFloat(otsoldday.total);
            $scope.otsolddayBR = convert($scope.otsolddayFormat);   
        });

        $http({
            method: 'GET',
            url: util.service.otaccessday,
        }).success(function (response) {
             var otaccess = response;
             if((otaccess.total == null)||(otaccess.total == 0)){
                otaccess.total = '0.00';
            }
             $scope.otaccessdayFormat = parseInt(otaccess.total);
            console.log(response);   
        });

        $http({
            method: 'GET',
            url: util.service.otaccessmonth,
        }).success(function (response) {
            var otaccess = response;
            if((otaccess.total == null)||(otaccess.total == 0)){
            	otaccess.total = '0.00';
            }
            $scope.otaccessFormat = parseInt(otaccess.total);
            $scope.acessoot = parseInt(OficinadoTenista.conf_access);
            if($scope.otaccessFormat >= $scope.acessoot){ //Função Correta de Verificação
            	setTimeout(otVoxaccess(),30000);
            	notify({ 
             				message:'Loja Oficina do Tenista supera expectativas de acessos!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

        // Ticket Medio
        $http({
            method: 'GET',
            url: util.service.otticket,
        }).success(function (response) {
             var otticketmedio = response;
             if((otticketmedio.total == null)||(otticketmedio.total == 0)){
                otticketmedio.total = '0.00';
            }
             $scope.otticketmedioFormat = parseInt(otticketmedio.total);
             $scope.otticketBR = convert($scope.otticketmedioFormat);
            console.log(response);     
        });

        $http({
            method: 'GET',
            url: util.service.ottaxconversion,
        }).success(function (response) {
             var ottaxaconversao = response;
             if((ottaxaconversao.total == null)||(ottaxaconversao.total == 0)){
                ottaxaconversao.total = '0.00';
            }
             $scope.ottaxaconversaoFormat = ottaxaconversao.total;
            console.log(response);
            
           
        });


        /*======================================== Configuração Stores ===============================*/
        $http({
            method: 'GET',
            url: util.config.store,
        }).success(function (response) {
            var storeConf = response;
            /* Separate data store */
            RaquetesUsadas = storeConf[0];
            OficinadoTenista = storeConf[1];
            HeadStore = storeConf[2];
            HeadBrasil = storeConf[3];
            DLD =storeConf[4];
           
            B = JSON.stringify(storeConf);
            console.log(response);
           
        });

        	

        var RaquetesUsadas = [];
        var OficinadoTenista = [];
        var HeadStore = [];
        var HeadBrasil = [];
        var DLD = [];

        var B; // dados em  json

        function convert(parm){
        	parm = ((Math.round(parm*100))/100);
        	parm = parm.toString().replace('.',',');
        	return parm
        }
     	

/*************************************** Funções de Voz *****************************************/

		/* Oficina do Tenista  */

		function otVoxorder(){
            var msg = "Oficina do Tenista supera expectativas de pedidos ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
  
          function otVoxsold(){
            var msg = "Oficina do Tenista supera expectativas de vendas ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
  
          function otVoxaccess(){
            var msg = "Oficina do Tenista supera expectativas de acessos ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
});