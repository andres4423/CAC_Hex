import { Router } from "express";
import ExpressRouter from "../../../express/route/ExpressRouter";
import CitasController from "../controller/citasController";
import Crearcita from "../controller/crearCitaController";
import actualizarCita from "../controller/actualizarCitaController";
import eliminarCita from "../controller/eliminarCitaController";


export default class CitasRouter implements ExpressRouter {
    router: Router;
    root: string;


    constructor(private citasController: CitasController,
        private crearCitaController: Crearcita,
        private updateCita: actualizarCita,
        private eliminarCita: eliminarCita
    ) {
        this.router = Router();
        this.root = '/citas';
        this.root = `${this.root}`;
        this.routes();
    }
 

    routes = (): void => {
        // Endpoint para obtener todas las citas
        this.router.get('/', this.citasController.getAllCitas.bind(this.citasController.getAllCitas));

        // Endpoint para obtener una cita por su ID
        this.router.get('/:id', this.citasController.getCitaById.bind(this.citasController.getCitaById));

        // Endpoint para crear una nueva cita
        this.router.post('/', this.crearCitaController.createCita.bind(this.crearCitaController.createCita));

        // Endpoint para actualizar una cita existente
        this.router.put('/:id', this.updateCita.updateCita.bind(this.updateCita.updateCita));

        // Endpoint para eliminar una cita
        this.router.delete('/:id', this.eliminarCita.deleteCita.bind(this.eliminarCita.deleteCita));
    }
}
