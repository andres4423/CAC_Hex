import { Request, Response } from 'express';
import getcitaUseCasePort from '../../domain/port/driver/getcitaUseCasePort';



export default class CitasController {
    private citaUseCase: getcitaUseCasePort; 

    constructor(citaUseCase: getcitaUseCasePort) {
        this.citaUseCase = citaUseCase; 
    }

    //obtener todas las citas
    getAllCitas = async (_req: Request, res: Response): Promise<void> => {
        // Se hace el manejo de errores con try catch
        try {
            // se llama al metodo de obtener todas las citas
            const citas = await this.citaUseCase.getCitas();
            // Devuelve las citas en formato json
            res.status(200).json(citas);
        } catch (error) {
            // envia mensaje de error en caso de que no se puedan devolver las citas.
            console.error('Error retrieving citas:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}
