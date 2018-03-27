var protocol = 'http';
var host = 'localhost';

	function getOrderReport(url,id)
	{

		$.get(url,function(response)
		{
			var result = jQuery.parseJSON(response);

			$("#"+id).html(result.total);

		})
	}
	
	setInterval(function call(){

	/* Raquetes Usadas */	
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/pedidoshoje.php','ru_orderConvertedDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/pedidosperdidoshoje.php','ru_orderConvertedMonth');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/pedidosmes.php','ru_orderLostDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/pedidosperdidosmes.php','ru_orderLostMonth');
	/* Vendas */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/vendashoje.php','ru_soldDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/vendasmes.php','ru_soldMonth');
	/* Ticket */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/ticketmedio.php','ru_avg');
	/* Onlines */

	getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/onlines.php','ru_onlineMonth');
	/* Taxa de Conversão */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/taxaconversao.php','ru_taxConv');
	/* Onlines por mês */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/visitasmes.php','ru_userMonth');

	/* Oficina do tenistas */	
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/pedidoshoje.php','ot_orderConvertedDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/pedidosperdidoshoje.php','ot_orderConvertedMonth');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/pedidosmes.php','ot_orderLostDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/pedidosperdidosmes.php','ot_orderLostMonth');
	/* Vendas */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/vendashoje.php','ot_soldDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/vendasmes.php','ot_soldMonth');
	/* Ticket */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/ticketmedio.php','ot_avg');
	/* Onlines */

	getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/onlines.php','ot_onlineMonth');
	/* Taxa de Conversão */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/taxaconversao.php','ot_taxConv');
	/* Onlines por mês */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/visitasmes.php','ot_userMonth');
	
	/* HeadStore */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/pedidoshoje.php','hs_orderConvertedDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/pedidosperdidoshoje.php','hs_orderConvertedMonth');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/pedidosmes.php','hs_orderLostDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/pedidosperdidosmes.php','hs_orderLostMonth');
	/* Vendas */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/vendashoje.php','hs_soldDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/vendasmes.php','hs_soldMonth');
	/* Ticket */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/ticketmedio.php','hs_avg');
	/* Onlines */

	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/onlines.php','hs_onlineMonth');
	/* Taxa de Conversão */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/taxaconversao.php','hs_taxConv');
	/* Onlines por mês */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/visitasmes.php','hs_userMonth');

	/* HeadBrasil */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/pedidoshoje.php','hb_orderConvertedDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/pedidosperdidoshoje.php','hb_orderConvertedMonth');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/pedidosmes.php','hb_orderLostDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/pedidosperdidosmes.php','hb_orderLostMonth');
	/* Vendas */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/vendashoje.php','hb_soldDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/vendasmes.php','hb_soldMonth');
	/* Ticket */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/ticketmedio.php','hb_avg');
	/* Onlines */

	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/onlines.php','hb_onlineMonth');
	/* Taxa de Conversão */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/taxaconversao.php','hb_taxConv');
	/* Onlines por mês */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/visitasmes.php','hb_userMonth');

	/* DLD Lojista */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/pedidoshoje.php','dld_orderConvertedDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/pedidosperdidoshoje.php','dld_orderConvertedMonth');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/pedidosmes.php','dld_orderLostDay');
    getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/pedidosperdidosmes.php','dld_orderLostMonth');
	/* Vendas */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/vendashoje.php','dld_soldDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/vendasmes.php','dld_soldMonth');
	/* Ticket */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/ticketmedio.php','dld_avg');
	/* Onlines */

	getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/onlines.php','dld_onlineMonth');
	/* Taxa de Conversão */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/taxaconversao.php','dld_taxConv');
	/* Onlines por mês */
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/visitasmes.php','dld_userMonth');


	},50000);

	setInterval(function call(){
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/onlines.php','ru_onlineDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/onlines.php','ot_onlineDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headstore/crn/onlines.php','hs_onlineDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/onlines.php','hb_onlineDay');
	getOrderReport(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/onlines.php','dld_onlineDay');
	},10000);//intervalo de 10 segundos

	
	function getOnlineMonth(url)
	{
		$.get(url,function(){
			

		})
	}

	setInterval(function call(){
	getOnlineMonth(protocol+'://'+host+'/aloisewatch/store/raquetesusadas/crn/visitasmes.php');

	getOnlineMonth(protocol+'://'+host+'/aloisewatch/store/oficinadotenista/crn/visitasmes.php');

	getOnlineMonth(protocol+'://'+host+'/aloisewatch/store/headstore/crn/visitasmes.php');

	getOnlineMonth(protocol+'://'+host+'/aloisewatch/store/headbrasil/crn/visitasmes.php');

	getOnlineMonth(protocol+'://'+host+'/aloisewatch/store/dldlojista/crn/visitasmes.php');

	},3600000);