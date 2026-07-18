document.write("<div class='modal fade changepasswordmodal' tabindex='-1'>");
document.write("<div class='modal-dialog modal-sm modal-dialog-centered'>");
document.write("<div class='modal-content'>");
document.write("<div class='modal-header'>");
document.write("<button type='button' class='close' data-dismiss='modal'>");
document.write("<span>x</span><span class='sr-only'>Close</span>");
document.write("</button>");
document.write("<h4 class='modal-title'>Change Password</h4>");
document.write("</div>");

document.write("<div class='modal-body'>");
document.write("<div class='row'>");
document.write("<div class='col-xl-12 col-lg-12 col-sm-12'>");
document.write("<div class='form-group'>");
document.write("<label>Current</label>");
document.write("<input type='password' class='form-control'>");
document.write("</div>");

document.write("<div class='form-group'>");
document.write("<label>New</label>");
document.write("<input type='password' class='form-control'>");
document.write("</div>");

document.write("<div class='form-group'>");
document.write("<label>Re-type New</label>");
document.write("<input type='password' class='form-control'>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='modal-footer text-right'>");
document.write("<a href='javascript:void(0)' class='btn btn-success text-white btn-padding mr-2' data-dismiss='modal'><i class='fa fa-floppy-o mr-2'></i>Save Changes</a>");
document.write("<a href='javascript:void(0)' class='btn btn-danger text-white btn-padding' data-dismiss='modal'><i class='fa fa-times mr-2'></i>Close</a>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='modal modal-right fade addtimesheetsmodal' tabindex='-1'>");
document.write("<div class='modal-dialog' style='width: 550px !important;'>");
document.write("<div class='modal-content'>");
document.write("<div class='modal-header'>");
document.write("<h4 class='modal-title'>Timesheet</h4>");
document.write("<button type='button' class='close' data-dismiss='modal'>");
document.write("<span aria-hidden='true'>x</span>");
document.write("</button>");
document.write("</div>");

document.write("<div class='modal-body pt-2 pb-2 pl-3 pr-3'>");

document.write("<div class='row gridtimesheetdata'>");
document.write("<div class='col-xl-3 col-lg-3 col-sm-4 colmspadding'>");
document.write("<div class='form-group mb-0'>");
document.write("<label>Date</label>");
document.write("<div class='input-group date'>");
document.write("<input type='text' class='form-control' placeholder='dd/mm/yyyy' id='search_timesheet_date'>");
document.write("<span class='input-group-addon inputgroups'>");
document.write("<i class='mdi mdi-calendar'></i>");
document.write("</span>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-4 col-lg-3 col-sm-3 btntop colmspadding'>");
document.write("<div class='form-group mb-0'>");
document.write("<a class='btn btn-success text-white btn-padding' id='searchbtn'><i class='fa fa-search mr-2'></i>Search</a>");

document.write("<a class='btn btn-danger text-white btn-padding ml-1'><i class='fa fa-refresh mr-2'></i>Reset</a>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<hr class='mb-2 gridtimesheetdata'>");

document.write("<div class='row gridtimesheetdata'>");
document.write("<div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'>");
document.write("<table id='addtimesheet_datatable' class='table table-custom-hover'>");
document.write("<thead>");
document.write("<tr>");
document.write("<th>Activity Name</th>");
document.write("<th width='20%'>Hours</th>");
document.write("<th class='text-center' width='12%'>Remarks</th>");
document.write("<th class='text-center' width='12%'>Action</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<td>Scheduled</td>");
document.write("<td>07:00<div class='text-muted fontsize11'>(09:30-18:00)</div></td>");
document.write("<td class='text-center'>");
document.write("<span data-toggle='modal' data-target='.addremarksmodal'>");
document.write("<a href='javascript:void(0)' class='text-info fa-size' data-toggle='tooltip' data-placement='bottom' data-original-title='View'>");
document.write("<i class='fa fa-info'></i>");
document.write("</a>");
document.write("</span>");
document.write("</td>");
document.write("<td class='text-center'>");
document.write("<span class='delete-user-alert'><a href='javascript:void(0)' class='text-danger fa-size' data-toggle='tooltip' data-placement='bottom' data-original-title='Delete'><i class='fa fa-trash'></i></a></span>");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Upcoming</td>");
document.write("<td>02:00<div class='text-muted fontsize11'>(18:00-20:00)</div></td>");
document.write("<td class='text-center'>");
document.write("<span data-toggle='modal' data-target='.addremarksmodal'>");
document.write("<a href='javascript:void(0)' class='text-info fa-size' data-toggle='tooltip' data-placement='bottom' data-original-title='View'>");
document.write("<i class='fa fa-info'></i>");
document.write("</a>");
document.write("</span>");
document.write("</td>");
document.write("<td class='text-center'>");
document.write("<span class='delete-user-alert'><a href='javascript:void(0)' class='text-danger fa-size' data-toggle='tooltip' data-placement='bottom' data-original-title='Delete'><i class='fa fa-trash'></i></a></span>");
document.write("</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");
document.write("</div>");
document.write("</div>");

