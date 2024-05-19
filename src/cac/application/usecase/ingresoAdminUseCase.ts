import { Admin } from "../../domain/model/admin/admin";
import ingresoAdminPort from "../../domain/port/driver/ingresoAdminUseCasePort";
import { CitaService } from "../service/serviceCitas/citasService";


export class IngresoAdminUseCase implements ingresoAdminPort{
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
