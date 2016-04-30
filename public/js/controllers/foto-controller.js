angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId){
		getFoto();
	}

	function getFoto(){
		$http.get('/v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			console.log(foto);
			$scope.foto = foto;
		})
		.error(function(erro){
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
		$http.post('/v1/fotos', $scope.foto)
			.success(function(){
				$scope.mensagem = 'Foto adicionada com sucesso';
			})
			.error(function(erro){
				$scope.mensagem = 'Nao foi possivel cadastrar a nova foto';
			});
	}

	function alterarFoto(){
		$http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
			.success(function(){
				$scope.mensagem = 'Foto alterada com sucesso';
			})
			.error(function(erro){
				$scope.mensagem = 'Nao foi possivel alterar a foto';
			});
	}
});