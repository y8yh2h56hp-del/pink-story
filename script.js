let currentScene = 1;

function nextScene(num){

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(scene=>{
        scene.classList.remove("active");
    });

    const next = document.getElementById("scene"+num);

    if(next){
        next.classList.add("active");
        currentScene = num;
    }

}

document.addEventListener("click",(e)=>{

    if(e.target.tagName==="BUTTON") return;

    if(currentScene<5){
        nextScene(currentScene+1);
    }

});

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";
    sparkle.style.left=Math.random()*100+"vw";
    sparkle.style.top="-30px";
    sparkle.style.fontSize=(18+Math.random()*20)+"px";
    sparkle.style.opacity="0.9";
    sparkle.style.transition="transform 8s linear, opacity 8s linear";
    sparkle.style.pointerEvents="none";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.style.transform="translateY(110vh) rotate(360deg)";
        sparkle.style.opacity="0";
    },50);

    setTimeout(()=>{
        sparkle.remove();
    },8000);

}

setInterval(createSparkle,500);
function createButterfly(){

    const b=document.createElement("img");

    b.src="https://upload.wikimedia.org/wikipedia/commons/0/05/Butterfly_icon.svg";

    b.className="butterfly";

    b.style.left="-80px";

    b.style.top=(Math.random()*80+10)+"vh";

    document.body.appendChild(b);

    let x=-80;
    let y=parseFloat(b.style.top);

    const fly=setInterval(()=>{

        x+=2;

        y+=Math.sin(x/40);

        b.style.left=x+"px";

        b.style.top=y+"px";

        if(x>window.innerWidth+100){

            clearInterval(fly);

            b.remove();

        }

    },20);

}

setInterval(createButterfly,2500);
