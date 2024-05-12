import obtenerCitaIDPort from "../../domain/port/driver/obtenerCitaIDUseCasePort";
import { Request, Response } from 'express';
export default class citaByIDController {
    private citaIDUseCase: obtenerCitaIDPort; 

    constructor(citaUseCase: obtenerCitaIDPort) {
        this.citaIDUseCase = citaUseCase; 
    }

 getCitaById = async (req: Request, res: Response): Promise<void> => {
    //verifica si existe y convierte el id enviado en numero
         const citaId = parseInt(req.params.id);
         // Se usa try catch para manejo de errores
         try {
            /// se llama al metodo de obtener cita by ID
             const cita = await this.citaIDUseCase.getCitaById(citaId);
             if (cita) {
                //Se verifica la existencia de la cita, si es así la envía
                 res.status(200).json(cita);
             } else {
                //Si no existe la cita se envía un mensaje de error
                 res.status(404).json({ error: `Cita with ID ${citaId} not found` });
             }
         } catch (error) {
            //Si existe un error se envía un mensaje de error
             console.error(`Error retrieving cita with ID ${citaId}:`, error);
             res.status(500).json({ error: 'Internal server error' });
         }
     }
}