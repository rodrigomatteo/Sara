export class Content {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'content', 'dashboard'], name: 'dashboard', moduleId: 'dashboard', title: 'Dashboard' },
      { route: 'schedule', name: 'schedule', moduleId: 'schedule', nav: true, title: 'Schedule2' }
    ]);

    this.router = router;
  }
}

