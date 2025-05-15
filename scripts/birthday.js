// Birthday page scripts

// Animation GSAP timeline on load event
window.addEventListener("load", () => {
  Swal.fire({
    title: "Do you want to play music in the background?",
    // text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

const animationTimeline = () => {
  // split chars that needs  to be animted individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewY: "-15deg",
  };

  // animation timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      1.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(
      ".fake-btn",
      0.1,
      {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4"
    )
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.1,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )
    .staggerFromTo(
      ".ballons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // restart animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Floating hearts animation
function createFloatingHearts() {
  const floatingHearts = document.querySelector('.floating-hearts');
  const emojis = ['❤️', '💕', '💗', '💓', '💖', '💘', '💝'];
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    const animationName = `floating-heart-${Math.floor(Math.random() * 3)}`;
    const keyframes = `
      @keyframes ${animationName} {
        0% {
          transform: translateY(100vh);
          opacity: 1;
        }
        100% {
          transform: translateY(-100px) rotate(${Math.random() * 360}deg);
          opacity: 0;
        }
      }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);
    
    heart.style.animation = `${animationName} forwards`;
    floatingHearts.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
      styleSheet.remove();
    }, 5000);
  }, 300);
}

// Confetti animation
function createConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 10 + 5;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    
    const animationName = `confetti-${i}`;
    const keyframes = `
      @keyframes ${animationName} {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(${Math.random() * 360}deg);
          opacity: 0;
        }
      }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);
    
    confetti.style.animation = `${animationName} ${Math.random() * 3 + 2}s ease-in infinite`;
    confettiContainer.appendChild(confetti);
  }
}

// Create stars background
function createStars() {
  const starsContainer = document.querySelector('.stars');
  const starCount = 100;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random size
    const size = Math.random();
    if (size > 0.8) {
      star.classList.add('large');
    } else if (size > 0.6) {
      star.classList.add('medium');
    }
    
    // Random position
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    
    // Random twinkle
    if (Math.random() > 0.7) {
      star.classList.add('twinkle');
      star.style.animationDelay = `${Math.random() * 2}s`;
    }
    
    starsContainer.appendChild(star);
  }
}

