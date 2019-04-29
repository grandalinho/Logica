/**
 * 
 * Estudo tabuada
 * @author Jonas 
 * 
 */

 //document.write("<p>" + i + " x " + valor + " = " + valor * i + "</p>")
 

 let valor = 7

 for (let i = 1; i < 11; i++){
     document.write("<p>Tabuada do " + i + "</p>" )
     for (let j = 1; j < 11; j++){
        document.write("<p>" + i + " x " + j + " = " + (j * i) + "</p>")
     }
 } 