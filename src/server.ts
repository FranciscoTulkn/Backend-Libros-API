import express, { Application, Request, Response } from "express";
import cors from "cors"
import { connectDB } from "./database/connection";

export class Server {
  private app: Application;
  private port: string;
  private api_path = {
    home: "/api/v1/home"
  };

  // Created to constructor
  constructor (){
    this.app = express();
    this.port = process.env.PORT || "8001";

    connectDB(); //Conection with database

    this.middlewares(); //Methods inicialization
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
  listen():void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto`,this.port);
    })
  }
};

