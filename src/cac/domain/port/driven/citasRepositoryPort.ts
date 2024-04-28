import { Cita } from "../../model/cita/cita";

export interface CitaRepositoryPort {
    getCitas(): Promise<Cita[]>;
    getCitaById(id: number): Promise<Cita | null>;
    crearCita(cita: Cita): Promise<Cita>;
    actualizarCita(cita: Cita): Promise<Cita>;
    eliminarCita(id: number): Promise<Cita | null>;
  }