import ExpressRouter from "../../../express/route/ExpressRouter";
import { CitaService } from "../../application/service/serviceCitas/citasService";
import { CrearCitaUseCase } from "../../application/usecase/CrearCitaUseCase";
import { ObtenerCitaPorIdUseCase } from "../../application/usecase/ObtenerCitaID";
import { ObtenerCitasUseCase } from "../../application/usecase/ObtenerCitasUsecase";
import { actualizarCitaUseCase } from "../../application/usecase/actualizarCitaUseCase";
import { eliminarCitaUseCase } from "../../application/usecase/eliminarCitaUseCase";
// import { IngresoAdminUseCase } from "../../application/usecase/ingresoAdminUseCase";
// import { IngresoBancoUseCase } from "../../application/usecase/ingresoBancoUseCase";
import { gestionCitas } from "../DataBase/gestionCitasCAC";

import actualizarCita from "../controller/actualizarCitaController";
import citaByIDController from "../controller/citaByIDcontroller";
import CitasController from "../controller/citasController";
import Crearcita from "../controller/crearCitaController";
import eliminarCita from "../controller/eliminarCitaController";
// import ingresoAdminController from "../controller/ingresoAdminController";
// import ingresoBancoController from "../controller/ingresoBancoController";
import CitasRouter from "../routes/citaRoutes";

export default class factoryCitas{
    public createRouter = (): ExpressRouter =>{
      
        const gestioncitas = new gestionCitas()
        const citasservice = new CitaService(gestioncitas)

        const obtenerCitas = new ObtenerCitasUseCase(citasservice)
        const obtenerCitasID = new ObtenerCitaPorIdUseCase(citasservice)
        const crearcita = new CrearCitaUseCase(citasservice)
        const actualizarCita1 = new actualizarCitaUseCase(citasservice)
        const eliminarcita = new eliminarCitaUseCase(citasservice)
        const citaId = new ObtenerCitaPorIdUseCase(citasservice)
        // const loginAdmin = new IngresoAdminUseCase(citasservice)
        // const loginBanco = new IngresoBancoUseCase(citasservice)

        const getcitascontroller = new CitasController(obtenerCitas)
        const crearCitaController = new Crearcita(crearcita)
        const actualizarCitaController = new actualizarCita(actualizarCita1, obtenerCitasID)
        const eliminarController = new eliminarCita(eliminarcita)
        const citaById = new citaByIDController(citaId)
     
        // const adminlogin = new ingresoAdminController(loginAdmin)
        // const bancoLogin = new ingresoBancoController(loginBanco)
        
        return new CitasRouter(getcitascontroller, crearCitaController, actualizarCitaController, eliminarController, citaById)
        
    }
}