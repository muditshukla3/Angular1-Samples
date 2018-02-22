(function () {

    var module = angular.module("contactApp");
    module.controller("contactCtrl", contactCtrl);


    function contactCtrl(ContactDataSvc) {
        var self = this;
        self.editMode = false;
        self.addMode = false;
        ContactDataSvc.getContacts()
            .then(function (data) {
                self.contacts = data;
            });

        this.selectContact = function (index) {
            this.successMessage = undefined;
            this.errorMessage = undefined;
            this.selectedContact = this.contacts[index];
        }

        self.togglzEditMode = function () {
            self.editMode = !self.editMode;
        }

        self.saveUser = function () {
            self.togglzEditMode();
            var userData = this.selectedContact;

            if (self.addMode) {
                ContactDataSvc.createUser(userData)
                    .then(function () {
                        self.successMessage = "Data Updated";
                    },
                    function () {
                        self.errorMessage = "There was an error.Please try again";
                    });
                    self.addMode=false;
            } else {

                ContactDataSvc.saveUser(userData)
                    .then(function () {
                        self.successMessage = "Data Updated";
                    },
                    function () {
                        self.errorMessage = "There was an error.Please try again";
                    });
            }

        }

        this.addContact = function () {
            this.addMode = true;
            this.editMode=true;
            this.selectedContact = {
                "id": new Date().toTimeString()
            };
        }
    }
})();