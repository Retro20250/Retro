const clickSound = document.getElementById("click-sound");

  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      clickSound.currentTime = 0; // يعيد الصوت من أوله
      clickSound.play();
    });
  });

  const scrollElements = document.querySelectorAll(".show-on-scroll");
  
  function elementInView(el, offset = 0) {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  }

  function displayScrollElement(el) {
    el.classList.add("visible");
  }

  function handleScrollAnimation() {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      }
    });
  }

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // تفعيل أول ما الصفحة تفتح
  handleScrollAnimation();

  const bgMusic = document.getElementById("bg-music");
  let isPlaying = false;

  function toggleMusic() {
    if (isPlaying) {
      bgMusic.pause();
    } else {
      bgMusic.play();
    }
    isPlaying = !isPlaying;
  }

  // تشغيل الموسيقى بعد أول كليك في الصفحة
  function startMusicOnce() {
    bgMusic.play();
    isPlaying = true;
    window.removeEventListener("click", startMusicOnce);
  }

  window.addEventListener("click", startMusicOnce);