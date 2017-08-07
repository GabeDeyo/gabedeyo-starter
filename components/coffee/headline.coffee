$ = require 'jquery'

do fill = (item = 'My personal web starter kit') ->
  $('.header').append "#{item}"
fill