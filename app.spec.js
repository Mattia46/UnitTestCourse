describe('Todo', function () {

    describe('Todo module and ctrl', function (){

        var $ctrl, todoServiceMock, deferred;

        beforeEach(module('todoApp'));

        beforeEach(inject(function ($componentController, $q){
            deferred = $q.defer();
            todoServiceMock = {
                get: function () {
                    return deferred.promise
                }
            }
            $ctrl = $componentController('todoComponent', {
                todoService: todoServiceMock
            });
            $ctrl.$onInit();
        }));

        it('should have a ctrl', function () {
            expect($ctrl).toBeDefined();
        });

        it('should have a list', function (){
            expect($ctrl.list).toBeDefined();
        });

        it('should have add function ', function (){
            expect(angular.isFunction($ctrl.add)).toBe(true);
        });

        xit('should add a todo', function () {
            $ctrl.add('TalkTalk');
            expect($ctrl.list.length).toBe(1);
        });

        it('should have onInit function with add method', function () {
            expect($ctrl.add).toBeDefined();
        });

        it('should have a service', function () {
            expect(todoServiceMock).toBeDefined();
        });

        it('should have a service.get methodd', function (){
            expect(todoServiceMock.get).toBeDefined();
        });

        it('should have 2 item in the list', inject(function ($rootScope) {
            deferred.resolve([1,2]);
            $rootScope.$apply();
            expect($ctrl.list.length).toBe(2);
        }));
    });
});
