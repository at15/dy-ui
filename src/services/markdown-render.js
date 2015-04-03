/**
 * Created by at15 on 15-4-3.
 */
// wrapper for marked
angular.module('dy-ui')
    .service('markdownRender', ['$sce', function ($sce) {

        marked.setOptions({
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        });

        function render(text) {
            return marked(text);
        }

        function renderWithSce(text) {
            return $sce.trustAsHtml(render(text));
        }

        return {
            render: render,
            renderWithSce: renderWithSce
        };
    }]);