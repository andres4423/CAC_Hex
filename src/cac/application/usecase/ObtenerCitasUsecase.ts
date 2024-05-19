import { Cita } from "../../domain/model/cita/cita";
import getcitaUseCasePort from "../../domain/port/driver/getcitaUseCasePort";
import { CitaService } from "../service/serviceCitas/citasService";


export class ObtenerCitasUseCase implements getcitaUseCasePort{
  private readonly citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  async getCitas(): Promise<Cita[]> {
    return await this.citaService.getCitas();
  }
}
