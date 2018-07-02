import 'jquery';
import 'bootstrap';

export class App {
  configureRouter(config, router) {
    config.title = 'Sara';
    config.map([
      { route: '', redirect: 'content' },
      { route: 'content', name: 'content', moduleId: 'content', nav: true, title: 'Root' },
      { route: 'schedule', name: 'schedule', moduleId: 'schedule', nav: true, title: 'Schedule' },
      { route: 'match', name: 'match', moduleId: 'match', nav: false, title: 'Match' },
      { route: 'matchday', name: 'matchday', moduleId: 'matchday', nav: false, title: 'Match Day' }
    ]);

    this.router = router;
  }
}
