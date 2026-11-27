(()=>{const C=window.SITE,$=s=>document.querySelector(s),R=document.documentElement.style,E=C.effects;
const el=(t,h,c)=>{const e=document.createElement(t);if(c)e.className=c;e.innerHTML=h;return e};
const cp=(b,txt,label,msg)=>b.onclick=()=>navigator.clipboard.writeText(txt).then(()=>{b.textContent=msg||"Copied";setTimeout(()=>b.textContent=label,1700)});
document.title=C.name+" | Minecraft Network";
R.setProperty("--ac",C.colors.accent);R.setProperty("--ac2",C.colors.accent2);R.setProperty("--bg",C.colors.bg);
["#introLogo","#navLogo"].forEach(s=>{const i=$(s);i.src=C.logo;i.onerror=()=>i.remove()});
document.head.append(Object.assign(document.createElement("link"),{rel:"icon",href:C.favicon}));
$("#bg").style.backgroundImage=`url(${C.background}),var(--fallback)`;
$("#navName").textContent=C.name;$("#tag").textContent=C.tagline;$("#desc").textContent=C.description;
const t=$("#title");t.setAttribute("aria-label",C.name);
C.name.split(" ").forEach((w,wi,a)=>{const s=el("span","");s.style.display="inline-block";s.setAttribute("aria-hidden","true");
[...w].forEach((ch,i)=>{const c=el("span",ch);c.style.setProperty("--i",wi*4+i);s.append(c)});t.append(s);if(wi<a.length-1)t.append(" ")});
const L=C.links,jIp=C.java.ip,bAddr=`${C.bedrock.ip}:${C.bedrock.port}`;
$("#links").innerHTML=[["#modes","Game modes"],["#why","Why us"],["#join","How to join"],["#community","Community"]].map(l=>`<a href="${l[0]}">${l[1]}</a>`).join("")+(L.store?`<a href="${L.store}">Store</a>`:`<a class="soon" title="Coming soon">Store soon</a>`);
const cj=$("#copyJava"),cb=$("#copyBed");cj.textContent="Java: "+jIp;cb.textContent="Bedrock: "+bAddr;cp(cj,jIp,cj.textContent);cp(cb,C.bedrock.ip,cb.textContent,"Copied (port "+C.bedrock.port+")");
$("#modeList").append(...C.modes.map(m=>{const d=el("div",`<b>${m.name}</b><p>${m.desc}</p><em>${m.tag}</em>`,"mode");
d.onmousemove=e=>{const r=d.getBoundingClientRect();d.style.setProperty("--x",e.clientX-r.left+"px");d.style.setProperty("--y",e.clientY-r.top+"px")};return d}));
$("#whyH").textContent=C.whyTitle;$("#featList").append(...C.features.map(f=>el("div",`<h3>${f.t}</h3><p>${f.d}</p>`)));
const code=v=>`<code data-c="${v}">${v}</code>`;
const steps={java:[`Open Minecraft Java Edition (${C.java.version})`,"Select Multiplayer, then Add Server",`Enter the address ${code(jIp)}`,"Save and join the server"],
bedrock:["Open Minecraft Bedrock Edition","Select Play, Servers, then Add Server",`Enter the address ${code(C.bedrock.ip)}`,`Set the port to ${code(C.bedrock.port)}`,"Save and join the server"]};
const show=k=>{$("#steps").innerHTML=steps[k].map((s,i)=>`<li style="animation-delay:${i*70}ms"><span>${s}</span></li>`).join("");
document.querySelectorAll("#steps code").forEach(c=>c.onclick=()=>{navigator.clipboard.writeText(c.dataset.c);c.textContent="Copied";setTimeout(()=>c.textContent=c.dataset.c,1200)});
document.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("on",b.dataset.t===k))};
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>show(b.dataset.t));show("java");
$("#comH").textContent=C.community.title;$("#comP").textContent=C.community.text;const dc=$("#dcBtn");dc.textContent=C.community.button;dc.href=L.discord;
$("#foot").innerHTML=`<span>&copy; ${new Date().getFullYear()} ${C.name}. Not affiliated with Mojang or Microsoft.</span><nav><a href="${L.discord}">Discord</a><a href="${L.support}">Support</a>${L.youtube?`<a href="${L.youtube}">YouTube</a>`:""}</nav>`;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".sec").forEach(s=>io.observe(s));
fetch(`https://api.mcsrvstat.us/3/${jIp}`).then(r=>r.json()).then(d=>{const o=d.online;$("#dot").className="dot "+(o?"on":"off");
$("#liveTxt").textContent=o?`${d.players.online} of ${d.players.max} players online`:"Server is offline right now"}).catch(()=>$("#liveTxt").textContent="Status unavailable");
setTimeout(()=>document.body.classList.replace("loading","ready"),E.intro?2300:100);
if(E.parallax)addEventListener("mousemove",e=>{R.setProperty("--px",(e.clientX/innerWidth-.5)*-26+"px");R.setProperty("--py",(e.clientY/innerHeight-.5)*-16+"px")});
if(!E.fog)document.querySelectorAll(".fog").forEach(f=>f.remove());
if(E.fireflies){const cv=$("#fx"),x=cv.getContext("2d");let w,h;const rs=()=>{w=cv.width=innerWidth;h=cv.height=innerHeight};rs();addEventListener("resize",rs);
const P=Array.from({length:46},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.6,s:Math.random()*.3+.1,p:Math.random()*6}));
(function f(){x.clearRect(0,0,w,h);P.forEach(q=>{q.p+=.02;q.y-=q.s;q.x+=Math.sin(q.p)*.4;if(q.y<-10){q.y=h+10;q.x=Math.random()*w}
x.beginPath();x.fillStyle=`rgba(242,200,110,${.35+Math.sin(q.p*2)*.3})`;x.shadowColor="#f2b45a";x.shadowBlur=14;x.arc(q.x,q.y,q.r,0,7);x.fill()});requestAnimationFrame(f)})()}
if(E.thunder){const b=$("#bolt"),strike=()=>{const bx=20+Math.random()*60;let p=`${bx},0`,y=0,xx=bx;while(y<55){y+=6+Math.random()*7;xx+=(Math.random()-.5)*9;p+=` ${xx},${y}`}
b.style.setProperty("--bx",bx+"%");b.innerHTML=`<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polyline points="${p}" fill="none" stroke="#e6f1ff" stroke-width=".35" style="filter:drop-shadow(0 0 1.2px #9cc7ff)"/></svg>`;
b.classList.remove("go");void b.offsetWidth;b.classList.add("go");setTimeout(strike,18000+Math.random()*20000)};setTimeout(strike,6500)}
})();
