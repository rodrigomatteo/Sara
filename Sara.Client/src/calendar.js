import {
  inject, bindable, customElement, BindingEngine, inlineView
} from 'aurelia-framework';

import 'jquery';
import moment from  'moment';
import fullCalendar from 'fullcalendar';

  @customElement('calendar')
  @inlineView('<template><require from="fullcalendar/dist/fullcalendar.css"></require></template>')
  @inject(Element, BindingEngine)
export class CalendarCustomElement {
    @bindable weekends = true;
    @bindable dayClick;
    @bindable eventClick;
    @bindable eventRender;
    @bindable events = [];
    @bindable options;
    @bindable view;

    subscription = null;

    constructor(element, bindingEngine) {
      this.element = element;
      this.bindingEngine = bindingEngine;

      this.subscription = this.bindingEngine.collectionObserver(this.events).subscribe( (splices) => {this.eventListChanged(splices);});
    }

    eventListChanged(splices) {
      if (this.calendar) {this.calendar.fullCalendar( 'refetchEvents');}
    }

    eventsChanged(newValue) {
      if (this.subscription !== null) {
        this.subscription.dispose();
      }
      this.subscription = this.bindingEngine.collectionObserver(this.events).subscribe( (splices) => {this.eventListChanged(splices);});

      if (this.calendar) {this.calendar.fullCalendar( 'refetchEvents');}
    }

    attached() {
      this.calendar = $(this.element);
      let eventSource = (start, end, timezone, callback) => {
        callback(this.events);
      };

      let defaultValues = {
        header: {
          left: '',
          center: 'title',
          right: 'agendaDay,agendaWeek,month prev,next today'
        },
        buttonText: {
          today: 'hoy',
          month: 'mes',
          week: 'semana',
          day: 'día'
        },
        height: 'auto',
        themeSystem: 'bootstrap4',
        locale: 'es',
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
        showNonCurrentDates: false,
        fixedWeekCount: false,
        eventLimit: 4,
        timeFormat: 'HH:mm',
        navLinks: true,
        defaultView: this.view || 'month',
        weekends: this.weekends,
        dayClick: (date, jsEvent, view) => this.dayClick(date, jsEvent, view),
        eventClick: (event) => this.eventClick(event),
        eventRenderClick: (eventObj, $el) => this.eventRender(eventObj, $el),
        events: eventSource
      };

      this.calendar.fullCalendar(Object.assign(defaultValues, this.options));
    }
  }
