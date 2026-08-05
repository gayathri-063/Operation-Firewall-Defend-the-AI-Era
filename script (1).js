
let t=60,s,step=0;
const levels=[
{t:'LEVEL 1: REAL LOGIN',i:'images/login.svg',o:['Left Login','Right Login'],a:0},
{t:'LEVEL 2: PHISHING EMAIL',i:'images/phishing.svg',o:['Open','Report','Ignore'],a:1},
{t:'LEVEL 3: STRONG PASSWORD',i:'images/password.svg',o:['password123','G@y@thri#2026_AI$','abc123'],a:1}
];
function start(){
document.querySelector('button').style.display='none';
document.getElementById('game').style.display='block';
s=setInterval(()=>{t--;timer.innerText=t;if(t<=0){clearInterval(s);alert('Mission Failed');location.reload();}},1000);
load();
}
function load(){
let l=levels[step];
title.innerText=l.t;
pic.src=l.i;
opts.innerHTML='';
l.o.forEach((x,i)=>{
let b=document.createElement('button');
b.className='opt';
b.innerText=x;
b.onclick=()=>{if(i==l.a){step++; if(step<levels.length)load(); else {clearInterval(s);document.querySelector('.card').innerHTML='<h1>🏆 MISSION COMPLETE</h1><h2>You Saved the AI System!</h2><img src="images/shield.svg" width="160"><h2>Score:100/100</h2>';}} else alert('Wrong! Try Again');};
opts.appendChild(b);
});
}
