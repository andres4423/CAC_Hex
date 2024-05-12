// Importaciones de las clases necesarias
import { Admin } from "../../model/admin/admin"; 
import { Banco } from "../../model/bancos/banco"; 
import { Cita } from "../../model/cita/cita"; 
export interface CitaRepositoryPort {
    //  obtener todas las citas
    getCitas(): Promise<Cita[]>; // Devuelve una promesa que se resuelve en un array de objetos de tipo Cita
   
    // obtener una cita por su ID
    getCitaById(id: number): Promise<Cita | null>; // Devuelve una promesa que se resuelve en un objeto de tipo Cita o null si no se encuentra la cita
   
    //  crear una nueva cita
    crearCita(cita: Cita): Promise<Cita>; // Devuelve una promesa que se resuelve en el objeto de tipo Cita creada
   
    //  actualizar una cita existente
    actualizarCita(cita: Cita): Promise<Cita>; // Devuelve una promesa que se resuelve en el objeto de tipo Cita actualizada
   
    //  eliminar una cita por su ID
    eliminarCita(id: number): Promise<Cita | null>; // Devuelve una promesa que se resuelve en el objeto de tipo Cita eliminada o null si no se encuentra la cita
   
    //  ingresar como administrador
    ingresarComoAdmin(id: number, password:string):Promise<Admin | null>; // Devuelve una promesa que se resuelve en un objeto de tipo Admin si la autenticación es exitosa, de lo contrario devuelve null
   
    //  ingresar como banco
    ingresarBanco(id: number, password:string):Promise<Banco | null>; // Devuelve una promesa que se resuelve en un objeto de tipo Banco si la autenticación es exitosa, de lo contrario devuelve null
} 
