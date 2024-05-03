import { Cita } from "../../model/cita/cita";

export default interface ActualizarCitaUseCasePort {
    actualizarCita(cita: Cita): Promise<Cita>;
  }