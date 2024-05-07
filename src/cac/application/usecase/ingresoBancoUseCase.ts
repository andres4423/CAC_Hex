import { Banco } from "../../domain/model/bancos/banco";
import { CitaService } from "../service/serviceCitas/citasService";


export class IngresoBancoUseCase {
  ingresoAdmin() {
      throw new Error('Method not implemented.');
  }
  private readonly citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  async ingresobanco(id: number, password:string): Promise<Banco | null> {
    return await this.citaService.ingresobanco(id, password);
  }
}
