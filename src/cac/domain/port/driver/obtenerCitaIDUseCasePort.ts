import { Cita } from "../../model/cita/cita";

export default interface obtenerCitaIDPort {
    getCitaById(id: number): Promise<Cita | null>;
  }