var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//carregando imagens 

  var bird = new Image();
     bird.src = "images/bird.png"

var bg = new Image();
bg.src = "images/bg.png" 

 var piso = new Image();
 piso.scr = "images/piso.png"

 var canocima = new Image();
 canocima.src = "images/canocima.png "

 var canobaixo = new Image();
 canobaixo.src = "images/canobaixo.png"

 //variaveis  

 var eec = 100;
 var constant;
 var bX = 33;
 var bY = 200
 var gravity =1.3;
 var score = 0;
 var cano =  []

 cano[0]= { 
     x: canvas.width,
     y: 0
 }

 //carregando os sons 

 var fly = new Audio();
 fly.scr = "sounds/fly.mp3"

 var score = new Audio();
 score.scr = "sounds/score.mp3"
 
    //captura de tecla 
    document.addEventListener("keydown",voa);
    // voando 
        function voa (){
            bY = bY - 26; 
            fly.play();
        }
 
 function jogo(){
     //fundo do jogo
     ctx.drawImage(bg,0,0)
     //DrawImage(imagens X, Y )
    
    //criando canos 

    for(let i = 0; i < cano.length; i++){
        //posição d cano de baixo
        constant = canocima.height + eec  
        //configurando o cano de cima 
        ctx.drawImage(canocima, cano[i].x, cano[i].y)
        //configurando o cano de baixo  
        ctx.drawImage(canobaixo,cano[i].x, cano [i].y+constant)
        //movimentaçao do cano 
        cano [i].x = cano[i].x-1
        if(cano[i].x == 125){
          cano.push({
            x : canvas.width,
            y : Math.floor(Math.randon()*canocima.height)-canocima.height
          })
        }
    }

     //criand canos 
     for( let i = 0 ; i< cano.length; i++){
        // posiçao do cano de baixo 
        constant = canocima     
     }

     //desenhando o chão

     ctx.drawImage(piso,0,canvas.height - piso.height)

     ctx.drawImage(bird,bX, bY)
     bY += gravity;

     requestAnimationFrame(jogo);
 }
 jogo()


