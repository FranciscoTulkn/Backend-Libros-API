import express, { Application, Request, Response } from "express";
import cors from "cors"
import { connectDB } from "./database/connection";

import bibliotecasRoutes from './routes/bibliotecas.routes';
import librosRoutes from './routes/libros.routes';
import autoresRoutes from './routes/autores.routes';

export class Server {
  private app: Application;
  private port: string;
  private api_paths = {
    home: "/api/v1/home",
    bibliotecas: "/api/v1/bibliotecas",
    libros: "/api/v1/libros",
    autores: "/api/v1/autores"
  };

  // Created to constructor
  constructor (){
    this.app = express();
    this.port = process.env.PORT || "8001";

    connectDB(); //Conection with database

    this.middlewares(); //Methods inicialization

    this.routes();
  };

  api(){
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).json({
        msg: "API funcionando"
      })
    })
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.api(); 
  }

  // Routes
  routes(): void {
    this.app.use(this.api_paths.bibliotecas, bibliotecasRoutes);
    this.app.use(this.api_paths.libros, librosRoutes);
    this.app.use(this.api_paths.autores, autoresRoutes);
  }
  listen():void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto`,this.port);
    })
  }
};

