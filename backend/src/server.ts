import { App } from './app';
import Controllers from './controllers';

import { IController } from './models';

App.configureApp();

Controllers.forEach((controller: IController) => {
  controller.configureRouter();
  App.configureNewRoute(controller.route, controller.router);
});

App.startApp();
