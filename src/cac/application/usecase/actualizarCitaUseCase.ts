import { Cita } from "../../domain/model/cita/cita";
import ActualizarCitaUseCasePort from "../../domain/port/driver/actualizarCitaUseCasePort";


export class actualizarCitaUseCase{
    private readonly citaService: ActualizarCitaUseCasePort;

    constructor(citaService: ActualizarCitaUseCasePort) {
      this.citaService = citaService;
    }
    async execute(cita: Cita): Promise<Cita> {
        return await this.citaService.actualizarCita(cita);
    }
    
}