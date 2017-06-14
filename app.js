(function (angular){
    'use strict';

    todoCtrl.$injector = ['todoService']
    function todoCtrl (todoService){

        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.add = function () {}
            todoService.get().then(function (data){
                $ctrl.list = data;
            });
            $ctrl.list = [];
        }

    }

    angular.module('todoApp', [])
        .component('todoComponent', {
            controller: todoCtrl
        })
})(angular);
