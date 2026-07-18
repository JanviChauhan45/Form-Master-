/**
* Author: Coderthemes
* Component: Full-Calendar
*/


!function($) {
    "use strict";
    function refreshSelectPicker() {
        $('.selectpicker').selectpicker('refresh');
        $('#fromedittime').timepicker({
            minuteStep: 1,
            icons: {
                up: 'mdi mdi-chevron-up',
                down: 'mdi mdi-chevron-down'
            }
        });
        
        $('#toedittime').timepicker({
            minuteStep: 1,
            icons: {
                up: 'mdi mdi-chevron-up',
                down: 'mdi mdi-chevron-down'
            }
        });
        
        $('#fromaddtime').timepicker({
            minuteStep: 1,
            icons: {
                up: 'mdi mdi-chevron-up',
                down: 'mdi mdi-chevron-down'
            }
        });
        
        $('#toaddtime').timepicker({
            minuteStep: 1,
            icons: {
                up: 'mdi mdi-chevron-up',
                down: 'mdi mdi-chevron-down'
            }
        });
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
    CalendarApp.prototype.onEventClick =  function (calEvent, jsEvent, view) {
       var $this = this;
            var form = $("<form></form>");
            form.append("<div class='row'></div>");
            form.find(".row")
                .append("<div class='col-md-3 colmspadding'><div class='form-group'><label>Start Time</label><div class='input-group bootstrap-timepicker timepicker'><input id='fromedittime' type='text' class='form-control'><span class='input-group-addon inputgroups'><i class='mdi mdi-clock'></i></span></div></div></div>")
                .append("<div class='col-md-3 colmspadding'><div class='form-group'><label>End Time</label><div class='input-group bootstrap-timepicker timepicker'><input id='toedittime' type='text' class='form-control'><span class='input-group-addon inputgroups'><i class='mdi mdi-clock'></i></span></div></div></div>")
                .append("<div class='col-md-6 colmspadding'><div class='form-group'><label>Building Name</label><select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5' name='category'></select></div></div>")
                .find("select[name='category']")
                .append("<option value=''>Computer Room Building (CRB)</option>")
                .append("<option value=''>Central Utility Building (CUB)</option>")
                .append("<option value=''>Burlington - 3398 Harvester Road</option>")
                .append("<option value=''>Mississauga - 2465 Argentia Road</option>")
                .append("<option value=''>Calgary City Centre</option></div></div>");
            $this.$modal.modal({
                backdrop: 'static'
            });
            $this.$modal.find('.delete-event').show().end().find('.appoint-event').show().end().find('.save-event').hide().end().find('.modal-body').empty().prepend(form).end().find('.delete-event').unbind('click').click(function () {
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
            refreshSelectPicker();
        
    },
    /* on select */
    CalendarApp.prototype.onSelect = function (start, end, allDay) {
        var $this = this;
            $this.$modal.modal({
                backdrop: 'static'
            });
            var form = $("<form></form>");
            form.append("<div class='row'></div>");
            form.find(".row")
                .append("<div class='col-md-3 colmspadding'><div class='form-group'><label>Start Time</label><div class='input-group bootstrap-timepicker timepicker'><input id='fromaddtime' type='text' class='form-control'><span class='input-group-addon inputgroups'><i class='mdi mdi-clock'></i></span></div></div></div>")
                .append("<div class='col-md-3 colmspadding'><div class='form-group'><label>End Time</label><div class='input-group bootstrap-timepicker timepicker'><input id='toaddtime' type='text' class='form-control'><span class='input-group-addon inputgroups'><i class='mdi mdi-clock'></i></span></div></div></div>")
                .append("<div class='col-md-6 colmspadding'><div class='form-group'><label>Building Name</label><select class='selectpicker' data-style='lineheight12 bg-transfer' data-live-search='true' data-size='5' name='category'></select></div></div>")
                .find("select[name='category']")
                .append("<option value=''>Computer Room Building (CRB)</option>")
                .append("<option value=''>Central Utility Building (CUB)</option>")
                .append("<option value=''>Burlington - 3398 Harvester Road</option>")
                .append("<option value=''>Mississauga - 2465 Argentia Road</option>")
                .append("<option value=''>Calgary City Centre</option>")
                .append("<option value=''>British Columbia Day</option>")
                .append("<option value=''>Heritage Day</option>")
                .append("<option value=''>Labour Day</option></div></div>");
            $this.$modal.find('.delete-event').hide().end().find('.appoint-event').hide().end().find('.save-event').show().end().find('.modal-body').empty().prepend(form).end().find('.save-event').unbind('click').click(function () {
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
                start: '2019-02-12T13:00:00',
                end: '2019-02-12T15:00:00',
                overlap: false,
                className: 'bg-success'
            },
            {
                title: 'Montreal - 119 rue Saint-Jacques',
                start: '2019-02-13T10:00:00',
                end: '2019-02-13T12:00:00',
                overlap: false,
                className: 'bg-danger'
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
                start: '2019-02-15T09:00:00',
                end: '2019-02-15T11:00:00',
                overlap: false,
                className: 'bg-danger'
            }];

        var $this = this;
        $this.$calendarObj = $this.$calendar.fullCalendar({
            slotDuration: '00:30:00', /* If we want to split day time each 15minutes */
            minTime: '08:00:00',
            maxTime: '20:00:00',  
            defaultView: 'agendaWeek',  
            handleWindowResize: true,   
            height: $(window).height() - 100,   
            header: {
//                left: 'prev,next today',
                left: 'prev',
                center: 'title',
//                right: 'month,agendaWeek,agendaDay'
                right: 'next'
            },
            events: defaultEvents,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            drop: function(date) { $this.onDrop($(this), date); },
            select: function (start, end, allDay) { $this.onSelect(start, end, allDay); },
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
