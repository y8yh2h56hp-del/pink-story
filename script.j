// رمز الدخول
const PASSWORD = "2002";

// العناصر
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");

const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");

const password = document.getElementById("password");
const message = document.getElementById("message");
const typing = document.getElementById("typing");


// الانتقال للمشهد الثاني
startBtn.onclick = () => {

    scene1.classList.remove("active");
    scene2.classList.add("active");

};


// التحقق من الرمز
checkBtn.onclick = () => {

    if(password.value === PASSWORD){

        scene2.classList.remove("active");
        scene3.classList.add("active");

        typeText();

    }else{

        message.innerHTML="❌ الرمز غير صحيح";
        password.value="";

    }

};


// الكتابة التدريجية
const text = `🎂

كل عام وأنت بخير

اليوم هو يومك المميز...

أتمنى لك سنة مليئة بالسعادة والنجاح وتحقيق الأمنيات.

وهذه مجرد بداية المفاجأة 🦋`;

let i = 0;

function typeText(){

    typing.innerHTML="";

    i=0;

    const timer=setInterval(()=>{

        typing.innerHTML += text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

        }

    },60);

}


// زر التالي (مؤقتاً)
nextBtn.onclick = ()=>{

    alert("🎉 في المرحلة القادمة سنبدأ مشهد الفراشات والصور.");

};


// إنشاء قلوب متحركة
const hearts=document.getElementById("hearts");

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.animation="floatHeart 6s linear forwards";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

},500);


// إنشاء فراشات
const butterflies=document.getElementById("butterflies");

const icons=["🦋","🦋","🦋"];

setInterval(()=>{

    const b=document.createElement("div");

    b.innerHTML=icons[Math.floor(Math.random()*icons.length)];

    b.style.position="fixed";
    b.style.left="-50px";
    b.style.top=Math.random()*90+"vh";
    b.style.fontSize=(28+Math.random()*20)+"px";
    b.style.transition="10s linear";

    butterflies.appendChild(b);

    setTimeout(()=>{

        b.style.left="110vw";
        b.style.top=Math.random()*90+"vh";

    },100);

    setTimeout(()=>{

        b.remove();

    },11000);

},1200);
