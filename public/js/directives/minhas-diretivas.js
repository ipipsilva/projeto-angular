angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
	
	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope={
		titulo: '@titulo'
	}

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})
.directive('minhaFoto', function(){

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		url: '@url'
	}

	ddo.template = '<img class="img-responsive center-block" src="{{url}}">';

	return ddo;
})
.directive('meuBotaoPerigo', function(){
	var ddo = {};

	ddo.restrict = 'E';

	ddo.scope = {
		descricao: '@descricao',
		acao: '&acao'
	}

	ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{descricao}}</button>';

	return ddo;
});