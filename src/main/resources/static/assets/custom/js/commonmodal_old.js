document.write("<div class='modal modal-right fade addtimesheetsmodal' tabindex='-1'>");
document.write("<div class='modal-dialog'>");
document.write("<div class='modal-content'>");
document.write("<div class='modal-header'>");
document.write("<h4 class='modal-title'>Add Timesheet</h4>");
document.write("<button type='button' class='close' data-dismiss='modal'>");
document.write("<span aria-hidden='true'>x</span>");
document.write("</button>");
document.write("</div>");

document.write("<div class='modal-body pt-2 pb-2 pl-3 pr-3'>");
document.write("<div class='row'>");
document.write("<div class='col-xl-6 col-lg-12 col-sm-12 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>Date</label>");
document.write("<div class='input-group date'>");
document.write("<input type='text' class='form-control' placeholder='dd/mm/yyyy' id='timesheet_add'>");
document.write("<span class='input-group-addon inputgroups'>");
document.write("<i class='mdi mdi-calendar'></i>");
document.write("</span>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='row'>");
document.write("<div class='col-xl-6 col-lg-12 col-sm-12 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>From Time</label>");
document.write("<div class='input-group bootstrap-timepicker timepicker'>");
document.write("<input id='timesheetfromtime' type='text' class='form-control'>");
document.write("<span class='input-group-addon inputgroups'><i class='mdi mdi-clock'></i></span>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-6 col-lg-12 col-sm-12 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>To Time</label>");
document.write("<div class='input-group bootstrap-timepicker timepicker'>");
document.write("<input id='timesheettotime' type='text' class='form-control'>");
document.write("<span class='input-group-addon inputgroups'><i class='mdi mdi-clock'></i></span>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>Client</label>");
document.write("<select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5'>");
document.write("<option value='' selected='selected'>Select</option>");
document.write("<option value='1'>Bank of Montreal</option>");
document.write("<option value='2'>Bentall Kennedy</option>");
document.write("<option value='3'>Cadillac Fairview</option>");
document.write("<option value='4'>Crown Property Management</option>");
document.write("<option value='5'>Harvard Property Management Inc.</option>");
document.write("</select>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>Site</label>");
document.write("<select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5'>");
document.write("<option value='' selected='selected'>Select</option>");
document.write("<option value='1'>Barrie Computer Centre (BCC)</option>");
document.write("<option value='2'>BOSC</option>");
document.write("<option value='3'>Institute for Learning (IFL)</option>");
document.write("<option value='4'>Mortgage Centre</option>");
document.write("<option value='5'>Scarborough Computer Centre (SCC)</option>");
document.write("</select>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>Building</label>");
document.write("<select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5'>");
document.write("<option value='' selected='selected'>Select</option>");
document.write("<option value='1'>Central Utility Building (CUB)</option>");
document.write("<option value='2'>Computer Room Building (CRB)</option>");
document.write("</select>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>Activitiy</label>");
document.write("<select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5'>");
document.write("<option value='' selected='selected'>Select</option>");
document.write("<option value='1'>Scheduled Activities</option>");
document.write("<option value='2'>Upcoming Activities</option>");
document.write("</select>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'>");
document.write("<div class='form-group mb-0'>");
document.write("<label>Remarks</label>");
document.write("<textarea class='form-control textareasize' style='resize: none;'></textarea>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='modal-footer text-right'>");
document.write("<a class='btn btn-success btn-padding mr-2' data-dismiss='modal'><i class='fa fa-floppy-o mr-2' aria-hidden='true'></i>Save</a>");
document.write("<a class='btn btn-success btn-padding' data-dismiss='modal'><i class='fa fa-refresh mr-2' aria-hidden='true'></i>Reset</a>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.writeln("<script type='text/javascript' src='http://103.106.20.186:9007/riskcheck/assets/plugins/moment/moment.js'></script>");
document.writeln("<script type='text/javascript' src='http://103.106.20.186:9007/riskcheck/assets/plugins/bootstrap-timepicker/bootstrap-timepicker.js'></script>");
document.writeln("<script type='text/javascript' src='http://103.106.20.186:9007/riskcheck/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js'></script>");

$(document).ready(function(){
$('#timesheetfromtime').timepicker({
    minuteStep: 1,
    icons: {
        up: 'mdi mdi-chevron-up',
        down: 'mdi mdi-chevron-down'
    }
});

$('#timesheettotime').timepicker({
    minuteStep: 1,
    icons: {
        up: 'mdi mdi-chevron-up',
        down: 'mdi mdi-chevron-down'
    }
});

$('#timesheet_add').closest('div').datepicker({
    autoclose: true,
    todayHighlight: true,
    format: "dd/mm/yyyy",
    clearBtn: true
});
});