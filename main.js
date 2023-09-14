// Funciones
let nombre, email;

function bienvenida(){
    nombre = prompt("Ingrese su nombre: ");
    email = prompt("Ingrese su correo electrónico: ");
    
    while(nombre == "" || email == ""){
        alert("El nombre y/o correo electronico deben ser ingresados");
        nombre = prompt("Ingrese su nombre: ");
        email = prompt("Ingrese su correo electrónico: ");
    }

    alert(`Hola ${nombre} vamos a calcular el costo de su encomienda`);
}

let largo, ancho, profundidad;

function tamañoPaquete(){
    largo = parseInt(prompt("Largo: "));
    ancho = parseInt(prompt("Ancho: "));
    profundidad = parseInt(prompt("Profundidad: "));
    
    while(isNaN(largo) || isNaN(ancho) || isNaN(profundidad) || largo == 0 || ancho == 0 || profundidad == 0){
        alert("Falto ingresar algun valor, intente de nuevo.");
        largo = parseInt(prompt("Largo: "));
        ancho = parseInt(prompt("Ancho: "));
        profundidad = parseInt(prompt("Profundidad: "));
    } 
}

let kilometrosIngresados;

function kilometros(){
    kilometrosIngresados = parseInt(prompt("Kilometros: "));
    while(isNaN(kilometrosIngresados) || kilometrosIngresados == 0){
        alert("El valor ingresado no es correcto. Intentelo de nuevo.");
        kilometrosIngresados = parseInt(prompt("Kilometros: "));
    }
}

// Ingreso datos personales
bienvenida();

// Aviso importantes
alert("Recuerde que no puede enviar animales, comida que pueda ser perjudicada, armas, monedas, drogas y medicamentos.");

// Ingreso de tamaño
alert("Ingrese los siguientes valores en CENTIMETROS de su paquete. Recuerde primero envalarlo para que el calculo sea mas preciso.");
tamañoPaquete();

// Ingreso kilometros
alert("Ahora le vamos a pedir que ingrese el valor en kilometros que hay desde el punto que va a dejar su paquete hasta donde lo quiere enviar.");
kilometros();

// Operaciones
let tamaño = largo + ancho + profundidad;
let costoTamaño = 0;
    if(tamaño > 0 && tamaño <= 10){
        costoTamaño = 50;
        }else if(tamaño > 10 && tamaño <= 20){
            costoTamaño = 80;
        }else if(tamaño > 20 && tamaño <= 30){
            costoTamaño = 140;
        }else if(tamaño > 30 && tamaño <= 40){
            costoTamaño = 190;
        }else if(tamaño > 40 && tamaño <= 50){
            costoTamaño = 240;
        }else if(tamaño > 50 && tamaño <= 60){
            costoTamaño = 290;
        }else if(tamaño > 60 && tamaño <= 100){
            costoTamaño = 500;
        }else{
            alert("Los valores ingresados son muy elevados.");
}


let costoKilometros = 0;
if(kilometrosIngresados > 0 && kilometrosIngresados <= 5){
    costoKilometros = 200;
    }else if(kilometrosIngresados > 5 && kilometrosIngresados <= 10){
        costoKilometros = 350;
    }else if(kilometrosIngresados > 10 && kilometrosIngresados <= 20){
        costoKilometros = 400;
    }else if(kilometrosIngresados > 20 && kilometrosIngresados <= 30){
        costoKilometros = 450;
    }else if(kilometrosIngresados > 30 && kilometrosIngresados <= 40){
        costoKilometros = 500;
    }else if(kilometrosIngresados > 40 && kilometrosIngresados <= 50){
        costoKilometros = 550;
    }else if(kilometrosIngresados > 50 && kilometrosIngresados <= 60){
        costoKilometros = 600;
    }else if(kilometrosIngresados > 60 && kilometrosIngresados <= 70){
        costoKilometros = 650;
    }else if(kilometrosIngresados > 70 && kilometrosIngresados <= 80){
        costoKilometros = 700;
    }else if(kilometrosIngresados > 80 && kilometrosIngresados <= 90){
        costoKilometros = 750;
    }else if(kilometrosIngresados > 90 && kilometrosIngresados <= 100){
        costoKilometros = 800;
    }else{
        costoKilometros = 850;
}


// Costo final
let valorFinal = costoTamaño + costoKilometros;
alert(`El costo final del producto es $ ${valorFinal}`);

// Confirmacion del envio
let confirmacionEnvio = prompt("¿Desea realizar el envio?: ").toLowerCase();

if (confirmacionEnvio == "si"){
    alert(`Envío confirmado, le enviamos toda la informacion al mail ${email}.`);
}else if(confirmacionEnvio == "no"){
    alert("Envio cancelado. Lo esperamos la proxima!");
}else{
    alert("Lo ingresado no es correcto.");
    confirmacionEnvio = prompt("¿Desea realizar el envio?: ").toLowerCase();
}