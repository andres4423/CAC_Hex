import { Cita } from "../../domain/model/cita/cita";
import { CitaServicePort } from "../../domain/port/driver/citasServicePort";


export class ObtenerCitasUseCase {
  private readonly citaService: CitaServicePort;

  constructor(citaService: CitaServicePort) {
    this.citaService = citaService;
  }

  async execute(): Promise<Cita[]> {
    return await this.citaService.getCitas();
  }
}
