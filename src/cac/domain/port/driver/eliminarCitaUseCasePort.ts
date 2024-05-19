import { Cita } from "../../model/cita/cita";

export default interface eliminarCitaUseCasePort {
    eliminarCita(id: number): Promise<Cita | null>;
  }