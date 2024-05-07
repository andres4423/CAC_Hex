// import { Admin } from "../../model/admin/admin";
import { Admin } from "../../model/admin/admin";
import { Banco } from "../../model/bancos/banco";
import { Cita } from "../../model/cita/cita";

export interface CitaRepositoryPort {
    getCitas(): Promise<Cita[]>;
    getCitaById(id: number): Promise<Cita | null>;
    crearCita(cita: Cita): Promise<Cita>;
    actualizarCita(cita: Cita): Promise<Cita>;
    eliminarCita(id: number): Promise<Cita | null>;
     ingresarComoAdmin(id: number, password:string):Promise<Admin | null>
     ingresarBanco(id: number, password:string):Promise<Banco | null>
  } 