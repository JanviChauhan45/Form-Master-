/**
* Author: Coderthemes
* Component: Full-Calendar
*/


!function($) {
    "use strict";
    function refreshSelectPicker() {
        $('.selectpicker').selectpicker('refresh');
        $('.clockpicker').clockpicker('refresh');
    }
    var CalendarApp = function() {
        this.$body = $("body")
        this.$modal = $('#consult_modal'),
        this.$event = ('#external-events div.external-event'),
        this.$calendar = $('#consultantcalendar'),
        this.$saveCategoryBtn = $('.save-category'),
        this.$categoryForm = $('#add-category form'),
        this.$extEvents = $('#external-events'),
        this.$calendarObj = null
    };


    /* on drop */
    CalendarApp.prototype.onDrop = function (eventObj, date) { 
        var $this = this;
            // retrieve the dropped element's stored Event Object
            var originalEventObject = eventObj.data('eventObject');
            var $categoryClass = eventObj.attr('data-class');
            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);
            // assign it the date that was reported
            copiedEventObject.start = date;
            if ($categoryClass)
                copiedEventObject['className'] = [$categoryClass];
            // render the event on the calendar
            $this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                eventObj.remove();
            }
    },
    /* on click on event */
    CalendarApp.prototype.onEventClick =  function (calEvent, jsEvent, view) {
        var $this = this;
          var form = $("<form></form>");
            form.append("<div class='row'><div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'><p class='compact mb-1'><span class='font-weight-700'>Client</span><span class='displayblock font-medium-2'>Bank of Montreal</span></p><p class='compact mb-1'><span class='font-weight-700'>Assign Users</span><span class='displayblock font-medium-2'>Amit Amin (Approve)</span></p></div><div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'><p class='compact mb-1'><span class='font-weight-700'>Site</span><span class='displayblock font-medium-2'>Barrie Computer Centre (BCC)</span></p><p class='compact mb-1'><span class='font-weight-700'>Date/Time</span><span class='font-medium-2 displayblock mb-0'>12-Oct-2019 06:30 PM</span></p></div><div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'><p class='compact mb-1'><span class='font-weight-700'>Building</span><span class='black displayblock font-medium-2'>Computer Room Building (CRB)</span></p><p class='compact mb-1'><span class='font-weight-700'>Status</span><span class='black displayblock font-medium-2'><span class='nobadge badge-danger'>Pending</span></span></p></div></div><div class='row'><div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'><p class='compact mb-1'><span class='font-weight-700'>Address</span><span class='displayblock font-medium-2'>55 Bloor Street West, Toronto Ontario, CANADA, M4W 1A6</span></p></div><div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'><p class='compact mb-1'><span class='font-weight-700'>Checklist</span><span class='displayblock font-medium-2'>Checklist 1</span></p></div><div class='col-xl-4 col-lg-4 col-sm-4 colmspadding'><p class='compact mb-1'><span class='font-weight-700'>Confirmation Letter</span><span class='displayblock font-medium-2'>Confirmation Letter</span></p></div></div><div class='row mt-1'><div class='col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding'><h5 class='mt-1 border-bottom font-weight-600 pb-1 mb-2 text-info'>Consultant Details</h5></div></div><div class='row'><div class='col-xl-12 col-lg-12 col-sm-12 colmspadding'><div class='table-responsive mb-0 square scrollbar-dusty-grass square thin' style='max-height: 150px; overflow-y: auto;'><table class='table table-striped table-bordered nowrap mb-0'><thead><tr class='thbgcolor'><th>Module</th><th>Consultant Name</th></tr></thead><tbody><tr><td>ENcheck</td><td>Consultant Name 1</td></tr><tr><td>GreenCheck</td><td>Consultant Name 2</td></tr><tr><td>HAScheck</td><td>Consultant Name 3</td></tr><tr><td>INDcheck</td><td>Consultant Name 4</td></tr></tbody></table></div></div></div>");
            $this.$modal.modal({
              backdrop: 'static'
          });
            $this.$modal.find('.delete-event').show().end().find('.save-event').hide().end().find('.modal-body').empty().prepend(form).end().find('.delete-event').unbind('click').click(function () {
                $this.$calendarObj.fullCalendar('removeEvents', function (ev) {
                    return (ev._id == calEvent._id);
                });
                $this.$modal.modal('hide');
            });
            $this.$modal.find('form').on('submit', function () {
                calEvent.title = form.find("input[type=text]").val();
                $this.$calendarObj.fullCalendar('updateEvent', calEvent);
                $this.$modal.modal('hide');
                return false;
          });
      
    },
    /* on select */
