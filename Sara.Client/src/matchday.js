import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Matchday {
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
}
