document.addEventListener('DOMContentLoaded', () => {

  // ======================
  // Loader
  // ======================
  const loader = document.getElementById('loader');
  if(loader){
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => loader.style.display = 'none', 500);
    }, 4000);
  }

  // ======================
  // Menu mobile toggle
  // ======================
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  // ======================
  // Lightbox unique (vidéo + images)
  // ======================
  const lightbox = document.getElementById('lightbox');
  const lightVideo = document.getElementById('lightVideo');
  const lightImg = document.getElementById('lightImg');
  const closeLB = document.getElementById('closeLB');

  // Ouvrir vidéo
  document.querySelectorAll('.thumb button').forEach(btn => {
    btn.addEventListener('click', () => {
      const videoSrc = btn.dataset.video;
      if(lightbox && lightVideo){
        lightVideo.src = videoSrc + '.mp4';
        lightVideo.style.display = 'block';
        if(lightImg) lightImg.style.display = 'none';
        lightbox.style.display = 'flex';
      }
    });
  });

  // Fermeture lightbox
  const closeLightbox = () => {
    if(lightVideo){
      lightVideo.pause();
      lightVideo.src = '';
      lightVideo.style.display = 'none';
    }
    if(lightImg){
      lightImg.src = '';
      lightImg.style.display = 'none';
    }
    if(lightbox) lightbox.style.display = 'none';
  };

  if(closeLB) closeLB.addEventListener('click', closeLightbox);

  if(lightbox){
    lightbox.addEventListener('click', e => {
      if(e.target === lightbox) closeLightbox();
    });
  }

  // ============================================================
  // 📺 AFFICHAGE DES PROJETS SUR LA TV (photo4.jpg)
  // ============================================================
  const overlayPhoto = document.getElementById('overlayPhoto');

  if(overlayPhoto) {
    document.querySelectorAll('.work-list li').forEach(item => {
      item.addEventListener('click', () => {
        const photoSrc = item.dataset.photo;
        overlayPhoto.src = photoSrc;
        overlayPhoto.style.display = 'block';
      });
    });
  }

});
// ======================
// 🎬 Transition Clap Cinéma — Fluide
// ======================
const clapTop = document.querySelector('.clap-top');
const clapBottom = document.querySelector('.clap-bottom');
const navLinks = document.querySelectorAll('.nav-link');

if (clapTop && clapBottom && navLinks.length > 0) {
  // Effet ouverture après le loader
  window.addEventListener('load', () => {
    setTimeout(() => {
      clapTop.classList.remove('close');
      clapBottom.classList.remove('close');
      clapTop.classList.add('open');
      clapBottom.classList.add('open');
    }, 300);
  });

  // Transition fluide au clic
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const target = link.getAttribute('href');
      if (!target) return;
      e.preventDefault();

      // Clap se referme
      clapTop.classList.remove('open');
      clapBottom.classList.remove('open');
      clapTop.classList.add('close');
      clapBottom.classList.add('close');

      // Optionnel : petit son de clap cinéma 🎞️
      const clapSound = new Audio('sounds/clap.mp3'); // facultatif
      clapSound.volume = 0.4;
      try { clapSound.play(); } catch(e){}

      // Redirection fluide après l’animation
      setTimeout(() => {
        window.location.href = target;
      }, 950);
    });
  });
}
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
window.addEventListener("load", () => {
  document.querySelector("header.site-nav").classList.add("show");
  document.body.classList.add("loaded");
});
const items = document.querySelectorAll('.timeline-item');
function showItems() {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}
window.addEventListener('scroll', showItems);
window.addEventListener('load', showItems);
window.addEventListener('load', () => {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => item.classList.add('show'));
});
