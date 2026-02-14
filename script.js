let pages = document.querySelectorAll(".page");

pages.forEach((page, index)=>{
  page.style.zIndex = pages.length - index;

  page.addEventListener("click", function(){
    page.classList.toggle("flipped");
  });
});
setInterval(()=>{
  let heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"%";
  heart.style.animationDuration=3+Math.random()*3+"s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },6000);

},500);
setInterval(()=>{

  let balloon=document.createElement("div");
  balloon.className="balloon";

  balloon.innerHTML=`
    <div class="balloon-heart"></div>
    <div class="string"></div>
  `;

  balloon.style.left=Math.random()*100+"%";
  balloon.style.animationDuration=(6+Math.random()*4)+"s";

  document.querySelector(".balloons").appendChild(balloon);

  
  setTimeout(()=>{
    balloon.remove();
  },10000);

},1200);