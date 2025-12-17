
const text = "M. Arief Perdana";
let index = 0;
function type() {
    document.getElementById("typing").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(type, 120);
    }
}
type();


document.getElementById("modeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


const bgBtn = document.getElementById("bgBtn");
const backgrounds = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-off"]; 

bgBtn.addEventListener("click", () => {
    
    document.body.classList.remove("bg-1", "bg-2", "bg-3", "bg-4", "bg-off");

    currentBg++;
    if (currentBg >= backgrounds.length) currentBg = 0; // loop

    document.body.classList.add(backgrounds[currentBg]);

    
    if (currentBg === backgrounds.length - 1) {
        bgBtn.textContent = "Koran";
    } else {
        bgBtn.textContent = `${currentBg + 1}`;
    }
});

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

musicBtn.addEventListener("click", () => {
    if (!playing) {
        bgMusic.play();
        musicBtn.textContent = "Pause";
        playing = true;
    } else {
        bgMusic.pause();
        musicBtn.textContent = "Music";
        playing = false;
    }
});


const elements = document.querySelectorAll(".fade");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));