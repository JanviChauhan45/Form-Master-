var usertype=localStorage.getItem("username");

if(usertype=="Admin") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
document.write("<li class='has-submenu' id='client_dashboard'>");
document.write("<a href='client_dashboard.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-file-text-o' aria-hidden='true'></i>Task</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='questions.html'><i class='fa fa-question' aria-hidden='true'></i>Questions</a>");
document.write("</li>");

document.write("<li class='has-submenu' id='schedulingview'>");
document.write("<a href='scheduling.html'><i class='fa fa-calendar' aria-hidden='true'></i>Scheduling</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='expense.html'><i class='fa fa-tasks' aria-hidden='true'></i>Expense</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-cog' aria-hidden='true'></i>Asset Index</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='hazmat.html'><i class='fa fa-suitcase' aria-hidden='true'></i>HAZMAT</a>");
document.write("</li>");

document.write("<li class='has-submenu float-menu' id='adminpanel'>");
document.write("<a href='#' class='border-left'><i class='fa fa-user-circle' aria-hidden='true'></i>Admin</a>");
document.write("<ul class='submenu'>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Repositories</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_criteria'><a href='master_criteria.html'>Criteria</a></li>");
document.write("<li id='master_questions'><a href='master_questions.html'>Questions</a></li>");
document.write("<li id='master_forms'><a href='master_form.html'>Forms</a></li>");
document.write("<li id='master_characteristics'><a href='master_characteristics.html'>Characteristics</a></li>");
document.write("<li id='master_programs'><a href='master_programs.html'>Programs</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu' id='securities'>");
document.write("<a href='#'>Security</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_users'><a href='master_users.html'>Users</a></li>");
document.write("<li id='roles'><a href='roles.html'>Roles</a></li>");
document.write("<li id='roles_assign'><a href='roles_assign.html'>Assign Roles</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Owners</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_manage_owner'><a href='master_manage_owner.html'>Manage Owners</a></li>");
document.write("<li id='master_scorecard_indicator'><a href='master_scorecard_indicator.html'>Scorecard Indicator</a></li>");
document.write("<li id='master_awards'><a href='master_awards.html'>Awards</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Portfolio Elements</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_certifications'><a href='master_certifications.html'>Certifications</a></li>");
document.write("<li id='master_manage_inspections'><a href='master_manage_inspections.html'>Inspections</a></li>");
document.write("<li id='master_document_types'><a href='master_document_types.html'>Document Types</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Access Control</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_report_types'><a href='master_report_types.html'>Report Access</a></li>");
document.write("<li id='master_metric_counter'><a href='master_metric_counter.html'>Metric Counters</a></li>");
document.write("<li id='master_client_dashboard'><a href='master_client_dashboard.html'>Client Dashboard</a></li>");
document.write("<li id='master_owner_dashboard'><a href='master_owner_dashboard.html'>Owner Dashboard</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_notifications.html'>Notifications</a>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_audit_trail.html'>Audit Trail</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="Building Operator") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");

document.write("<li class='has-submenu'>");
document.write("<a href='questions.html'><i class='fa fa-question' aria-hidden='true'></i>Questions</a>");
document.write("</li>");

document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-cog' aria-hidden='true'></i>Asset Index</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="Site Manager") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
    
document.write("<li class='has-submenu' id='client_dashboard'>");
document.write("<a href='client_dashboard.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");

document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='questions.html'><i class='fa fa-question' aria-hidden='true'></i>Questions</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-cog' aria-hidden='true'></i>Asset Index</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="Management") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
    
document.write("<li class='has-submenu' id='client_dashboard'>");
document.write("<a href='client_dashboard.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");

document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='questions.html'><i class='fa fa-question' aria-hidden='true'></i>Questions</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-cog' aria-hidden='true'></i>Asset Index</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="Consultant") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
    
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='expense.html'><i class='fa fa-tasks' aria-hidden='true'></i>Expense</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-cog' aria-hidden='true'></i>Asset Index</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="Consultant Manager") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
    
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='expense.html'><i class='fa fa-tasks' aria-hidden='true'></i>Expense</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-cog' aria-hidden='true'></i>Asset Index</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="Accounts") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
    
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='expense.html'><i class='fa fa-tasks' aria-hidden='true'></i>Expense</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="Client Services") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
    
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='questions.html'><i class='fa fa-question' aria-hidden='true'></i>Questions</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-file-text-o' aria-hidden='true'></i>Task</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-cog' aria-hidden='true'></i>Asset Index</a>");
document.write("</li>");

