import { Cita } from "../../domain/model/cita/cita";
import { CitaService } from "../service/serviceCitas/citasService";


export class ObtenerCitaPorIdUseCase {
  getCitaById(citaId: number) {
      throw new Error('Method not implemented.');
  }
  private readonly citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  async execute(id: number): Promise<Cita | null> {
    return await this.citaService.getCitaById(id);
  }
}
