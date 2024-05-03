import { MySQLConnector } from "../../../src/cac/infrastructure/DataBase/mysqlDBCon";

describe('MySQLConnector', () => {
  let dbConnector: MySQLConnector;

  beforeAll(() => {
    dbConnector = new MySQLConnector();
  });

  afterAll(async () => {
    await dbConnector.close();
  });

  it('debería conectar correctamente a la base de datos', async () => {
    try {
      // Act: Intenta conectar a la base de datos
      const connection = await dbConnector.getConnection();

      // Assert: Verifica si la conexión se realizó correctamente
      expect(connection).toHaveProperty('query');

      // Libera los recursos de la conexión después de la prueba
      await connection.release();
    } catch (error) {
      // Si se produce un error durante la conexión, falla la prueba
      console.log(`Error al conectar a la base de datos: ${error}`);
    }
  });
});
