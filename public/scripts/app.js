var $ = require('jquery');
var Tether = require('tether');
window.Tether = Tether;
window.jQuery = $;
window.$ = $;
var bootstrap = require("bootstrap");

var settings = {};

$.getJSON( "scripts/settings.json", function( settings ) {
	console.log("settings", settings);
});


console.log(bootstrap);
console.log("hello world!");