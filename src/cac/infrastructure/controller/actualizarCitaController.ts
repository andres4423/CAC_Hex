import { Request, Response } from 'express';
import { actualizarCitaUseCase } from '../../application/usecase/actualizarCitaUseCase';
import { ObtenerCitaPorIdUseCase } from '../../application/usecase/ObtenerCitaID';
import { Cita } from '../../domain/model/cita/cita';

export default class actualizarCita {
    private citaUseCase: actualizarCitaUseCase;
    private getCitaID: ObtenerCitaPorIdUseCase;

    constructor(citaUseCase: actualizarCitaUseCase, getCitaID: ObtenerCitaPorIdUseCase) {
        this.citaUseCase = citaUseCase;
        this.getCitaID = getCitaID;
    }

    updateCita = async (req: Request, res: Response): Promise<void> => {
        const citaId = parseInt(req.params.id);

        try {
            // Obtener la cita completa usando su ID
            const citaActualizada = await this.getCitaID.getCitaById(citaId);

            // Verificar si la cita existe
            if (citaActualizada === null) {
                res.status(404).json({ error: `Cita con ID ${citaId} no encontrada` });
                return;
            }

            // Verificar si las propiedades existen en req.body antes de asignarlas
            if (req.body.fecha) {
                citaActualizada.setFecha(req.body.fecha);
            }
            if (req.body.hora) {
                citaActualizada.setHora(req.body.hora);
            }
            if (req.body.lugar) {
                citaActualizada.setLugar(req.body.lugar);
            }

            // Llamar a la función actualizarCita con la cita actualizada
            const updatedCita = await this.citaUseCase.execute(citaActualizada);

            res.status(200).json(updatedCita);
        } catch (error) {
            console.error(`Error updating cita with ID ${citaId}:`, error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}
