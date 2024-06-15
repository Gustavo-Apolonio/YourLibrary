import { IController } from "../models";
import { LoginController } from "./loginController";
import { UserController } from "./userController";

const Controllers: IController[] = [
  { route: '/user', router: UserController.router, configureRouter: UserController.configureRouter },
  { route: '/login', router: LoginController.router, configureRouter: LoginController.configureRouter },
]

export default Controllers;