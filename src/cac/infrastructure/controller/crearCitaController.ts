import { Request, Response } from 'express';
import { CrearCitaUseCase } from '../../application/usecase/CrearCitaUseCase';
export default class Crearcita{
    private citaUseCase: CrearCitaUseCase; 

    constructor(citaUseCase: CrearCitaUseCase) {
        this.citaUseCase = citaUseCase; 
    }
    createCita = async (req: Request, res: Response): Promise<void> => {
        const { data } = req.body;
        try {
            const newCita = await this.citaUseCase.execute(data);
            res.status(201).json(newCita);
        } catch (error) {
            console.error('Error creating cita:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}