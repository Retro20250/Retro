function toggleMenu() { //function btsht8l lma ados 3la el button
            const menu = document.getElementById("dropdown"); //bgeeb el menu elly 3ndoh id = dropdown w y7oth fl variable elly esmo menu
            const isShowing = menu.classList.contains("show"); //by3rf lw el menu mzharsh aw la
            if (!isShowing) { // lw el menu mzharsh lma ados 3la el button
                menu.style.display = "block"; //by5ly el menu zahr 
                void menu.offsetWidth;  // force el browser eno y3ml reflow 3shan el animation tt3ml
                menu.classList.add("show"); //b7ot el class show 3la el menu
            } else { // lw el menu zhar
                menu.classList.remove("show"); //bysheel el class show
                menu.addEventListener('transitionend', function handler() { //bystna el end bta3 el transition
                    if (!menu.classList.contains("show")) {  //b3d ma el transition y5las
                        menu.style.display = "none"; //b5ly el menu myzhrsh
                    }
                    menu.removeEventListener('transitionend', handler); //b5ly el event listener y5las 3shan ma y3mlsh loop
                }, { once: true }); //b3ml el event listener once 3shan y5las b3d ma y3ml el transition
            }
        }
        document.addEventListener('click', function(e) { // b7ot observer 3la ay click fl page
            const dropdown = document.getElementById("dropdown"); //bgeeb el menu elly 3ndoh id = dropdown w y7oth fl variable elly esmo dropdown
            const menuButton = document.querySelector('.menu-button'); //bgeeb el button elly 3ndoh class menu-button w y7oth fe var menuButton
            if (dropdown.classList.contains("show") && 
                !menuButton.contains(e.target) && 
                !dropdown.contains(e.target)) {
                // lw el menu zahra w el click 3la ay 7aga (gher el button w el menu)
                dropdown.classList.remove("show"); //bysheel el class show
                dropdown.addEventListener('transitionend', function handler() {  //bystna el end bta3 el transition
                    if (!dropdown.classList.contains("show")) { //lw el animation 5las
                        dropdown.style.display = "none"; //by5leha t5tfy
                    }
                    dropdown.removeEventListener('transitionend', handler); 
                }, { once: true });
            }
        });

        const stars = document.querySelectorAll('.stars i'); // Select all star icons
        stars.forEach(star => { // Loop through each star icon
          star.addEventListener('click', () => { //nzwd event listener lw el user das 3la el star
            const value = parseInt(star.getAttribute('data-value')); //ngeeb el value elly 3ndoh ll star 1,2,3,4,5
            stars.forEach(s => s.classList.remove('selected')); //ysheel el selection 3la el stars nbd2 mn el awl
      
            stars.forEach(s => { 
              if (parseInt(s.getAttribute('data-value')) <= value) { // lw el value elly 3ndoh akbr mn el value elly 3ndy
                s.classList.add('selected'); //nrg3 n7dd el stars mn el 1 l7d el value elly 3ndy
              }
            });
          });
        });
        const watchlistBtn = document.getElementById('watchlistBtn');
  let added = false;

  watchlistBtn.addEventListener('click', function () { //lma ados 3la el button bta3 el watchlist
    added = !added; // lw false y5lyha true w lw true y5lyha false
    if (added) {
      this.innerHTML = `<i class="fa-solid fa-bookmark"></i>added to your watchlist`; //by5leha added
    } else {
      this.innerHTML = `<i class="fa-regular fa-bookmark"></i> ADD TO WATCHLIST`; //byrg3 el button l7alet el default
    }
  });


  