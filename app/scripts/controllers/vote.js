'use strict';

var app = angular.module('clientUserApp');

app.controller('VoteCtrl', function ($scope, $routeParams, $location, VoteFactory, VoteDefFactory) {
	$scope.init = function () {
	    if ($routeParams.id) {

// TODO: what should happen when user voted, then Admin added new options to 
// the VoteDef? should user vote again? Where to merge new options within Vote object?

	        $scope.vote = VoteFactory.votes.filter(function(e){ 
	        	// console.log(e.id + ', ' + $routeParams.id);
	        	return ''+e.id === $routeParams.id ;
	        	})[0];

	        if($scope.vote === undefined){
	        	// could not find vote with this ID so forward to error page
	        	$location.path('/404');
	        }

// get the vote definition for purpose of displaying description, the
// description has not have to be saved inside the vote, because would
// be hard to keep it in sync when admin updated original description in VoteDef.

	        $scope.voteDef = VoteDefFactory.voteDefs.filter(
	        	function(e){
	        		console.log(e._id + ', ' + $scope.vote.voteDefRef);
	        		return e._id === $scope.vote.voteDefRef ;
	        	})[0];
	    } 
	    $scope.isSaving = false;
	};


	$scope.init();

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
		$scope.sortingLog = [];
		var tab = [$scope.vote.liked,$scope.vote.notliked];
		for (var i = 0; i < tab.length; i++) {
			var logEntry = tab[i].map(function (x) {
				return x.title;
			}).join(', ');
			logEntry = 'container ' + (i+1) + ': ' + logEntry;
			$scope.sortingLog.push(logEntry);
		}

		$location.path('/thankyou/');
		$scope.voteDef = {};
		$scope.vote= {};
	};

});

app.factory('VoteFactory', function(){

	return {
		votes : [{
		id: 'asdsfasddasfsf',
		createdAt : Date.now(),
		updatedAt : Date.now(),
		voteDefRef: 1,
		voted :  false,
		email : 'somemail@test.com',
		liked: [
			{
				title: 'Facebook (a)'
			}, {
				title: 'Youtube (a)'
			}, {
				title: 'Gmail (a)'
			}, {
				title: 'Google+ (a)'
			}, {
				title: 'Twitter (a)'
			}, {
				title: 'Yahoo Mail (a)'
			}, {
				title: 'Pinterest (a)'
			}
		],
		notliked: [
			{
				title: 'Facebook (b)'
			}, {
				title: 'Youtube (b)',
			}, {
				title: 'Gmail (b)'
			}, {
				title: 'Google+ (b)'
			}, {
				title: 'Twitter (b)'
			}, {
				title: 'Yahoo Mail (b)'
			}, {
				title: 'Pinterest (b)'
			}
		]
		}]
	};

});

app.factory('VoteDefFactory', function(){
	return {
		voteDefs : [
			{
				_id: 1, 
				title: 'This is a super duper voting!!',
				description: 'Some description entered by Vote admin'
			}
		]
	};
});