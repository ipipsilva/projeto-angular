angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams){
	
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
			if($scope.foto._id){
				alterarFoto();
			}else{
				salvarFoto();
			}
		}
	};

	function salvarFoto(){
		recursoFoto.save($scope.foto, function(){
			$scope.mensagem = 'Foto adicionada com sucesso';
		}, function(erro){
			$scope.mensagem = 'Nao foi possivel cadastrar a nova foto';
		});
	}

	function alterarFoto(){
		recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
			$scope.mensagem = 'Foto alterada com sucesso';
		}, function(erro){
			$scope.mensagem = 'Nao foi possivel alterar a foto';
		});
	}
});