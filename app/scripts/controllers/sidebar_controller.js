/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var SidebarCtrl = function ($rootScope, $scope, $log, BlogDataService) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    this.$scope.blogData = null;

    /** Take blog object from service ready to be used in the side bar lists
     * **/
    BlogDataService.retreiveData().then(function (data) {

      // retrieve blog data to be used in the ng-repeat directive in the sidebar
      this.$scope.blogData = data.oldBlogPosts;

    }.bind(this), function (response) {

      this.$log.warn('Error SidebarCtrl');
      this.$log.warn(response);

    }.bind(this));

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());