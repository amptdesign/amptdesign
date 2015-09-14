$(document).ready(function() {

    // INITIALIZE PICTURE TIMERS
    StartYourMoters();

    // INITIALIZE TOOLTIPS
    $('a').tooltip();  
    
    $(".fancybox").fancybox({ padding : 0,
        helpers : { title: { type: 'inside', position: 'top' }, overlay: { css : { 'background':'rgba(0,0,0, 0.80)' } } }, 
        nextEffect: 'fade', prevEffect: 'fade'
    });

  function scrollDown(dist, speed) { $('html,body').animate({ scrollTop: dist }, speed); }

  // SCROLL TO TOP OF PAGE ON PAGE LOAD
  scrollDown(0, 1200);

  // ==================================================
  //
  //    COMPLETE WEBSITE DESIGN INFORMATION
  //    1) CLEAR EVERYTHING 2) SLOWLY DISPLAY TEXT 
  //    3) BRING IN GIRL ON ROCKET FROM RIGHT
  //
  // ==================================================

  function unveil(target, time, queue) {
        $(target).stop(true, true).fadeIn({ duration: time, queue: queue }).addClass('my-flip');
  }

    $(".learn-1").click(function(e) {

            e.preventDefault();
            $("#carousel").fadeOut(800);
            $(".our-services").fadeOut(800); 
            $(".our-team").fadeOut(800);

            scrollDown(260, 1200);

            setTimeout(function(){ unveil(".our-services-2", 2000, false); setTimeout(act2, 1400); }, 900);

            var act2 = function () {

                          unveil(".web2", 3000, false);

                          $('.color-circle').tween({ 
                              opacity: { start: 0,   stop: 50, time: 2, duration: 5, effect:'easeInOut' },
                              rotate:  { start: 451, stop: 339,time: 2, duration: 5, effect:'easeInOut' }
                           }); 

                          $.play(); setTimeout(act3, 800);
            }

            var act3 = function () {

                          $(".hottie-rocket").transition({
                                opacity: 1, x:'-2400px', duration: 2050, easing: 'easeInOutBack',
                                complete: function() { setTimeout(act4, 2050); }
                          });
            }

            var act4 = function () { unveil(".web3", 4800, false);          setTimeout(act5, 3000); }
            var act5 = function () { unveil(".web4", 3000, false);          setTimeout(act6, 1000); }
            var act6 = function () { $("#win").show().addClass('my-flip');  setTimeout(act7, 2200); }
            var act7 = function () { $("#maybe-later").fadeIn({ duration: 3000, queue: true }); } 

            // setTimeout(clean_house, 2000);

            // var clean_house = function () {
            //       $(".our-services-2").removeClass('my-flip');
            //       $(".web2").removeClass('my-flip');
            //       $(".web3").removeClass('my-flip');
            //       $(".web4").removeClass('my-flip');
            //       $("#win").removeClass('my-flip');
            //       $("#maybe-later").removeClass('my-flip');
            // }
    });

  $("#learn-2").click(function(e) { e.preventDefault();
      $(".how-we-can-help").stop(true, true).fadeIn({ duration: 800, queue: false }).css('display', 'none').slideDown(900, "easeOutBounce");
  });

  $("#learn-3").click(function(e) { e.preventDefault();
      $(".how-we-can-help-2").stop(true, true).fadeIn({ duration: 800, queue: false }).css('display', 'none').slideDown(800, "easeOutBounce");
  });

  $("#learn-4").click(function(e) { e.preventDefault();
      $(".how-we-can-help-3").stop(true, true).fadeIn({ duration: 800, queue: false }).css('display', 'none').slideDown(800, "easeOutBounce");
  });

  $("#maybe-later").mouseover(function() { 
      $( ".color-circle" ).animate({ opacity: 0.1 }, 1200 ); 
      $( this ).css({"color":"black"});
    });
  $("#maybe-later").mouseleave(function() { 
      $( this ).css({"color":"#999"});
    });

  $("#maybe-later").click(function(e) { e.preventDefault();
      $(".our-services-2").hide();
      $(".color-circle").hide();      
      $(".our-services").show();
      $(".our-team").show(); 
      $(".carousel").show();
  });

  $("#win").mouseenter(function() { $( ".color-circle" ).animate({ opacity: 0.9 }, 1300 ); });
  $("#win").mouseleave(function() { $( ".color-circle" ).animate({ opacity: 0.5 }, 1300 ); });

  window.team_wobbling = false;

  $( "#meet-team" ).click(function(e) { e.preventDefault();

      $('html,body').animate({
          scrollTop: 270
      }, 1000);

      if (team_wobbling != true) {
            team_wobbling = true;
            $('.team:first-child').addClass('animated wobble');
            setTimeout(function(){$('.team:nth-child(2)').addClass('animated wobble')}, 1200);
            setTimeout(function(){$('.team:nth-child(3)').addClass('animated wobble')}, 2200);
            setTimeout(function(){$('.team:nth-child(4)').addClass('animated wobble')}, 3200);
            setTimeout(function(){
                 $('.team:first-child').removeClass('animated wobble');
                 $('.team:nth-child(2)').removeClass('animated wobble');
                 $('.team:nth-child(3)').removeClass('animated wobble');
                 $('.team:nth-child(4)').removeClass('animated wobble');
                 team_wobbling = false;
            }, 4200);
      }
  });


  $( "#surprise-click" ).click(function(e) { e.preventDefault();
      // alert("Wait for them to stop wiggling!");
      // $( "#meet-team" ).trigger("click");
      // $( "#surprise-click" ).fadeOut(1200);           
  });

  $( "#after-surprise" ).click(function(e) { e.preventDefault(); $( "#meet-team" ).trigger("click"); });

  function resetPics() {
        big = last_member_picked.replace("_t","_b");
        $( big ).removeClass("journal");
        $( big ).addClass("bomba");
        $( last_member_picked ).removeClass("rotate-out");
        $( last_member_picked ).addClass("flip-bottom");
        $( last_member_picked ).removeClass("flip-bottom");

        $( big ).animate({height: "0"}, 1700, function() { 
            $( big ).hide();
            $( big ).removeClass("bomba");
            $( "#after-surprise" ).show();
            $( big ).css({height: "156px"});
            window.last_member_picked = "";
        });
        
    }

  // DEFAULT VALUES
  window.last_member_picked = "";
  window.activity = 0;

  function activeTimer() { activity = 0; }

  function StartYourMoters() {
      var vActive = setInterval(function(){ activeTimer() }, 5000);
      var vResetPic = setInterval(function(){
          if ((activity < 1) && (last_member_picked != "")) { resetPics(); } 
      }, 10000);

  }

  $( "#me_t" ).click(function() {
      if (team_wobbling != true) {

              scrollDown(380, 1000);

              activity = 1;
              $( "#surprise-click" ).fadeOut(400);

              // IF ANY TEAM MEMBER WAS PICKED THEN START BY RESTORING THEIR THUMBNAIL
              if (last_member_picked != "") {
                  big = last_member_picked.replace("_t","_b");
                  $( big ).hide();
                  $( last_member_picked ).removeClass("rotate-out");
                  $( last_member_picked ).addClass("flip-bottom");
              }
              
              $( "#me_t" ).addClass("rotate-out");
              $( "#me_b" ).show().addClass("journal");
              last_member_picked = "#me_t";
              // cleanUp();
      }
  });

  $( "#cassie_t" ).click(function() {
      if (team_wobbling != true) {

              activity = 1;
              $( "#surprise-click" ).fadeOut(400);

              // IF ANY TEAM MEMBER WAS PICKED THEN START BY RESTORING THEIR THUMBNAIL
              if (last_member_picked != "") {
                  big = last_member_picked.replace("_t","_b");
                  $( big ).hide();
                  $( last_member_picked ).removeClass("rotate-out");
                  $( last_member_picked ).addClass("flip-bottom");
              }

              $( "#cassie_t" ).addClass("rotate-out");
              $( "#cassie_b" ).show().addClass("journal");
              last_member_picked = "#cassie_t";
              // cleanUp();
      }
  });

  $( "#jin_t" ).click(function() {
      if (team_wobbling != true) {

              activity = 1;
              $( "#surprise-click" ).fadeOut(400);

              // IF ANY TEAM MEMBER WAS PICKED THEN START BY RESTORING THEIR THUMBNAIL
              if (last_member_picked != "") {
                  big = last_member_picked.replace("_t","_b");
                  $( big ).hide();
                  $( last_member_picked ).removeClass("rotate-out");
                  $( last_member_picked ).addClass("flip-bottom");
              }

              $( "#jin_t" ).addClass("rotate-out");
              $( "#jin_b" ).show().addClass("journal");
              last_member_picked = "#jin_t";
              // cleanUp();
      }
  });

  $( "#luci_t" ).click(function() {
      if (team_wobbling != true) {

              activity = 1;
              $( "#surprise-click" ).fadeOut(400);

              // IF ANY TEAM MEMBER WAS PICKED THEN START BY RESTORING THEIR THUMBNAIL
              if (last_member_picked != "") {
                  big = last_member_picked.replace("_t","_b");
                  $( big ).hide();
                  $( last_member_picked ).removeClass("rotate-out");
                  $( last_member_picked ).addClass("flip-bottom");
              }

              $( "#luci_t" ).addClass("rotate-out");
              $( "#luci_b" ).show().addClass("journal");
              last_member_picked = "#luci_t";
              // cleanUp();
      }
  });

  // WHEN BIG PIC IS CLICKED GET RID OF IT
  $("#me_b").click(function() { if (team_wobbling != true) { resetPics(); } });
  $("#cassie_b").click(function() { if (team_wobbling != true) { resetPics(); } });
  $("#jin_b").click(function() { if (team_wobbling != true) { resetPics(); } });  
  $("#luci_b").click(function() { if (team_wobbling != true) { resetPics(); } });

  $(".contact").click(function(e) {

    e.preventDefault();
    $("#carousel").hide();
    $(".inner-webbing").hide();
    // $(".our-services").hide(); 
    // $(".our-services-2").hide(); 
    // $(".our-team").hide(); 
    $("#contact-us").show().addClass("enter-left-bounce");
    $("#subject").val($(this).data("target"));
    scrollDown(120, 1200);
    
    setTimeout(function(){$("#contact-us").removeClass('enter-left-bounce')}, 1200);

  });

  $("#email-cancel").click(function(e) {
        
        e.preventDefault();
        $(".our-services-2").hide();
        $(".color-circle").hide(); 
        $("#contact-us").hide("fade", { direction: "right"}, 100);
        $("#carousel").fadeIn().show(); 
        $(".inner-webbing").fadeIn().show();
        $(".our-services").show(); 
        $(".our-team").show();
        scrollDown(800,1000);


  });

// var notify = function(message) {
//       var $message = $('<p style="display:none;">' + message + '</p>');

//       $('.notifications').append($message);
//       $message.slideDown(300, function() {
//         window.setTimeout(function() {
//           $message.slideUp(300, function() {
//             $message.remove();
//           });
//         }, 2000);
//       });
//     };

  // $("#subheader").waypoint(function(dir) {
  // });

});