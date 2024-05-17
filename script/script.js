var topping= prompt("ingrese gusto de helado");
      var precio= 0.00;
      var precioFinal= 0.00;
      var helado= 1000;

if(topping=="oreo"){
    console.log(precio = 10);
} 
else if(topping=="kitkat"){
    console.log(precio = 15);
}
else if(topping=="kinder"){
    console.log(precio = 25);
} else {
    console.log("no tenemos ese topping");
}

var preciofinal= helado + precio;
console.log("el helado cuesta $" +  preciofinal );

//Menu 

var menu, bebida;
menu = prompt("Tipo de menu: carne, pescado, verdura")
switch (menu){
    case 'carne':
        bebida = "¿Desea beber vino tinto?";
        break;
    case 'pescado':
        bebida = "¿Desea beber vino blanco?";
        break;
    case 'verdura':
        bebida = "¿Desea agua?";
        break;
    default:
        bebida = "Elija carne pescado o verdura";
    }
alert(bebida);

//for

var nombre=["rocio", "carlos", "frida", "enzo"];
for(let index = 0 ; index < nombre.length ; index++) {
    console.log(nombre[index])
}

//While

var numero= prompt("ingrese un numero");
while (numero <11){
    console.log("el numero es mas chico que 11");
    numero++

}
console.log("fin while")