const keys=document.getElementById('keys');let digits='';
['1','2','3','4','5','6','7','8','9','C','0','\u232B'].forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>{if(k==='C')digits='';else if(k==='\u232B')digits=digits.slice(0,-1);else if(digits.length<8)digits+=k;show()};keys.appendChild(b)});
function show(){const d=digits.padEnd(8,'_');const f=(id,s,ph)=>{const e=document.getElementById(id);const v=s.replace(/_/g,'');e.textContent=v||ph;e.classList.toggle('on',!!v)};f('dd',d.slice(0,2),'dd');f('mm',d.slice(2,4),'mm');f('yy',d.slice(4,8),'yyyy')}
document.getElementById('unlock').onclick=()=>{if(digits.length<8)document.getElementById('msg').textContent='Enter the full date first \u2661';else location.href='song.html'};
