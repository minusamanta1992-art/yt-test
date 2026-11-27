(()=>{const C=window.SITE,E=C.effects,L=C.links,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],R=document.documentElement.style;
const P={emerald:["#34d399","#f2b45a"],blue:["#3b82f6","#22d3ee"],gold:["#f5b83d","#ff8a3d"],red:["#ef4444","#fb923c"],purple:["#a855f7","#ec4899"],cyan:["#22d3ee","#34d399"],pink:["#ec4899","#f59e0b"],orange:["#fb923c","#facc15"]};
const IC={heart:"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z",globe:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z",coin:"M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",target:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM22 12h-4M6 12H2M12 6V2M12 22v-4",zap:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",users:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",star:"M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",server:"M2 3h20v8H2zM2 13h20v8H2zM6 7h.01M6 17h.01"};
const ic=n=>`<span class="ic"><svg viewBox="0 0 24 24"><path d="${IC[n]||IC.star}"/></svg></span>`;
const fill=(s,o)=>s.replace(/\{(\w+)\}/g,(m,k)=>o[k]??m);
const V={ip:C.java.ip,version:C.java.version,bip:C.bedrock.ip,port:C.bedrock.port};
const theme=n=>{const c=P[n]||P.emerald,o=C.colors||{};R.setProperty("--ac",o.accent||c[0]);R.setProperty("--ac2",o.accent2||c[1]);try{localStorage.setItem("theme",n)}catch(e){}$$(".sw button").forEach(b=>b.classList.toggle("on",b.dataset.n===n))};
document.title=C.name+" | Minecraft Network";document.head.insertAdjacentHTML("beforeend",`<link rel="icon" href="${C.favicon}">`);
const nav=C.nav.map(n=>`<a href="${n[1]}">${n[0]}</a>`).join("")+(L.store?`<a href="${L.store}">Store</a>`:`<a class="soon">Store soon</a>`);
const chars=C.name.split(" ").map((w,wi)=>`<span class="w" aria-hidden="true">${[...w].map((c,i)=>`<span class="ch" style="--i:${wi*5+i}">${c}</span>`).join("")}</span>`).join("");
const card=(c,h)=>`<div class="card sp ${c}">${h}</div>`;
document.body.insertAdjacentHTML("afterbegin",`
<div id="intro"><i class="p p1"></i><i class="p p2"></i><div class="mid"><div class="ring"><img src="${C.logo}" alt="" onerror="this.remove()"></div><div class="pct" id="pct">0%</div><div class="pbar"><i id="pb"></i></div></div></div>
<div id="bg"></div><div class="fog"></div><div class="fog f2"></div><canvas id="fx"></canvas><div id="bolt"></div><div id="shade"></div><div id="cur"></div>
<header><a class="brand" href="#top"><img src="${C.logo}" alt="" onerror="this.remove()"><span>${C.name}</span></a><nav>${nav}</nav><a class="btn s nv" href="${L.discord}" target="_blank" rel="noopener">Discord</a></header>
<main id="top"><section class="hero"><div class="in"><div class="pill"><span class="dot" id="dot"></span><span id="st">${C.status.checking}</span></div><h1 aria-label="${C.name}">${chars}</h1><p class="lead">${C.tagline}</p><p class="desc">${C.description}</p>
<div class="ipbox"><code>${V.ip}</code><button class="btn s" data-copy="${V.ip}">Copy IP</button></div><p class="sub">Bedrock: <b data-copy="${V.bip}" data-msg="Copied. Port is ${V.port}">${V.bip}</b> port <b data-copy="${V.port}">${V.port}</b></p>
<div class="row"><a class="btn s" href="#join">How to join</a><a class="btn" href="${L.discord}" target="_blank" rel="noopener">Join Discord</a></div></div>
${card("live tilt",`<div class="lh"><img id="sic" src="${C.logo}" alt="" onerror="this.remove()"><div><div class="num"><b id="pn">0</b><span> / <i id="pm" style="font-style:normal">0</i></span></div><div class="cap">${C.status.online}</div></div></div><div class="cb"><i id="pbar"></i></div><div class="motd" id="motd" hidden></div><div class="who" id="who"></div>`)}</section>
<section class="sec" id="modes"><h2>${C.modes.title}</h2><p class="sh">${C.modes.subtitle}</p><div class="modes">${C.modes.items.map(m=>card("mode",`${ic(m.icon)}<span class="tag">${m.tag}</span><h3>${m.name}</h3><p>${m.desc}</p>`)).join("")}</div></section>
<section class="sec" id="why"><h2>${C.features.title}</h2><p class="sh">${C.features.subtitle}</p><div class="bento">${C.features.items.map(f=>card("feat"+(f.wide?" wide":""),`${ic(f.icon)}<h3>${f.title}</h3><p>${f.text}</p>`)).join("")}</div></section>
<section class="sec" id="join"><h2>${C.join.title}</h2><div class="tabs"><button class="on" data-t="java">Java Edition</button><button data-t="bedrock">Bedrock Edition</button></div><ol id="steps"></ol></section>
<section class="sec" id="faq"><h2>${C.faq.title}</h2><div class="faq" style="margin-top:34px">${C.faq.items.map(f=>`<details><summary>${f.q}</summary><div class="aw"><div><p>${f.a}</p></div></div></details>`).join("")}</div></section>
<section class="sec">${card("cta",`<h2>${C.cta.title}</h2><p>${C.cta.text}</p><a class="btn s" href="${L.discord}" target="_blank" rel="noopener">${C.cta.button}</a>`)}</section></main>
<footer><span>&copy; ${new Date().getFullYear()} ${C.name}. ${C.footer}</span><span><a href="${L.discord}">Discord</a><a href="${L.support}">Support</a>${L.youtube?`<a href="${L.youtube}">YouTube</a>`:""}</span></footer>
<div class="bar2"><button class="btn s" data-copy="${V.ip}">Copy IP</button><a class="btn" href="${L.discord}" target="_blank" rel="noopener">Discord</a></div>
${E.themeSwitcher?`<div class="pal" id="pal"><button aria-label="Change color"><i></i></button><div class="sw">${Object.keys(P).map(k=>`<button data-n="${k}" style="--c:${P[k][0]}" aria-label="${k}"></button>`).join("")}</div></div>`:""}`);
$("#bg").style.backgroundImage=`url(${C.background}),var(--fb)`;
let saved;try{saved=localStorage.getItem("theme")}catch(e){}theme(P[saved]?saved:C.color);
$$(".sw button").forEach(b=>b.onclick=()=>theme(b.dataset.n));$("#pal")&&($("#pal>button").onclick=()=>$("#pal").classList.toggle("o"));
document.addEventListener("click",e=>{const t=e.target.closest("[data-copy]");if(!t)return;navigator.clipboard.writeText(t.dataset.copy).then(()=>{const o=t.textContent;t.textContent=t.dataset.msg||"Copied";setTimeout(()=>t.textContent=o,1600)})});
const show=k=>{$("#steps").innerHTML=C.join.steps[k].map((s,i)=>`<li style="animation-delay:${i*80}ms">${fill(s,V).replace(/(play\.[\w.]+|\d{4,5})/,'<code>$1</code>')}</li>`).join("");$$(".tabs button").forEach(b=>b.classList.toggle("on",b.dataset.t===k))};
$$(".tabs button").forEach(b=>b.onclick=()=>show(b.dataset.t));show("java");
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add("v"),io.unobserve(e.target))),{threshold:.12});$$(".sec").forEach(s=>io.observe(s));
$$(".sp").forEach(c=>c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px");if(c.classList.contains("tilt")&&matchMedia("(hover:hover)").matches){c.style.transform=`perspective(900px) rotateY(${((e.clientX-r.left)/r.width-.5)*10}deg) rotateX(${((e.clientY-r.top)/r.height-.5)*-10}deg)`}}));
$$(".tilt").forEach(c=>c.addEventListener("mouseleave",()=>c.style.transform=""));
const count=(el,to)=>{const f=+el.textContent,t0=performance.now();(function s(t){const p=Math.min(1,(t-t0)/1100);el.textContent=Math.round(f+(to-f)*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(s)})(t0)};
const stats=()=>fetch(`https://api.mcsrvstat.us/3/${V.ip}`).then(r=>r.json()).then(d=>{const o=d.online;$("#dot").className="dot "+(o?"on":"off");$("#st").textContent=o?`${d.players.online} ${C.status.online}`:C.status.offline;
if(!o)return;count($("#pn"),d.players.online);$("#pm").textContent=d.players.max;$("#pbar").style.width=Math.min(100,d.players.online/d.players.max*100)+"%";
if(d.icon)$("#sic").src=d.icon;const m=d.motd&&d.motd.clean;if(m){$("#motd").hidden=false;$("#motd").innerHTML=m.map(x=>`<div>${x.replace(/</g,"&lt;")}</div>`).join("")}
$("#who").innerHTML=((d.players.list||[]).slice(0,12)).map(p=>`<span>${p.name}</span>`).join("")}).catch(()=>$("#st").textContent="Status unavailable");
stats();setInterval(stats,30000);
const go=()=>document.body.classList.replace("loading","ready"),T=(E.introSeconds||2.6)*1000;
if(E.intro){const t0=performance.now();(function s(t){const p=Math.min(1,(t-t0)/T);$("#pct").textContent=Math.round(p*100)+"%";$("#pb").style.transform=`scaleX(${p})`;p<1?requestAnimationFrame(s):go()})(t0)}else{$("#intro").remove();go()}
setTimeout(()=>$("#intro")&&$("#intro").remove(),T+2200);
if(E.parallax)addEventListener("mousemove",e=>{R.setProperty("--px",(e.clientX/innerWidth-.5)*-28+"px");R.setProperty("--py",(e.clientY/innerHeight-.5)*-18+"px")});
if(!E.fog)$$(".fog").forEach(f=>f.remove());
if(E.cursor&&matchMedia("(hover:hover) and (pointer:fine)").matches){const c=$("#cur");document.body.classList.add("cc");addEventListener("mousemove",e=>{c.classList.add("on");c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;c.classList.toggle("h",!!e.target.closest("a,button,summary,[data-copy]"))})}
if(E.fireflies){const cv=$("#fx"),x=cv.getContext("2d");let w,h;const rs=()=>{w=cv.width=innerWidth;h=cv.height=innerHeight};rs();addEventListener("resize",rs);
const Q=Array.from({length:50},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.6,s:Math.random()*.3+.1,p:Math.random()*6}));
(function f(){x.clearRect(0,0,w,h);x.shadowColor="#f2b45a";x.shadowBlur=14;Q.forEach(q=>{q.p+=.02;q.y-=q.s;q.x+=Math.sin(q.p)*.4;if(q.y<-10){q.y=h+10;q.x=Math.random()*w}x.beginPath();x.fillStyle=`rgba(242,200,110,${.35+Math.sin(q.p*2)*.3})`;x.arc(q.x,q.y,q.r,0,7);x.fill()});requestAnimationFrame(f)})()}
if(E.thunder){const b=$("#bolt"),st=()=>{const bx=20+Math.random()*60;let p=`${bx},0`,y=0,xx=bx;while(y<58){y+=6+Math.random()*7;xx+=(Math.random()-.5)*9;p+=` ${xx},${y}`}
b.style.setProperty("--bx",bx+"%");b.innerHTML=`<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polyline points="${p}" fill="none" stroke="#e6f1ff" stroke-width=".3" style="filter:drop-shadow(0 0 1.2px #9cc7ff)"/></svg>`;
b.classList.remove("go");void b.offsetWidth;b.classList.add("go");document.body.classList.add("zap");setTimeout(()=>document.body.classList.remove("zap"),180);setTimeout(st,16000+Math.random()*18000)};setTimeout(st,T+3500)}
})();
