/**
 * Created by at15 on 15-4-2.
 */
// angular filter using marked
angular.module('dy-ui')
    .filter('markdown', ['markdownRender',
        function (markdownRender) {
            return function (markdownText) {
                return markdownRender.renderWithSce(markdownText);
            }
        }]);