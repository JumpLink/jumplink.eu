var $ = require('jquery');
var Tether = require('tether');
var locals = require('variables.json');
// var locals = LOCALS; // local variables from injected from server

// console.log(test);

window.Tether = Tether;
window.jQuery = $;
window.$ = $;

console.log("jQuery", $);
//  = jQuery;
var bootstrap = require("bootstrap");
console.log(bootstrap);
console.log("hello world!");