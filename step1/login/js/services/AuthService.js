angular.module('AuthService', []).service('auth', authFnc);

authFnc.$inject = ['$q'];

function authFnc() {
    var userMap = {};

    userMap.jdoe = {
        pwd : 'jdoepwd',
        role : 'member'
    };
    userMap.psmith = {
        pwd : 'psmithpwd',
        role : 'member'
    };
    userMap.tp = {
        pwd : 'tp',
        role : 'admin'
    };

    // var fncContainer = {
    //     checkUser: checkUser, 
    //     userList: userList

    // };

    // function checkUser(userlogin, userpwd) { 
    //     return userMap[userlogin] == userpwd;
    // };

    // function userList() {
    //     return userMap;
    // };

    


    var fncContainer = {
        localAuthAsk: localAuthAsk
    };
    
    function localAuthAsk(login, pwd) {
        var deferred = $q.defer(); 
        setInterval(function (login, pwd) {
            if ( (userMap[login]) && (userMap[login].pwd == pwd) ) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
            clearInterval(this);
        }, 3000, login, pwd);
        return deffered.promise;
    }

    return fncContainer;

}