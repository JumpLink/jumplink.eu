require("font-awesome-webpack");
var $ = require('jquery');
var Tether = require('tether');
window.Tether = Tether; // for bootstrap

console.log('Getting ready...');

$(function() {
  console.log('Ready!');
});