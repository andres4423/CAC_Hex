import { Cita } from "../../domain/model/cita/cita";
import ActualizarCitaUseCasePort from "../../domain/port/driver/actualizarCitaUseCasePort";
import { CitaService } from "../service/serviceCitas/citasService";


export class actualizarCitaUseCase implements ActualizarCitaUseCasePort{
    private readonly citaService: CitaService;

    constructor(citaService: CitaService) {
      this.citaService = citaService;
    }
    async actualizarCita(cita: Cita): Promise<Cita> {
        return await this.citaService.actualizarCita(cita);
    }
    
}