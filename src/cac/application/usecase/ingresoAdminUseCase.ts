import { Admin } from "../../domain/model/admin/admin";
import { CitaService } from "../service/serviceCitas/citasService";


export class IngresoAdminUseCase {
  ingresoAdmin() {
      throw new Error('Method not implemented.');
  }
  private readonly citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  async ingresoadmin(id: number, password:string): Promise<Admin | null> {
    return await this.citaService.ingresarComoAdmin(id, password);
  }
}
