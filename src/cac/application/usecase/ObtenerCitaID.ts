import { Cita } from "../../domain/model/cita/cita";
import obtenerCitaIDPort from "../../domain/port/driver/obtenerCitaIDUseCasePort";


export class ObtenerCitaPorIdUseCase {
  getCitaById(citaId: number) {
      throw new Error('Method not implemented.');
  }
  private readonly citaService: obtenerCitaIDPort;

  constructor(citaService: obtenerCitaIDPort) {
    this.citaService = citaService;
  }

  async execute(id: number): Promise<Cita | null> {
    return await this.citaService.getCitaById(id);
  }
}
