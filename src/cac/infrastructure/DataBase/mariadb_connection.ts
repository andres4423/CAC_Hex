const mysql = require('mysql');
require('dotenv').config();

export class MySQLConnector {
  connectionPool: any;
  constructor() {
    try {
      this.connectionPool = mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
    } catch (error) {
      console.error("Error creating connection pool:", error);
      throw error;
    }
  }

  async getConnection() {
    try {
      const connection = await this.connectionPool.getConnection();
      console.log("Connection works :D");
      return connection;
    } catch (error) {
      console.error("Error getting connection from pool:", error);
      throw error;
    }
  }

  async close() {
    try {
      await this.connectionPool.end();
      console.log("Connection pool closed successfully");
    } catch (error) {
      console.error("Error closing connection pool:", error);
      throw error;
    }
  }
}


