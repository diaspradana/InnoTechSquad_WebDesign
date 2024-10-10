// Mengambil elemen menu icon dan navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Fungsi untuk toggle menu saat diklik (burger menu)
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');  // Mengubah ikon menu (burger ke X)
  navbar.classList.toggle('active');  // Menampilkan atau menyembunyikan navbar
};

// Menutup navbar ketika link dipilih (untuk mobile)
navbar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    // Menutup navbar setelah memilih link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Animasi Teks Bergantian
  const multipleText = document.querySelector('.multiple-text');
  const textArray = [
    "Empowering Interaction: Building the Future of Web Engagement",
    "Innovative Solutions for Modern Challenges",
    "Driving Creativity through Technology"
  ];
  let currentIndex = 0;

  function changeText() {
    multipleText.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
  }

  // Ganti teks setiap 3 detik
  setInterval(changeText, 3000);

  // Efek Fade-in pada Konten Home
  const homeContent = document.querySelector('.home-content');

  function fadeInOnScroll() {
    const homePosition = homeContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (homePosition < screenPosition) {
      homeContent.style.opacity = '1';
      homeContent.style.transform = 'translateY(0)';
    }
  }

  window.addEventListener('scroll', fadeInOnScroll);

  // Efek fade-in saat halaman dimuat
  homeContent.style.opacity = '0';
  homeContent.style.transform = 'translateY(50px)';
  fadeInOnScroll(); // Trigger animasi saat halaman pertama kali dimuat
});


// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  // Animate Features
  const featureBoxes = document.querySelectorAll('.features-box');
  featureBoxes.forEach(box => {
    if (isInViewport(box)) {
      box.classList.add('show');
    }
  });

  // Animate Portfolio
  const portfolioBoxes = document.querySelectorAll('.portofolio-box');
  portfolioBoxes.forEach(box => {
    if (isInViewport(box)) {
      box.style.opacity = '1';
      box.style.transform = 'translateY(0)';
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger once on load to check for elements already in viewport
window.addEventListener('load', handleScroll);

// Animate heading
const heading = document.querySelector('.portofolio .heading');
if (heading) {
  heading.style.opacity = '0';
  heading.style.transform = 'translateY(-20px)';

  setTimeout(() => {
    heading.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    heading.style.opacity = '1';
    heading.style.transform = 'translateY(0)';
  }, 300);
}


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    duration: 1000,
    distance: '50px',
    easing: 'ease-out'
  });

  // Reveal the main heading
  sr.reveal('.about-content h1', {
    origin: 'top',
    delay: 200
  });

  // Reveal paragraphs
  sr.reveal('.about-content p', {
    origin: 'bottom',
    delay: 400,
    interval: 200
  });

  // Reveal team section heading
  sr.reveal('.team h2', {
    origin: 'left',
    delay: 600
  });

  // Reveal team members
  sr.reveal('.team-member', {
    origin: 'right',
    delay: 800,
    interval: 300
  });

  // Add a subtle parallax effect to the background
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelector('.about').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  // Add hover effect to team member images
  const teamMembers = document.querySelectorAll('.team-member img');
  teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
      member.style.transform = 'scale(1.1)';
      member.style.transition = 'transform 0.3s ease';
    });
    member.addEventListener('mouseout', () => {
      member.style.transform = 'scale(1)';
    });
  });
});