document.write("<div class='row addtimesheetdata' style='display: none;'>");
document.write("<div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'>");
document.write("<h5 class='mt-1 border-bottom font-weight-600 pb-2 mb-2 text-info'>Add Timesheet");
document.write("<a class='btn btn-warning float-right btn-padding backtotimesheetgrid'><i class='fa fa-undo mr-1'></i> Move Back</a>");
document.write("</h5>");
document.write("</div>");
document.write("</div>");

document.write("<div class='row addtimesheetdata' style='display: none;'>");
document.write("<div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>Date<span class='text-danger ml-1'>*</span></label>");
document.write("<div class='input-group date'>");
document.write("<input type='text' class='form-control' placeholder='dd/mm/yyyy' id='timesheet_add'>");
document.write("<span class='input-group-addon inputgroups'>");
document.write("<i class='mdi mdi-calendar'></i>");
document.write("</span>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>From Time<span class='text-danger ml-1'>*</span></label>");
document.write("<div class='input-group bootstrap-timepicker timepicker'>");
document.write("<input id='timesheetfromtime' type='text' class='form-control'>");
document.write("<span class='input-group-addon inputgroups'><i class='mdi mdi-clock'></i></span>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>To Time<span class='text-danger ml-1'>*</span></label>");
document.write("<div class='input-group bootstrap-timepicker timepicker'>");
document.write("<input id='timesheettotime' type='text' class='form-control'>");
document.write("<span class='input-group-addon inputgroups'><i class='mdi mdi-clock'></i></span>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-6 col-lg-6 col-sm-6 colmspadding'>");
document.write("<div class='form-group'>");
document.write("<label>Activity<span class='text-danger ml-1'>*</span></label>");
document.write("<select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5'>");
document.write("<option value='' selected='selected'>Select</option>");
document.write("<option value='1'>Scheduled Activities</option>");
document.write("<option value='2'>Upcoming Activities</option>");
document.write("</select>");
document.write("</div>");
document.write("</div>");

document.write("<div class='col-xl-6 col-lg-6 col-sm-6 colmspadding'>");
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

document.write("<div class='col-xl-6 col-lg-6 col-sm-6 colmspadding'>");
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

document.write("<div class='col-xl-6 col-lg-6 col-sm-6 colmspadding'>");
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
document.write("<div class='form-group mb-0'>");
document.write("<label>Remarks<span class='text-danger ml-1'>*</span></label>");
document.write("<textarea class='form-control textareasize' style='resize: none;'></textarea>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='modal-footer text-right'>");
document.write("<a class='btn btn-success btn-padding mr-2 showtimesheetaddbtn' data-dismiss='modal' style='display: none;'><i class='fa fa-floppy-o mr-2' aria-hidden='true'></i>Save</a>");
document.write("<a class='btn btn-success btn-padding showtimesheetaddbtn' data-dismiss='modal' style='display: none;'><i class='fa fa-times mr-2' aria-hidden='true'></i>Close</a>");

document.write("<a class='btn btn-danger btn-padding hidetimesheetclosebtn' data-dismiss='modal'><i class='fa fa-times mr-2'></i>Close</a>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='modal fade addremarksmodal' tabindex='-1'>");
document.write("<div class='modal-dialog modal-md modal-dialog-centered'>");
document.write("<div class='modal-content'>");
document.write("<div class='modal-header'>");
document.write("<button type='button' class='close' data-dismiss='modal'>");
document.write("<span>x</span><span class='sr-only'>Close</span>");
document.write("</button>");
document.write("<h4 class='modal-title'>Remarks</h4>");
document.write("</div>");
document.write("<div class='modal-body'>");
document.write("<div class='detailsbg'>");
document.write("<div class='row pl-2 pr-2'>");
document.write("<div class='col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding'>");
document.write("<p class='mb-0 font-weight-600'><span class='font-weight-700'>Client:</span>");
document.write("<span>Colliers International</span>");
document.write("</p>");

