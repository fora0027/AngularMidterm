angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $stateParams, $location, localStorageService, ngToast) {

    var id = $stateParams.listId;


    if (localStorageService.isSupported) {

        if (localStorageService.get(id) == null) {

            localStorageService.set(id, [{
                "listItem": 'Item One',
                "done": "false"
            }, {
                "listItem": 'Item Two',
                "done": "false"
            }, {
                "listItem": 'Item Three',
                "done": "false"
            }]);
        } else {
            $scope.lists = localStorageService.get(id);
        }
    };

    $scope.addItem = function () {
        if ($scope.listInput == null || $scope.listInput == "") {
            
            
            //PUT TOAST
            
            
        } else {

            var list = {};

            list.listItem = $scope.listInput;
            list.done = false;

            $scope.lists.push(list);
            $scope.listInput = '';
            localStorage.setItem(id, JSON.stringify($scope.lists));
        }
    }



    $scope.notifySetting = false;
    $scope.vibrateSetting = false;

    $scope.notification = function (notify) {
        
        notifySetting = notify;
        console.log(notify);
    }

    $scope.vibration = function (vibrate) {
        // console.log(vibrate);
        vibrateSetting = vibrate;
        //console.log("vibrateSetting" + vibrateSetting);
    }

    $scope.remove = function (list) {
        var index = $scope.lists.indexOf(list);
        $scope.lists.splice(index, 1);
        localStorage.setItem(id, JSON.stringify($scope.lists));
        console.log($scope.lists.length);
        if ($scope.lists.length == 0) {
            console.log($scope.notifySetting);
            if (notifySetting == true) {

                console.log("notifySettings inside");
                
                ngToast.create("You Have Completed List: " + id);
                
                console.log("after toast");

        };
    }
}


$scope.Completed = function (list) {

    var index = $scope.lists.indexOf(list);
    $scope.lists[index].done = true;
    //console.log(index);

    if (vibrateSetting == true) {
        navigator.vibrate(500);
        //console.log("if statement vibrateSetting " + vibrateSetting);
    }

}


});