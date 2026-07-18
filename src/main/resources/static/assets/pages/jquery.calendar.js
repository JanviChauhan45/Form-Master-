/**
* Theme: Highdmin - Responsive Bootstrap 4 Admin Dashboard
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
        this.$modal = $('#event-modal'),
        this.$event = ('#external-events div.external-event'),
        this.$calendar = $('#calendar'),
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
//    CalendarApp.prototype.onEventClick =  function (calEvent, jsEvent, view) {
//        var $this = this;
//            var form = $("<form></form>");
//            form.append("<label>Change event name</label>");
//            form.append("<div class='input-group m-b-15'><input class='form-control' type=text value='" + calEvent.title + "' /><span class='input-group-append'><button type='submit' class='btn btn-success btn-md waves-effect waves-light'><i class='fa fa-check'></i> Save</button></span></div>");
//            $this.$modal.modal({
//                backdrop: 'static'
//            });
//            $this.$modal.find('.delete-event').show().end().find('.save-event').hide().end().find('.modal-body').empty().prepend(form).end().find('.delete-event').unbind('click').click(function () {
//                $this.$calendarObj.fullCalendar('removeEvents', function (ev) {
//                    return (ev._id == calEvent._id);
//                });
//                $this.$modal.modal('hide');
//            });
//            $this.$modal.find('form').on('submit', function () {
//                calEvent.title = form.find("input[type=text]").val();
//                $this.$calendarObj.fullCalendar('updateEvent', calEvent);
//                $this.$modal.modal('hide');
//                return false;
//            });
//        
//    },
    /* on select */
    CalendarApp.prototype.onSelect = function (start, end, allDay) {
        var $this = this;
            $this.$modal.modal({
                backdrop: 'static'
            });
            var form = $("<form></form>");
            form.append("<div class='row'></div>");
            form.find(".row")
                .append("<div class='col-md-2 colmspadding'><div class='form-group'><label>Start Time</label><div class='input-group clockpicker' data-placement='top' data-align='top' data-autoclose='true'><input type='text' class='form-control' value='13:14'><div class='input-group-append'><span class='input-group-text'><i class='mdi mdi-clock'></i></span></div></div></div></div>")
                .append("<div class='col-md-2 colmspadding'><div class='form-group'><label>End Time</label><div class='input-group  clockpicker' data-placement='top' data-align='top' data-autoclose='true'><input type='text' class='form-control' value='13:14'><div class='input-group-append'><span class='input-group-text'><i class='mdi mdi-clock'></i></span></div></div></div></div>")
                .append("<div class='col-md-4 colmspadding'><div class='form-group'><label>Holiday List</label><select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5' name='category'></select></div></div>")
                .find("select[name='category']")
                .append("<option value=''>Good Friday</option>")
                .append("<option value=''>Easter Monday</option>")
                .append("<option value=''>Victoria Day</option>")
                .append("<option value=''>Quebec national Holiday</option>")
                .append("<option value=''>Canada Day</option>")
                .append("<option value=''>British Columbia Day</option>")
                .append("<option value=''>Heritage Day</option>")
                .append("<option value=''>Labour Day</option></div></div>");
            $this.$modal.find('.delete-event').hide().end().find('.save-event').show().end().find('.modal-body').empty().prepend(form).end().find('.save-event').unbind('click').click(function () {
                form.submit();
            });
            $this.$modal.find('form').on('submit', function () {
                var beginning = form.find("input[name='beginning']").val();
                var ending = form.find("input[name='ending']").val();
                var categoryClass = form.find("select[name='category'] option:checked").val();
                return false;
                
            });
            $this.$calendarObj.fullCalendar('unselect');
            refreshSelectPicker();
    },
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
                title: 'Montreal - 105 rue Saint-Jacques',
                start: '2019-02-12T08:00:00',
                end: '2019-02-12T09:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Montreal - 119 rue Saint-Jacques',
                start: '2019-02-13T10:00:00',
                end: '2019-02-13T12:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Montreal - 121 rue Saint-Jacques',
                start: '2019-02-14T13:00:00',
                end: '2019-02-14T15:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Montreal - 129 rue Saint-Jacques',
                start: '2019-02-15T07:00:00',
                end: '2019-02-15T09:00:00',
                overlap: false,
                className: 'bg-success'
            }];

        var $this = this;
        $this.$calendarObj = $this.$calendar.fullCalendar({
            slotDuration: '00:15:00', /* If we want to split day time each 15minutes */
            minTime: '00:00:00',
            maxTime: '23:59:00',  
            defaultView: 'agendaWeek',  
            handleWindowResize: true,   
            height: $(window).height() - 200,   
            header: {
//                left: 'prev,next today',
                left: 'prev,next',
                center: 'title',
//                right: 'month,agendaWeek,agendaDay'
                right: ''
            },
            events: defaultEvents,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            drop: function(date) { $this.onDrop($(this), date); },
            select: function (start, end, allDay) { $this.onSelect(start, end, allDay); },
//            eventClick: function(calEvent, jsEvent, view) { $this.onEventClick(calEvent, jsEvent, view); }

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
