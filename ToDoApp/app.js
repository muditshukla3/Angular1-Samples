var app = angular.module("toDoApp",[]);

app.controller("ToDoController",toDoController);

function toDoController(){

    this.editMode=false;
    this.myToDoList=[
        "Learn Angular",
        "TyOut Samples",
        "Visit JavaBrains"
    ];

    this.addNewTodo=function(){
        this.myToDoList.push(this.newTodo);
        this.newTodo="";
    }

    this.triggerEditMode=function(){
        this.editMode=!this.editMode;
    }

    this.deleteToDo=function(index){
        this.myToDoList.splice(index,1);
    }
}