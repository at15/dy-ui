/**
 * Created by at15 on 15-4-3.
 */
// trust html, replace for ng-bind-html-unsafe
angular.module('dy-ui')
    .filter('trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }]);