var calcModule = angular.module("ngCalulatorApp",[]);

calcModule.controller("calcCtrl",calcCtrl);

function calcCtrl($scope){

    $scope.operation=""
    $scope.updateOperation=function(op){
        $scope.operation=op;
    }

    $scope.getResult=function(){
      var oper = $scope.operation;

      if(oper === "+"){
          $scope.result = parseInt($scope.firstOperand)+parseInt($scope.secondOperand);
      }

      if(oper === "-"){
        $scope.result = parseInt($scope.firstOperand)-parseInt($scope.secondOperand);
      }
      if(oper === "*"){
        $scope.result = parseInt($scope.firstOperand)*parseInt($scope.secondOperand);
      }
      if(oper === "/"){
        $scope.result = parseInt($scope.firstOperand)/parseInt($scope.secondOperand);
      }
    }
}