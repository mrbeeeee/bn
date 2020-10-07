angular.module('adf')
  .directive('boxLayout', ['dashboard', function(dashboard) {
    return {
      restrict: 'E',
      scope: {
        structure: '@'
      },
      link: function(scope, elem, attrs) {

        scope.subdivided = false;

        if (scope.structure.indexOf('(') === -1) {

          var rows = scope.structure.split('/');

          var rowArray = [];
          _.forEach(rows, function(row) {
            var rowObj = {};
            rowObj.colWidths = row.split('-');
            rowArray.push(rowObj);
          });

          scope.rowArray = rowArray;

        } else {

          scope.subdivided = true;

          var subRows, mainRow, dividedCol, subRowArray, subdividedColArray, colObj;
          subRows = scope.structure.split('(')[1];
          mainRow = scope.structure.split('(')[0];

          mainRow = mainRow.replace(/\s/g, "");
          dividedCol = mainRow[mainRow.length -1];
          subRows = subRows.slice(0, subRows.indexOf(')')).split('/');

          subRowArray = [];
          _.forEach(subRows, function(row) {
            var subRowObj = {};
            subRowObj.colWidths = row.split('-');
            subRowArray.push(subRowObj);
          });

          subdividedColArray = [];
          _.forEach(mainRow.split('-'), function(col) {
            colObj = {};
            colObj.width = col;
            colObj.rows = (col === dividedCol) ? subRowArray : [];
            subdividedColArray.push(colObj);
          });

          scope.transparentIfChildren = function(col) {
            if (col.rows.length > 0) {
              return 'parent-background-is-transparent';
            }
          };

          scope.subdividedColArray = subdividedColArray;

        }
      },
      template: '<div ng-if="!subdivided" ng-repeat="row in rowArray" class="row row-in-array">' +
                  '<div ng-repeat="width in row.colWidths track by $index" class="col-md-{{width}} color-box-layout" style="width:{{width*10}}px;"></div>' +
                '</div>' +
                '<div ng-if="subdivided" class="row subdivided-main-row">' +
                  '<div ng-repeat="col in subdividedColArray track by $index" ng-class="transparentIfChildren(col)" class="col-md-{{col.width}} col-md-offset-0 subdivided-col-in-array" style="width:{{col.width*11}}px;">' +
                    '<div ng-repeat="subRow in col.rows track by $index" class="row subdivided-color-box-layout-row">' +
                      '<div ng-repeat="subCol in subRow.colWidths track by $index" class="subdivided-color-box-layout" style="width:{{subCol*7.5}}px;">' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>'
    };

  }]);
  