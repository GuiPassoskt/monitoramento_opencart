var app = app || {};

app.controller('headstoreCtrl', function($scope,$http,$timeout,textToSpeech,notify){

	$scope.title = {
						lj1:"Raquetes Usadas",
						lj2:"Oficina do tenista",
						lj3:"Head Store",
						lj4:"Head Brasil",
						lj5:"DLD Lojista"
				};


		/*======================================== Head Store ===================================*/

        $http({
            method: 'GET',
            url: util.service.hsorderday,
        }).success(function (response) {
             var hsorder = response;
             if((hsorder.total == null)||(hsorder.total == 0)){
                hsorder.total = '0.00';
            }
             $scope.hsorderdayFormat = parseInt(hsorder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.hslostorderday,
        }).success(function (response) {
             var hslostorder = response;
             if((hslostorder.total == null)||(hslostorder.total == 0)){
                hslostorder.total = '0.00';
            }
             $scope.hslostorderdayFormat = parseInt(hslostorder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.hsordermonth,
        }).success(function (response) {
            var hsorder = response;
            if((hsorder.total == null)||(hsorder.total == 0)){
            	hsorder.total = '0.00';
            }
            $scope.hsorderFormat = parseInt(hsorder.total);
            $scope.pedidohs = parseInt(HeadStore.conf_order);
            if($scope.hsorderFormat >= $scope.pedidohs){ //Função Correta de Verificação
            	setTimeout(hsVoxorder(),30000);
            	notify({ 
             				message:'Loja Head Store supera expectativas de pedidos!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

        $http({
            method: 'GET',
            url: util.service.hslostordermonth,
        }).success(function (response) {
             var hslostordermonth = response;
             if((hslostordermonth.total == null)||(hslostordermonth.total == 0)){
                hslostordermonth.total = '0.00';
            }
             $scope.hslostordermonthFormat = parseInt(hslostordermonth.total);
            console.log(response);       
        });

         $http({
            method: 'GET',
            url: util.service.hssoldday,
        }).success(function (response) {
            var hssoldday = response;
            if((hssoldday.total == null)||(hssoldday.total == 0)){
                hssoldday.total = '0.00';
            }
            $scope.hssolddayFormat = parseFloat(hssoldday.total);
            $scope.hssolddayBR = convert($scope.hssolddayFormat);   
        });

        $http({
            method: 'GET',
            url: util.service.hssoldmonth,
        }).success(function (response) {
            var hssold = response;
            if((hssold.total == null)||(hssold.total == 0)){
            	hssold.total = '0.00';
            }
            $scope.hssoldFormat = parseFloat(hssold.total);
            $scope.vendahs = parseFloat(HeadStore.conf_sold);
            $scope.hssoldBR = convert($scope.hssoldFormat);
            if($scope.hssoldFormat >= $scope.vendahs){ //Função Correta de Verificação
            	setTimeout(hsVoxsold(),30000);
            	notify({ 
             				message:'Loja Head Store supera expectativas de vendas!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

        $http({
            method: 'GET',
            url: util.service.hsaccessday,
        }).success(function (response) {
             var hsaccess = response;
             if((hsaccess.total == null)||(hsaccess.total == 0)){
                hsaccess.total = '0.00';
            }
             $scope.hsaccessdayFormat = parseInt(hsaccess.total);
            console.log(response);   
        });

        $http({
            method: 'GET',
            url: util.service.hsaccessmonth,
        }).success(function (response) {
            var hsaccess = response;
            if((hsaccess.total == null)||(hsaccess.total == 0)){
            	hsaccess.total = '0.00';
            }
            $scope.hsaccessFormat = parseInt(hsaccess.total);
            $scope.acessohs = parseInt(HeadStore.conf_access);
            if($scope.hsaccessFormat >= $scope.acessohs){ //Função Correta de Verificação
            	setTimeout(hsVoxaccess(),30500);
            	notify({ 
             				message:'Loja Head Store supera expectativas de acessos!',
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
            url: util.service.hsticket,
        }).success(function (response) {
             var hsticketmedio = response;
             if((hsticketmedio.total == null)||(hsticketmedio.total == 0)){
                hsticketmedio.total = '0.00';
            }
             $scope.hsticketmedioFormat = parseInt(hsticketmedio.total);
             $scope.hsticketBR = convert($scope.hsticketmedioFormat);
            console.log(response);     
        });

        $http({
            method: 'GET',
            url: util.service.hstaxconversion,
        }).success(function (response) {
             var hstaxaconversao = response;
             if((hstaxaconversao.total == null)||(hstaxaconversao.total == 0)){
                hstaxaconversao.total = '0.00';
            }
             $scope.hstaxaconversaoFormat = hstaxaconversao.total;
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

		/* Head Store */

		function hsVoxorder(){
            var msg = "Head Store supera expectativas de pedidos ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
  
          function hsVoxsold(){
            var msg = "Head Store supera expectativas de vendas ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
  
          function hsVoxaccess(){
            var msg = "Head Store supera expectativas de acessos ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
});