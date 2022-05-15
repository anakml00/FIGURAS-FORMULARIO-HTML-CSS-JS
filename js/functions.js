function Circulo(){
    var selector = document.getElementById("Figura");
    selector.className='';
    selector.classList.toggle('Circulo');
}

function Arriba(){
    var selector = document.getElementById("Figura");
    selector.className=''; 
    selector.classList.toggle('Arriba');
}
function Abajo(){
    var selector = document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Abajo');
}
function Diagonal_arriba_izquierda(){
    var selector= document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Diagonal_arriba_izquierda');
}
function Diagonal_abajo_derecha(){
    var selector= document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Diagonal_abajo_derecha');
}
function Rombo(){
    var selector= document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Rombo');
}
function Triangulo(){
    var selector= document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Triangulo');
}
function Rectangulo_vertical(){
    var selector= document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Rectangulo_vertical');
}
function Rectangulo_horizontal(){
    var selector= document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Rectangulo_horizontal');
}
function Imagen(){
    var selector= document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Imagen');
}
function Luna(){
    var selector= document.getElementById("Figura");
    selector.className= '';
    selector.classList.toggle('Luna');
}

function capturarDatos(){
    // capturar los valores de los campos 
    //  atraves de sus id y el atributo .value
    var Nombre = document.getElementById("cNombres").value;
    var Edad = document.getElementById("cEdad").value;
    var Fecha_nacimiento= document.getElementById("cFecha").value;
    var Genero= document.getElementById("cgenero").value;
    var Email= document.getElementById("cEmail").value;
    var Descripcion= document.getElementById("cDescripcion").value;
    var Color = document.getElementById("cColor").value;
    
    
    
    // capturamos los parrafos  donde mostraremos la informacion

    var name = document.getElementById("mNombre");
    var age = document.getElementById("mEdad");
    var fecha = document.getElementById("mFecha");
    var gener= document.getElementById("mGenero");
    var ema= document.getElementById("mEmail");
    var descrip= document.getElementById("mDescripcion");
   
    

    name.textContent = Nombre;
    age.textContent = Edad;
    fecha.textContent = Fecha_nacimiento;
    gener.textContent = Genero;
    ema.textContent= Email;
    descrip.textContent= Descripcion;

    // capturamos el contenedor del avatar para luego cambiar su color de fondo 

    var selector= document.getElementById("card-avatar");
    if (Color == "Rojo") {
        selector.style.background= '#ab0606'   
    } 
    if (Color == "Negro"){
        selector.style.background= '#000000'
    }
    if (Color == "Azul"){
        selector.style.background= 'F8CB2E'
    }

    switch (Color){
        case "Rojo":
            selector.style.background= "#ab0606";break;
             case "Negro": 
             selector.style.background= "#000000";break;
             case "Azul":
                 selector.style.background= "#3755a7";break;



    }


        
// Capturar la foto del avatar para cambiar 
// segun su genero

var imgAvatar = document.getElementById("foto");

if (Genero == "Masculino") {
    imgAvatar.src= 'img/avatar1.png';  
} else if(Genero == "Femenino"){
    imgAvatar.src = 'img/avatar2.png';
}else{
    imgAvatar.src = 'img/avatarr.png';
}
}
