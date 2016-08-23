
// particlesJS.load(@dom-id, @path-json, @callback (optional)); 
particlesJS.load('particles-js', 'assets/particles.json', function() {
});



$(document).ready(function(){
  $(window).click(function(){
    $('.opener').fadeOut(2000, function(){
      })
    $('.announcement').fadeIn(2000, function(){
        $(this).fadeOut(2400, function(){
          $(this).remove()
        })
   });

  $(window).click(function(){
    $('#parallaxContainer').fadeIn(2400, function(){
        $('#parallax1').slideUp("4000")

// ======horizontal parallax===
      var controller = new ScrollMagic.Controller({vertical: false});
      var tween = new TimelineMax()
        .add([
          TweenMax.to("#parallaxContainer .layer1", 1, {backgroundPosition: "0% 0", ease: Linear.easeNone}),
          TweenMax.to("#parallaxContainer .layer2", 1, {backgroundPosition: "-30% 0", ease: Linear.easeNone}),
          TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "0% 1000", ease: Linear.easeNone})
              ]);

      var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 2000, offset: 700})
          .setTween(tween)
          .setPin("#trigger1")
          .addIndicators()
          .addTo(controller);
      });
  })
   $(this).remove()
})  
// =====vertical parallax=====



}); //=====jquery end










