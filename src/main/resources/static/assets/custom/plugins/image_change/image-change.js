
        $(document).ready(function(){
        

            $(".image-change-button1").click(function() {
                $(".background-image-body").addClass("background1");
                $(".background-image-body").removeClass("background2");
                $(".background-image-body").removeClass("background3");
                $(".background-image-body").removeClass("background4");
                $(".background-image-body").removeClass("background5");
            });
            $(".image-change-button2").click(function() {
                $(".background-image-body").removeClass("background1");
                $(".background-image-body").addClass("background2"),
                $(".background-image-body").removeClass("background3");
                $(".background-image-body").removeClass("background4");
                $(".background-image-body").removeClass("background5")
            });
            $(".image-change-button3").click(function() {
                $(".background-image-body").removeClass("background1");
                $(".background-image-body").removeClass("background2");
                $(".background-image-body").addClass("background3");
                $(".background-image-body").removeClass("background4");
                $(".background-image-body").removeClass("background5")
            });
            $(".image-change-button4").click(function() {
                $(".background-image-body").removeClass("background1");
                $(".background-image-body").removeClass("background2");
                $(".background-image-body").removeClass("background3");
                $(".background-image-body").addClass("background4");
                $(".background-image-body").removeClass("background5");
            });
            $(".image-change-button5").click(function() {
                $(".background-image-body").removeClass("background1");
                $(".background-image-body").removeClass("background2");
                $(".background-image-body").removeClass("background3");
                $(".background-image-body").removeClass("background4");
                $(".background-image-body").addClass("background5")
            });
           
    
        });

        
        $(document).ready(function() {
          $().ready(function() {
            $sidebar = $('.sidebar');
    
            $sidebar_img_container = $sidebar.find('.sidebar-background');
    
            $full_page = $('.full-page');
    
            $sidebar_responsive = $('body > .navbar-collapse');
    
            window_width = $(window).width();
    
            fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
    
            if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
              if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
              }
    
            }
    
            $('.fixed-plugin a').click(function(event) {
              // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
              if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                  event.stopPropagation();
                } else if (window.event) {
                  window.event.cancelBubble = true;
                }
              }
            });
    
          });
        });
