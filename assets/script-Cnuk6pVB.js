let n=document.querySelectorAll(".num"),o=2500;n.forEach(e=>{let t=0,l=parseInt(e.getAttribute("data-val")),a=Math.floor(o/l),r=setInterval(()=>{t+=1,e.textContent=t,t==l&&clearInterval(r)},a)});
