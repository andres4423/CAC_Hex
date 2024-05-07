import { Admin } from "../../model/admin/admin";


export default interface ingresoAdminPort {
    ingresarAdmin(id: number, password: string): Promise<Admin | null>;
  }