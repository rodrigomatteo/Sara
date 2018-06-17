import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Dashboard {
  indicators = [];

  constructor(http) {
    http.configure(c => {
      c.useStandardConfiguration()
        .withBaseUrl('http://localhost:3000/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('dashboard')
      .then(response => response.json())
      .then(dashboard => this.indicators = dashboard);
  }
}
