import ExpressRouter from "../../../../express/route/ExpressRouter";
import ClientController from "../controller/clientController";
import { Router } from 'express'

export default class ClientRouter implements ExpressRouter {
    router: Router;
    root: string;


    constructor(private readonly clientController: ClientController) {
        this.router = Router();
        this.root = '/';
        this.routes()
    }
    routes = (): void =>{
        ///renderizar pag principal
        this.router.get('/', this.clientController.index.bind(this.clientController.index))
    }

}