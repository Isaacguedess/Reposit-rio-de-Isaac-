window.onload = function(){ 
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
 // variaveis 
 snake = [];
 positionX = 10;
 positionY =  10;
 foodX = 15 ;
 foodY = 15;
 velX = 0;
 velY = 0;
 grid = 20; 
 tam = 3;
//chamada da funçao jogo a cada milisegundos 

function jogo()
{
    //configuraçao da tela 
     
    ctx.fillStyle ="#2980B9";

    ctx.fillRect(0,0, canvas.width, canvas.height)

     //posicionando a cobra

        snake.push({x: positionX, y: positionY})
        console.log(snake[0])

        // configurando a cobra 
        ctx.fillStyle = "#OOf102";
        for(let i=0; i < snake.length ; i++){
            ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1)
        }  
}
setInterval( jogo, 100)

}

