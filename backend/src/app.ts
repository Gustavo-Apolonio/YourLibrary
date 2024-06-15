import express, { Router } from 'express';
import cors from 'cors';
import path from 'path';

const PORT: number = 5000;
const HOSTNAME: string = 'http://localhost';

const _app: express.Application = express();

export const App = {
  configureRoutes: (): void => {
    _app.use(cors());
    _app.use(express.json());
    _app.use(express.urlencoded({ extended: true }));
  },

  configureStaticFront: (): void => {
    const frontBuildPath = path.join(__dirname, 'frontend', 'build');
    _app.use(express.static(frontBuildPath))
    _app.get('*', (_req, res) => {
      res.sendFile(path.join(frontBuildPath, 'index.html'), (err) => {
        if (err) {
          console.error('Error sending index.html:', err);
          res.status(500).send(err);
        }
      });
    });
  },

  configureNewRoute: (route: string, controller: Router): void => {
    _app.use(route, controller);
  },

  configureApp: (): void => {
    App.configureStaticFront();
    App.configureRoutes();
  },

  startApp: (): void => {
    _app.listen(PORT, () =>
      console.log(`Server running on http://${HOSTNAME}:${PORT}/`)
    );
  },
}
