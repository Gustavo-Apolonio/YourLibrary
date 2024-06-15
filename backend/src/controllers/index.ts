import { IController } from "../models";
import { UserController } from "./userController";

const Controllers: IController[] = [
  { route: '/user', router: UserController.router, configureRouter: UserController.configureRouter }
]

export default Controllers;