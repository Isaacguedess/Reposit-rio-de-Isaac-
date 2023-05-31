



 
// Iniciando uma variavel de soma 
let total = 0

//Inicializando a variavael de limite 
let j = 1

// Enquanto j for menor ou igual a 10 , faça 
while(j <= 10){
    total = total +1
    console.log(j)
    j++
}
   
// colisão 
 let vidas = 100; 
 let colidindo = true; 

  while(colidindo ){
    vidas -= 1;
    console.log(vidas);
    if(vidas == 0){
        break;
    }
  }