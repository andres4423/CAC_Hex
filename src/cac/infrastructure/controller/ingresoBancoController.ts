import { Request, Response } from "express";
import ingresoBancoPort from "../../domain/port/driver/ingresoBancoUseCasePort";

export default class ingresoBancoController{
    private ingresoBanco_: ingresoBancoPort
    constructor(ingresobanco: ingresoBancoPort){
        this.ingresoBanco_ = ingresobanco
    }
    ingresoBanco = async(req: Request, res: Response): Promise<void> => {
        try {
            const { id, password } = req.body;
            // Verificar si el ID y la contraseña son válidos
            const banco_user = await this.ingresoBanco_.ingresobanco(id, password);
            if (banco_user) {
               // si el usuario de banco existe, este permite el ingreso
                res.status(200).json({ message: 'Ingreso exitoso' });
            } else {
               // Si no, retorna error de credenciales
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}