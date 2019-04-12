/**
 * 
 * Area do Círculo
 * @author Jonas Nicioli
 * 
 */

 //variavel global
 let tempFahrenheit 

 function convertTemp() {
     let celsius
     celsius = parseFloat(frmTemp.txtCelsius.value.replace(",","."))
     tempFahrenheit  = ( celsius * 9 / 5) + 32
     frmTemp.txtFahrenheit.value = tempFahrenheit .toFixed(0)
 } 