import ingresoAdminPort from "../../domain/port/driver/ingresoAdminUseCasePort";
import { Request, Response } from "express";

export default class ingresoAdminController{
    private ingresoAdmin: ingresoAdminPort
    constructor(ingresoAdmin: ingresoAdminPort){
        this.ingresoAdmin = ingresoAdmin
    }
    ingresoAdm = async(req: Request, res: Response): Promise<void> => {
        try {
            const { id, password } = req.body;
            const admin = await this.ingresoAdmin.ingresoadmin(id, password);
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