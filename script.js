const PASSWORD = "2002";

const welcome = document.getElementById("welcome");
const passwordPage = document.getElementById("passwordPage");
const messagePage = document.getElementById("messagePage");
const giftPage = document.getElementById("giftPage");

const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");

const password = document.getElementById("password");
const error = document.getElementById("error");

const typing = document.getElementById("typing");

const gift = document.getElementById("gift");
const giftText = document.getElementById("giftText");

startBtn.onclick = () => {
    welcome.classList.remove("active");
    passwordPage.classList.add("active");
};

checkBtn.onclick = () => {

    if (password.value === PASSWORD) {

        passwordPage.classList.remove("active");
        messagePage.classList.add("active");

        const text =
"اليوم ليس يوماً عادياً... 🎂\n\nكل عام وأنت بخير، أتمنى لك سنة مليئة بالسعادة والنجاح وتحقيق كل الأمنيات. 💖";

        let i = 0;

        typing.innerHTML = "";

        const timer = setInterval(() => {

            typing.innerHTML += text.charAt(i);

            i++;

            if (i >= text.length) {
                clearInterval(timer);
            }

        }, 45);

    } else {

        error.innerHTML = "❌ الرمز غير صحيح";

    }

};

nextBtn.onclick = () => {

    messagePage.classList.remove("active");
    giftPage.classList.add("active");

};

gift.onclick = () => {

    gift.innerHTML = "🎉";

    giftText.innerHTML =
"🎂 عيد ميلاد سعيد 💖<br><br>أتمنى لك أجمل الأيام وأروع الذكريات 🌸";

};
