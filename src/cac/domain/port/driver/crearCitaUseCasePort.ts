import { Cita } from "../../model/cita/cita";

export default interface CrearCitaUseCasePort {
    crearCita(cita: Cita): Promise<Cita>;
  }