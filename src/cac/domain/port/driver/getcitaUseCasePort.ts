import { Cita } from "../../model/cita/cita";

export default interface getcitaUseCasePort {
    getCitas(): Promise<Cita[]>;
  }