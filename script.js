var tablas = document.getElementById("tabla");
var comenzar = document.getElementById("crear");
var restart = document.getElementById("restart");
var tablasImpresas = document.getElementsByClassName("content-tables");

comenzar.addEventListener("click", () =>{
    if(tablas.value == "" || tablas.value == " ") {
        document.getElementsByTagName("p")[0].style.display = 'block';
        document.getElementsByTagName("p")[1].style.display = 'none';
    }else if(+tablas.value < 1 || +tablas.value > 20) {
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementsByTagName("p")[1].style.display = 'block';
    }else {
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementsByTagName("p")[1].style.display = 'none';
        document.getElementById("box_01").style.display = 'none';
        multiplicar(+tablas.value, "multiplicacion");
        factorial(+tablas.value, "factorial");
        tablasImpresas[0].style.display = 'block';
    }
})

restart.addEventListener("click", () => {
    tablasImpresas[0].style.display = 'none';
    restablecer("multiplicacion");
    restablecer("factorial");
    document.getElementById("box_01").style.display = 'block';
})

const multiplicar = (tabla, id_div) => {
    let formaTabla = document.getElementById(id_div);
    let script = `<h4 class="text-center">Tabla del ${tabla}</h4>`;
    for (let index = 1; index <= tabla; index++) {
        script += `<p class="m-0">${tabla} x ${index} = ${tabla*index}</p>`;
    }
    formaTabla.innerHTML = script;
}

const factorial = (tabla, id_div) => {
    let formaTabla = document.getElementById(id_div);
    let script = `<h4 class="text-center">Factoriales</h4>`;
    let concatenacion = "";
    let resultado = 1;
    for (let index = 1; index <= tabla; index++) {
        resultado = resultado*index;
        if (index == 1){
            concatenacion = index.toString();
            script += `<p class="m-0">${index}! = ${concatenacion}</p>`;
        }else {
            concatenacion = concatenacion + " x " + index.toString();
            script += `<p class="m-0">${index}! = ${concatenacion} = ${resultado}</p>`;
        }
    }
    formaTabla.innerHTML = script;
}

const restablecer = (id_div) => {
    let formaTabla = document.getElementById(id_div);
    formaTabla.innerHTML = "";
}