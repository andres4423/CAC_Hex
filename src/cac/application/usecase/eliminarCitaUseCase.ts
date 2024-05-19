import { Cita } from "../../domain/model/cita/cita";
import eliminarCitaUseCasePort from "../../domain/port/driver/eliminarCitaUseCasePort";
import { CitaService } from "../service/serviceCitas/citasService";


export class eliminarCitaUseCase implements eliminarCitaUseCasePort{
  private readonly citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  async eliminarCita(id: number): Promise<Cita | null> {
    return await this.citaService.eliminarCita(id);
  }
}
