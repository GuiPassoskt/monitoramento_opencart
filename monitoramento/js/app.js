var app = angular.module('aloise',['ngMask','cgNotify','textToSpeech']);

app.controller('dataCtrl',function($scope,$http,$timeout,textToSpeech,notify){

    $scope.title = {
        lj1:"Raquetes Usadas",
        lj2:"Oficina do tenista",
        lj3:"Head Store",
        lj4:"Head Brasil",
        lj5:"DLD Lojista"
    };

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
        DLD = storeConf[4];
       
        B = JSON.stringify(storeConf);
        console.log(response);
       
    });

        

    var RaquetesUsadas = [];
    var OficinadoTenista = [];
    var HeadStore = [];
    var HeadBrasil = [];
    var DLD = [];

    var B; // dados em  json

});

