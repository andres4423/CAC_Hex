// Importaciones de modelos y puertos de repositorio
import { Admin } from "../../../domain/model/admin/admin";
import { Banco } from "../../../domain/model/bancos/banco";
import { Cita } from "../../../domain/model/cita/cita";
import { CitaRepositoryPort } from "../../../domain/port/driven/citasRepositoryPort";
import { CitaServicePort } from "../../../domain/port/driver/citasServicePort";


export class CitaService implements CitaServicePort{
  // Inyecta el repositorio de citas
  private readonly citaRepository: CitaRepositoryPort;

  // Constructor que recibe el repositorio de citas
  constructor(citaRepository: CitaRepositoryPort) {
    this.citaRepository = citaRepository;
  }

  //  obtener todas las citas
  async getCitas(): Promise<Cita[]> {
    return await this.citaRepository.getCitas();
  }

  //  obtener una cita por su ID
  async getCitaById(id: number): Promise<Cita | null> {
    return await this.citaRepository.getCitaById(id);
  }

  //  ingresar como administrador
  async ingresarComoAdmin(id: number, password: string): Promise<Admin | null> {
    return await this.citaRepository.ingresarComoAdmin(id, password);
  }

  //  ingresar como usuario del banco
  async ingresoBanco(id: number, password: string): Promise<Banco | null> {
    return await this.citaRepository.ingresoBanco(id, password);
  }

  //  crear una nueva cita
  async crearCita(cita: Cita): Promise<Cita> {
    // Crear una nueva instancia de Cita con los datos proporcionados
    const nuevaCita = new Cita(
      cita.id,
      cita.nombre,
      cita.direccion,
      cita.hora,
      cita.descripcion,
      cita.fecha,
      cita.celular,
      cita.tipo_cita,
      cita.premium,
      cita.lugar,
      cita.fecha_nacimiento
    );
    // Llamar al método del repositorio para crear la cita
    await this.citaRepository.crearCita(nuevaCita);
    // Devolver la nueva cita creada
    return nuevaCita;
  }

  //  actualizar una cita existente
  async actualizarCita(cita: Cita): Promise<Cita> {
    // Obtener la cita actualizada por su ID
    const citaActualizada = await this.citaRepository.getCitaById(cita.id);
    // Si la cita no existe, lanzar un error
    if (!citaActualizada) {
      throw new Error(`Cita con ID ${cita.id} no encontrada`);
    }
    // Actualizar los atributos de la cita con los nuevos valores proporcionados
    citaActualizada.setFecha(cita.fecha);
    citaActualizada.setHora(cita.hora);
    citaActualizada.setLugar(cita.lugar);
    // Llamar al método del repositorio para actualizar la cita
    await this.citaRepository.actualizarCita(citaActualizada);
    // Devolver la cita actualizada
    return citaActualizada;
  }

  //  eliminar una cita
  async eliminarCita(id: number): Promise<Cita> {
    // Llamar al método del repositorio para eliminar la cita por su ID
    const citaEliminada = await this.citaRepository.eliminarCita(id);
    // Si la cita no existe, lanzar un error
    if (!citaEliminada) {
      throw new Error(`Cita con ID ${id} no eliminada`);
    }
    // Devolver la cita eliminada
    return citaEliminada;
  }
}
