import { Request, Response } from 'express';
import CrearCitaUseCasePort from '../../domain/port/driver/crearCitaUseCasePort';
export default class Crearcita{
    private citaUseCase: CrearCitaUseCasePort; 

    constructor(citaUseCase: CrearCitaUseCasePort) {
        this.citaUseCase = citaUseCase; 
    }
    createCita = async (req: Request, res: Response): Promise<void> => {
        const { data } = req.body;
        try {
            const newCita = await this.citaUseCase.crearCita(data);
            res.status(201).json(newCita);
        } catch (error) {
            console.error('Error creating cita:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}