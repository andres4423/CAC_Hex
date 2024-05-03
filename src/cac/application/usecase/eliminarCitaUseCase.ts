import { Cita } from "../../domain/model/cita/cita";
import eliminarUseCasePort from "../../domain/port/driver/eliminarCitaUseCasePort";
import { CitaService } from "../service/serviceCitas/citasService";


export class eliminarCitaUseCase {
  private readonly citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  async execute(id: number): Promise<Cita | null> {
    return await this.citaService.eliminarCita(id);
  }
}
