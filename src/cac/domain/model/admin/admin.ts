export class Admin{
    private id : number;
    private password: string;
    constructor(id:number, password: string){
        this.id = id;
        this.password = password;
    }
    getId():number{
        return this.id
    }
    getPassword():string{
        return this.password
    }
    setId(id:number){
        this.id = id;
    }
    setPassword(password:string){
        this.password = password;
    }
}