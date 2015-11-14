/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var Parse = require('parse/node').Parse;

Parse.initialize("APP_ID", "JAVASCRIPT_ID");

/*
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
*/

// User's location
//var userGeoPoint = userObject.get("location");

// TEST DATA
// LYRIC = 37.7603938,-122.4380428

//var userGeoPoint = new GeoPoint('37.7603938', '-122.4380428');
var userGeoPoint = new Parse.GeoPoint({latitude: 37.7603938, longitude: -122.4380428});
// console.log(userGeoPoint);

//var userGeoPoint = userObject.get("location");

// Create a query for places
var PlaceObject = Parse.Object.extend("PlaceObject");
var placesObjects = [];

var query = new Parse.Query(PlaceObject);
// Interested in locations near user.
query.near("location", userGeoPoint);
// Limit what could be a lot of points.
query.limit(10);
// Final list of objects
query.find({
//  success: function(placesObjects) {
//  }
  success: function(results) {
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
//      alert(object.id + ' - ' + object.get('playerName'));
      alert(object.id);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

console.log(placesObjects);
console.log('Hope that worked.');


/*
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
  testObject.save({foo: "bar"}, {
  success: function(object) {
    $(".success").show();
  },
  error: function(model, error) {
    $(".error").show();
  }
});
*/

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Coming soon.</p>
      </div>
    );
  }

}
