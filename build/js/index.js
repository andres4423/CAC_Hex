"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indexView_js_1 = __importDefault(require("./view/indexView.js"));
function router() {
    const path = window.location.hash.slice(1) || '/';
    const main = document.getElementById('main');
    console.log(path);
    if (main) {
        main.innerHTML = indexView_js_1.default[path] || '<h1>Página no encontrada</h1>';
    }
}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
