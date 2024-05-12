import { Admin } from "../../../src/cac/domain/model/admin/admin";
import { Cita } from "../../../src/cac/domain/model/cita/cita";
import { CitaRepositoryPort } from "../../../src/cac/domain/port/driven/citasRepositoryPort";
import { gestionCitas } from "../../../src/cac/infrastructure/DataBase/gestionCitasCAC";
import { MySQLConnector } from "../../../src/cac/infrastructure/DataBase/mysqlDBCon";

describe('mysql', () => {
    let citaRepository: CitaRepositoryPort; // Cambiado el tipo de citaRepository
    let connection = new MySQLConnector();
    beforeAll(() => {
        citaRepository = new gestionCitas(); // Usar la implementación de la clase gestionCitas
    });
    afterAll(async () => {
        await connection.disconnect();
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
            'Hospital Central',
            new Date('2003-01-04')  
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
            '12:00', 
            'Consulta médica', 
            new Date('2024-05-01'), 
            1234567890, 
            1, 
            0, 
            'Hospital aaaaaaaaaaa',
            new Date('2003-01-04') 
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
            'Hospital Central',
            new Date('2003-01-04') 
        );
        jest.spyOn(citaRepository, 'eliminarCita').mockResolvedValue(citaMock);

        // Act: Llamar al método eliminarCita con el ID de la cita
        const result = await citaRepository.eliminarCita(1);

        // Assert: Verificar que el resultado no sea indefinido
        expect(result).toBeDefined();
    });

    it('Ingresar como admin', async () => {
        // Arrange: Definir las credenciales de administrador
        const idAdmin = 1;
        const passwordAdmin = 'password123';

        // Crear un mock de Admin para simular el resultado
        const adminMock: Admin = new Admin(1, 'password123');
        jest.spyOn(citaRepository, 'ingresarComoAdmin').mockResolvedValue(adminMock);

        // Act: Llamar al método ingresarComoAdmin con las credenciales
        const result = await citaRepository.ingresarComoAdmin(idAdmin, passwordAdmin);

        // Assert: Verificar que el resultado no sea indefinido y sea igual al mock de Admin
        expect(result).toBeDefined();
        expect(result).toEqual(adminMock);
    });

    it('Obtener todas las citas', async () => {
        // Arrange: Simular el comportamiento del método getCitas con el mock de citas
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
                'Hospital Central',
                new Date('2003-01-04')  
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

        // Crear un mock de cita para simular el resultado
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
            'Hospital Central',
            new Date('2003-01-04') 
        );
        jest.spyOn(citaRepository, 'getCitaById').mockResolvedValue(citaMock);

        // Act: Llamar al método getCitaById con el ID de la cita
        const result = await citaRepository.getCitaById(citaId);

        // Assert: Verificar que el resultado no sea indefinido y sea igual al mock de cita
        expect(result).toBeDefined();
        expect(result).toEqual(citaMock); 
    });
});
