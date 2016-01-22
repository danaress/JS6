
angular.module('module', []);

angular.module('module').controller('modcontroller', ['$scope', function($scope) {


	$scope.newcontent = ['', '', '', ''];

	$scope.content = ['KJ Ill', 'KJ is a professional angler.', 'Pride and Prejudice', 'KJ invented JavaScript and Libraries.'];

	$scope.submitInfo = function() {
		$scope.content = $scope.newcontent;
	}

	$scope.showButton = function() {

		$scope.hideForm = true;
		$scope.hideTheButton = true;
		$scope.showTheButton = true;
	}

	$scope.hideButton = function() {

		$scope.hideForm = false;
		$scope.hideTheButton = false;
		$scope.showTheButton = false;
	}




	}])