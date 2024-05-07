import { Admin } from "../../domain/model/admin/admin";
import { Cita } from "../../domain/model/cita/cita";
import { CitaRepositoryPort } from "../../domain/port/driven/citasRepositoryPort";
import { MySQLConnector } from "./mysqlDBCon";

export class gestionCitas implements CitaRepositoryPort {
  private readonly dbConnector: MySQLConnector;

  constructor() {
    this.dbConnector = new MySQLConnector();
    this.dbConnector.connect(); // Establecer conexión al crear una instancia de GestionCitas
  }

  async getCitas(): Promise<Cita[]> {
    try {
      const results = await this.dbConnector.query("SELECT * FROM registro_citas");
      return results;
    } catch (error) {
      console.error("Error fetching citas:", error);
      throw error;
    }
  }

  async getCitaById(id: number): Promise<Cita | null> {
    try {
      const results = await this.dbConnector.query("SELECT * FROM registro_citas WHERE id = ?", [id]);
      return results[0] || null; // Devolver la primera cita encontrada o null si no hay resultados
    } catch (error) {
      console.error(`Error fetching cita with id ${id}:`, error);
      throw error;
    }
  }

  async crearCita(cita: Cita): Promise<Cita> {
    try {
      await this.dbConnector.query(
        "INSERT INTO registro_citas (id, nombre, direccion, hora, descripcion, fecha, celular, tipo_cita, premium, lugar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [cita.id, cita.nombre, cita.direccion, cita.hora, cita.descripcion, cita.fecha, cita.celular, cita.tipo_cita, cita.premium, cita.lugar]
      );
      return cita;
    } catch (error) {
      console.error("Error creating cita:", error);
      throw error;
    }
  }

  async actualizarCita(cita: Cita): Promise<Cita> {
    try {
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
      await this.dbConnector.query("DELETE FROM registro_citas WHERE id = ?", [id]);
      return null;
    } catch (error) {
      console.error(`Error deleting cita with id ${id}:`, error);
      throw error;
    }
  } 

  async ingresarComoAdmin(id: number, password: string): Promise<Admin | null> {
    try {
        const results = await this.dbConnector.query("SELECT * FROM admin WHERE id = ? AND contraseña = ?", [id, password]);
      
        if (results.length > 0) {
          
            const adminData = results[0];
           
            const admin = new Admin(adminData.id, adminData.name, /* Otros datos */);
            return admin;
        } else {

            return null;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

}
