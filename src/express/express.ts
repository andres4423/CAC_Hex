import express,{ Application } from "express"
import environment from "./config/config"
import ExpressRouter from "./route/ExpressRouter"
import path from 'path'

export default class Express{
    private readonly app: Application
    private readonly env: environment

    constructor(private readonly expressRouter: ExpressRouter[]){
        this.app = express()
        this.config()
        this.env = new environment()
        this.routers()
    }

    config=():void=>{
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        // this.app.use(express.static(path.join(__dirname, '../frontend/views')));
        // this.app.use('/static', express.static(join(process.cwd(), "frontend")))
        this.app.set('views', path.join(__dirname,'../frontend/views' ));
        this.app.use('/static', express.static(path.join(__dirname, '../frontend/assets')));
        this.app.set('view engine', 'ejs');
    }
    routers=():void=>{
        this.expressRouter.forEach(router => {
            this.app.use(router.root, router.router)
        })
    }


    start= (): void=>{
        this.app.listen(this.env.PORT, () => {
            console.log(`Server is running on http://${this.env.HOST}:${this.env.PORT}`)
        })
    }
}
