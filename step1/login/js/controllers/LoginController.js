angular.module('loginApp').controller('loginCtrl', loginCrtFnt);

loginCrtFnt.$inject = ['$scope', '$log', '$window', 'auth'];

function loginCrtFnt($scope, $log, $window, auth) {

    $scope.getUserList = function() {
        return auth.userList();
    };

    $scope.logAuth= function(user) {
    
        if( auth.checkUser(user.login, user.pwd) ) {
            $window.location.href = 'loginSuccess.html';
        }
    };
}