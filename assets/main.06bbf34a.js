import"./modulepreload-polyfill.c7c6310f.js";let a=document.querySelector("#restaurant-link"),h=document.querySelector("#event-link"),d=document.querySelector("#coffeShop-link"),m=document.querySelector("#healthBeauty-link"),g=document.querySelector("#nightlife-link"),y=document.querySelector("#museums-link");document.querySelector("#location").addEventListener("change",e=>{console.log(e.target.value);let o=e.target.value;l(o)});function l(e){let o=`results/index.html?city=${e}&category=restaurant`;a.href=o;let r=`results/index.html?city=${e}&category=events`;h.href=r;let c=`results/index.html?city=${e}&category=coffeeShop`;d.href=c;let i=`results/index.html?city=${e}&category=healthBeauty`;m.href=i;let s=`results/index.html?city=${e}&category=nightlife`;g.href=s;let u=`results/index.html?city=${e}&category=museums`;y.href=u}l(document.querySelector("#location").value);const k=100,n=document.querySelector(".back-to-top"),f=document.querySelector(".progress-bar"),t=()=>document.documentElement||document.body,L=()=>{document.body.scrollIntoView({behavior:"smooth"})};document.addEventListener("scroll",()=>{console.log("Scroll Height: ",t().scrollHeight),console.log("Client Height: ",t().clientHeight);const e=t().scrollTop/(t().scrollHeight-t().clientHeight)*100;f.style.width=`${e}%`,t().scrollTop>k?n.classList.remove("hidden"):n.classList.add("hidden")});n.addEventListener("click",L);l(document.querySelector("#location").value);