import { Request, Response } from 'express';
import eliminarUseCasePort from '../../domain/port/driver/eliminarCitaUseCasePort';
export default class eliminarCita{
    private citaUseCase: eliminarUseCasePort; 

    constructor(citaUseCase: eliminarUseCasePort) {
        this.citaUseCase = citaUseCase; 
    }
    
    deleteCita = async (req: Request, res: Response): Promise<void> => {
        // se extrae el id de la solicitud y se convierte en numero
        const citaId = parseInt(req.params.id);
        try {
            
            await this.citaUseCase.eliminarCita(citaId);
            res.status(204).send();
        } catch (error) {
            console.error(`Error deleting cita with ID ${citaId}:`, error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

}