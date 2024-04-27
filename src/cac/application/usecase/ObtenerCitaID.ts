import { Cita } from "../../domain/model/cita/cita";
import { CitaServicePort } from "../../domain/port/driver/citasServicePort";

export class ObtenerCitaPorIdUseCase {
  private readonly citaService: CitaServicePort;

  constructor(citaService: CitaServicePort) {
    this.citaService = citaService;
  }

  async execute(id: number): Promise<Cita | null> {
    return await this.citaService.getCitaById(id);
  }
}
