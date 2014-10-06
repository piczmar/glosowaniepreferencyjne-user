'use strict';

var app = angular.module('clientUserApp');

'use strict';

app.controller( "VoteStartCtrl", function( $scope, $routeParams, $location, vote, voteLibrary ) {
  
  	$scope.vote = vote.data;


	var tmpList = [];
	
	// $scope.vote = { 
		
	// };


	$scope.sortingLog = [];

	function createOptions (listName) {
		var _listName = listName;
		var options = {
			placeholder: "app",
			connectWith: ".apps-container",
			activate: function() {
				console.log("list " + _listName + ": activate");
			},
			beforeStop: function() {
				console.log("list " + _listName + ": beforeStop");
			},
			change: function() {
				console.log("list " + _listName + ": change");
			},
			create: function() {
				console.log("list " + _listName + ": create");
			},
			deactivate: function() {
				console.log("list " + _listName + ": deactivate");
			},
			out: function() {
				console.log("list " + _listName + ": out");
			},
			over: function() {
				console.log("list " + _listName + ": over");
			},
			receive: function() {
				console.log("list " + _listName + ": receive");
			},
			remove: function() {
				console.log("list " + _listName + ": remove");
			},
			sort: function() {
				console.log("list " + _listName + ": sort");
			},
			start: function() {
				console.log("list " + _listName + ": start");
			},
			stop: function() {
				console.log("list " + _listName + ": stop");
			},
			update: function() {
				console.log("list " + _listName + ": update");
			}
		};
		return options;
	}

	$scope.sortableOptionsList = [createOptions('A'), createOptions('B')];

	$scope.updateVote = function () {
		var promise = voteLibrary.saveVoting($scope.vote);
		promise.then(
			function(data){
				console.log("SAVED VOTE: " + JSON.stringify(data));
				$location.path('/thankyou/');
				$scope.voteDef = {};
				$scope.vote= {};
		});
	};


} );
