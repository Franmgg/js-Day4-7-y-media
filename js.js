var p1 = 0.0;
var pc = 0.0;
var cartas = [1,2,3,4,5,6,7,0.5,0.5,0.5]
var real_card = ["1 de bastos","2 de copas","3 de espadas","4 de oros","5 de copas","6 de espadas","7 de bastos","10 de copas","11 de espadas","12 de oros"]
var game = true;
var stay = false;

window.onload = function () {
    document.getElementById("pickcard").addEventListener('click', function (i) {
        if(game){
         let   rnd = Math.floor(Math.random()*cartas.length)
         let   rnd2 = Math.floor(Math.random()*cartas.length)
        
        document.getElementById("card").innerText=real_card[rnd]
       pc=pc+cartas[rnd2]
       p1=p1+cartas[rnd]
       document.getElementById("point").innerText=p1
      // document.getElementById("point1").innerText=pc
       check()
    }
    });

    document.getElementById("stay").addEventListener('click',function(i){
        stay=true;
        game = false;
        check();
    });

}

function check () { 
    if(p1>7.5){document.getElementById("card").innerText="Has perdido jugador";game=false}
    if(pc>7.5){document.getElementById("card").innerText="Ha perdido la maquina";game=false}
    if(Math.min(Math.abs(p1-7.5),Math.abs(pc-7.5)) == Math.abs(p1-7.5) && stay ){document.getElementById("card").innerText="Has ganado jugador";game=false}
    if(Math.min(Math.abs(p1-7.5),Math.abs(pc-7.5)) != Math.abs(p1-7.5) && stay ){document.getElementById("card").innerText="Has perdido jugador";game=false}
    console.log(Math.min(Math.abs(p1-7.5),Math.abs(pc-7.5)))
 }  
