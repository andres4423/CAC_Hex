import { Request, Response } from 'express';
import getcitaUseCasePort from '../../domain/port/driver/getcitaUseCasePort';



export default class CitasController {
    private citaUseCase: getcitaUseCasePort; 

    constructor(citaUseCase: getcitaUseCasePort) {
        this.citaUseCase = citaUseCase; 
    }

    getAllCitas = async (_req: Request, res: Response): Promise<void> => {
        try {
            const citas = await this.citaUseCase.getCitas();
            res.status(200).json(citas);
        } catch (error) {
            console.error('Error retrieving citas:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    ;


}
