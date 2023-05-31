let player = {
    saude : 100,
    felicidade : 50 , 
    play: function() {
        this.felicidade += 30;
    },

    eat: function(comida) {
        if (comida== "laranja") {
            this.saude += 10; 
        }
        if (comida== "uva") {
            this.saude += 20;
        }
    }, 
        compraroupa:function (){
            if (this.moedas >= 20){
                this.moedas -=20
                this.roupa  = "sim";
          }
          else if(this.moeda <20 ){
            console.log("moedas insuficientes")
          }
        
            
      }
  }

// Antes da execuçao 
 console.log (player) 


 // Execuçao 
player.compraroupa();
player.compraroupa();
 console.log (player.roupa)
 // depois da exxecuçao 
 console.log (player)    
 



