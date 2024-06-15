import { Router } from "express";

export interface IController {
  route: string;
  router: Router;
  configureRouter: () => void;
}
