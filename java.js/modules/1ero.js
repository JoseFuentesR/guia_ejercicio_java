export default {
    data:`
    <h1>IMC</h1>
    <h2>peso</h2>
    <input id="txt1" type="text" placeholder="ingrese el peso">
    <h2>estatura</h2>
    <input id="txt2" type="text" placeholder="ingrese su estatura "/>
    <button onclick="uno()">calcular</button>
    <p id="resp"></p>
    `,
    uno:() => {
        var peso = document.getElementById("txt1").value;
        var estatura = document.getElementById("txt2").value;
        var respuesta = document.getElementById("resp");
        var peso2 = parseFloat(peso);
        var estatura2 = parseFloat(estatura);
        if(peso2==""){
            respuesta.innerHTML = "debe ingresar un peso"
        }else if(estatura2>=1.5 && estatura2<=2.20){
            var elevado = Math.pow(estatura,2);
            var resultado = peso2/elevado;
            var recorte = resultado.toFixed(1);
            respuesta.innerHTML += `tu imc ${recorte} <br>`;
            if(recorte>= 18.5 && recorte<=24.9 ){
                respuesta.innerHTML += `tu imc es normal`;
            }else if(recorte>=25.0 && recorte<=29.9){
                respuesta.innerHTML += `estas con sobrepeso`;
            }else if(recorte>=30.0){
                respuesta.innerHTML +=`estas obeso`;
            }
        }else{
            respuesta.innerHTML = "ingrese un numero correcto"
        }    
    }
};