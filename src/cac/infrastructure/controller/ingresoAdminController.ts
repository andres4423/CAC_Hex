import { Admin } from "../../domain/model/admin/admin";
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
            // Verificar si el ID y la contraseña son válidos
            const admin = await this.ingresoAdmin.ingresarAdmin(id, password);
            if (admin) {
                // Si las credenciales son válidas, enviar una respuesta exitosa
                res.status(200).json({ message: 'Ingreso exitoso' });
            } else {
                // Si las credenciales son inválidas, enviar un mensaje de error
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}