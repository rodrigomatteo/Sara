export class App {
  configureRouter(config, router) {
    config.title = 'Sara';
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard',      moduleId: 'dashboard',      nav: true, title: 'Dashboard' }
    ]);

    this.router = router;
  }
}