document.write("<li class='has-submenu float-menu' id='adminpanel'>");
document.write("<a href='#' class='border-left'><i class='fa fa-user-circle' aria-hidden='true'></i>Admin</a>");
document.write("<ul class='submenu'>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Repositories</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_criteria'><a href='master_criteria.html'>Criteria</a></li>");
document.write("<li id='master_questions'><a href='master_questions.html'>Questions</a></li>");
document.write("<li id='master_forms'><a href='master_form.html'>Forms</a></li>");
document.write("<li id='master_characteristics'><a href='master_characteristics.html'>Characteristics</a></li>");
document.write("<li id='master_programs'><a href='master_programs.html'>Programs</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu' id='securities'>");
document.write("<a href='#'>Security</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_users'><a href='master_users.html'>Users</a></li>");
document.write("<li id='roles'><a href='roles.html'>Roles</a></li>");
document.write("<li id='roles_assign'><a href='roles_assign.html'>Assign Roles</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Owners</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_manage_owner'><a href='master_manage_owner.html'>Manage Owners</a></li>");
document.write("<li id='master_scorecard_indicator'><a href='master_scorecard_indicator.html'>Scorecard Indicator</a></li>");
document.write("<li id='master_awards'><a href='master_awards.html'>Awards</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Portfolio Elements</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_certifications'><a href='master_certifications.html'>Certifications</a></li>");
document.write("<li id='master_manage_inspections'><a href='master_manage_inspections.html'>Inspections</a></li>");
document.write("<li id='master_document_types'><a href='master_document_types.html'>Document Types</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Access Control</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_report_types'><a href='master_report_types.html'>Report Access</a></li>");
document.write("<li id='master_metric_counter'><a href='master_metric_counter.html'>Metric Counters</a></li>");
document.write("<li id='master_client_dashboard'><a href='master_client_dashboard.html'>Client Dashboard</a></li>");
document.write("<li id='master_owner_dashboard'><a href='master_owner_dashboard.html'>Owner Dashboard</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_notifications.html'>Notifications</a>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_audit_trail.html'>Audit Trail</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="GC Staff") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
    
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='questions.html'><i class='fa fa-question' aria-hidden='true'></i>Questions</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-file-text-o' aria-hidden='true'></i>Task</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");

document.write("<li class='has-submenu float-menu' id='adminpanel'>");
document.write("<a href='#' class='border-left'><i class='fa fa-user-circle' aria-hidden='true'></i>Admin</a>");
document.write("<ul class='submenu'>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Repositories</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_criteria'><a href='master_criteria.html'>Criteria</a></li>");
document.write("<li id='master_questions'><a href='master_questions.html'>Questions</a></li>");
document.write("<li id='master_forms'><a href='master_form.html'>Forms</a></li>");
document.write("<li id='master_characteristics'><a href='master_characteristics.html'>Characteristics</a></li>");
document.write("<li id='master_programs'><a href='master_programs.html'>Programs</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu' id='securities'>");
document.write("<a href='#'>Security</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_users'><a href='master_users.html'>Users</a></li>");
document.write("<li id='roles'><a href='roles.html'>Roles</a></li>");
document.write("<li id='roles_assign'><a href='roles_assign.html'>Assign Roles</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Owners</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_manage_owner'><a href='master_manage_owner.html'>Manage Owners</a></li>");
document.write("<li id='master_scorecard_indicator'><a href='master_scorecard_indicator.html'>Scorecard Indicator</a></li>");
document.write("<li id='master_awards'><a href='master_awards.html'>Awards</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Portfolio Elements</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_certifications'><a href='master_certifications.html'>Certifications</a></li>");
document.write("<li id='master_manage_inspections'><a href='master_manage_inspections.html'>Inspections</a></li>");
document.write("<li id='master_document_types'><a href='master_document_types.html'>Document Types</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Access Control</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_report_types'><a href='master_report_types.html'>Report Access</a></li>");
document.write("<li id='master_metric_counter'><a href='master_metric_counter.html'>Metric Counters</a></li>");
document.write("<li id='master_client_dashboard'><a href='master_client_dashboard.html'>Client Dashboard</a></li>");
document.write("<li id='master_owner_dashboard'><a href='master_owner_dashboard.html'>Owner Dashboard</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_notifications.html'>Notifications</a>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_audit_trail.html'>Audit Trail</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="HAZ Staff") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
    
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='expense.html'><i class='fa fa-tasks' aria-hidden='true'></i>Expense</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-cog' aria-hidden='true'></i>Asset Index</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");
}

else if(usertype=="Director") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");

document.write("<li class='has-submenu' id='schedulingview'>");
document.write("<a href='scheduling.html'><i class='fa fa-calendar' aria-hidden='true'></i>Scheduling</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='expense.html'><i class='fa fa-tasks' aria-hidden='true'></i>Expense</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");

document.write("<li class='has-submenu float-menu' id='adminpanel'>");
document.write("<a href='#' class='border-left'><i class='fa fa-user-circle' aria-hidden='true'></i>Admin</a>");
document.write("<ul class='submenu'>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Repositories</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_criteria'><a href='master_criteria.html'>Criteria</a></li>");
document.write("<li id='master_questions'><a href='master_questions.html'>Questions</a></li>");
document.write("<li id='master_forms'><a href='master_form.html'>Forms</a></li>");
document.write("<li id='master_characteristics'><a href='master_characteristics.html'>Characteristics</a></li>");
document.write("<li id='master_programs'><a href='master_programs.html'>Programs</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu' id='securities'>");
document.write("<a href='#'>Security</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_users'><a href='master_users.html'>Users</a></li>");
document.write("<li id='roles'><a href='roles.html'>Roles</a></li>");
document.write("<li id='roles_assign'><a href='roles_assign.html'>Assign Roles</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Owners</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_manage_owner'><a href='master_manage_owner.html'>Manage Owners</a></li>");
document.write("<li id='master_scorecard_indicator'><a href='master_scorecard_indicator.html'>Scorecard Indicator</a></li>");
document.write("<li id='master_awards'><a href='master_awards.html'>Awards</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Portfolio Elements</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_certifications'><a href='master_certifications.html'>Certifications</a></li>");
document.write("<li id='master_manage_inspections'><a href='master_manage_inspections.html'>Inspections</a></li>");
document.write("<li id='master_document_types'><a href='master_document_types.html'>Document Types</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Access Control</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_report_types'><a href='master_report_types.html'>Report Access</a></li>");
document.write("<li id='master_metric_counter'><a href='master_metric_counter.html'>Metric Counters</a></li>");
document.write("<li id='master_client_dashboard'><a href='master_client_dashboard.html'>Client Dashboard</a></li>");
document.write("<li id='master_owner_dashboard'><a href='master_owner_dashboard.html'>Owner Dashboard</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_notifications.html'>Notifications</a>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_audit_trail.html'>Audit Trail</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");       
}

