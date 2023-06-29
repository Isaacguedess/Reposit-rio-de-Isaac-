window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
  
    // variaveis
    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;
    //chamada da funçao jogo a cada milisegundos
  
    setInterval(jogo, 100);
    //controles
    document.addEventListener("keydown", function (e) {
      switch (e.keyEvent) {
        //stea direita keydown 39
        case 39:
          velX = 1;
          velY = 0;
          break;
        //stea direita keydown 39
        case 37:
          velX = -1;
          velY = 0;
          break;
        //stea direita keydown 39
  
        case 38:
          velX = 0;
          velY = 1;
          break;
        //stea direita keydown 39
  
        case 40:
          velX = 0;
          velY = -1;
          break;
      }
    });
  };
  
  function jogo() {
    //configuraçao da tela
  
    ctx.fillStyle = "#333eff";
  
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Deslocamento da cobra 
  positionX += velX
  positionY += velY
  
  // espelhamneto da cobra 
  
  if ( positionX < 0 ){
      positionX = grid 
  }
    if (positionX > grid ){
      positionX=0
    }
  if (positionY < 0 ){
      positionY = grid 
  }
      if ( positionY > grid ){
          positionY = 0
      }
    // configurando a cobra
    ctx.fillStyle = "red";
    for (let i = 0; i < snake.length; i++) {
      ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid - 1, grid - 1);
      if (snake[i].x == positionX && snake[i].y == positionY) {
        tam = 3;
      }
    }
     //posicionando a cobra
  
     snake.push({ x: positionX, y: positionY });
  }
  