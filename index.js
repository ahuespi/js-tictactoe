function startGame(){
    var div = document.getElementById('startGame');
    div.classList.add('hide');
    var player1 = prompt('Por favor, ingrese el nombre del primer jugador');
    var player2 = prompt('Por favor, ingrese el nombre del segundo jugador');
    
    var players = [player1, player2];
    document.getElementById('player1').innerHTML = player1;
    document.getElementById('player2').innerHTML = player2;
    selectPlayer(players);
}

function selectPlayer(players){
    var playerRandom = players[Math.floor(Math.random()*players.length)];
    var msg = document.getElementById("messageStart") 
    msg.innerHTML= `Comienza el juego: ${playerRandom}`;
    msg.style.visibility = 'visible';
    
    setTimeout(function(){
        msg.style.visibility = 'hidden';
        },3000);
}

function selectOption(id){
    console.log(id);
}




