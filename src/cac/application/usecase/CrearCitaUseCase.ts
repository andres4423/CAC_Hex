import { Cita } from "../../domain/model/cita/cita";
import CrearCitaUseCasePort from "../../domain/port/driver/crearCitaUseCasePort";




export class CrearCitaUseCase {
  private readonly crearcita: CrearCitaUseCasePort;

  constructor(crearcita: CrearCitaUseCasePort) {
    this.crearcita = crearcita;
  }

  async execute(cita: Cita): Promise<Cita> {
    return await this.crearcita.crearCita(cita);
  }
}
