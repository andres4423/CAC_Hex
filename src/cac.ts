import Express from "./express/Express"
import factoryCitas from "./cac/infrastructure/factory/factoryCitas";
const factory = new factoryCitas()
const citasRouter = factory.createRouter()
const cacApp = new Express([
citasRouter
])
cacApp.start()