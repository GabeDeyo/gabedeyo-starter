var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.header').append("" + item);
})('My personal web starter kit');

fill;
