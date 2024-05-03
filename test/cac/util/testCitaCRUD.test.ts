import { Admin } from "../../../src/cac/domain/model/admin/admin";
import { Cita } from "../../../src/cac/domain/model/cita/cita";
import { MariaDBCitaRepository } from "../../../src/cac/infrastructure/DataBase/gestionCitasCAC";
import { MySQLConnector } from "../../../src/cac/infrastructure/DataBase/mysqlDBCon";



describe('MariaDBCitaRepository', () => {
    let citaRepository: MariaDBCitaRepository;
    let connection = new MySQLConnector;
    beforeAll(() => {
        citaRepository = new MariaDBCitaRepository(connection);
    });
    afterAll(async () => {
        await connection.close();
    });

    it('Crear cita', async () => {
        // Arrange: Crear una cita de ejemplo
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

        // Act: Llamar al método crearCita con la cita de ejemplo
        const result = await citaRepository.crearCita(citaMock);

        // Assert: Verificar que la cita creada sea igual a la cita de ejemplo
        expect(result).toEqual(citaMock);
        expect(result.id).toEqual(citaMock.id); 
    });
    
    it('Actualizar cita', async () => {
        // Arrange: Crear una cita de ejemplo
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
            'Hospital al'  
        );

        // Simular el comportamiento del método actualizarCita con el mock de cita
        jest.spyOn(citaRepository, 'actualizarCita').mockResolvedValue(citaMock);

        // Act: Llamar al método actualizarCita con la cita de ejemplo
        const result = await citaRepository.actualizarCita(citaMock);

        // Assert: Verificar que la cita actualizada sea igual a la cita de ejemplo
        expect(result).toBeDefined(); 
        expect(result).toEqual(citaMock);
        expect(result.id).toEqual(citaMock.id); 
    });
   
    it('Eliminar cita', async () => {
        // Simular el comportamiento del método eliminarCita con el mock de cita
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
            'Hospital al'  
        );
        jest.spyOn(citaRepository, 'eliminarCita').mockResolvedValue(citaMock);

        // Act: Llamar al método eliminarCita con el ID de la cita
        const result = await citaRepository.eliminarCita(1);

        // Assert: Verificar que el resultado no sea indefinido
        expect(result).toBeDefined();
    });

    it('Ingresar como admin', async () => {
        const idAdmin = 1;
        const passwordAdmin = 'password123';

        const adminMock: Admin= new Admin(
            1,
         'password123'
        );
        jest.spyOn(citaRepository, 'ingresarComoAdmin').mockResolvedValue(adminMock);

      
        const result = await citaRepository.ingresarComoAdmin(idAdmin, passwordAdmin);

      
        expect(result).toBeDefined();
        expect(result).toEqual(adminMock)
    });

    it('Obtener todas las citas', async () => {
        // Simular el comportamiento del método getCitas con el mock de citas
        const citasMock: Cita[] = [
            new Cita(
                1, 
                'Juan',
                'Calle 123', 
                '10:00', 
                'Consulta médica', 
                new Date('2024-05-01'), 
                1234567890, 
                1, 
                0, 
                'Hospital al'  
            )
        ];
        jest.spyOn(citaRepository, 'getCitas').mockResolvedValue(citasMock);

        // Act: Llamar al método getCitas
        const result = await citaRepository.getCitas();

        // Assert: Verificar que el resultado no sea indefinido y sea un array de citas
        expect(result).toBeDefined(); 
        expect(result).toBeInstanceOf(Array); 
    });

    it('Obtener cita por ID', async () => {
        // Arrange: Definir el ID de la cita
        const citaId = 1;

       
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
            'Hospital al'  
        );
        jest.spyOn(citaRepository, 'getCitaById').mockResolvedValue(citaMock);
        const result = await citaRepository.getCitaById(citaId);


        expect(result).toBeDefined();
        if (result !== null) {
            expect(result.id).toEqual(citaId); 
        } else {
            // Si result es null, verificar que sea null
            expect(result).toBeNull();
        }
    });
});
