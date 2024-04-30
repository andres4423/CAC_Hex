import { Admin } from "../../domain/model/admin/admin";
import { Cita } from "../../domain/model/cita/cita"
import { CitaRepositoryPort } from "../../domain/port/driven/citasRepositoryPort"
import { MariaDBConnector } from "./mariadb_connection"



export class MariaDBCitaRepository implements CitaRepositoryPort {
  private readonly dbConnector: MariaDBConnector;

  constructor(dbConnector: MariaDBConnector) {
    this.dbConnector = dbConnector;
  }

  async getCitas(): Promise<Cita[]> {
    try {
      const connection = await this.dbConnector.getConnection();
      const results = await connection.query("SELECT * FROM citas");
      await this.dbConnector.close(); // Liberar la conexión de vuelta al pool
      return results;
    } catch (error) {
      console.error("Error fetching citas:", error);
      throw error;
    }
  }

  async getCitaById(id: number): Promise<Cita | null> {
    try {
      const connection = await this.dbConnector.getConnection();
      const results = await connection.query("SELECT * FROM citas WHERE id = ?", [id]);
      await this.dbConnector.close(); // Liberar la conexión de vuelta al pool
      return results[0] || null; // Devolver la primera cita encontrada o null si no hay resultados
    } catch (error) {
      console.error(`Error fetching cita with id ${id}:`, error);
      throw error;
    }
  }

  async crearCita(cita: Cita): Promise<Cita> {
    try {
      const connection = await this.dbConnector.getConnection();
      await connection.query(
        "INSERT INTO citas (id, nombre, direccion, hora, descripcion, fecha, celular, tipo_cita, premium, lugar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [cita.id, cita.nombre, cita.direccion, cita.hora, cita.descripcion, cita.fecha, cita.celular, cita.tipo_cita, cita.premium, cita.lugar]
      );
      await this.dbConnector.close(); // Liberar la conexión de vuelta al pool
      return cita;
    } catch (error) {
      console.error("Error creating cita:", error);
      throw error;
    }
  }


  async actualizarCita(cita: Cita): Promise<Cita> {
    try {
      const connection = await this.dbConnector.getConnection();
      await connection.query(
        "UPDATE citas SET  hora = ?,  fecha = ?,  lugar = ? WHERE id = ?",
        [  cita.hora, cita.fecha, cita.lugar, cita.id]
      );
      await this.dbConnector.close(); // Liberar la conexión de vuelta al pool
      return cita;
    } catch (error) {
      console.error("Error updating cita:", error);
      throw error;
    }
  }

  async eliminarCita(id: number): Promise<Cita | null> {
    try {
      const connection = await this.dbConnector.getConnection();
      await connection.query("DELETE FROM citas WHERE id = ?", [id]);
      return null;
      await this.dbConnector.close(); // Liberar la conexión de vuelta al pool
    } catch (error) {
      console.error(`Error deleting cita with id ${id}:`, error);
      throw error;
    }
  }
  async ingresarComoAdmin(id: number, password: string): Promise<Admin | null> {
    try {
        const connection = await this.dbConnector.getConnection();
        const results = await connection.query("SELECT * FROM admins WHERE id = ? AND password = ?", [id, password]);
        await this.dbConnector.close(); // Liberar la conexión de vuelta al pool
        
        // Si se encontró un admin con el ID y la contraseña proporcionados, devolver el primer resultado
        if (results.length > 0) {
            const adminData = results[0]; // Suponiendo que los datos del admin están en la primera fila del resultado// Suponiendo que tienes una clase Admin con constructor que acepta los datos del admin
            return adminData;
        } else {
            return null; // Si no se encontró ningún admin, devolver null
        }
    } catch (error) {
        console.error(`Error ingresando como admin con id ${id}:`, error);
        throw error;
    }
}

}