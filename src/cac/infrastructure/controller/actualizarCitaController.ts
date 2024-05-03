
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
      
    updateCita = async (req: Request, res: Response): Promise<void> => {
        const citaId = parseInt(req.params.id);
        
        try {
            // Obtener la cita completa usando su ID
            const citaActualizada = await this.getCitaID.getCitaById(citaId);
            
            // Verificar si la cita existe
            if (!citaActualizada) {
                res.status(404).json({ error: `Cita con ID ${citaId} no encontrada` });
                return;
            }

            // Actualizar los campos de la cita con los datos recibidos en la solicitud
            citaActualizada.setFecha(req.body.fecha);
            citaActualizada.setHora(req.body.hora);
            citaActualizada.setLugar(req.body.lugar);

            // Llamar a la función actualizarCita con la cita actualizada
            const updatedCita = await this.citaUseCase.actualizarCita(citaActualizada);
            
            res.status(200).json(updatedCita);
        } catch (error) {
            console.error(`Error updating cita with ID ${citaId}:`, error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

}