/**
 * Created by at15 on 15-4-2.
 */
// angular filter using marked
angular.module('dy-ui')
    .filter('markdown', ['$sce',function ($sce) {
        return function (markdownText) {
            return $sce.trustAsHtml(marked(markdownText));
        }
    }]);