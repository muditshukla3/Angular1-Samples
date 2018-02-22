var module = angular.module("contactApp",[]);


module.controller("headerController",headerController);
module.controller("footerController",footerController);

function headerController(AppDataSvc){
    this.appTitle = AppDataSvc.appName;
}

function footerController(AppDataSvc){
    this.developer = AppDataSvc.author;
    this.buildDate = AppDataSvc.buildDate;
}

