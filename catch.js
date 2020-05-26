var ball=document.getElementById('ball');

ball.style.left=ball.offsetLeft+'px';
ball.style.top=ball.offsetHeight+'px';

ball.addEventListener('mouseover',function()
{
   ball.style.left=(Math.random()*(window.innerWidth-50) + 0)+'px'; 
   ball.style.top=(Math.random()*(window.innerHeight-50) + 0)+'px'; 
})