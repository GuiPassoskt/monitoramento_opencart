var app = app || {};

app.controller('raquetesusadasCtrl', function($scope,$http,$timeout,textToSpeech,notify){

	$scope.title = {
						lj1:"Raquetes Usadas",
						lj2:"Oficina do tenista",
						lj3:"Head Store",
						lj4:"Head Brasil",
						lj5:"DLD Lojista"
				};


		/*========================================= Raquetes Usadas =================================*/
        $http({
            method: 'GET',
            url: util.service.ruorderday,
        }).success(function (response) {
             var ruorder = response;
             if((ruorder.total == null)||(ruorder.total == 0)){
                ruorder.total = '0.00';
            }
             $scope.ruorderdayFormat = parseInt(ruorder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.rulostorderday,
        }).success(function (response) {
             var rulostorder = response;
             if((rulostorder.total == null)||(rulostorder.total == 0)){
                rulostorder.total = '0.00';
            }
             $scope.rulostorderdayFormat = parseInt(rulostorder.total);
            console.log(response);
            
           
        });


		$http({
            method: 'GET',
            url: util.service.ruordermonth,
        }).success(function (response) {
             var ruorder = response;
             if((ruorder.total == null)||(ruorder.total == 0)){
            	ruorder.total = '0.00';
            }
             $scope.ruorderFormat = parseInt(ruorder.total);
             $scope.pedidoru = parseInt(RaquetesUsadas.conf_order);
             if($scope.ruorderFormat >= $scope.pedidoru){ //Função Correta de Verificação
             	ruVoxorder();
             	notify({ 
             				message:'Loja Raquetes Usadas supera expectativas de pedidos!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
             	//voiceStore();
        	}
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.rulostordermonth,
        }).success(function (response) {
             var rulostordermonth = response;
             if((rulostordermonth.total == null)||(rulostordermonth.total == 0)){
                rulostordermonth.total = '0.00';
            }
             $scope.rulostordermonthFormat = parseInt(rulostordermonth.total);
            console.log(response);
            
           
        });
       

        $http({
            method: 'GET',
            url: util.service.rusoldmonth,
        }).success(function (response) {
            var rusold = response;
            if((rusold.total == null)||(rusold.total == 0)){
            	rusold.total = '0.00';
            }
            $scope.rusoldFormat = parseFloat(rusold.total);
            $scope.vendaru = parseFloat(RaquetesUsadas.conf_sold);
            $scope.rusoldBR = convert($scope.rusoldFormat);
             if($scope.rusoldFormat >= $scope.vendaru){ //Função Correta de Verificação
             	ruVoxsold();
             	notify({ 
             				message:'Loja Raquetes Usadas supera expectativas de vendas!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

        $http({
            method: 'GET',
            url: util.service.rusoldday,
        }).success(function (response) {
            var rusoldday = response;
            if((rusoldday.total == null)||(rusoldday.total == 0)){
            	rusoldday.total = '0.00';
            }
            $scope.rusolddayFormat = parseFloat(rusoldday.total);
            $scope.rusolddayBR = convert($scope.rusolddayFormat);   
        });

        $http({
            method: 'GET',
            url: util.service.ruaccessday,
        }).success(function (response) {
             var ruaccess = response;
             if((ruaccess.total == null)||(ruaccess.total == 0)){
                ruaccess.total = '0.00';
            }
             $scope.ruaccessdayFormat = parseInt(ruaccess.total);
            console.log(response);   
        });

        $http({
            method: 'GET',
            url: util.service.ruaccessmonth,
        }).success(function (response) {
            var ruaccess = response;
            if((ruaccess.total == null)||(ruaccess.total == 0)){
            	ruaccess.total = '0.00';
            }
            $scope.ruaccessFormat = parseInt(ruaccess.total);
            $scope.acessoru = parseInt(RaquetesUsadas.conf_access);
            if($scope.ruaccessFormat >= $scope.acessoru){ //Função Correta de Verificação
            	ruVoxaccess();
            	notify({ 
             				message:'Loja Raquetes Usadas supera expectativas de acessos!',
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
            url: util.service.ruticket,
        }).success(function (response) {
             var ruticketmedio = response;
             if((ruticketmedio.total == null)||(ruticketmedio.total == 0)){
                ruticketmedio.total = '0.00';
            }
             $scope.ruticketmedioFormat = parseInt(ruticketmedio.total);
             $scope.ruticketBR = convert($scope.ruticketmedioFormat);
            console.log(response);     
        });

        $http({
            method: 'GET',
            url: util.service.rutaxconversion,
        }).success(function (response) {
             var rutaxaconversao = response;
             if((rutaxaconversao.total == null)||(rutaxaconversao.total == 0)){
                rutaxaconversao.total = '0.00';
            }
             $scope.rutaxaconversaoFormat = rutaxaconversao.total;
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

		/* Raquetes Usadas */

		function ruVoxorder(){
		  var msg = "Raketes Usadas supera expectativas de pedidos ! ";
		    textToSpeech.speak(
		      msg,
		      'Brazilian Portuguese Female',
		      {pitch: 0}
		    );
		};

		function ruVoxsold(){
		  var msg = "Raketes Usadas supera expectativas de vendas ! ";
		    textToSpeech.speak(
		      msg,
		      'Brazilian Portuguese Female',
		      {pitch: 0}
		    );
		};

		function ruVoxaccess(){
		  var msg = "Raketes Usadas supera expectativas de acessos ! ";
		    textToSpeech.speak(
		      msg,
		      'Brazilian Portuguese Female',
		      {pitch: 0}
		    );
		};
       
});
