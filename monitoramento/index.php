
<!DOCTYPE html>
<html ng-app="aloise">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
	<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">
	<!-- <meta http-equiv="refresh" content="400;url=index.php"> -->
	<title>Aloise - Monitoramento</title>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.css">
	<link rel="stylesheet" ng-href="views/main.css">
	<link rel="stylesheet" href="js/angular-notify.css">
	<script src="js/jquery-3.1.1.min.js"></script>
	<script src="js/angular.min.js"></script>
	<script src="js/app.js"></script>
	<script src="js/service.js"></script>
	<script src="js/ngMask.min.js"></script>
	<script src="js/angular-notify.js"></script>
	<script src="js/responsivevoice.js"></script>
	<script src="js/text-to-speech.js"></script>
	<!-- <script src="js/requisition.js"></script> -->
	<!-- <script src="js/monthrequisition.js"></script> -->
</head>
<body>

<header id="header">
    <nav id="main-menu" class="navbar navbar-default navbar-fixed-top" role="banner">
        <div class="container"> 
                <a class="navbar-brand" href="index.html" style="padding-bottom: 15px;padding-top: 15px;">
                	<img alt="Brand" width="180" ng-src="img/logo.png" class="img-responsive">
                </a>
        </div>
    </nav>
</header>

<div class="container-fluid">
	<div class="row">
		<table class="table table-bordered" ng-controller="dataCtrl">
			<th style="width: 160px;text-align: center; border-right: 6px #000"><span class="glyphicon glyphicon-globe"></span> Sites</th>
			<th style="width: 160px;text-align: center;">Pedidos
				<table class="table table-bordered" width="100%">
					<th style="text-align: center;" width="50%">Hoje</th>
					<th style="text-align: center;" width="50%">Mês</th>
				</table>
			</th>
			<th style="width: 160px;text-align: center;">Vendas
				<table class="table table-bordered" width="100%">
					<th style="text-align: center;" width="50%">Hoje</th>
					<th style="text-align: center;" width="50%">Mês</th>
				</table>
			</th>
			<th style="width: 160px;text-align: center;">Acessos
				<table class="table table-bordered" width="100%">
					<th style="text-align: center;" width="50%">Online</th>
					<th style="text-align: center;" width="50%">Mês</th>
				</table>
			</th>
			<th style="width: 160px;text-align: center;">Ticket Médio
				<table class="table table-bordered" width="100%">
					<th style="text-align: center;" width="100%">Mês</th>
				</table>
			</th>
			<th style="width: 160px;text-align: center;">Taxa Conversão
				<table class="table table-bordered" width="100%">
					<th style="text-align: center;" width="100%">Mês</th>
				</table>
			</th>

			<!-- Raquetes usadas -->
			<tr class="active">
				<td style=" vertical-align: middle;" align="center"><img class="img-responsive" width="180" ng-src="img/logo_ru_site_04.png" width="270" height="113"></td>
				<td>
					<!-- Order -->
					<table class="table table-bordered" width="100%">
						<tr>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%"><span  id="ru_orderConvertedDay">{{ruorderdayFormat}}</span> <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="ru_orderLostDay">{{rulostorderdayFormat}}</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%">{{ruorderFormat}} <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="ru_orderLostMonth">{{rulostordermonthFormat}}</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Sold -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%">R${{rusolddayBR}}</td>
							<td align="center" width="50%">R${{rusoldBR}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Access -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%">{{ruaccessdayFormat}}</td>
							<td align="center" width="50%">{{ruaccessFormat}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Average Ticket -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="ru_avg">R${{ruticketBR}}</span></td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Conversion Tax -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="ru_taxConv">{{rutaxaconversaoFormat}}</span></td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- Fim Raquetes Usadas -->

			<!-- Oficina do tenista -->
			<tr class="active">
				<td style=" vertical-align: middle;" align="center"><img class="img-responsive" width="180" ng-src="img/Logo_OT_web_30.png" width="270" height="113"></td>
				<td>
					<!-- Order -->
					<table class="table table-bordered" width="100%">
						<tr>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%"><span  id="ot_orderConvertedDay">{{otorderdayFormat}}</span> <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="ot_orderLostDay">{{otlostorderdayFormat}}</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%">{{otorderFormat}} <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="ot_orderLostMonth">{{otlostordermonthFormat}}</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Sold -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%">R${{otsolddayBR}}</td>
							<td align="center" width="50%">R${{otsoldBR}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Access -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%">{{otaccessdayFormat}}</td>
							<td align="center" width="50%">{{otaccessFormat}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Average Ticket -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="ot_avg">R${{otticketBR}}</span></td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Conversion Tax -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="ot_taxConv">{{ottaxaconversaoFormat}}</span></td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- Fim Oficina do Tenista -->

			<!-- Head Store -->
			<tr class="active">
				<td style=" vertical-align: middle;" align="center"><img class="img-responsive" width="180" ng-src="img/Logo_.png" width="270" height="113"></td>
				<td>
					<!-- Order -->
					<table class="table table-bordered" width="100%">
						<tr>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%"><span  id="hs_orderConvertedDay">{{hsorderdayFormat}}</span> <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="hs_orderLostDay">{{hslostorderdayFormat}}</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%">{{hsorderFormat}} <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="hs_orderLostMonth">{{hslostordermonthFormat}}</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Sold -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%">R${{hssolddayBR}}</td>
							<td align="center" width="50%">R${{hssoldBR}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Access -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%">{{hsaccessdayFormat}}</td>
							<td align="center" width="50%">{{hsaccessFormat}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Average Ticket -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="hs_avg">R${{hsticketBR}}</span></td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Conversion Tax -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="hs_taxConv">{{hstaxaconversaoFormat}}</span></td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- Fim Head Store -->

			<!-- HeadBrasil -->
			<tr class="active">
				<td style=" vertical-align: middle;" align="center"><img class="img-responsive" width="180" ng-src="img/logo_head.fw.png" width="270" height="113"></td>
				<td>
					<!-- Order -->
					<table class="table table-bordered" width="100%">
						<tr>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%"><span  id="hb_orderConvertedDay">{{hborderdayFormat}}</span> <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="hb_orderLostDay">{{hblostorderdayFormat}}</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%">{{hborderFormat}} <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="hb_orderLostMonth">{{hblostordermonthFormat}}</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Sold -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%">R${{hbsolddayBR}}</td>
							<td align="center" width="50%">R${{hbsoldBR}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Access -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%"><span id='hb_onlineDay'>0</span></td>
							<td align="center" width="50%">{{hbaccessFormat}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Average Ticket -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="hb_avg">R${{hbticketBR}}</span></td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Conversion Tax -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="hb_taxConv">{{hbtaxaconversaoFormat}}</span></td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- Fim Head Brasil -->

			<!-- DLD Lojista -->
			<tr class="active">
				<td style=" vertical-align: middle;" align="center"><img class="img-responsive" width="180" ng-src="img/logo_dld_lojista_conf.jpg" width="270" height="113"></td>
				<td>
					<!-- Order -->
					<table class="table table-bordered" width="100%">
						<tr>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%"><span  id="dld_orderConvertedDay">0</span> <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="dld_orderLostDay">0</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
							<td width="50%">
								<table class="table table-bordered" width="100%">
									<td align="center" width="50%">{{dldorderFormat}} <span class="glyphicon glyphicon-thumbs-up" style="color:green;"></span></td>
									<td align="center" width="50%"><span  id="dld_orderLostMonth">0</span> <span class="glyphicon glyphicon-thumbs-down" style="color:red;"></span></td>
								</table>
							</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Sold -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%">R${{dldsolddayBR}}</td>
							<td align="center" width="50%">R${{dldsoldBR}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Access -->
					<table class="table table-bordered" width="100%">
						<tr style="height:35px;">
							<td align="center" width="50%"><span id='dld_onlineDay'>0</span></td>
							<td align="center" width="50%">{{dldaccessFormat}}</td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Average Ticket -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="dld_avg">R${{dldticketBR}}</span></td>
						</tr>
					</table>
				</td>
				<td>
					<!-- Conversion Tax -->
					<table class="table table-bordered">
						<tr style="height:35px;">
							<td align="center"><span id="dld_taxConv">{{dldtaxaconversaoFormat}}</span></td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- Fim Dld Lojista -->

		</table>
	</div>
</div>
</body>
</html>