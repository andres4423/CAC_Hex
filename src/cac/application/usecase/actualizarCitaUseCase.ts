import { Cita } from "../../domain/model/cita/cita";
import { CitaServicePort } from "../../domain/port/driver/citasServicePort";

export class actualizarCitaUseCase{
    private readonly citaService: CitaServicePort;

    constructor(citaService: CitaServicePort) {
      this.citaService = citaService;
    }
    async execute(cita: Cita): Promise<Cita> {
        return await this.citaService.actualizarCita(cita);
    }
    
}