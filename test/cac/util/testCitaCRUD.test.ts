import { Cita } from "../../../src/cac/domain/model/cita/cita";
import { MariaDBCitaRepository } from "../../../src/cac/infrastructure/DataBase/db_actions";
import { MariaDBConnector } from "../../../src/cac/infrastructure/DataBase/mariadb_connection";


describe('MariaDBCitaRepository', () => {
    let citaRepository: MariaDBCitaRepository;
    let connection = new MariaDBConnector;
    beforeAll(() => {
        citaRepository = new MariaDBCitaRepository(connection);
    });
    afterAll(async () => {
        await connection.close();
      });
    it('debería crear una cita correctamente y devolver la cita creada', async () => {
        // Arrange: Simular la creación correcta de una cita
        const citaMock: Cita = new Cita(
            1, 
            'Juan',
            'Calle 123', 
            '10:00', 
            'Consulta médica', 
            new Date('2024-05-01'), 
            1234567890, 
            1, 
            0, 
            'Hospital Central'  
        );
        jest.spyOn(citaRepository, 'crearCita').mockResolvedValue(citaMock);

        // Act: Llamar al método crearCita con los parámetros adecuados
        const result = await citaRepository.crearCita(citaMock);

        // Assert: Verificar que devuelve la cita creada correctamente
        expect(result).toEqual(citaMock);
    });

    
    it('Actualizar Cita', async () => {
        // Arrange: Simular la creación correcta de una cita
        const citaMock: Cita = new Cita(
            1, 
            'andrew',
            'Calle 1223', 
            '11:00', 
            'Consulta odontologica', 
            new Date('2024-05-09'), 
            1234567890, 
            1, 
            0, 
            'Hospital 1'  
        );
        jest.spyOn(citaRepository, 'actualizarCita').mockResolvedValue(citaMock);

        const result = await citaRepository.actualizarCita(citaMock);

        expect(result).toBeDefined();
        expect(result).toEqual(citaMock);
        expect(citaRepository.actualizarCita).toHaveBeenCalledWith(citaMock);
        expect(result).not.toBeUndefined();
    });
});
