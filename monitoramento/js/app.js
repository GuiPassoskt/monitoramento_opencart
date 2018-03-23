var app = angular.module('aloise',['ngMask','cgNotify','textToSpeech']);

app.controller('dataCtrl', function($scope,$http,$timeout,textToSpeech,notify){

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

        /*========================================= DLD Lojista ====================================*/

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
