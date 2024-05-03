import { Cita } from "../../domain/model/cita/cita";
import { CitaService } from "../service/serviceCitas/citasService";


export class ObtenerCitasUseCase {
  private readonly citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  async execute(): Promise<Cita[]> {
    return await this.citaService.getCitas();
  }
}