// Heart trail effect on mouse move
function createHeartTrail() {
  // Love emoji pada sentuhan atau klik
function setupTouchLoveEffect() {
  // Array emoji love dengan berbagai variasi
  const loveEmojis = ['❤️', '💕', '💗', '💓', '💖', '💘', '💝', '😘', '😍', '🥰'];
  
  // Variabel untuk tracking long press
  let pressTimer;
  let isLongPress = false;
  
  // Fungsi untuk menambahkan emoji love pada posisi sentuh/klik
  function addLoveEmoji(x, y, isLong = false) {
    const love = document.createElement('div');
    love.classList.add(isLong ? 'long-press-love' : 'touch-love');
    
    // Pilih emoji secara acak
    const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
    love.innerHTML = randomEmoji;
    
    // Posisikan di tempat klik/sentuh
    love.style.left = x + 'px';
    love.style.top = y + 'px';
    
    // Tambahkan ke body
    document.body.appendChild(love);
    
    // Hapus setelah animasi selesai
    setTimeout(() => {
      love.remove();
    }, isLong ? 2000 : 1500);
    
    // Jika long press, tambahkan efek ledakan (burst)
    if (isLong) {
      createLoveBurst(x, y);
    }
  }
  
  // Fungsi untuk membuat efek ledakan emoji love
  function createLoveBurst(x, y) {
    const burstContainer = document.createElement('div');
    burstContainer.classList.add('love-burst');
    burstContainer.style.left = x + 'px';
    burstContainer.style.top = y + 'px';
    
    // Buat 10 emoji yang menyebar ke segala arah
    for (let i = 0; i < 10; i++) {
      const emoji = document.createElement('div');
      emoji.classList.add('burst-emoji');
      
      // Pilih emoji secara acak
      const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
      emoji.innerHTML = randomEmoji;
      
      // Set arah pergerakan acak
      const angle = Math.random() * Math.PI * 2; // Random angle in radians
      const distance = 100 + Math.random() * 100; // Random distance
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      // Gunakan CSS variables untuk animasi
      emoji.style.setProperty('--tx', `${tx}px`);
      emoji.style.setProperty('--ty', `${ty}px`);
      
      burstContainer.appendChild(emoji);
    }
    
    document.body.appendChild(burstContainer);
    
    // Hapus setelah animasi selesai
    setTimeout(() => {
      burstContainer.remove();
    }, 1500);
  }
  
  // Event untuk mouse (desktop)
  document.addEventListener('mousedown', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Set timer untuk long press
    isLongPress = false;
    clearTimeout(pressTimer);
    pressTimer = setTimeout(() => {
      isLongPress = true;
      addLoveEmoji(x, y, true);
    }, 500); // Long press setelah 500ms
  });
  
  document.addEventListener('mouseup', (e) => {
    clearTimeout(pressTimer);
    if (!isLongPress) {
      addLoveEmoji(e.clientX, e.clientY);
    }
  });
  
  // Event untuk touch (mobile)
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      
      // Set timer untuk long press
      isLongPress = false;
      clearTimeout(pressTimer);
      pressTimer = setTimeout(() => {
        isLongPress = true;
        addLoveEmoji(x, y, true);
      }, 500); // Long press setelah 500ms
    }
    
    // Prevent default hanya untuk elements pada halaman birthday
    // agar tidak mengganggu fungsionalitas scroll
    if (document.querySelector('.container').style.visibility !== 'hidden') {
      e.preventDefault();
    }
  });
  
  document.addEventListener('touchend', (e) => {
    clearTimeout(pressTimer);
    if (!isLongPress && e.changedTouches.length > 0) {
      const touch = e.changedTouches[0];
      addLoveEmoji(touch.clientX, touch.clientY);
    }
  });
  
  // Jika user bergerak saat long press, batalkan long press
  document.addEventListener('touchmove', () => {
    clearTimeout(pressTimer);
    isLongPress = false;
  });
  
  document.addEventListener('mousemove', () => {
    clearTimeout(pressTimer);
    isLongPress = false;
  });
}

  document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
      const heart = document.createElement('div');
      heart.classList.add('heart-trail');
      heart.innerHTML = '❤️';
      heart.style.left = e.pageX + 'px';
      heart.style.top = e.pageY + 'px';
      
      const animationName = `heart-trail-${Math.floor(Math.random() * 1000)}`;
      const keyframes = `
        @keyframes ${animationName} {
          0% {
            transform: translateY(0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-20px) scale(1);
            opacity: 0;
          }
        }
      `;
      
      const styleSheet = document.createElement('style');
      styleSheet.innerHTML = keyframes;
      document.head.appendChild(styleSheet);
      
      heart.style.animation = `${animationName} 1s forwards`;
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
        styleSheet.remove();
      }, 1000);
    }
  });
}

// Calculate time together
function calculateTimeTogether() {
  // Ganti tanggal ini dengan tanggal anniversary / awal hubungan
  const startDate = new Date('2022-01-01'); // Format: YYYY-MM-DD
  const timeTogetherElement = document.getElementById('time-together');
  
  function updateTimeCounter() {
    const now = new Date();
    const difference = now - startDate;
    
    // Calculate years, months, days
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    
    if (days < 0) {
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }
    
    // Format the result
    let result = '';
    if (years > 0) {
      result += `${years} tahun `;
    }
    if (months > 0) {
      result += `${months} bulan `;
    }
    result += `${days} hari`;
    
    timeTogetherElement.textContent = result;
  }
  
  updateTimeCounter();
  setInterval(updateTimeCounter, 1000 * 60 * 60); // Update every hour
}

// Show elements with animation when scrolled into view
function setupScrollAnimations() {
  const additionalWish = document.querySelector('.additional-wish');
  const videoContainer = document.querySelector('.video-container');
  
  // Helper function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Check on scroll
  function checkScroll() {
    if (isInViewport(additionalWish)) {
      additionalWish.classList.add('show');
    }
    
    if (isInViewport(videoContainer)) {
      videoContainer.classList.add('show');
    }
  }
  
  window.addEventListener('scroll', checkScroll);
  
  // Initial check
  setTimeout(checkScroll, 1000);
}

