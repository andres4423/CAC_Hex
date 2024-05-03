import ExpressRouter from "../../../express/route/ExpressRouter";
import { CitaService } from "../../application/service/serviceCitas/citasService";
import { CrearCitaUseCase } from "../../application/usecase/CrearCitaUseCase";
import { ObtenerCitaPorIdUseCase } from "../../application/usecase/ObtenerCitaID";
import { ObtenerCitasUseCase } from "../../application/usecase/ObtenerCitasUsecase";
import { gestionCitas } from "../DataBase/gestionCitasCAC";
import { MySQLConnector } from "../DataBase/mysqlDBCon";
import CitasController from "../controller/citasController";
import CitasRouter from "../routes/citaRoutes";

export default class factoryCitas{
    public createRouter = (): ExpressRouter =>{
        const conDb = new MySQLConnector()
        const gestioncitas = new gestionCitas(conDb)
        const citasservice = new CitaService(gestioncitas)
        const obtenerCitas = new ObtenerCitasUseCase(citasservice)
        const obtenerCitasID = new ObtenerCitaPorIdUseCase(citasservice)
        const crearcita = new CrearCitaUseCase(citasservice)
        const citascontroller = new CitasController(obtenerCitas)
        
    }
}