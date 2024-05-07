import obtenerCitaIDPort from "../../domain/port/driver/obtenerCitaIDUseCasePort";
import { Request, Response } from 'express';
export default class citaByIDController {
    private citaIDUseCase: obtenerCitaIDPort; 

    constructor(citaUseCase: obtenerCitaIDPort) {
        this.citaIDUseCase = citaUseCase; 
    }

 getCitaById = async (req: Request, res: Response): Promise<void> => {
         const citaId = parseInt(req.params.id);
         try {
             const cita = await this.citaIDUseCase.getCitaById(citaId);
             if (cita) {
                 res.status(200).json(cita);
             } else {
                 res.status(404).json({ error: `Cita with ID ${citaId} not found` });
             }
         } catch (error) {
             console.error(`Error retrieving cita with ID ${citaId}:`, error);
             res.status(500).json({ error: 'Internal server error' });
         }
     }
}