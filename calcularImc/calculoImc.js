/**
 * 
 * 
 * 
 */

 let imc

 function calcularImc() {
     let peso, altura
     peso = parseFloat(frmImc.txtPeso.value.replace(",","."))
     altura = parseFloat(frmImc.txtAltura.value.replace(",","."))

     imc = peso / (altura * altura) 
     
    frmImc.txtImc.value = imc.toFixed(1)
   
    if (imc < 17){
        document.getElementById("imc").src = "imc1.png"
     }
}  