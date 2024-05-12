import ingresoAdminPort from "../../domain/port/driver/ingresoAdminUseCasePort";
import { Request, Response } from "express";

export default class ingresoAdminController{
    private ingresoAdmin: ingresoAdminPort
    constructor(ingresoAdmin: ingresoAdminPort){
        this.ingresoAdmin = ingresoAdmin
    }
    // metodo ingreso de admin
    ingresoAdm = async(req: Request, res: Response): Promise<void> => {
        try {
            // se trae el id y el password de la solicitud
            const { id, password } = req.body;
            const admin = await this.ingresoAdmin.ingresoadmin(id, password);
            if (admin) {
                //si admin existe, se devuelve un mensaje de ingreso
                res.status(200).json({ message: 'Ingreso exitoso' });
            } else {
                //si no existe, se devuelve un mensaje de error
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        } catch (error) {
            //entrega el error de la respuesta
            console.error("Error al procesar la solicitud:", error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}