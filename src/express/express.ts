import express, {Request, Response, NextFunction} from 'express';
import { Application } from 'express-serve-static-core';
import path, { join } from 'path';


export default class cacExpress {
  private readonly app: Application;

  constructor() {
    this.app = express();
    this.config();
    // this.Routes();
  }

  //Configuración del express
  private config(): void {
     this.app.use('/static', express.static(join(process.cwd(), "public")))
     this.app.set('views', path.join(__dirname, '..', 'views'));
     this.app.set('view engine', 'ejs');
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }));
    }

//   private Routes(): void {
//     this.app.use('/', router);
//     this.app.use('/agendar', router)
//     this.app.use('/prueba',router)
//   }

  //Puerto donde se levanta el sv
   start = (): void => {
    const PORT = process.env['PORT'] ?? 5000;
    const HOST = process.env['HOST'] ?? 'localhost';
    this.app.listen(PORT, () => {
      console.log(`Sirve el sv en https://${HOST}:${PORT}`);
    });
  };

}
