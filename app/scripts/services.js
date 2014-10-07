'use strict';

var app = angular.module('clientUserApp');

app.service('voteService', function() {
  var vote = {};

  var setVote = function(newObj) {
      vote = newObj;
  }

  var getVote= function(){
      return vote;
  }

  return {
    setVote: setVote,
    getVote: getVote
  };

});


app.factory('voteLibrary', function($http, SERVER_URL) {
  var sdo = {
    createNewVoting: function(voteDefId) {

      var promise = $http.get(
        SERVER_URL + '/api/votes/VoteDefs/'+voteDefId,
          {headers: {'Content-Type': 'application/json'}}
         )
      .success(function(data, status, headers, config) {
        console.log("DATA : " + JSON.stringify(data));
        return data;
      })
      .error(function(data, status, headers, config) {
        console.log('Error when creating voting.. ');

        return data;
      });
      return promise;
    },

    saveVoting: function(vote) {

      var promise;
      console.log('** updating vote ' + vote._id);
      if(vote._id){
        promise = $http.put(
          SERVER_URL + '/api/votes',
          vote,
          {headers: {'Content-Type': 'application/json'}}
        );
      }else{
        promise = $http.post(
          SERVER_URL + '/api/votes',
          vote,
          {headers: {'Content-Type': 'application/json'}}
        );
      }
      promise.success(function(data, status, headers, config) {
        console.log("DATA : " + JSON.stringify(data));
        return data;
      });
      promise.error(function(data, status, headers, config) {
        console.log('Error when creating voting.. ');

        return data;
      });
      return promise;
  }, 

    getVoting: function(id) {

      var promise = $http.get(
        SERVER_URL + '/api/votes/'+id,
          {headers: {'Content-Type': 'application/json'}}
         )
      .success(function(data, status, headers, config) {
        console.log("DATA : " + JSON.stringify(data));
        return data;
      })
      .error(function(data, status, headers, config) {
        console.log('Error when creating voting.. ');

        return data;
      });
      return promise;
    }
  };
  return sdo;
});