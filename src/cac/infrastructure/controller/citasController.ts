import { Request, Response } from 'express';
import { ObtenerCitasUseCase } from '../../application/usecase/ObtenerCitasUsecase';



export default class CitasController {
    private citaUseCase: ObtenerCitasUseCase; 

    constructor(citaUseCase: ObtenerCitasUseCase) {
        this.citaUseCase = citaUseCase; 
    }

    getAllCitas = async (_req: Request, res: Response): Promise<void> => {
        try {
            const citas = await this.citaUseCase.execute();
            res.status(200).json(citas);
        } catch (error) {
            console.error('Error retrieving citas:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // getCitaById = async (req: Request, res: Response): Promise<void> => {
    //     const citaId = parseInt(req.params.id);
    //     try {
    //         const cita = await this.citaUseCase.getCitaById(citaId);
    //         if (cita) {
    //             res.status(200).json(cita);
    //         } else {
    //             res.status(404).json({ error: `Cita with ID ${citaId} not found` });
    //         }
    //     } catch (error) {
    //         console.error(`Error retrieving cita with ID ${citaId}:`, error);
    //         res.status(500).json({ error: 'Internal server error' });
    //     }
    // };


}
