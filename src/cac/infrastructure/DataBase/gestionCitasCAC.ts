
import { Admin } from "../../domain/model/admin/admin";
import { Banco } from "../../domain/model/bancos/banco";
import { Cita } from "../../domain/model/cita/cita";
import { CitaRepositoryPort } from "../../domain/port/driven/citasRepositoryPort";
import { MySQLConnector } from "./mysqlDBCon";

export class gestionCitas implements CitaRepositoryPort {
  private readonly dbConnector: MySQLConnector;

  constructor() {
    // Inicialización del conector a la base de datos MySQL
    this.dbConnector = new MySQLConnector();
    this.dbConnector.connect(); // Establecer conexión al crear una instancia de GestionCitas
  }

  async getCitas(): Promise<Cita[]> {
    try {
      // Consulta para obtener todas las citas desde la base de datos
      const results = await this.dbConnector.query("SELECT * FROM registro_citas");
      return results;
    } catch (error) {
      console.error("Error fetching citas:", error);
      throw error;
    }
  }

  async getCitaById(id: number): Promise<Cita | null> {
    try {
      // Consulta para obtener una cita por su ID desde la base de datos
      const results = await this.dbConnector.query("SELECT * FROM registro_citas WHERE id = ?", [id]);
      return results[0] || null; // Devolver la primera cita encontrada o null si no hay resultados
    } catch (error) {
      console.error(`Error fetching cita with id ${id}:`, error);
      throw error;
    }
  }

  async crearCita(cita: Cita): Promise<Cita> {
    try {
      // Consulta para insertar una nueva cita en la base de datos
      await this.dbConnector.query(
        "INSERT INTO registro_citas (id, nombre, direccion, hora, descripcion, fecha, celular, tipo_cita, premium, lugar, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [cita.id, cita.nombre, cita.direccion, cita.hora, cita.descripcion, cita.fecha, cita.celular, cita.tipo_cita, cita.premium, cita.lugar, cita.fecha_nacimiento]
      );
      return cita;
    } catch (error) {
      console.error("Error creating cita:", error);
      throw error;
    }
  }

  async actualizarCita(cita: Cita): Promise<Cita> {
    try {
      // Consulta para actualizar una cita existente en la base de datos
      await this.dbConnector.query(
        "UPDATE registro_citas SET hora = ?, fecha = ?, lugar = ? WHERE id = ?",
        [cita.hora, cita.fecha, cita.lugar, cita.id]
      );
      return cita;
    } catch (error) {
      console.error("Error updating cita:", error);
      throw error;
    }
  }

  async eliminarCita(id: number): Promise<Cita | null> {
    try {
      // Consulta para eliminar una cita por su ID de la base de datos
      await this.dbConnector.query("DELETE FROM registro_citas WHERE id = ?", [id]);
      return null;
    } catch (error) {
      console.error(`Error deleting cita with id ${id}:`, error);
      throw error;
    }
  } 

  async ingresarComoAdmin(id: number, password: string): Promise<Admin | null> {
    try {
        // Consulta para verificar las credenciales de administrador en la base de datos
        const results = await this.dbConnector.query("SELECT * FROM admin WHERE id = ? AND contraseña = ?", [id, password]);
      
        if (results.length > 0) {
          // Si se encuentra un administrador con las credenciales proporcionadas, se crea un objeto Admin
            const adminData = results[0];
            const admin = new Admin(adminData.id, adminData.contraseña);
            return admin;
        } else {
            // Si no se encuentra un administrador con las credenciales proporcionadas, se devuelve null
            return null;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
} 
//

async ingresarBanco(id: number, password: string): Promise<Banco | null> {
  try {
      // Consulta para verificar las credenciales de un banco en la base de datos
      const results = await this.dbConnector.query("SELECT * FROM BANCO_USER WHERE id = ? AND contraseña = ?", [id, password]);
    
      if (results.length > 0) {
        // Si se encuentra un banco con las credenciales proporcionadas, se crea un objeto Banco
          const bancoData = results[0];
          const banco = new Banco(bancoData.id, bancoData.contraseña);
          return banco;
      } else {
          // Si no se encuentra un banco con las credenciales proporcionadas, se devuelve null
          return null;
      }
  } catch (error) {
      console.error(error);
      throw error;
  }
}
}
