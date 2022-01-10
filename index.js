


var head = document.querySelector('#heading');

var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

head.addEventListener('click', function(e) {

    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1+ 1);
    
    
    var randomNumber2 = Math.random() * 6;
    randomNumber2 = Math.floor(randomNumber2+ 1);
    

    if(randomNumber1>randomNumber2)
    {
        head.textContent = "🚩Player 1 Wins  ";
    }else if(randomNumber1<randomNumber2)
    {
        head.textContent = "Player 2 wins 🚩";
    }else
    {
        head.textContent = "Draw Match 🏁";
    }

    img1.src = `dice${randomNumber1}.png`;
    img2.src = `dice${randomNumber2}.png`;

});
