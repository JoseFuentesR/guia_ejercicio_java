export default {
    data:`
    <h1>Calculo Euro / Dolar</h1>
    <h2>Cantidad en pesos chilenos </h2>

    <input id="txt1" type="text" placeholder="ingrese cantidad"><br>
    <input id="rd1" type="radio" name="grupo" value="euros" checked />convertir a euros <br>
    <input id="rd2" type="radio" name="grupo" value="dolares" />convertir a dolares <br>
    
    <button onclick="dos()">Calcular</button>
    
    <p id="resp"></p>
    `,
    dos: () => {
        var can = document.getElementById("txt1").value;
        var can2 = parseFloat(can);
        var resp = document.getElementById("resp");
        var opciones = document.getElementsByName("grupo");
        var estado = "";
        opciones.forEach((item) => {
            if (item.checked){
                estado = item.value;
            }
        });
        if(can2 >=1){
            if(estado = "euros"){
                resp.innerHTML += `usted a elejido ${estado}<br>`;
                var suma = can2*930;
                resp.innerHTML += `la cantidad es $${suma}`
            }else if(estado = "dolar"){
                resp.innerHTML += `usted a elejido ${estado}<br> `;
                var suma2 = cant2*850;
                resp.innerHTML += `la cantidad es $${suma2}<br>`;
            }
        }else{
            resp.innerHTML =`debe ingresar una cantidad correcta`;
        }
    },
};