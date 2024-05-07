import { Request, Response } from "express";
import ingresoBancoPort from "../../domain/port/driver/ingresoBancoUseCasePort";

export default class ingresoBancoController{
    private ingresoAdmin: ingresoBancoPort
    constructor(ingresoAdmin: ingresoBancoPort){
        this.ingresoAdmin = ingresoAdmin
    }
    ingresoAdm = async(req: Request, res: Response): Promise<void> => {
        try {
            const { id, password } = req.body;
            // Verificar si el ID y la contraseña son válidos
            const admin = await this.ingresoAdmin.ingresobanco(id, password);
            if (admin) {
               
                res.status(200).json({ message: 'Ingreso exitoso' });
            } else {
               
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}