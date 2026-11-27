document.getElementById('box')?.addEventListener('click',()=>{document.getElementById('box').style.transform='scale(1.3)';setTimeout(()=>location.href='question.html',400)});
document.getElementById('no')?.addEventListener('click',()=>document.getElementById('err').classList.add('show'));
document.getElementById('ok')?.addEventListener('click',()=>document.getElementById('err').classList.remove('show'));
document.getElementById('play')?.addEventListener('click',e=>{e.target.textContent=e.target.textContent==='\u25B6'?'\u275A\u275A':'\u25B6'});
