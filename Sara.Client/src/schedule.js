import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Schedule {
  events = [];

  constructor(http) {
    http.configure(c => {
      c.useStandardConfiguration()
        .withBaseUrl('http://localhost:3000/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('events')
      .then(response => response.json())
      .then(events => this.events = events);
  }

  eventClicked(event) {
    //alert(event);
  }

  eventRenderClicked(eventObj, element) {
    /*element.popover(
      {
        html: true,
        title: '#01 - ' + eventObj.extendedTitle,
        content: '<div class="container">' +
                 '<i class="fas fa-table"></i>&nbsp&nbspGrupo A<br/>' +
                 '<i class="fas fa-thumbtack"></i>&nbsp&nbsp&nbspMonumental, Moscú<br/>' +
                 '<i class="fas fa-users"></i>&nbsp&nbsp74,738 / 74,738<br/>' +
                 '<i class="fas fa-sun"></i>&nbsp&nbspSoleado - <i class="fas fa-thermometer"></i>&nbsp&nbsp23 °C - <i class="fas fa-tint"></i>&nbsp&nbsp65%<br/>' +
                 '</div>',
        trigger: 'hover',
        placement: 'top',
        container: 'body'
      }
    );*/
  }
}
