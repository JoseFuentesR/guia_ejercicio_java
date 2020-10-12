export default{
  data:`
  <h1>Calculo Remuneracion</h1>
  <h3>Sueldo base</h3>

  <input id="txt1" type="number" /><br>

  <input id="rd1" type="radio" name="grupo" value="fonasa" checked />Fonasa
  <input id="rd2" type="radio" name="grupo" value="isapre" />Isapre<br>
  
  <select id="def">
    <option value="0.13">habitat</option>
    <option value="0.12">provida</option>
    <option value="0.11">modelo</option>
  </select>
  <br><br>
  <button onclick="tres()">resultado</button>
  <p id="respuesta"></p>
  `,
  tres:() => {
    var cant = document.getElementById("txt1").value;
    var select =document.getElementById("def").value;
    var resp = document.getElementById("respuesta");
    var opciones = document.getElementsByName("grupo");
    var estado ="";
    opciones.forEach((item) => {
        if(item.checked){
          estado.value;
        }
    });

     if(cant !="" && cant>0){
       if(estado="fonasa"){
        var cuenta = cant*7/100;
       }else if(estado="isapre"){
        var cuenta = cant*13/100;
       }
        var descuento = cant*select;
        var total = cant - descuento - cuenta ;
        resp.innerHTML += `el descuento de salud es $${descuento}<br>`;
        resp.innerHTML += `el descuento de afp es $${cuenta}<br>`;
        resp.innerHTML += `el total es ${total}`; 
     }else{
       resp.innerHTML=`debe ingresar un numero valido`;
     } 
  },  
};