var app = app || {};

app.controller('dldlojistaCtrl', function($scope,$http,$timeout,textToSpeech,notify){

	$scope.title = {
						lj1:"Raquetes Usadas",
						lj2:"Oficina do tenista",
						lj3:"Head Store",
						lj4:"Head Brasil",
						lj5:"DLD Lojista"
				};


/*========================================= DLD Lojista ====================================*/

         $http({
            method: 'GET',
            url: util.service.dldorderday,
        }).success(function (response) {
             var dldorder = response;
             if((dldorder.total == null)||(dldorder.total == 0)){
                dldorder.total = '0.00';
            }
             $scope.dldorderdayFormat = parseInt(dldorder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.dldlostorderday,
        }).success(function (response) {
             var dldlostorder = response;
             if((dldlostorder.total == null)||(dldlostorder.total == 0)){
                dldlostorder.total = '0.00';
            }
             $scope.dldlostorderdayFormat = parseInt(dldlostorder.total);
            console.log(response);
            
           
        });

        $http({
            method: 'GET',
            url: util.service.dldordermonth,
        }).success(function (response) {
            var dldorder = response;
            if((dldorder.total == null)||(dldorder.total == 0)){
            	dldorder.total = '0.00';
            }
            $scope.dldorderFormat = parseInt(dldorder.total);
            $scope.pedidodld = parseInt(DLD.conf_order);
            if($scope.dldorderFormat >= $scope.pedidodld){ //Função Correta de Verificação
            	dldVoxorder();
            	notify({ 
             				message:'Loja DLD Lojista supera expectativas de pedidos!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

        $http({
            method: 'GET',
            url: util.service.dldlostordermonth,
        }).success(function (response) {
             var dldlostordermonth = response;
             if((dldlostordermonth.total == null)||(dldlostordermonth.total == 0)){
                dldlostordermonth.total = '0.00';
            }
             $scope.dldlostordermonthFormat = parseInt(dldlostordermonth.total);
            console.log(response);       
        });

        $http({
            method: 'GET',
            url: util.service.dldsoldmonth,
        }).success(function (response) {
            var dldsold = response;
            if((dldsold.total == null)||(dldsold.total == 0)){
            	dldsold.total = '0.00';
            }
            $scope.dldsoldFormat = parseFloat(dldsold.total);
            $scope.vendadld = parseFloat(DLD.conf_sold);
            $scope.dldsoldBR = convert($scope.dldsoldFormat);
            if($scope.dldsoldFormat >= $scope.vendadld){ //Função Correta de Verificação
            	setTimeout(dldVoxsold(),20000);
            	notify({ 
             				message:'Loja DLD Lojista supera expectativas de vendas!',
             				classes:'success',
             			    position:'center',
             			    duration:4000
             			});
        	}
            console.log(response);
           
        });

        $http({
            method: 'GET',
            url: util.service.dldsoldday,
        }).success(function (response) {
            var dldsoldday = response;
            if((dldsoldday.total == null)||(dldsoldday.total == 0)){
            	dldsoldday.total = '0.00';
            }
            $scope.dldsolddayFormat = parseFloat(dldsoldday.total);
            $scope.dldsolddayBR = convert($scope.dldsolddayFormat);   
        });

        $http({
            method: 'GET',
            url: util.service.dldaccessday,
        }).success(function (response) {
             var dldaccess = response;
             if((dldaccess.total == null)||(dldaccess.total == 0)){
                dldaccess.total = '0.00';
            }
             $scope.dldaccessdayFormat = parseInt(dldaccess.total);
            console.log(response);   
        });

        $http({
            method: 'GET',
            url: util.service.dldaccessmonth,
        }).success(function (response) {
            var dldaccess = response;
            if((dldaccess.total == null)||(dldaccess.total == 0)){
            	dldaccess.total = '0.00';
            }
            $scope.dldaccessFormat = parseInt(dldaccess.total);
            $scope.acessodld = parseInt(DLD.conf_access);
            if($scope.dldaccessFormat >= $scope.acessodld){ //Função Correta de Verificação
            	dldVoxaccess();
            	notify({ 
             				message:'Loja DLD Lojista supera expectativas de acessos!',
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
            url: util.service.dldticket,
        }).success(function (response) {
             var dldticketmedio = response;
             if((dldticketmedio.total == null)||(dldticketmedio.total == 0)){
                dldticketmedio.total = '0.00';
            }
             $scope.dldticketmedioFormat = parseInt(dldticketmedio.total);
             $scope.dldticketBR = convert($scope.dldticketmedioFormat);
            console.log(response);     
        });

         $http({
            method: 'GET',
            url: util.service.dldtaxconversion,
        }).success(function (response) {
             var dldtaxaconversao = response;
             if((dldtaxaconversao.total == null)||(dldtaxaconversao.total == 0)){
                dldtaxaconversao.total = '0.00';
            }
             $scope.dldtaxaconversaoFormat = dldtaxaconversao.total;
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

		/* DLD Lojista */

		function dldVoxorder(){
            var msg = "DLD Lojista supera expectativas de pedidos ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
  
          function dldVoxsold(){
            var msg = "DLD Lojista supera expectativas de vendas ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
  
          function dldVoxaccess(){
            var msg = "DLD Lojista supera expectativas de acessos ! ";
              textToSpeech.speak(
                msg,
                'Brazilian Portuguese Female',
                {pitch: 0}
              );
          };
});