// import { Admin } from "../../model/admin/admin";
import { Cita } from "../../model/cita/cita";

export interface CitaServicePort {
    getCitas(): Promise<Cita[]>;
    getCitaById(id: number): Promise<Cita | null>;
    crearCita(cita: Cita): Promise<Cita>;
    actualizarCita(cita: Cita): Promise<Cita>;
    eliminarCita(id: number): Promise<Cita | null>;
    // ingresarComoAdmin(id: number, password:string):Promise<Admin | null>
  }