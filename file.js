// Toggle Menu untuk Tampilan HP (Responsive)
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu otomatis saat salah satu tautan diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- EFEK MENGETIK (TYPING EFFECT) UNTUK TEKS HERO ---
const textElement = document.getElementById('typing-text');
const words = ["FEEL THE ADRENALINE", "UNSTOPPABLE SPEED", "LUXURY & POWER"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Proses menghapus huruf
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Proses mengetik huruf
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = 150; // Kecepatan mengetik (semakin kecil semakin cepat)

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Jeda waktu saat kalimat sudah selesai diketik (2 detik)
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Jeda sebelum mulai mengetik kata berikutnya
    }

    setTimeout(typeEffect, typingSpeed);
}

// Jalankan efek saat halaman web selesai dimuat
document.addEventListener('DOMContentLoaded', typeEffect);