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
	getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=order_report&period=day&lost=false","ru_orderConvertedDay");
    getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=order_report&period=month&lost=false","ru_orderConvertedMonth");
    getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=order_report&period=day&lost=true","ru_orderLostDay");
    getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=getRefusedOrderMonth","ru_orderLostMonth");
	/* Vendas */
	getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=sold_report&period=day","ru_soldDay");
	getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=sold_report&period=month","ru_soldMonth");
	/* Ticket */
	getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=ticketM&period=month","ru_avg");
	/* Onlines */

	getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=online_report&period=month","ru_onlineMonth");
	/* Taxa de Conversão */
	getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=taxConversion&period=month","ru_taxConv");
	/* Onlines por mês */
	getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=online_mes_report&period=day","ru_userMonth");

	/* Oficina do tenistas */	
	getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=order_report&period=day&lost=false","ot_orderConvertedDay");
    getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=order_report&period=month&lost=false","ot_orderConvertedMonth");
    getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=order_report&period=day&lost=true","ot_orderLostDay");
    getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=getRefusedOrderMonth","ot_orderLostMonth");
	/* Vendas */
	getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=sold_report&period=day","ot_soldDay");
	getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=sold_report&period=month","ot_soldMonth");
	/* Ticket */
	getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=ticketM&period=month","ot_avg");
	/* Onlines */

	getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=online_report&period=month","ot_onlineMonth");
	/* Taxa de Conversão */
	getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=taxConversion&period=month","ot_taxConv");
	/* Onlines por mês */
	getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=online_mes_report&period=day","ot_userMonth");
	
	/* HeadStore */
	getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=order_report&period=day&lost=false","hs_orderConvertedDay");
    getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=order_report&period=month&lost=false","hs_orderConvertedMonth");
    getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=order_report&period=day&lost=true","hs_orderLostDay");
    getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=getRefusedOrderMonth","hs_orderLostMonth");
	/* Vendas */
	getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=sold_report&period=day","hs_soldDay");
	getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=sold_report&period=month","hs_soldMonth");
	/* Ticket */
	getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=ticketM&period=month","hs_avg");
	/* Onlines */

	getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=online_report&period=month","hs_onlineMonth");
	/* Taxa de Conversão */
	getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=taxConversion&period=month","hs_taxConv");
	/* Onlines por mês */
	getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=online_mes_report&period=day","hs_userMonth");

	/* HeadBrasil */
	getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=order_report&period=day&lost=false","hb_orderConvertedDay");
    getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=order_report&period=month&lost=false","hb_orderConvertedMonth");
    getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=order_report&period=day&lost=true","hb_orderLostDay");
    getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=getRefusedOrderMonth","hb_orderLostMonth");
	/* Vendas */
	getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=sold_report&period=day","hb_soldDay");
	getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=sold_report&period=month","hb_soldMonth");
	/* Ticket */
	getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=ticketM&period=month","hb_avg");
	/* Onlines */

	getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=online_report&period=month","hb_onlineMonth");
	/* Taxa de Conversão */
	getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=taxConversion&period=month","hb_taxConv");
	/* Onlines por mês */
	getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=online_mes_report&period=day","hb_userMonth");

	/* DLD Lojista */
	getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=order_report&period=day&lost=false","dld_orderConvertedDay");
    getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=order_report&period=month&lost=false","dld_orderConvertedMonth");
    getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=order_report&period=day&lost=true","dld_orderLostDay");
    getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=getRefusedOrderMonth","dld_orderLostMonth");
	/* Vendas */
	getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=sold_report&period=day","dld_soldDay");
	getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=sold_report&period=month","dld_soldMonth");
	/* Ticket */
	getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=ticketM&period=month","dld_avg");
	/* Onlines */

	getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=online_report&period=month","dld_onlineMonth");
	/* Taxa de Conversão */
	getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=taxConversion&period=month","dld_taxConv");
	/* Onlines por mês */
	getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=online_mes_report&period=day","dld_userMonth");


	},50000);

	setInterval(function call(){
	getOrderReport("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=online_report&period=day","ru_onlineDay");
	getOrderReport("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=online_report&period=day","ot_onlineDay");
	getOrderReport("https://headstore.com.br/reports/?class=Controller_System_Main&method=online_report&period=day","hs_onlineDay");
	getOrderReport("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=online_report&period=day","hb_onlineDay");
	getOrderReport("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=online_report&period=day","dld_onlineDay");
	},5000);

	
	function getOnlineMonth(url)
	{
		$.get(url,function(){
			

		})
	}

	setInterval(function call(){
	getOnlineMonth("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=online_month");
	getOnlineMonth("https://www.raquetesusadas.com.br/ru_reports/?class=Controller_System_Main&method=delete_online_month");

	getOnlineMonth("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=online_month");
	getOnlineMonth("https://www.oficinadotenista.com.br/reports/?class=Controller_System_Main&method=delete_online_month");

	getOnlineMonth("https://www.headstore.com.br/reports/?class=Controller_System_Main&method=online_month");
	getOnlineMonth("https://www.headstore.com.br/reports/?class=Controller_System_Main&method=delete_online_month");

	getOnlineMonth("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=online_month");
	getOnlineMonth("https://www.headbrasil.com.br/reports/?class=Controller_System_Main&method=delete_online_month");

	getOnlineMonth("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=online_month");
	getOnlineMonth("https://lojista.dld.com.br/reports/?class=Controller_System_Main&method=delete_online_month");
	},3600000);