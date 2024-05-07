import { Admin } from "../../model/admin/admin";


export default interface ingresoAdminPort {
  ingresoadmin(id: number, password: string): Promise<Admin | null>;
  }