(function () {

    angular.module('appTimeTracker').value('appSettings', {
        applicationName: 'Real-time Time Tracker App',
        applicationUrl: 'http://www.jesperlundnielsen.dk/real-time-app-with-angularjs-firebase/',
        developerName: 'Jesper Lund Nielsen',
        developerUrl: 'http://www.jesperlundnielsen.dk/',
        firebaseUrl: 'https://timetrackerapp-jln-130315.firebaseio.com'
    });

}());