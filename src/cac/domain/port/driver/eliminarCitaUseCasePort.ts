import { Cita } from "../../model/cita/cita";

export default interface eliminarUseCasePort {
    eliminarCita(id: number): Promise<Cita | null>;
  }