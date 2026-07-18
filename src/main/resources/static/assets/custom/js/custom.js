$(document).ready(function(){
if ($(window).width() <= 768) {
    $('#mastermenu').removeClass('menuscroll');
} else {
    $('#mastermenu').addClass('menuscroll');
}

$(".clearallnotify").click(function(){
    $("#notification_h a").remove();
    $(".noti-icon-badge").empty().append("0");
 });

$(window).on("scroll", function(){ 
    if ($(this).scrollTop() > 300) { 
        $('.back-to-top').fadeIn(); 
    } else { 
        $('.back-to-top').fadeOut(); 
    } 
}); 

$('.back-to-top').on("click", function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
}); 
    
//   start for add users script
    $(document).on('click', '.user_add_btn', function(){
        $("#user_details").hide();
        $("#user_add_details").show();
    });

    $(document).on('click', '.show_user_table', function(){
        $("#user_details").show();
        $("#user_add_details").hide();
        $('#user_datatable').DataTable().draw();
        $('#certifications_datatable').DataTable().draw();
    });

    $(document).on('click', '.save_user_details', function(){
        $("#user_details").show();
        $("#user_add_details").hide();
    });
//    end for add users script
    
//    start for add site script
    $(document).on('click', '.sites_add_btn', function(){
        $("#site_details").hide();
        $("#sites_add_detail").show();
    });

    $(document).on('click', '.show_site_table', function(){
        $("#site_details").show();
        $("#sites_add_detail").hide();
    });

    $(document).on('click', '.save_site_details', function(){
        $("#site_details").show();
        $("#sites_add_detail").hide();
    });
//    end for add site script
    
//    start for add business region script
    $(document).on('click', '.business_region_add_btn', function(){
        $("#business_region_details").hide();
        $("#business_region_add_details").show();
    });

    $(document).on('click', '.show_business_region_table', function(){
        $("#business_region_details").show();
        $("#business_region_add_details").hide();
        $('#business_region_datatable').DataTable().draw();
    });

    $(document).on('click', '.save_business_region_details', function(){
        $("#business_region_details").show();
        $("#business_region_add_details").hide();
    });
//    end for add business region script
    
//    start for add business group script
    $(document).on('click', '.business_group_add_btn', function(){
        $("#business_group_details").hide();
        $("#business_group_add_details").show();
    });

    $(document).on('click', '.show_business_group_table', function(){
        $("#business_group_details").show();
        $("#business_group_add_details").hide();
        $('#business_group_datatable').DataTable().draw();
    });

    $(document).on('click', '.save_business_group_details', function(){
        $("#business_group_details").show();
        $("#business_group_add_details").hide();
    });
//    end for add business group script
    
//    start for add business group script
    $(document).on('click', '.client_question_add_btn', function(){
        $("#client_question_details").hide();
        $("#client_question_add_details").show();
    });

    $(document).on('click', '.show_client_question_table', function(){
        $("#client_question_details").show();
        $("#client_question_add_details").hide();
        $('#client_question_datatable').DataTable().draw();
        $('#inspection_datatable').DataTable().draw();
    });

    $(document).on('click', '.save_client_question_details', function(){
        $("#client_question_details").show();
        $("#client_question_add_details").hide();
    });
//    end for add business group script
    
//    start for add client script
    $(document).on('click', '.client_add_btn', function(){
        $("#portfolio_details").hide();
        $("#portfolio_add_detail").show();
    });

    $(document).on('click', '.show_port_table', function(){
        $("#portfolio_details").show();
        $("#portfolio_add_detail").hide();
    });

    $(document).on('click', '.save_port_details', function(){
        $("#portfolio_details").show();
        $("#portfolio_add_detail").hide();
    });
//    end for add client script\
    
//    start for add capex script
    $(document).on('click', '.capex_add_btn', function(){
        $("#capex_details").hide();
        $("#capex_add_details").show();
    });

    $(document).on('click', '.show_capex_table', function(){
        $("#capex_details").show();
        $("#capex_add_details").hide();
        $('#capex_datatable').DataTable().draw();
        $('#gross_datatable').DataTable().draw();
    });

    $(document).on('click', '.save_capex_details', function(){
        $("#capex_details").show();
        $("#capex_add_details").hide();
    });
//    end for add capex script
    
//    start for add tenant script
    $(document).on('click', '.tenants_add_btn', function(){
        $("#tenant_details").hide();
        $("#tenant_add_details").show();
    });

    $(document).on('click', '.show_tenant_table', function(){
        $("#tenant_details").show();
        $("#tenant_add_details").hide();
        $('#tenant_datatable').DataTable().draw();
    });

    $(document).on('click', '.save_tenant_details', function(){
        $("#tenant_details").show();
        $("#tenant_add_details").hide();
    });
//    end for add tenant script
    
//    start for add owner script
    $(document).on('click', '.owners_add_btn', function(){
        $("#owners_details").hide();
        $("#owner_add_details").show();
    });

    $(document).on('click', '.show_owner_table', function(){
        $("#owners_details").show();
        $("#owner_add_details").hide();
        $('#owner_datatable').DataTable().draw();
    });

    $(document).on('click', '.save_owner_details', function(){
        $("#owners_details").show();
        $("#owner_add_details").hide();
    });
//    end for add owner script
});

/* Hide Loading Box (Preloader) */
function handlePreloader() {
    if($('.preloader').length){
        $('.preloader').delay(500).fadeOut(500);
    }
}

/* When document is loading, do */
$(window).on('load', function() {
    handlePreloader();
    $(window).resize(function(){
        if (typeof extracted1 === "function") { 
    extracted1();
        }
});
});

$('#imagechanges span img').on('click', function(){
    $('span img.imgactive').removeClass('imgactive');
    $(this).addClass('imgactive');
});

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

$(document).on({
    mouseover: function (e) {
    $(this).tooltip("show");
    },
    mouseout: function (e) {
    $(this).tooltip("hide");
    }
    }, `[data-toggle="tooltip"]`);
    
    $(document).on({
    mouseover: function (e) {
    $(this).popover("show");
    },
    mouseout: function (e) {
    $(this).popover("hide");
    }
    }, `[data-toggle="popover"]`);