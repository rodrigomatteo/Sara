import 'jquery';
import 'bootstrap';

export class App {
  configureRouter(config, router) {
    config.title = 'Rose';
    config.map([
      { route: '', name: 'root', redirect: 'schedule' },
      { route: 'content', name: 'content', moduleId: 'content', nav: true, title: 'Dashboard' },
      { route: 'schedule', name: 'schedule', moduleId: 'schedule', nav: true, title: 'Schedule' },
      { route: 'match', name: 'match', moduleId: 'match', nav: false, title: 'Match' },
      { route: 'matchday', name: 'matchday', moduleId: 'matchday', nav: false, title: 'Match Day' }
    ]);

    this.router = router;
  }
}
