import { Request, Response, Router } from 'express';

import { ErrorStatus, SuccessStatus } from '../enums';

import { ErrorService } from '../utils';
import { UserService } from '../services/userServices';

const _router: Router = Router();

const Routes = {
  create: () => {
    _router.post(
      '/',
      (req: Request, res: Response): Response => {
        const { username, email, password }: { username: string, email: string, password: string } = req.body;

        const user = UserService.createUser(username, email, password);

        if (!user)
          return res.status(ErrorStatus.BadRequest).send(ErrorService.BadRequest('Usuário não pode ser criado...'));

        return res.status(SuccessStatus.OK).send(user);
      }
    )
  },

  update: () => {
    _router.put(
      '/',
      (req: Request, res: Response): Response => {
        const { id, username, email, password }: { id: number, username: string, email: string, password: string } = req.body;

        let user = UserService.getUserById(id);

        if (!user)
          return res.status(ErrorStatus.NotFound).send(ErrorService.NotFound('Usuário não encontrado...'));

        user = UserService.updateUser(user, username, email, password);

        if (!user)
          return res.status(ErrorStatus.BadRequest).send(ErrorService.BadRequest('Usuário não pode ser atualizado...'));

        return res.status(SuccessStatus.OK).send(user);
      }
    )
  },

  delete: () => {
    _router.delete(
      '/:id',
      (req: Request, res: Response): Response => {
        const id = +req.params.id;

        const user = UserService.getUserById(id);

        if (!user)
          return res.status(ErrorStatus.NotFound).send(ErrorService.NotFound('Usuário não encontrado...'));

        const deleted = UserService.deleteUser(user);

        if (!deleted)
          return res.status(ErrorStatus.Internal).send(ErrorService.Internal('Usuário não foi possível deletar o usuário...'));

        return res.status(SuccessStatus.OkNoContent).end();
      }
    )
  },
}

export const UserController = {
  router: _router,
  configureRouter: (): void => {
    Object.values(Routes).forEach((route) => route());
  }
}
