var app = angular.module("ngModelExamples",[]);

app.controller("ExamplesCtrl",examplesCtrl);
app.controller("outerCtrl",outerCtrl);
app.controller("innerCtrl",innerCtrl);

function examplesCtrl($scope){

    $scope.textBoxChange=function(){
        console.log("Text box value changed ");
    }
}

function outerCtrl(){
   this.testProp="From outerCtrl";
}

function innerCtrl(){
    this.testProp="From innerCtrl";
}