// Apply glow effect to birthday message
function applyGlowEffect() {
  const wishHbd = document.querySelector('.wish-hbd');
  wishHbd.classList.add('glow-text');
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add small delay before starting animations to make sure GSAP animations run first
  setTimeout(() => {
    createFloatingHearts();
    createConfetti();
    createStars();
    createHeartTrail();
    calculateTimeTogether();
    setupScrollAnimations();
    applyGlowEffect();

  }, 3000);
});

// Kode ini harus ditambahkan ke file birthday-enhancements.js Anda

document.addEventListener('DOMContentLoaded', function() {
  // Tetapkan nilai rotasi kustom untuk setiap gambar
  const galleryImages = document.querySelectorAll('.gallery-img');
  
  // Tetapkan nilai rotasi kustom
  const rotations = [15, -10, 8, -20, 12, -8, 80, -80];
  
  // Terapkan rotasi sebagai variabel CSS untuk animasi
  galleryImages.forEach((img, index) => {
    img.style.setProperty('--rotation', `${rotations[index]}deg`);
    
    // Tambahkan interaksi klik
    img.addEventListener('click', function() {
      // Buat efek lightbox saat gambar diklik
      const fullView = document.createElement('div');
      fullView.classList.add('image-lightbox');
      fullView.style.position = 'fixed';
      fullView.style.top = '0';
      fullView.style.left = '0';
      fullView.style.width = '100%';
      fullView.style.height = '100%';
      fullView.style.backgroundColor = 'rgba(0,0,0,0.9)';
      fullView.style.zIndex = '1000';
      fullView.style.display = 'flex';
      fullView.style.justifyContent = 'center';
      fullView.style.alignItems = 'center';
      fullView.style.cursor = 'pointer';
      
      const enlargedImg = document.createElement('img');
      enlargedImg.src = this.src;
      enlargedImg.style.maxWidth = '80%';
      enlargedImg.style.maxHeight = '80%';
      enlargedImg.style.borderRadius = '8px';
      enlargedImg.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)';
      enlargedImg.style.transform = 'rotate(0deg)';
      
      fullView.appendChild(enlargedImg);
      document.body.appendChild(fullView);
      
      // Tutup lightbox saat diklik
      fullView.addEventListener('click', function() {
        document.body.removeChild(fullView);
      });
    });
    
    // Tambahkan penundaan animasi masuk acak
    const delay = Math.random() * 1.5;
    img.style.animationDelay = `${delay}s`;
    
    // Keadaan awal (untuk animasi masuk)
    img.style.opacity = '0';
    img.style.transform = `scale(0.5) rotate(${rotations[index]}deg)`;
    
    // Animasikan masuk
    setTimeout(() => {
      img.style.transition = 'all 1s ease-out';
      img.style.opacity = '1';
      img.style.transform = `rotate(${rotations[index]}deg)`;
    }, delay * 1000);
  });
  
  // Tambahkan efek kemiringan berdasarkan posisi mouse
  const gallery = document.querySelector('.photo-gallery');
  
  gallery.addEventListener('mousemove', function(e) {
    const xPos = (e.clientX / window.innerWidth) - 0.5;
    const yPos = (e.clientY / window.innerHeight) - 0.5;
    
    galleryImages.forEach((img, index) => {
      const factor = (index % 3 + 1) * 10;
      img.style.transform = `
        rotate(${rotations[index]}deg) 
        translateX(${xPos * factor}px) 
        translateY(${yPos * factor}px)
      `;
    });
  });
  
  gallery.addEventListener('mouseleave', function() {
    galleryImages.forEach((img, index) => {
      img.style.transform = `rotate(${rotations[index]}deg)`;
    });
  });
});


// Kode ini harus ditambahkan ke file birthday-enhancements.js Anda

