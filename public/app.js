var $ = require('jquery');
var Tether = require('tether');
var locals = LOCALS; // local variables from injected from server

console.log("locals", locals);

window.Tether = Tether;
window.jQuery = $;
window.$ = $;

console.log("jQuery", $);
//  = jQuery;
var bootstrap = require("bootstrap");
console.log(bootstrap);
console.log("hello world!");