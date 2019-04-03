window.onload = function(e){ 
  
  jQuery(function ($) {
    "use strict";
    function toggleDisplayClass(next) {
      $(this).toggleClass('shake')  //toggles the class
      .delay(2000)                //waits 4 seconds
      .queue(toggleDisplayClass); //requeued
      next();                         //continues on the queue
    }
    $('button#AddToCart--product-template').queue(toggleDisplayClass);
  });
}
