import { Request, Response, Router } from 'express';

import { ErrorStatus, SuccessStatus } from '../enums';

import { ErrorService } from '../utils';
import { UserService } from '../services/userServices';

const _router: Router = Router();

const Routes = {
  create: () => {
    _router.post(
      '/',
      async (req: Request, res: Response): Promise<Response> => {
        try {
          const { username, email, password }: { username: string, email: string, password: string } = req.body;

          const user = await UserService.createUser(username, email, password);

          if (!user)
            return res.status(ErrorStatus.BadRequest).send(ErrorService.BadRequest('Usuário não pode ser criado...'));

          return res.status(SuccessStatus.OK).send(user);
        } catch (error) {
          return res.status(ErrorStatus.Internal).send(ErrorService.Internal(error as unknown as string))
        }
      }
    )
  },

  update: () => {
    _router.put(
      '/',
      async (req: Request, res: Response): Promise<Response> => {
        try {
          const { id, username, email, password }: { id: number, username: string, email: string, password: string } = req.body;

          let user = await UserService.getUserById(id);

          if (!user)
            return res.status(ErrorStatus.NotFound).send(ErrorService.NotFound('Usuário não encontrado...'));

          user = await UserService.updateUser(user, username, email, password);

          if (!user)
            return res.status(ErrorStatus.BadRequest).send(ErrorService.BadRequest('Usuário não pode ser atualizado...'));

          return res.status(SuccessStatus.OK).send(user);
        } catch (error) {
          return res.status(ErrorStatus.Internal).send(ErrorService.Internal(error as unknown as string))
        }
      }
    )
  },

  delete: () => {
    _router.delete(
      '/:id',
      async (req: Request, res: Response): Promise<Response> => {
        try {
          const id = +req.params.id;

          const user = await UserService.getUserById(id);

          if (!user)
            return res.status(ErrorStatus.NotFound).send(ErrorService.NotFound('Usuário não encontrado...'));

          const deleted = UserService.deleteUser(user.id);

          if (!deleted)
            return res.status(ErrorStatus.Internal).send(ErrorService.Internal('Usuário não foi possível deletar o usuário...'));

          return res.status(SuccessStatus.OkNoContent).end();
        } catch (error) {
          return res.status(ErrorStatus.Internal).send(ErrorService.Internal(error as unknown as string))
        }
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
