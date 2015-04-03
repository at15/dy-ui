/**
 * Created by at15 on 15-4-3.
 */
// markdown viewer with code highlight
angular.module('dy-ui')
    .directive('markdownViewer', ['$http', function ($http) {
        return {
            restrict: 'E',
            template: '<div class="dy-ui-markdown-viewer"></div>',
            scope: {
                src: '@src'
            },
            link: function (scope, element) {
                console.log(scope.src);
                $http.get(scope.src)
                    .success(function (data) {
                        //console.log(data);
                        element.html(marked(data));
                    })
                    .error(function (data) {
                        console.log(data);
                    });
            }
        }
    }]);