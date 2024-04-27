import { Cita } from "../../../domain/model/cita/cita";
import { CitaRepositoryPort } from "../../../domain/port/driven/citasRepositoryPort";
import { CitaServicePort } from "../../../domain/port/driver/citasServicePort";

export class CitaService implements CitaServicePort {
  private readonly citaRepository: CitaRepositoryPort;

  constructor(citaRepository: CitaRepositoryPort) {
    this.citaRepository = citaRepository;
  }

  async getCitas(): Promise<Cita[]> {
    return await this.citaRepository.getCitas();
  }

  async getCitaById(id: number): Promise<Cita | null> {
    return await this.citaRepository.getCitaById(id);
  }


async crearCita(cita: Cita): Promise<Cita> {
    const nuevaCita = new Cita(cita.id, cita.nombre, cita.direccion, cita.hora, cita.descripcion,
      cita.fecha, cita.celular, cita.tipo_cita, cita.premium, cita.lugar);
    await this.citaRepository.crearCita(nuevaCita);
    return nuevaCita; 
  }

async actualizarCita(cita: Cita): Promise<Cita> {
    const citaActualizada = await this.citaRepository.getCitaById(cita.id);
    if (!citaActualizada) {
      throw new Error(`Cita con ID ${cita.id} no encontrada`);
    }
  
    citaActualizada.setFecha(cita.fecha);
    citaActualizada.setHora(cita.hora);
    citaActualizada.setLugar(cita.lugar);
  
    await this.citaRepository.actualizarCita(citaActualizada);
    return citaActualizada; 
  }

  async eliminarCita(id: number): Promise<Cita> {
    const citaEliminada = await this.citaRepository.eliminarCita(id);
    if (!citaEliminada) {
      throw new Error(`Cita con ID ${id} no eliminada`);
    }
    return citaEliminada;

  }
}
