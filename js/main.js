
// particlesJS.load(@dom-id, @path-json, @callback (optional)); 
particlesJS.load('particles-js', 'assets/particles.json', function() {
});



$(document).ready(function(){
  $(window).click(function(){
    $('.opener').fadeOut(2000, function(){
      })
    $('.announcement').fadeIn(3000, function(){
        $(this).fadeOut(3000, function(){
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
          .addIndicators({
            colorStart: "rgba(0,0,0,0)",
            colorEnd: "rgba(0,0,0,0)", 
            colorTrigger : "rgba(0,0,0,0)",
            name:name})
          .addTo(controller);
      });
  })
  $(this).remove()
})  

// =====text business=====
  // var tl = new TimelineLite();
  // tl.from("#text-beginning", 0.5{left:100, autoAlpha:0, display: 'block'})



// ======white rabbit movement====
var whiteRabbit = $('.white-rabbit');

TweenLite.to(whiteRabbit, 1, {opacity: 0, y: 200, delay: 35, ease:Power1.easeNone})


// ====== rabbit hole ======

$('.rabbit-next').click(function(){
  $('.lake-scene').fadeOut(2000, function(){
  $('#rabbit-hole').fadeIn(2400)
  } )
  $(this).remove()
})

// ====== rabbit hole text ======



// ======= alice falling ========

$('.falling-next').click(function(){
  $('#rabbit-hole').fadeOut(2000, function(){
    $("#falling").fadeIn(2400)
  })
  $(this).remove()
})

// ========= hallway =========
$('#hallway-next').click(function(){
  $('#falling').fadeOut(2000, function(){
    $('#hallway').fadeIn(2400)
  })
  $(this).remove()
})

// ========= glass table ======

$('#glass-next').click(function(){
  $('#hallway').fadeOut(2000, function(){
    $('#glass-table').fadeIn(2400)
  })
  $(this).remove()
})

// ====== glimpse of wonderland ======

$('#wonderland-next').click(function(){
  $('#glass-table').fadeOut(2000, function(){
    $('#glimpse').fadeIn(2400)
  })
  $(this).remove()
})



  $('.js-s1').on('click', function(e){
    e.preventDefault;
      $.scrollTo('.lake-scene', function(){
        $('.lake-scene').fadeIn(2000)
      });

  });
  
  $('.js-s2').on('click', function(e){
    e.preventDefault;
      $.scrollTo('#rabbit-hole', function(){
        $('#rabbit-hole').fadeIn(2000)
      });
  })
  
  $('.js-s3').on('click', function(e){
    e.preventdefault;
      $.scrollTo('#falling', function(){
        $('#falling').fadeIn(2000)
      });
  })

  $('.js-s4').on('click', function(e){
    e.preventDefaut;
      $.scrollTo('#hallway', function(){
        $('#hallway').fadeIn(2000)
      });
  })

  $('.js-s5').on('click', function(e){
    e.preventDefaut;
      $.scrollTo('#glass-table', function(){
        $('#glass-table').fadeIn(2000)
      });
  })

  $('.js-s6').on('click', function(e){
    e.preventDefaut;
      $.scrollTo('#glimpse', function(){
        $('#glimpse').fadeIn(2000)
      });
  })





  $(window).on('scroll', function(){

    var scrollT = $(window).scrollTop();

    if(scrollT > 150 && $('.nav-wrapper').css('position') != 'fixed'){
      $('.nav-wrapper').hide(function (){
        $('.nav-wrapper').css('position', 'fixed');
        $('.nav-wrapper').slideDown();
      }); 

    } else if(scrollT < 150) {
      $('.nav-wrapper').css('position', 'static');
    }


  });




}); //=====jquery end










