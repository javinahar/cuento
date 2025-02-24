function palabra(palabra, genero) {
  var resultado = "";
  switch (palabra) {
    case "un":
         resultado = (genero === "masculino") ? "un" : "una";
          break;
    case "guerrero":
         resultado = (genero === "masculino") ? "guerrero" : "guerrera";
          break;
    case "heroe":
         resultado = (genero === "masculino") ? "un héroe" : "una heroína";
        break;
    case "valiente":
         resultado = (genero === "masculino") ? "el valiente guerrero" : "la valiente guerrera";
        break;
    default:
         resultado = "DESCONOCIDO";
  }

  return resultado;
}

function tellStory(){
 //distintos elementos del cuento
   var txtnombre = document.getElementById("txtnombre");
   var txtgenero = document.getElementById("txtgenero");
   var txtpais = document.getElementById("txtpais");
   var txtfigura = document.getElementById("txtfigura");
   var txtamigo = document.getElementById("txtamigo");
   var txtpaisatacar = document.getElementById("txtpaisatacar");
   var imagen;

   if (txtnombre.value=="" || txtpais.value=="" || txtfigura.value=="" || txtamigo.value==""){
      alert("Debes llenar todos los campos para poder crear tu historia");
      return;
   }
   
  switch(txtpaisatacar.value)
     {
     case "Francia":
        imagen='<img src="images/banderafrancia.jpg" alt="bandera de Francia" style="width: 50px;" title="Bandera de Francia" />'; 
        break
     case "Alemania":
        imagen='<img src="images/banderaalemania.jpg" alt="bandera de Alemania" style="width: 50px;" title="Bandera de Alemania"/>';
        break
     case "Italia":
        imagen='<img src="images/banderaitalia.jpg" alt="bandera de Italia" style="width: 50px;" title="Bandera de Italia"/>';
         break
          
     }

     
 var output = document.getElementById("output");
  
 //crear variables de input
 var nom = txtnombre.value;
 var pais = txtpais.value;
 var ataca = txtpaisatacar.value;
 var amigo = txtamigo.value;
 var figura = txtfigura.value;
 var genero = txtgenero.value;  


 //escribe el cuento
  
 var story = "En una tierra lejana llamada " + pais + ", vivía " + nom + ", " + palabra('un', genero) + " valiente " +  palabra('guerrero', genero) + ". Un día, llegó a sus oídos la noticia de que el poderoso ejército de " + imagen + " planeaba invadir su patria. " + nom + " sabía que debía hacer algo para proteger a su pueblo. ";
 story += "Con la ayuda de su fiel amigo " + amigo + ",  " + nom + " ideó un plan audaz: construir un enorme " + figura + " de madera, tan grande que pareciera un regalo para los invasores.  " + nom + " y " + amigo + " llenaron el vientre del " + figura + " con soldados ocultos, esperando el momento oportuno para atacar. ";
 story += "Cuando el ejército de " + imagen + " vio el magnífico " + figura + ", se llenó de admiración y lo llevó a su ciudad.  Por la noche, mientras los invasores celebraban su victoria, los soldados ocultos en el " + figura + " de madera salieron sigilosamente, abriendo las puertas de la ciudad a " + nom + " y sus aliados. " + nom + " lideró a su ejército hacia la batalla, derrotando a los invasores y salvando a su patria. " + nom + " se convirtió en " + palabra('heroe', genero) + " y su nombre quedó grabado en la historia como " + palabra('valiente', genero) + " que derrotó al enemigo gracias a la astucia del " + figura + " de " + pais + " ."; 

 //copiar historia en el output
 output.innerHTML = story;
document.getElementById("borrar").style.display = "block";

   if(genero=== "masculino"){
      document.getElementById("caballeroanimado").style= "display: block; margin: auto;"; 
      document.getElementById("guerrera").style= "display: none";
   } else {
      document.getElementById("guerrera").style= "display: block; margin: auto;";
      document.getElementById("caballeroanimado").style= "display: none";
   }
} // termina contado la historia

function clearStory(){
 var output = document.getElementById("output");
 output.innerHTML = "";

document.getElementById("borrar").style.display = "none"; 
document.getElementById("guerrera").style= "display: none";
document.getElementById("caballeroanimado").style= "display: none";
}

