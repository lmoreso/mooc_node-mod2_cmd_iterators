// Recuperar parámetros
let [rutaNode, rutaFuente, ...restoArgs] = process.argv;
estoyDebugando = false;

console.log("");
console.log("Ruta de Node:", rutaNode);
console.log("Ruta de este archivo:", rutaFuente);

if (estoyDebugando === true) {
    console.log("");
    console.log(`Se han encontrado ${restoArgs.length} parámetros:`);
    restoArgs.forEach(element => {
        console.log(element);
    });
    console.log("");
    console.log("Quito los parámetros precedidos de -r: y ordeno:");
}

// Filtro y ordeno el nuevo array
let arrayFiltrado = restoArgs.filter((elElemento, elIndice, elArray) => {
    res = elElemento !== '-r' && (elIndice === 0 || elArray[elIndice - 1] !== '-r');
    return res;
});
arrayFiltrado.sort();

if (estoyDebugando === true) {
    console.log("");
    console.log(`El array filtrado y ordenado tiene ${arrayFiltrado.length} registros:`);
    arrayFiltrado.forEach(element => {
        console.log(element);
    });
}

// Reduzco el array y cuento repeticiones
console.log("");
arrayFiltrado.reduce((acum, elElemento, elIndice, elArray) => {
    if (elElemento === elArray[elIndice + 1]) {
        acum++;
    } else {
        console.log(`${elElemento}: ${++acum}`);
        acum = 0;
    }
    return acum;
}, 0);