else if(usertype=="Executive") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");

document.write("<li class='has-submenu' id='schedulingview'>");
document.write("<a href='scheduling.html'><i class='fa fa-calendar' aria-hidden='true'></i>Scheduling</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='expense.html'><i class='fa fa-tasks' aria-hidden='true'></i>Expense</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");

document.write("<li class='has-submenu float-menu' id='adminpanel'>");
document.write("<a href='#' class='border-left'><i class='fa fa-user-circle' aria-hidden='true'></i>Admin</a>");
document.write("<ul class='submenu'>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Repositories</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_criteria'><a href='master_criteria.html'>Criteria</a></li>");
document.write("<li id='master_questions'><a href='master_questions.html'>Questions</a></li>");
document.write("<li id='master_forms'><a href='master_form.html'>Forms</a></li>");
document.write("<li id='master_characteristics'><a href='master_characteristics.html'>Characteristics</a></li>");
document.write("<li id='master_programs'><a href='master_programs.html'>Programs</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu' id='securities'>");
document.write("<a href='#'>Security</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_users'><a href='master_users.html'>Users</a></li>");
document.write("<li id='roles'><a href='roles.html'>Roles</a></li>");
document.write("<li id='roles_assign'><a href='roles_assign.html'>Assign Roles</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Owners</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_manage_owner'><a href='master_manage_owner.html'>Manage Owners</a></li>");
document.write("<li id='master_scorecard_indicator'><a href='master_scorecard_indicator.html'>Scorecard Indicator</a></li>");
document.write("<li id='master_awards'><a href='master_awards.html'>Awards</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Portfolio Elements</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_certifications'><a href='master_certifications.html'>Certifications</a></li>");
document.write("<li id='master_manage_inspections'><a href='master_manage_inspections.html'>Inspections</a></li>");
document.write("<li id='master_document_types'><a href='master_document_types.html'>Document Types</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'>Access Control</a>");
document.write("<ul class='submenu'>");
document.write("<li id='master_report_types'><a href='master_report_types.html'>Report Access</a></li>");
document.write("<li id='master_metric_counter'><a href='master_metric_counter.html'>Metric Counters</a></li>");
document.write("<li id='master_client_dashboard'><a href='master_client_dashboard.html'>Client Dashboard</a></li>");
document.write("<li id='master_owner_dashboard'><a href='master_owner_dashboard.html'>Owner Dashboard</a></li>");
document.write("</ul>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_notifications.html'>Notifications</a>");
document.write("</li>");

document.write("<li>");
document.write("<a href='master_audit_trail.html'>Audit Trail</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");       
}

else if(usertype=="Scheduler") {
document.write("<div class='navbar-custom'>");
document.write("<div class='container-fluid colmspadding'>");
document.write("<div id='navigation'>");

document.write("<ul class='navigation-menu'>");
document.write("<li class='has-submenu' id=''>");
document.write("<a href='dashboard_employee_first.html'><i class='fa fa-home' aria-hidden='true'></i>Dashboard</a>");
document.write("</li>");
    
document.write("<li class='has-submenu' id='port'>");
document.write("<a href='portfolio.html'><i class='fa fa-folder-o' aria-hidden='true'></i>HUB</a>");
document.write("</li>");

document.write("<li class='has-submenu' id='schedulingview'>");
document.write("<a href='scheduling.html'><i class='fa fa-calendar' aria-hidden='true'></i>Scheduling</a>");
document.write("</li>");
    
document.write("<li class='has-submenu'>");
document.write("<a href='timesheet.html'><i class='fa fa-calendar-check-o' aria-hidden='true'></i>Timesheet</a>");
document.write("</li>");

document.write("<li class='has-submenu'>");
document.write("<a href='#'><i class='fa fa-pie-chart' aria-hidden='true'></i>Reports</a>");
document.write("</li>");

document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write("</div>");
document.write("</div>");
document.write("</div>");       
}