//    CalendarApp.prototype.onSelect = function (start, end, allDay) {
//        var $this = this;
//            $this.$modal.modal({
//                backdrop: 'static'
//            });
//            var form = $("<form></form>");
//            form.append("<div class='row'></div>");
//            form.find(".row")
//                .append("<div class='col-md-2 colmspadding'><div class='form-group'><label>Start Time</label><div class='input-group clockpicker' data-placement='top' data-align='top' data-autoclose='true'><input type='text' class='form-control' value='13:14'><div class='input-group-append'><span class='input-group-text'><i class='mdi mdi-clock'></i></span></div></div></div></div>")
//                .append("<div class='col-md-2 colmspadding'><div class='form-group'><label>End Time</label><div class='input-group  clockpicker' data-placement='top' data-align='top' data-autoclose='true'><input type='text' class='form-control' value='13:14'><div class='input-group-append'><span class='input-group-text'><i class='mdi mdi-clock'></i></span></div></div></div></div>")
//                .append("<div class='col-md-4 colmspadding'><div class='form-group'><label>Holiday List</label><select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5' name='category'></select></div></div>")
//                .find("select[name='category']")
//                .append("<option value=''>Good Friday</option>")
//                .append("<option value=''>Easter Monday</option>")
//                .append("<option value=''>Victoria Day</option>")
//                .append("<option value=''>Quebec national Holiday</option>")
//                .append("<option value=''>Canada Day</option>")
//                .append("<option value=''>British Columbia Day</option>")
//                .append("<option value=''>Heritage Day</option>")
//                .append("<option value=''>Labour Day</option></div></div>");
//            $this.$modal.find('.delete-event').hide().end().find('.save-event').show().end().find('.modal-body').empty().prepend(form).end().find('.save-event').unbind('click').click(function () {
//                form.submit();
//            });
//            $this.$modal.find('form').on('submit', function () {
//                var beginning = form.find("input[name='beginning']").val();
//                var ending = form.find("input[name='ending']").val();
//                var categoryClass = form.find("select[name='category'] option:checked").val();
//                return false;
//                
//            });
//            $this.$calendarObj.fullCalendar('unselect');
//            refreshSelectPicker();
//    },
    CalendarApp.prototype.enableDrag = function() {
        //init events
        $(this.$event).each(function () {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });
    }
    /* Initializing */
    CalendarApp.prototype.init = function() {
        this.enableDrag();
        /*  Initialize the calendar  */
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var form = '';
        var today = new Date($.now());

        var defaultEvents =  [{
                title: 'Central Utility Building (CUB)',
                start: '2019-10-01T09:00:00',
                end: '2019-10-01T11:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Computer Room Building (CRB)',
                start: '2019-10-03T10:00:00',
                end: '2019-10-03T12:00:00',
                overlap: false,
                className: 'bg-danger'
            },
            {
                title: '40 & 46 Elgin Street, Ottawa, ON',
                start: '2019-10-05T13:00:00',
                end: '2019-10-03T15:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Montreal - 129 rue Saint-Jacques',
                start: '2019-10-07T10:00:00',
                end: '2019-10-07T11:00:00',
                overlap: false,
                className: 'bg-danger'
            },
            {
                title: 'Pickering - 1105 Kingston Rd',
                start: '2019-10-09T10:00:00',
                end: '2019-10-09T12:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Toronto - 101 Bloor Street West',
                start: '2019-10-11T13:00:00',
                end: '2019-10-11T15:00:00',
                overlap: false,
                className: 'bg-danger'
            },
            {
                title: 'Toronto - 1235 Bay Street',
                start: '2019-10-13T15:00:00',
                end: '2019-10-13T16:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Vancouver - 1249 Granville St - The Lex',
                start: '2019-10-15T08:00:00',
                end: '2019-10-15T10:00:00',
                overlap: false,
                className: 'bg-danger'
            },
            {
                title: '102-115 Chambers Drive',
                start: '2019-10-17T09:00:00',
                end: '2019-10-17T11:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Burnaby - 8800 Glenlyon Parkway',
                start: '2019-10-18T12:00:00',
                end: '2019-10-18T14:00:00',
                overlap: false,
                className: 'bg-danger'
            }];

        var $this = this;
        $this.$calendarObj = $this.$calendar.fullCalendar({
            slotDuration: '00:15:00', /* If we want to split day time each 15minutes */
            minTime: '08:00:00',
            maxTime: '20:00:00',  
            defaultView: 'month',  
            handleWindowResize: true,   
            height: $(window).height() - 20,   
            header: {
                left: 'prev,next today',
                center: 'title',
//                right: 'month,agendaWeek,agendaDay'
                right: 'month'
            },
            events: defaultEvents,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            drop: function(date) { $this.onDrop($(this), date); },
//            select: function (start, end, allDay) { $this.onSelect(start, end, allDay); },
            eventClick: function(calEvent, jsEvent, view) { $this.onEventClick(calEvent, jsEvent, view); }

        });

        //on new event
        this.$saveCategoryBtn.on('click', function(){
            var categoryName = $this.$categoryForm.find("input[name='category-name']").val();
            var categoryColor = $this.$categoryForm.find("select[name='category-color']").val();
            if (categoryName !== null && categoryName.length != 0) {
                $this.$extEvents.append('<div class="external-event bg-' + categoryColor + '" data-class="bg-' + categoryColor + '" style="position: relative;"><i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>' + categoryName + '</div>')
                $this.enableDrag();
            }

        });
    },

   //init CalendarApp
    $.CalendarApp = new CalendarApp, $.CalendarApp.Constructor = CalendarApp;
}(window.jQuery),

//initializing CalendarApp
function($) {
    "use strict";
    $.CalendarApp.init()
}(window.jQuery);
