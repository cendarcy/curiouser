
// particlesJS.load(@dom-id, @path-json, @callback (optional)); 
particlesJS.load('particles-js', 'assets/particles.json', function() {
});

$(document).ready(function(){
  $(window).click(function(){
    $('.opener').fadeOut(1600, function(){
      })
    $('.announcement').fadeIn(2400, function(){
    })
  })
});