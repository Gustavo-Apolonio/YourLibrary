import { Request, Response, Router } from 'express';

import { ErrorStatus, SuccessStatus } from '../enums';

import { ErrorService } from '../utils';
import { UserService } from '../services/userServices';

const _router: Router = Router();

const Routes = {
  login: () => {
    _router.post(
      '/',
      async (req: Request, res: Response): Promise<Response> => {
        try {
          const { email, password }: { email: string, password: string } = req.body;

          const user = await UserService.getUserByEmailAndPassword(email, password);

          if (!user)
            return res.status(ErrorStatus.NotFound).send(ErrorService.NotFound('Usuário não encontrado...'));

          return res.status(SuccessStatus.OK).send(user);
        } catch (error) {
          return res.status(ErrorStatus.Internal).send(ErrorService.Internal(error as unknown as string))
        }
      }
    )
  },
}

export const LoginController = {
  router: _router,
  configureRouter: (): void => {
    Object.values(Routes).forEach((route) => route());
  }
}
