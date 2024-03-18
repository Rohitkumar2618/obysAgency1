function loadingAnimation() {
    var t1 = gsap.timeline();

    t1.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    });

    t1.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                }
            }, 33);
        }
    });

    t1.to(".line h2", {
        opacity: 1,
        duration: 0.6, // Added duration
        animationName: "anime" // Assuming you're using CSS animations
    });



    t1.from("#page1", {
        y: 1600,
        opacity: 0,
        delay: 0.2,
        ease: Power4,
    });

    t1.to("#loader", {
        display: "none",
    });

    t1.from(".hero h1", {
        y: 140,
        stagger: 0.2
    })

}

loadingAnimation();


function cursorAnimation() {

    // For mouse moving events
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y
        })
    })

    Shery.makeMagnet("#nav-part2 h4", {});

}

cursorAnimation();