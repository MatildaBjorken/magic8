const holder = document.querySelector('.message-holder')
const message = document.querySelector('#message');
const ball = document.querySelector('.ball');

const messages = [ "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ]


fadeInAnimation = function(){  
    setTimeout(function(){
    ball.classList.remove('shake');
    holder.style.opacity = 1;
    message.style.opacity = 1;
    message.innerHTML = messages[Math.floor(Math.random()*messages.length)];
  }, 3000)
  
};

fadeOutAnimation = function(callback){
  holder.style.opacity = 0;
  message.style.opacity =0;  
  callback();
}

ball.addEventListener('click', function() {
  ball.classList.add('shake');
  fadeOutAnimation(fadeInAnimation);

})