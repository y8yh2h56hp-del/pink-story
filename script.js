// العناصر
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");

const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const scene5Btn = document.getElementById("scene5Btn");

const password = document.getElementById("password");
const msg = document.getElementById("msg");
const typing = document.getElementById("typing");

// زر البداية
startBtn.addEventListener("click", () => {
    scene1.classList.remove("active");
    scene2.classList.add("active");
});

// التحقق من الرمز
checkBtn.addEventListener("click", () => {

    if (password.value === "2002") {

        scene2.classList.remove("active");
        scene3.classList.add("active");

        typeWriter();

    } else {

        msg.textContent = "❌ الرمز غير صحيح";
        password.value = "";

    }

});

// الكتابة
const text = `🎂

كل عام وأنت بخير 💖

اليوم هو يومك المميز.

أتمنى لك سنة مليئة بالسعادة والنجاح وتحقيق الأمنيات.

🎉 عيد ميلاد سعيد 🎉`;

let i = 0;

function typeWriter() {

    typing.textContent = "";

    i = 0;

    const timer = setInterval(() => {

        typing.textContent += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

        }

    }, 50);

}

// الانتقال للمشهد الرابع
nextBtn.addEventListener("click", () => {

    scene3.classList.remove("active");
    scene4.classList.add("active");

});

// زر المشهد الرابع
scene5Btn.addEventListener("click", () => {

    alert("💌 قريبًا سنضيف الرسالة والصور والكعكة.");

});
