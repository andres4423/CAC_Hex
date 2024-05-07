import { Banco } from "../../model/bancos/banco";


export default interface ingresoBancoPort {
  ingresobanco(id: number, password: string): Promise<Banco | null>;
  }