document.addEventListener('DOMContentLoaded', function() {
  // Tetapkan nilai rotasi kustom untuk setiap elemen
  const galleryImages = document.querySelectorAll('.gallery-img');
  const videoFrames = document.querySelectorAll('.video-frame');
  
  // Tetapkan nilai rotasi kustom
  const imageRotations = [15, -10, -20, 12];
  const videoRotations = [8, -8, 80, -80];
  
  // Terapkan rotasi sebagai variabel CSS untuk animasi gambar
  galleryImages.forEach((img, index) => {
    img.style.setProperty('--rotation', `${imageRotations[index]}deg`);
    
    // Tambahkan interaksi klik
    img.addEventListener('click', function() {
      // Buat efek lightbox saat gambar diklik
      const fullView = document.createElement('div');
      fullView.classList.add('image-lightbox');
      fullView.style.position = 'fixed';
      fullView.style.top = '0';
      fullView.style.left = '0';
      fullView.style.width = '100%';
      fullView.style.height = '100%';
      fullView.style.backgroundColor = 'rgba(0,0,0,0.9)';
      fullView.style.zIndex = '1000';
      fullView.style.display = 'flex';
      fullView.style.justifyContent = 'center';
      fullView.style.alignItems = 'center';
      fullView.style.cursor = 'pointer';
      
      const enlargedImg = document.createElement('img');
      enlargedImg.src = this.src;
      enlargedImg.style.maxWidth = '80%';
      enlargedImg.style.maxHeight = '80%';
      enlargedImg.style.borderRadius = '8px';
      enlargedImg.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)';
      enlargedImg.style.transform = 'rotate(0deg)';
      
      fullView.appendChild(enlargedImg);
      document.body.appendChild(fullView);
      
      // Tutup lightbox saat diklik
      fullView.addEventListener('click', function() {
        document.body.removeChild(fullView);
      });
    });
    
    // Tambahkan penundaan animasi masuk acak
    const delay = Math.random() * 1.5;
    img.style.animationDelay = `${delay}s`;
    
    // Keadaan awal (untuk animasi masuk)
    img.style.opacity = '0';
    img.style.transform = `scale(0.5) rotate(${imageRotations[index]}deg)`;
    
    // Animasikan masuk
    setTimeout(() => {
      img.style.transition = 'all 1s ease-out';
      img.style.opacity = '1';
      img.style.transform = `rotate(${imageRotations[index]}deg)`;
    }, delay * 1000);
  });
  
  // Terapkan rotasi sebagai variabel CSS untuk animasi video
  videoFrames.forEach((frame, index) => {
    frame.style.setProperty('--rotation', `${videoRotations[index]}deg`);
    
    // Tambahkan interaksi klik
    frame.addEventListener('click', function() {
      // Simulasi pemutaran video
      const videoLightbox = document.createElement('div');
      videoLightbox.classList.add('video-lightbox');
      
      const videoContent = document.createElement('div');
      videoContent.classList.add('video-lightbox-content');
      
      const closeButton = document.createElement('div');
      closeButton.classList.add('close-button');
      closeButton.innerHTML = '&times;';
      
      // Dalam skenario nyata, ini akan menjadi elemen video
      const videoPlayer = document.createElement('div');
      videoPlayer.style.width = '640px';
      videoPlayer.style.height = '360px';
      videoPlayer.style.backgroundColor = '#000';
      videoPlayer.style.display = 'flex';
      videoPlayer.style.alignItems = 'center';
      videoPlayer.style.justifyContent = 'center';
      videoPlayer.style.color = 'white';
      videoPlayer.innerHTML = 'Video Sedang Diputar...';
      
      videoContent.appendChild(videoPlayer);
      videoContent.appendChild(closeButton);
      videoLightbox.appendChild(videoContent);
      document.body.appendChild(videoLightbox);
      
      // Tutup video lightbox
      closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        document.body.removeChild(videoLightbox);
      });
      
      videoLightbox.addEventListener('click', function() {
        document.body.removeChild(videoLightbox);
      });
    });
    
    // Tambahkan penundaan animasi masuk acak
    const delay = Math.random() * 1.5;
    frame.style.animationDelay = `${delay}s`;
    
    // Keadaan awal (untuk animasi masuk)
    frame.style.opacity = '0';
    frame.style.transform = `scale(0.5) rotate(${videoRotations[index]}deg)`;
    
    // Animasikan masuk
    setTimeout(() => {
      frame.style.transition = 'all 1s ease-out';
      frame.style.opacity = '1';
      frame.style.transform = `rotate(${videoRotations[index]}deg)`;
    }, delay * 1000);
  });
  
  // Tambahkan efek kemiringan berdasarkan posisi mouse
  const gallery = document.querySelector('.photo-gallery');
  
  gallery.addEventListener('mousemove', function(e) {
    const xPos = (e.clientX / window.innerWidth) - 0.5;
    const yPos = (e.clientY / window.innerHeight) - 0.5;
    
    // Efek untuk gambar
    galleryImages.forEach((img, index) => {
      const factor = (index % 2 + 1) * 10;
      img.style.transform = `
        rotate(${imageRotations[index]}deg) 
        translateX(${xPos * factor}px) 
        translateY(${yPos * factor}px)
      `;
    });
    
    // Efek untuk video
    videoFrames.forEach((frame, index) => {
      const factor = (index % 2 + 1) * 8;
      frame.style.transform = `
        rotate(${videoRotations[index]}deg) 
        translateX(${xPos * factor}px) 
        translateY(${yPos * factor}px)
      `;
    });
  });
  
  gallery.addEventListener('mouseleave', function() {
    galleryImages.forEach((img, index) => {
      img.style.transform = `rotate(${imageRotations[index]}deg)`;
    });
    
    videoFrames.forEach((frame, index) => {
      frame.style.transform = `rotate(${videoRotations[index]}deg)`;
    });
  });
});

