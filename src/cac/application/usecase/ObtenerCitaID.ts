import { Cita } from "../../domain/model/cita/cita";
import obtenerCitaIDPort from "../../domain/port/driver/obtenerCitaIDUseCasePort";
import { CitaService } from "../service/serviceCitas/citasService";


export class ObtenerCitaPorIdUseCase implements obtenerCitaIDPort{
  getCitaByID(id: number) {
    console.log(id)
      throw new Error('Method not implemented.');
  }
  private readonly citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  async getCitaById(id: number): Promise<Cita | null> {
    return await this.citaService.getCitaById(id);
  }
}
