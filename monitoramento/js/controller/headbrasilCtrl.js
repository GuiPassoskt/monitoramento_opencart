var app = app || {};

app.controller('headbrasilCtrl', function($scope,$http,$timeout,textToSpeech,notify){

	$scope.title = {
						lj1:"Raquetes Usadas",
						lj2:"Oficina do tenista",
						lj3:"Head Store",
						lj4:"Head Brasil",
						lj5:"DLD Lojista"
				};


		/*========================================= Head Brasil =====================================*/

        $http({
            method: 'GET',
            url: util.service.hborderday,
        }).success(function (response) {
             var hborder = response;
             if((hborder.total == null)||(hborder.total == 0)){
                hborder.total = '0.00';
            }
             $scope.hborderdayFormat = parseInt(hborder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.hblostorderday,
        }).success(function (response) {
             var hblostorder = response;
             if((hblostorder.total == null)||(hblostorder.total == 0)){
                hblostorder.total = '0.00';
            }
             $scope.hblostorderdayFormat = parseInt(hblostorder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.hbordermonth,
        }).success(function (response) {
            var hborder = response;
            if((hborder.total == null)||(hborder.total == 0)){
            	hborder.total = '0.00';
            }
            $scope.hborderFormat = parseInt(hborder.total);
            $scope.pedidohb = parseInt(HeadBrasil.conf_order);
            if($scope.hborderFormat >= $scope.pedidohb){ //Função Correta de Verificação
            	hbVoxorder();
            	notify({ 
             				message:'Loja Head Brasil supera expectativas de pedidos!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

         $http({
            method: 'GET',
            url: util.service.hblostordermonth,
        }).success(function (response) {
             var hblostordermonth = response;
             if((hblostordermonth.total == null)||(hblostordermonth.total == 0)){
                hblostordermonth.total = '0.00';
            }
             $scope.hblostordermonthFormat = parseInt(hblostordermonth.total);
            console.log(response);       
        });

        $http({
            method: 'GET',
            url: util.service.hbsoldmonth,
        }).success(function (response) {
            var hbsold = response;
            if((hbsold.total == null)||(hbsold.total == 0)){
            	hbsold.total = '0.00';
            }
            $scope.hbsoldFormat = parseFloat(hbsold.total);
            $scope.vendahb = parseFloat(HeadBrasil.conf_sold);
            $scope.hbsoldBR = convert($scope.hbsoldFormat);
            if($scope.hbsoldFormat >= $scope.vendahb){ //Função Correta de Verificação
            	hbVoxsold();
            	notify({ 
             				message:'Loja Head Brasil supera expectativas de vendas!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

        $http({
            method: 'GET',
            url: util.service.hbsoldday,
        }).success(function (response) {
            var hbsoldday = response;
            if((hbsoldday.total == null)||(hbsoldday.total == 0)){
            	hbsoldday.total = '0.00';
            }
            $scope.hbsolddayFormat = parseFloat(hbsoldday.total);
            $scope.hbsolddayBR = convert($scope.hbsolddayFormat);   
        });

        $http({
            method: 'GET',
            url: util.service.hbaccessday,
        }).success(function (response) {
             var hbaccess = response;
             if((hbaccess.total == null)||(hbaccess.total == 0)){
                hbaccess.total = '0.00';
            }
             $scope.hbaccessdayFormat = parseInt(hbaccess.total);
            console.log(response);   
        });

        $http({
            method: 'GET',
            url: util.service.hbaccessmonth,
        }).success(function (response) {
            var hbaccess = response;
            if((hbaccess.total == null)||(hbaccess.total == 0)){
            	hbaccess.total = '0.00';
            }
            $scope.hbaccessFormat = parseInt(hbaccess.total);
            $scope.acessohb = parseInt(HeadBrasil.conf_access);
            if($scope.hbaccessFormat >= $scope.acessohb){ //Função Correta de Verificação
            	hbVoxaccess();
            	notify({ 
             				message:'Loja Head Brasil supera expectativas de acessos!',
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
            url: util.service.hbticket,
        }).success(function (response) {
             var hbticketmedio = response;
             if((hbticketmedio.total == null)||(hbticketmedio.total == 0)){
                hbticketmedio.total = '0.00';
            }
             $scope.hbticketmedioFormat = parseInt(hbticketmedio.total);
             $scope.hbticketBR = convert($scope.hbticketmedioFormat);
            console.log(response);     
        });

        $http({
            method: 'GET',
            url: util.service.hbtaxconversion,
        }).success(function (response) {
             var hbtaxaconversao = response;
             if((hbtaxaconversao.total == null)||(hbtaxaconversao.total == 0)){
                hbtaxaconversao.total = '0.00';
            }
             $scope.hbtaxaconversaoFormat = hbtaxaconversao.total;
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

		/* Head Brasil */

		function hbVoxorder(){
            var msg = "Head Brasil supera expectativas de pedidos ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
  
          function hbVoxsold(){
            var msg = "Head Brasil supera expectativas de vendas ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
  
          function hbVoxaccess(){
            var msg = "Head Brasil supera expectativas de acessos ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
});