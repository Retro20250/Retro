document.addEventListener("DOMContentLoaded", function () {
    // m3nah estna lma kol el elements thml
    const observer = new IntersectionObserver((entries) => {
        // IntersectionObserver -> btra2b el elements w tshof emta htzhr fe el user`s screen
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // m3naha dlw2ty el element fe el user`s screen? lw yes hnbd2 hrka
                entry.target.classList.add('visible');
                // add visible class fe 3lshan el css yf3l el animation
            } else {
                entry.target.classList.remove('visible');
                //remove visible class lma el element ykhrg bra el screen , w byrg3 y3ml el animation tany
            }
        });

    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    //bn7dd kol el elements ely lehom class (animate-on-scroll) 3lshan yra2bhom wahda wahda
});