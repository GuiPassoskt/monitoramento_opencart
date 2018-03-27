<!DOCTYPE html>
<html lang="en" ng-app="aloise">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
	<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">
	<title>Aloise - Monitoramento</title>
	<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
	<link rel="stylesheet" ng-href="main.css">
	<link rel="stylesheet" href="../js/angular/angular-notify.css">
	<script src="../js/lib/jquery-3.1.1.min.js"></script>
	<script src="../js/angular/angular.min.js"></script>
	<script src="../js/app.js"></script>
	<script src="../js/service.js"></script>
	<script src="../js/lib/ngMask.min.js"></script>
	<script src="../js/angular/angular-notify.js"></script>
	<script src="../js/lib/responsivevoice.js"></script>
	<script src="../js/lib/text-to-speech.js"></script>
	<script src="../js/validateform.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
	<script src="../js/lib/bootbox.min.js"></script>
	<style>
		.company{
			background-color: rgba(15,103,136,0.6);
			border-radius: 6px;
			height: 80px;
		}
		.company>h3{
			color:#fff;
			padding:4%;
		}
		li{
			list-style-type:none;
			font-weight: bold;
			font-size: 14px; 
		}
	</style>
	
</head>
<body>
<header id="header">
    <nav id="main-menu" class="navbar navbar-default navbar-fixed-top" role="banner">
        <div class="container"> 
                <a class="navbar-brand" href="index.html" style="padding-bottom: 15px;padding-top: 15px;">
                	<img alt="Brand" width="180" ng-src="../img/logo3.png" class="img-responsive">
                </a>
        </div>
    </nav>
</header>
	<div class="container">
		<div class="row" ng-controller="dataCtrl">
			<div class="col-md-6">
				<form name="form1" method="post" id="formConf">
				<input type="hidden" name="store_id" ng-model="store_id">
				<legend style="color:#0F6788;font-weight:bold;">Configurações</legend>
				  <div class="form-group">
				    <label for="pedidos">Pedidos</label>
				    <input type="number" class="form-control" id="pedidos" name="pedidos" placeholder="Digite a quantidade de pedidos estimado" ng-model="txtpedidos" required="true">
				  </div>
				  <div class="form-group">
				    <label for="vendas">Vendas</label>
				    <input type="number" class="form-control" id="vendas" name="vendas" placeholder="Digite a quantidade de vendas estimada em R$" ng-model="txtvendas" required="true">
				  </div>
				  <div class="form-group">
				    <label for="acessos">Acessos</label>
				    <input type="number" class="form-control" id="acessos" name="acessos" placeholder="Digite a quantidade de acessos estimado" ng-model="txtacessos" required="true">
				  </div>
				  <label>Selecione a loja:</label>
					<fieldset class="thumbnail">
					<div>
					  <div class="form-group" required="true">
						  <div class="col-md-6">
						  <input type="checkbox" name="loja" value="1" ng-model="ru" onclick="blockru()"> Raquetes Usadas<br>
						  <input type="checkbox" name="loja" value="2" ng-model="ot" onclick="blockot()"> Oficina do Tenista<br>
					      <input type="checkbox" name="loja" value="3" ng-model="hs" onclick="blockhs()"> Head Store<br>
						  </div>
					      <div class="col-md-6">
					      <input type="checkbox" name="loja" value="4" ng-model="hb" onclick="blockhb()"> Head Brasil<br>
					      <input type="checkbox" name="loja" value="5" ng-model="dld" onclick="blockdld()"> DLD Lojista<br>
					      <input type="checkbox" name="loja" value="6" ng-model="x" hidden="true">
					      </div>
				      </div>
					</div>
					</fieldset>
				<button type="submit" class="btn btn-info" id="enviar" onclick="validaform()">Confirmar</button>
				</form>
			</div>
			<div class="col-md-6">
				<legend style="color:#0F6788;font-weight:bold;">Você está editando:</legend>
				<div class="company" align="center">
					<h3 ng-if="ru">{{title.lj1}}</h3>
					<h3 ng-if="ot">{{title.lj2}}</h3>
					<h3 ng-if="hs">{{title.lj3}}</h3>
					<h3 ng-if="hb">{{title.lj4}}</h3>
					<h3 ng-if="dld">{{title.lj5}}</h3>
				</div>
				<div class="configs">
					<div class="jumbotron" ng-if="ru">
						<li>Pedidos: <span style="color:#0F6788">{{pedidoru}}</span></li>
						<li>Vendas: <span style="color:#0F6788">{{vendaru}}</span></li>
						<li>Acessos: <span style="color:#0F6788">{{acessoru}}</span></li>
					</div>
					<div class="jumbotron" ng-if="ot">
						<li>Pedidos: <span style="color:#0F6788">{{pedidoot}}</span></li>
						<li>Vendas:  <span style="color:#0F6788">{{vendaot}}</span></li>
						<li>Acessos: <span style="color:#0F6788">{{acessoot}}</span></li>
					</div>
					<div class="jumbotron" ng-if="hs">
						<li>Pedidos: <span style="color:#0F6788">{{pedidohs}}</span></li>
						<li>Vendas:  <span style="color:#0F6788">{{vendahs}}</span></li>
						<li>Acessos: <span style="color:#0F6788">{{acessohs}}</span></li>
					</div>
					<div class="jumbotron" ng-if="hb">
						<li>Pedidos: <span style="color:#0F6788">{{pedidohb}}</span></li>
						<li>Vendas:  <span style="color:#0F6788">{{vendahb}}</span></li>
						<li>Acessos: <span style="color:#0F6788">{{acessohb}}</span></li>
					</div>
					<div class="jumbotron" ng-if="dld">
						<li>Pedidos: <span style="color:#0F6788">{{pedidodld}}</span></li>
						<li>Vendas:  <span style="color:#0F6788">{{vendadld}}</span></li>
						<li>Acessos: <span style="color:#0F6788">{{acessodld}}</span></li>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script>
        //arquivo ajax.js
        $(document).ready(function(){
            $('#enviar').click(function(){
                $.ajax({
                    url : 'http://www.aloise.com.br/monitoramento/views/data.php',
                    headers: {'X-Requested-With': 'XMLHttpRequest'},
                    crossDomain: false,
                    type : 'POST',
                    data :'store_id=' + $("input[type=checkbox][name='loja']:checked").val() +
                    '&pedidos=' + $('#pedidos').val() +
                    '&vendas=' + $('#vendas').val() +
                    '&acessos=' + $('#acessos').val(),
                    success: function(data){
                        console.log(data);
                        $('#resultado').html(data);
                    }
                });
            });
        })
  	</script>
</body>
</html>