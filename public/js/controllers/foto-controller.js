angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, cadastroDeFotos, $routeParams){
	
	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId){
		getFoto();
	}

	function getFoto(){

		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
			console.log(foto);
			$scope.foto = foto;
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Erro ao buscar foto.';
		});
	}

	$scope.submeter = function(){

		if($scope.formulario.$valid){
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao){
					$scope.foto = {};
				}
			})
			.catch(function(erro){
				$scope.mensagem = erro.mensagem;
			});
		}
	};
});