// Tambahkan script ini di akhir body atau setelah video didefinisikan
document.addEventListener('DOMContentLoaded', function() {
  // Ambil semua elemen video
  const videos = document.querySelectorAll('video');
  
  // Function untuk menampilkan pesan error
  function handleVideoError(event) {
    const video = event.target;
    console.error('Video error:', video.error);
    
    // Tampilkan pesan error di bawah video
    const errorDiv = document.createElement('div');
    errorDiv.className = 'video-error';
    errorDiv.innerHTML = `
      <p style="color: red; padding: 10px; background: #ffeeee; border: 1px solid #ffcccc; border-radius: 5px;">
        Video tidak dapat diputar: ${video.error ? video.error.message : 'File tidak ditemukan atau format tidak didukung'}
      </p>
      <p>Path video: ${video.getAttribute('src')}</p>
    `;
    
    // Tambahkan setelah elemen video
    video.parentNode.appendChild(errorDiv);
  }
  
  // Tambahkan event listener untuk semua video
  videos.forEach(video => {
    // Check if video exists by attempting to load metadata
    video.addEventListener('error', handleVideoError);
    
    // Log ketika video berhasil dimuat
    video.addEventListener('loadedmetadata', function() {
      console.log('Video loaded successfully:', video.getAttribute('src'));
    });
    
    // Tambahkan atribut controls jika belum ada
    if (!video.hasAttribute('controls')) {
      video.setAttribute('controls', '');
    }
  });
  
  // Tambahkan fungsi untuk memeriksa keberadaan file
  function checkFileExists(url) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', url, true);
      xhr.onload = function() {
        resolve(xhr.status !== 404);
      };
      xhr.onerror = function() {
        resolve(false);
      };
      xhr.send();
    });
  }
  
  // Periksa keberadaan file video
  async function checkVideos() {
    for (const video of videos) {
      const src = video.getAttribute('src');
      const exists = await checkFileExists(src);
      
      // Tampilkan status di konsol
      console.log(`Video ${src}: ${exists ? 'File exists' : 'File NOT found'}`);
      
      if (!exists) {
        const errorMsg = document.createElement('p');
        errorMsg.style.color = 'red';
        errorMsg.textContent = `File video tidak ditemukan: ${src}`;
        video.parentNode.appendChild(errorMsg);
      }
    }
  }
  
  // Jalankan pemeriksaan file
  checkVideos();
});