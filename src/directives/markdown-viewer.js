/**
 * Created by at15 on 15-4-3.
 */
// markdown viewer with code highlight
angular.module('dy-ui')
    .directive('markdownViewer', ['$http', 'markdownRender',
        function ($http, markdownRender) {
            return {
                restrict: 'E',
                template: '<div class="dy-ui-markdown-viewer"></div>',
                scope: {
                    src: '@src'
                    //    TODO:support content and ng-model and code high light
                },
                link: function (scope, element) {
                    console.log(scope.src);
                    $http.get(scope.src)
                        .success(function (data) {
                            //console.log(data);
                            //console.log(markdownRender.render(data));
                            element.html(markdownRender.render(data));
                        })
                        .error(function (data) {
                            console.log(data);
                        });
                }
            }
        }]);