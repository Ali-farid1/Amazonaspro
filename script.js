const navslide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    lines.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links
        navlinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    }

                }


            )
            //lines animation
        lines.classList.toggle('toggle');

    });
}


navslide();