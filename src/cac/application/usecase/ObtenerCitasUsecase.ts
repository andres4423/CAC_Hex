import { Cita } from "../../domain/model/cita/cita";
import getcitaUseCasePort from "../../domain/port/driver/getcitaUseCasePort";


export class ObtenerCitasUseCase {
  private readonly citaService: getcitaUseCasePort;

  constructor(citaService: getcitaUseCasePort) {
    this.citaService = citaService;
  }

  async execute(): Promise<Cita[]> {
    return await this.citaService.getCitas();
  }
}
