import routes from "./view/indexView.js";
function router(): void {
    const path: string = window.location.hash.slice(1)  || '/';
    const main: HTMLElement | null = document.getElementById('main');
    console.log(path);

    if (main) {
        main.innerHTML = routes[path] || '<h1>Página no encontrada</h1>';
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);