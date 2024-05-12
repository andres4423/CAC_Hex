import { Request, Response } from 'express';
import ActualizarCitaUseCasePort from '../../domain/port/driver/actualizarCitaUseCasePort';
import obtenerCitaIDPort from '../../domain/port/driver/obtenerCitaIDUseCasePort';
export default class actualizarCita{
    private citaUseCase: ActualizarCitaUseCasePort; 
    private getCitaID: obtenerCitaIDPort
    constructor(citaUseCase: ActualizarCitaUseCasePort, getCitaID: obtenerCitaIDPort) {
        this.citaUseCase = citaUseCase; 
        this.getCitaID = getCitaID
    }
      
    //metodo para actualizar cita
    updateCita = async (req: Request, res: Response): Promise<void> => {
        const citaId = parseInt(req.params.id);
        
        try {
            //Se llama al metodo de obtener la cita por id
            const citaActualizada = await this.getCitaID.getCitaById(citaId);
            if (!citaActualizada) {
                res.status(404).json({ error: `Cita con ID ${citaId} no encontrada` });
                return;
            }
            //Verifica si existe una fecha en la solicitud y la actualiza
            if (req.body.fecha) {
                citaActualizada.fecha = req.body.fecha;
            }
            //Verifica si existe una hora en la solicitud y la actualiza
            if (req.body.hora) {
                citaActualizada.hora = req.body.hora;
            }
            //Verifica si existe un lugar en la solicitud y lo actualiza
            if (req.body.lugar) {
                citaActualizada.lugar = req.body.lugar;
            }
            
            //actualiza la cita
            const updatedCita = await this.citaUseCase.actualizarCita(citaActualizada);
            
            res.status(200).json(updatedCita);
        } catch (error) {
            console.error(`Error updating cita with ID ${citaId}:`, error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

}