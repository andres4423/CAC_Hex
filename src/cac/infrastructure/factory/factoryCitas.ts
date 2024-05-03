import ExpressRouter from "../../../express/route/ExpressRouter";
import { CitaService } from "../../application/service/serviceCitas/citasService";
import { CrearCitaUseCase } from "../../application/usecase/CrearCitaUseCase";
import { ObtenerCitaPorIdUseCase } from "../../application/usecase/ObtenerCitaID";
import { ObtenerCitasUseCase } from "../../application/usecase/ObtenerCitasUsecase";
import { actualizarCitaUseCase } from "../../application/usecase/actualizarCitaUseCase";
import { eliminarCitaUseCase } from "../../application/usecase/eliminarCitaUseCase";
import { gestionCitas } from "../DataBase/gestionCitasCAC";
import { MySQLConnector } from "../DataBase/mysqlDBCon";
import actualizarCita from "../controller/actualizarCitaController";
import CitasController from "../controller/citasController";
import Crearcita from "../controller/crearCitaController";
import eliminarCita from "../controller/eliminarCitaController";
import CitasRouter from "../routes/citaRoutes";

export default class factoryCitas{
    public createRouter = (): ExpressRouter =>{
        const conDb = new MySQLConnector()
        const gestioncitas = new gestionCitas(conDb)
        const citasservice = new CitaService(gestioncitas)

       

        const obtenerCitas = new ObtenerCitasUseCase(citasservice)
        const obtenerCitasID = new ObtenerCitaPorIdUseCase(citasservice)
        const crearcita = new CrearCitaUseCase(citasservice)
        const actualizarCita1 = new actualizarCitaUseCase(citasservice)
        const eliminarcita = new eliminarCitaUseCase(citasservice)

        const getcitascontroller = new CitasController(obtenerCitas)
        const crearCitaController = new Crearcita(crearcita)
        const actualizarCitaController = new actualizarCita(actualizarCita1, obtenerCitasID)
        const eliminarController = new eliminarCita(eliminarcita)
        return new CitasRouter(getcitascontroller, crearCitaController, actualizarCitaController, eliminarController)
        
    }
}