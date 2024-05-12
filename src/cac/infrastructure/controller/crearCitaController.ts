import { Request, Response } from 'express';
import CrearCitaUseCasePort from '../../domain/port/driver/crearCitaUseCasePort';
export default class Crearcita{
    private citaUseCase: CrearCitaUseCasePort; 

    constructor(citaUseCase: CrearCitaUseCasePort) {
        this.citaUseCase = citaUseCase; 
    }
    // metodo para crear la cita
    createCita = async (req: Request, res: Response): Promise<void> => {
        // Extrae la propiedad 'data' del cuerpo de la solicitud.
        const { data } = req.body;
        try {
            // se crea la nueva cita, llamando al metodo crearCita y pasandole los datos
            const newCita = await this.citaUseCase.crearCita(data);
            res.status(201).json(newCita);

        } catch (error) {
            
            console.error('Error creating cita:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}