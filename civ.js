function setup() {
    let divMain = document.getElementById("main");
    let terrain = "grass,hill,swamp,forest,mountain,desert,snow".split(",");



    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let t = document.createElement('div');
            t.className = "hex " + rndTerrain(terrain);
            t.style.top = (-170 + j * 170) + "px";
            t.style.left = (-198 + i * 198 + 100 * (j % 2)) + "px";
            divMain.appendChild(t);
        }
    }


    
}


function rndTerrain(terr) {
    let idx = Math.floor(Math.random() * terr.length);
    return terr[idx];
}