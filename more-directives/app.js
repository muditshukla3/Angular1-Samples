angular.module("moreDirectivesApp",[])
.controller("MoreDirectivesController",moreDirective);

function moreDirective(){
    this.myList=[
        {'name':'Mudit','age':29},
        {'name':'Mohit','age':37},
        {'name':'Akanksha','age':30},
        {'name':'Ankush','age':29},
        {'name':'Harshit','age':25},
        {'name':'Sourabh','age':30}
    ];

}