         // Menu functionality with smooth animations
        function toggleMenu() {
            const menu = document.getElementById("dropdown");
            const isShowing = menu.classList.contains("show");
            
            if (!isShowing) {
                // Show menu with smooth animation
                menu.style.display = "block";
                // Force reflow to ensure animation plays
                void menu.offsetWidth;
                menu.classList.add("show");
            } else {
                // Hide menu with smooth animation
                menu.classList.remove("show");
                
                // Wait for animation to complete before hiding
                menu.addEventListener('transitionend', function handler() {
                    if (!menu.classList.contains("show")) {
                        menu.style.display = "none";
                    }
                    menu.removeEventListener('transitionend', handler);
                }, { once: true });
            }
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const dropdown = document.getElementById("dropdown");
            const menuButton = document.querySelector('.menu-button');
            
            if (dropdown.classList.contains("show") && 
                !menuButton.contains(e.target) && 
                !dropdown.contains(e.target)) {
                
                dropdown.classList.remove("show");
                
                dropdown.addEventListener('transitionend', function handler() {
                    if (!dropdown.classList.contains("show")) {
                        dropdown.style.display = "none";
                    }
                    dropdown.removeEventListener('transitionend', handler);
                }, { once: true });
            }
        });

        const stars = document.querySelectorAll('.stars i');
      
        stars.forEach(star => {
          star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
      
            // Clear previous selection
            stars.forEach(s => s.classList.remove('selected'));
      
            // Highlight selected stars
            stars.forEach(s => {
              if (parseInt(s.getAttribute('data-value')) <= value) {
                s.classList.add('selected');
              }
            });
          });
        });
        const watchlistBtn = document.getElementById('watchlistBtn');
  let added = false;

  watchlistBtn.addEventListener('click', function () {
    added = !added;

    if (added) {
      this.innerHTML = `<i class="fa-solid fa-bookmark"></i>added to your watchlist`;
    } else {
      this.innerHTML = `<i class="fa-regular fa-bookmark"></i> ADD TO WATCHLIST`;
    }
  });