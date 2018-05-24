// AngularJs Directive to select spesific rows of a table
function regularCard() {
    return {
        restrict: 'E',
        templateUrl: 'regularCard.tmpl.html',
        scope: {
          name: '@',
        }
    };
}