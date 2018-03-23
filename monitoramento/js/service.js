var protocol = 'http';
var host = 'localhost';
var util = {

	service:{
		/*================================= Raquetes Usadas =========================================*/
		ruorderday: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/pedidoshoje.php',
		rulostorderday: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/pedidosperdidoshoje.php',
		ruordermonth: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/pedidosmes.php',
		rulostordermonth: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/pedidosperdidosmes.php',
		rusoldday: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/vendashoje.php',
		rusoldmonth: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/vendasmes.php',
		ruticket: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/ticketmedio.php',
		rutaxconversion: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/taxaconversao.php',

		ruaccessday: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/onlines.php',
		ruaccessmonth: protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/visitasmes.php',
		/*===========================================================================================*/ 
		
		/*================================= Oficina do Tenista ======================================*/
		otorderday: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/pedidoshoje.php',
		otlostorderday: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/pedidosperdidoshoje.php',
		otordermonth: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/pedidosmes.php',
		otlostordermonth: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/pedidosperdidosmes.php',
		otsoldday: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/vendashoje.php',
		otsoldmonth: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/vendasmes.php',
		otticket: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/ticketmedio.php',
		ottaxconversion: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/taxaconversao.php',
		
		otaccessday: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/onlines.php',
		otaccessmonth: protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/visitasmes.php',
		/*===========================================================================================*/ 

		/*====================================== Head Store =========================================*/
		hsorderday: protocol+'://'+host+'/aloisewatch/store/headstore/crn/pedidoshoje.php',
		hslostorderday: protocol+'://'+host+'/aloisewatch/store/headstore/crn/pedidosperdidoshoje.php',
		hsordermonth: protocol+'://'+host+'/aloisewatch/store/headstore/crn/pedidosmes.php',
		hslostordermonth: protocol+'://'+host+'/aloisewatch/store/headstore/crn/pedidosperdidosmes.php',
		hssoldday: protocol+'://'+host+'/aloisewatch/store/headstore/crn/vendashoje.php',
		hssoldmonth: protocol+'://'+host+'/aloisewatch/store/headstore/crn/vendasmes.php',
		hsticket: protocol+'://'+host+'/aloisewatch/store/headstore/crn/ticketmedio.php',
		hstaxconversion: protocol+'://'+host+'/aloisewatch/store/headstore/crn/taxaconversao.php',
		
		hsaccessday: protocol+'://'+host+'/aloisewatch/store/headstore/crn/onlines.php',
		hsaccessmonth: protocol+'://'+host+'/aloisewatch/store/headstore/crn/visitasmes.php',
		/*===========================================================================================*/ 

		/*====================================== Head Brasil ========================================*/
		hborderday: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/pedidoshoje.php',
		hblostorderday: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/pedidosperdidoshoje.php',
		hbordermonth: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/pedidosmes.php',
		hblostordermonth: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/pedidosperdidosmes.php',
		hbsoldday: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/vendashoje.php',
		hbsoldmonth: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/vendasmes.php',
		hbticket: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/ticketmedio.php',
		hbtaxconversion: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/taxaconversao.php',
		
		hbaccessday: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/onlines.php',
		hbaccessmonth: protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/visitasmes.php',
		/*===========================================================================================*/ 

		/*======================================= DLD Lojista =======================================*/
		dldorderday: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/pedidoshoje.php',
		dldlostorderday: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/pedidosperdidoshoje.php',
		dldordermonth: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/pedidosmes.php',
		dldlostordermonth: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/pedidosperdidosmes.php',
		dldsoldday: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/vendashoje.php',
		dldsoldmonth: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/vendasmes.php',
		dldticket: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/ticketmedio.php',
		dldtaxconversion: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/taxaconversao.php',
		
		dldaccessday: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/onlines.php',
		dldaccessmonth: protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/visitasmes.php',
		/*===========================================================================================*/ 
	},

	config:{
		store: protocol+'://www.aloise.com.br/monitoramento/views/data.php?configuration=true',
	}

};

