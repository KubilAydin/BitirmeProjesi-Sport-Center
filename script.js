// Hamburger Menu 
function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Navbar Scroll (Değerlendirme Kısmı 4)
window.addEventListener("scroll", function () {
    let navbar = this.document.querySelector(".header");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-[#355592]/85");
    } else {
        navbar.classList.remove("bg-[#355592]/85");    
    }
});

//Our Classes Buttons (Değerlendrime Kısmı 1) 
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () =>  {
        //Tüm contenleri gizleme
        contents.forEach(c => c.classList.add("hidden"));

        //Aktif Butonun Target-data
        const target = btn.getAttribute("data-target");
        document.getElementById(target).classList.remove("hidden");

        //Aktif Butona renk + Şekil 
        buttons.forEach(b => b.classList.remove("active-tab"));
        btn.classList.add("active-tab");
    });
});

// BMI Function (Değerlendirme Kısmı 3)
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const arrow = document.getElementById("arrow");

function updateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if(!height || !weight) return; // İki değer girilmezse hesaplama yapma.

    const h = height / 100; //Metreye Çevir
    const bmi = weight /(h*h);

    //Resim'i 5'e bölme  
    const chart = document.querySelector(".bmi-section img");
    const chartWidth = chart.offsetWidth;
    const sectionWidth = chartWidth / 5;

    let index = 0 ;
    if (bmi <= 18.5) index = 0 // Underweight
    else if (bmi <= 24.9) index = 1 // Normal
    else if (bmi <= 29.9) index = 2 // Overweight
    else if (bmi < 34.99) index = 3 // Obese
    else index = 4; //Extreme Obese    

    // Arrow genişliği belirtildi
    const arrowWidth = arrow.offsetWidth;
      
    const leftPos = sectionWidth * index + sectionWidth / 2 - arrowWidth / 2;
    arrow.style.left = leftPos + "px";
}

heightInput.addEventListener("input", updateBMI);
weightInput.addEventListener("input", updateBMI);