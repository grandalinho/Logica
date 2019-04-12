/**
 * 
 * Area do Círculo
 * @author Jonas Nicioli
 * 
 */

 //variavel global
 let areaCirculo

 function calcularArea() {
     let raio
     raio = parseFloat(frmCirc.txtRaio.value.replace(",","."))
     areaCirculo = raio * Math.PI
     frmCirc.txtArea.value = areaCirculo.toFixed(0)
 }