// Toplam tıklama sayacı
let clickCount = 0;

// Toplam tıklama sayısını artıran bir fonksiyon
function increaseClickCount() {
    clickCount++;
    document.getElementById("clickCount").textContent = "Toplam Tıklama: " + clickCount;
}

// Ana Sayfa bağlantısına tıklandığında tıklanma sayısını artır
document.querySelector('nav a[href="#"]').addEventListener('click', increaseClickCount);
