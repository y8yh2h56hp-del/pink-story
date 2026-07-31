const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");

const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");

const password = document.getElementById("password");
const msg = document.getElementById("msg");
const typing = document.getElementById("typing");

// الانتقال للمشهد الثاني
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

// الكتابة التدريجية
const text = `🎂

كل عام وأنت بخير

اليوم هو يومك المميز.

أتمنى لك سنة مليئة بالسعادة والنجاح وتحقيق الأمنيات.

💖`;

let i = 0;

function typeWriter() {

    typing.textContent = "";

    const timer = setInterval(() => {

        typing.textContent += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

        }

    }, 60);

}

nextBtn.addEventListener("click", () => {

    alert("🎉 المشهد الرابع سيأتي في الجزء القادم.");

});
