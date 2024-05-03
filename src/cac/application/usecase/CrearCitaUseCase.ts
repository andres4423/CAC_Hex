import { Cita } from "../../domain/model/cita/cita";
import { CitaService } from "../service/serviceCitas/citasService";




export class CrearCitaUseCase {
  private readonly crearcita: CitaService;

  constructor(crearcita: CitaService) {
    this.crearcita = crearcita;
  }

  async execute(cita: Cita): Promise<Cita> {
    return await this.crearcita.crearCita(cita);
  }
}
