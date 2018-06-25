export class Content {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'content', 'dashboard'], name: 'dashboard', moduleId: 'dashboard', title: 'Dashboard' },
      { route: 'schedule', name: 'schedule', moduleId: 'schedule', nav: true, title: 'Schedule' },
      { route: 'match', name: 'match', moduleId: 'match', nav: false, title: 'Match' },
      { route: 'matchday', name: 'matchday', moduleId: 'matchday', nav: false, title: 'Match Day' }
    ]);

    this.router = router;
  }
}

