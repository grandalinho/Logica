/**
 * 
 * Churrasco
 * @author Jonas Nicioli
 * 
 */

 //variavel global
 let totalChurrasco

 function calcularChurrasco() {
     let homem, mulher, crianca, carne, refrigerante, cerveja
     homem = parseFloat(frmChurrasco.txtHomem.value.replace(",","."))
     mulher = parseFloat(frmChurrasco.txtMulher.value.replace(",","."))
     Crianca = parseFloat(frmChurrasco.txtCrianca.value.replace(",","."))

     carne = parseFloat(frmChurrasco.txtCarne.value.replace(",","."))
     refrigerante = parseFloat(frmChurrasco.txtRefrigerante.value.replace(",","."))
     cerveja = parseFloat(frmChurrasco.txtCerveja.value.replace(",","."))

    totalChurrasco = ((12 * cerveja) * homem + (carne * 0.3 ) * homem + (4 * cerveja) * mulher + (2 * refrigerante) * mulher + (carne * 0.3) * mulher + (refrigerante * 2) * crianca + (0.1 * carne) * crianca)

     frmChurrasco.txtTotal.value = totalChurrasco.toFixed(0)
 }