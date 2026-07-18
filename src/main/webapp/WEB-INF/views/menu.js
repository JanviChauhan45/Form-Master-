var usertype = localStorage.getItem("username");

if (usertype == "admin") {
    document.write("<div class='navbar-custom'>");
    document.write("<div class='container-fluid colmspadding'>");
    document.write("<div id='navigation'>");

    document.write("<ul class='navigation-menu'>");
    document.write("<li class='has-submenu' id='master_form'>");
    document.write("<a href='master_form.html'><i class='fa fa-plus-circle' aria-hidden='true'></i>Create Form</a>");
    document.write("</li>");

    document.write("<li class='has-submenu' id='fill_forms'>");
    document.write("<a href='fill_forms.html'><i class='fa fa-file-text-o' aria-hidden='true'></i>Fill Form</a>");
    document.write("</li>");

    document.write("<li class='has-submenu' id='completed_forms'>");
    document.write("<a href='completed_forms.html'><i class='fa fa-check-circle' aria-hidden='true'></i>Completed Form</a>");
    document.write("</li>");

    // document.write("<li class='has-submenu float-menu' id='adminpanel' style='float: none'>");
    // document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reporting</a>");
    // document.write("<ul class='submenu'>");
    // document.write("<li><a href='fill_forms.html' class='subpaddings'>Fill Forms</a></li>");
    // document.write("<li><a href='completed_forms.html' class='subpaddings'>Completed Forms</a></li>");
    // document.write("</ul>");
    // document.write("</li>");

    document.write("<li class='has-submenu float-menu' id='adminpanel' style='float: none'>");
    document.write("<a href='#'><i class='fa fa-tasks' aria-hidden='true'></i>Masters</a>");
    document.write("<ul class='submenu'>");
    document.write("<li><a href='master_users.html' class='subpaddings'>Users</a></li>");
    document.write("</ul>");
    document.write("</li>");

    document.write("</ul>");

    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
} 

else if (usertype == "client") 
{
    document.write("<div class='navbar-custom'>");
    document.write("<div class='container-fluid colmspadding'>");
    document.write("<div id='navigation'>");

    document.write("<ul class='navigation-menu'>");

    document.write("<li class='has-submenu' id='fill_forms'>");
    document.write("<a href='fill_forms.html'><i class='fa fa-file-text-o' aria-hidden='true'></i>Fill Form</a>");
    document.write("</li>");

    document.write("<li class='has-submenu' id='completed_forms'>");
    document.write("<a href='completed_forms.html'><i class='fa fa-check-circle' aria-hidden='true'></i>Completed Form</a>");
    document.write("</li>");

    document.write("</ul>");
    document.write("</li>");
    document.write("</ul>");

    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
}