export  class Cita{
    public id: number;
    public nombre: string;
    public direccion: string;
    public hora: string;
    public descripcion: string;
     public fecha: Date;
     public celular: number;
     public tipo_cita: number;
     public premium: number;
     public lugar: string;
     public fecha_nacimiento: Date;
    constructor(id: number, nombre: string, direccion: string, hora:string, descripcion: string
        , fecha: Date, celular: number, tipo_cita: number, premium: number, lugar: string, fecha_nacimiento: Date
    ){
        this.id = id;
        this.nombre =nombre;
        this.direccion = direccion;
        this.hora = hora;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.celular = celular;
        this.tipo_cita = tipo_cita;
        this.premium = premium;
        this.lugar = lugar;
        this.fecha_nacimiento = fecha_nacimiento
    }
    getId():number{
        return this.id;
    }
    getNombre():string{
        return this.nombre;
    }
    getDireccion():string{
        return this.direccion;
    }
    getHora():string{
        return this.hora
    }
    getDescripcion():string{
        return this.descripcion;
    }
    getFecha():Date{
        return this.fecha;
    }
    getCelular():number{
        return this.celular
    }
    getTipoCita():number{
        return this.tipo_cita;
    }
    getPremium():number{
        return this.premium;
    }
    getLugar():string{
        return this.lugar;
    }

    getFechaNacimiento():Date{
        return this.fecha_nacimiento
    }
    setId(id:number){
        this.id = id;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setDireccion(direccion:string){
        this.direccion = direccion;
    }
    setHora(hora:string){
        this.hora = hora
    }
    setDescripcion(descripcion:string){
        this.descripcion = descripcion
    }
    setFecha(fecha:Date){
        this.fecha = fecha;
    }
    setCelular(celular:number){
        this.celular = celular
    }
    setTipoCita(tipoCita:number){
        this.tipo_cita = tipoCita
    }
    setPremium(premium:number){
        this.premium = premium;
    }
    setLugar(lugar:string){
        this.lugar = lugar
    }
    setFechaNacimiento(fecha_nac:Date){
        this.fecha_nacimiento = fecha_nac
    }

}