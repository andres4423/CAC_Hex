// const mysql = require('mysql');
// require('dotenv').config();

// export class MySQLConnector {
//   connectionPool: any;
//   constructor() {
//     try {
//       this.connectionPool = mysql.createPool({
//         host: process.env.DB_HOST,
//         port: Number(process.env.DB_PORT),
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//       });
//     } catch (error) {
//       console.error("Error creating connection pool:", error);
//       throw error;
//     }
//   }

//   async getConnection(): Promise<any> {
//     try {
//       const connection = await this.connectionPool.getConnection();
//       console.log("Connection works :D");
//       return connection;
//     } catch (error) {
//       console.error("Error getting connection from pool:", error);
//       throw error;
//     }
//   }

//   async close() {
//     try {
//       await this.connectionPool.release();
//       console.log("Connection pool closed successfully");
//     } catch (error) {
//       console.error("Error closing connection pool:", error);
//       throw error;
//     }
//   }
// }



import mysql, { Connection, ConnectionConfig } from "mysql";

export class MySQLConnector {
  private connection: Connection | undefined;
  private dbConfig: ConnectionConfig;

  constructor() {
    this.dbConfig = {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_DATABASE || "cac",
      insecureAuth: true,
    };
  }

  public connect(): void {
    this.connection = mysql.createConnection(this.dbConfig);

    this.connection.connect((err) => {
      if (err) {
        console.error("Error al conectar a la base de datos:", err);
        throw err;
      }
      console.log("Conexión a la base de datos MySQL establecida correctamente");
    });
  }

  public disconnect(): void {
    if (this.connection) {
      this.connection.end((err) => {
        if (err) {
          console.error("Error al cerrar la conexión:", err);
          throw err;
        }
        console.log("Conexión a la base de datos cerrada correctamente");
      });
    }
  }

  public query(sql: string, values?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.connection) {
        reject(new Error("No hay conexión establecida a la base de datos"));
        return;
      }
      this.connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }
}
