import { Cita } from "../../domain/model/cita/cita";
import eliminarUseCasePort from "../../domain/port/driver/eliminarCitaUseCasePort";


export class eliminarCitaUseCase {
  private readonly citaService: eliminarUseCasePort;

  constructor(citaService: eliminarUseCasePort) {
    this.citaService = citaService;
  }

  async execute(id: number): Promise<Cita | null> {
    return await this.citaService.eliminarCita(id);
  }
}