document.write("<p class='mb-0 font-weight-600'><span class='font-weight-700'>Site:</span>");
document.write("<span>1 Yonge Street - Operator Form - Semi-Annually</span>");
document.write("</p>");

document.write("<p class='mb-0 font-weight-600'><span class='font-weight-700'>Building:</span>");
document.write("<span>40 & 46 Elgin Street, Ottawa, ON</span>");
document.write("</p>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='row pl-2 pr-2'>");
document.write("<div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'>");
document.write("<p class='text-justify mb-0'>");
document.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
document.write("</p>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div class='modal-footer'>");
document.write("<a class='btn btn-danger text-white btn-padding float-right' data-dismiss='modal'><i class='fa fa-times mr-2'></i>Close</a>");
document.write("</div>");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.writeln("<script type='text/javascript' src='http://103.106.20.186:9007/riskcheck/assets/plugins/moment/moment.js'></script>");
document.writeln("<script type='text/javascript' src='http://103.106.20.186:9007/riskcheck/assets/plugins/bootstrap-timepicker/bootstrap-timepicker.js'></script>");
document.writeln("<script type='text/javascript' src='http://103.106.20.186:9007/riskcheck/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js'></script>");

$(document).ready(function() {
    // setTimeout(function() {
    $('.addtimesheetsmodal').on('shown.bs.modal', function(e) {
        $('#addtimesheet_datatable').DataTable({
            destroy: true,
            scrollX: true,
            "bAutoWidth": true,
            paging: true,
            "bLengthChange": false,
            "columnDefs": [{
                "targets": [2, 3],
                "orderable": false
            }],
            "pageLength": 10,
            fixedColumns: {
                rightColumns: 1,
                leftColumns: 0
            },
            language: {
                paginate: {
                    next: '<i class="fa fa-angle-double-right">',
                    previous: '<i class="fa fa-angle-double-left">'
                }
            },
            dom: "<'row'<'col-xl-6 col-lg-8 col-sm-9 colmspadding'pi><'col-xl-6 col-lg-4 col-sm-3 text-right'<'toolbar1'>>>" +
                "<'row'<'col-sm-12'tr>>",
            fnInitComplete: function() {
                $('div.toolbar1').html('<a href="javascript:void(0)" class="btn btn-warning float-right btn-padding mb-1 addtimesheetdetails"><i class="fa fa-plus"></i> Add</a>');
            },
        });
    });

    $(document).on("click", ".addtimesheetdetails", function() {
        $(".addtimesheetdata").slideDown('slow');
        $(".gridtimesheetdata").slideUp('slow');
        $(".showtimesheetaddbtn").show();
        $(".hidetimesheetclosebtn").hide();
    });

    $(document).on("click", ".backtotimesheetgrid", function() {
        $(".addtimesheetdata").slideUp('slow');
        $(".gridtimesheetdata").slideDown('slow');
        $(".showtimesheetaddbtn").hide();
        $(".hidetimesheetclosebtn").show();
    });

    $('#timesheetfromtime').timepicker({
        minuteStep: 1,
        icons: {
            up: 'mdi mdi-chevron-up',
            down: 'mdi mdi-chevron-down'
        },
        // showSeconds: true,
        showMeridian: false,
    });

    $('#timesheettotime').timepicker({
        minuteStep: 1,
        icons: {
            up: 'mdi mdi-chevron-up',
            down: 'mdi mdi-chevron-down'
        },
        // showSeconds: true,
        showMeridian: false,
    });

    $('#timesheet_add').closest('div').datepicker({
        autoclose: true,
        todayHighlight: true,
        format: "dd/mm/yyyy",
        clearBtn: true
    });

    $('#search_timesheet_date').closest('div').datepicker({
        autoclose: true,
        todayHighlight: true,
        format: "dd/mm/yyyy",
        clearBtn: true
    });
    // }, 3000);
});