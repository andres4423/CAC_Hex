import { Router } from "express";
import ExpressRouter from "../../../express/route/ExpressRouter";
import CitasController from "../controller/citasController";
import Crearcita from "../controller/crearCitaController";
import actualizarCita from "../controller/actualizarCitaController";
import eliminarCita from "../controller/eliminarCitaController";
import citaByIDController from "../controller/citaByIDcontroller";
import ingresoAdminController from "../controller/ingresoAdminController";
import ingresoBancoController from "../controller/ingresoBancoController";


export default class CitasRouter implements ExpressRouter {
    router: Router;
    root: string;


    constructor(private citasController: CitasController,
        private crearCitaController: Crearcita,
        private updateCita: actualizarCita,
        private eliminarCita: eliminarCita,
        private citaById: citaByIDController,
        private ingresoAdmin: ingresoAdminController,
        private ingresobanco: ingresoBancoController
    ) {
        this.router = Router();
        this.root = '/';
        this.root = `${this.root}`;
        this.routes();
    }
 

    routes = (): void => {
        // Endpoint para obtener todas las citas
        this.router.get('/citas', this.citasController.getAllCitas.bind(this.citasController.getAllCitas));

        // Endpoint para obtener una cita por su ID
        this.router.get('/:id', this.citaById.getCitaById.bind(this.citaById.getCitaById));

        // Endpoint para crear una nueva cita
        this.router.post('/createCita', this.crearCitaController.createCita.bind(this.crearCitaController.createCita));

        // Endpoint para actualizar una cita existente
        this.router.put('update/:id', this.updateCita.updateCita.bind(this.updateCita.updateCita));

        // Endpoint para eliminar una cita
        this.router.delete('delete/:id', this.eliminarCita.deleteCita.bind(this.eliminarCita.deleteCita));

        //Endpoint para envio de datos admin
        this.router.post('admin/:id', this.ingresoAdmin.ingresoAdm.bind(this.ingresoAdmin.ingresoAdm))

        //Endpoint para envío datos user banco
        this.router.post('banco/:id', this.ingresobanco.ingresoBanco.bind(this.ingresobanco.ingresoBanco))

    }
}
