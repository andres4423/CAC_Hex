// Importaciones de las clases necesarias
import { Admin } from "../../model/admin/admin"; 
import { Banco } from "../../model/bancos/banco"; 
import { Cita } from "../../model/cita/cita"; 
export interface CitaServicePort {
    //  obtener todas las citas
    getCitas(): Promise<Cita[]>;
   
    // obtener una cita por su ID
    getCitaById(id: number): Promise<Cita | null>; 
    //  crear una nueva cita
    crearCita(cita: Cita): Promise<Cita>;
   
    //  actualizar una cita existente
    actualizarCita(cita: Cita): Promise<Cita>; 
   
    //  eliminar una cita por su ID
    eliminarCita(id: number): Promise<Cita | null>; 
   
    //  ingresar como administrador
    ingresarComoAdmin(id: number, password:string):Promise<Admin | null>; 
   
    //  ingresar como banco
    ingresoBanco(id: number, password:string):Promise<Banco | null>; 
} 
