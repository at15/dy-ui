/**
 * Created by at15 on 15-4-2.
 */
// angular filter using marked

angular.module('dy-ui')
    .filter('markdown', function () {
        return function (markdownText) {
            // return the same text currently
            return markdownText;
        }
    });