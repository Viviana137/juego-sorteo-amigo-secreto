let nombresAmigos =[];
let nombresSorteado =[];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre==""){
        alert("Por favor ingrese un nombre")
        return;
    }
    nombresAmigos.push(nombre);
    document.getElementById("amigo").value= "";
    mostrarAmigos();
    
}


function mostrarAmigos(){
    let amigosIngresados =document.getElementById("listaAmigos");
    amigosIngresados.innerHTML="";

    for (let i=0; i< nombresAmigos.length; i++){
        amigosIngresados.innerHTML += nombresAmigos[i] + "<br>";
    }
}
function sortearAmigo(){
    if (nombresAmigos.length===0){
        alert("Porfavor, ingrese los nombres para realizar el sorteo")
        return;
    }
    if(nombresAmigos.length===nombresSorteado.length){
        document.getElementById("resultado").innerHTML="Todos los amigos ya fueron sorteados 🥳 ";
        return;
    }

    let numeroAleatorio= Math.floor(Math.random()*nombresAmigos.length);
    let amigoSecreto=nombresAmigos[numeroAleatorio];
    if(nombresSorteado.includes(amigoSecreto)){
        sortearAmigo();
        return;
    }
    
    nombresSorteado.push(amigoSecreto);
    document.getElementById("resultado").innerHTML="🕵️‍♀️ Tu amigo secreto es: "+amigoSecreto;

    
}


    

