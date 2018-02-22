var myHelloModule = angular.module("myHelloModule",[]);

myHelloModule.controller("HelloController",helloController);

function helloController(){
    this.helloMessage = "I am from myHelloModule";

}