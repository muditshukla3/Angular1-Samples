(function () {

    var module = angular.module("contactApp");
    module.service("AppDataSvc", function (AppNameSvc) {
        this.appName = AppNameSvc;
        this.author = "Mudit";
        this.buildDate = new Date().toDateString();
    });

})();