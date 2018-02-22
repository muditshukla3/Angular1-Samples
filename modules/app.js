var app = angular.module("modulesApp",["myHelloModule","ngTagsInput"]);

app.controller("TagsDemoCtrl",tagsDemoController);

function tagsDemoController(){
    this.tags=[{ text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
    ]
}