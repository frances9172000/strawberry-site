window.addEventListener("load", () => {
    let showcs_img = document.querySelectorAll(".showcs-img");
    let index = 1;
    let circles = document.querySelectorAll(".circle");
    let nv_sm = document.querySelectorAll(".top-nv-menu-sm")[0];
    let nv_br = document.querySelectorAll(".nv-br")[0];
    let d = setInterval(() => chgeImg(), 4000);
    let disply = setInterval(() => opcityFull(), 70);
    let lines = document.querySelectorAll(".line");
    let shwcs_btn = document.querySelector(".shwcs-btn");
    let btt = document.querySelector('.bck-to-top');

    nv_br.addEventListener("click", openNv);
    circles.forEach((element) => {
       element.addEventListener("click", slideShow);
    });

    document.addEventListener('scroll', chckTop);
    shwcs_btn.addEventListener('click', scrolled);
    btt.addEventListener('click', goTop);
    window.addEventListener('scroll', opcityNone)


    function slideShow(e) {
        if (e.target === circles[0]) {
            clearInterval(d);
            index = 0;
            chgeImg();
            d = setInterval(() => chgeImg(), 4000);
        } else if (e.target === circles[1]) {
            clearInterval(d);
            index = 1;
            chgeImg();
            d = setInterval(() => chgeImg(), 4000);
        } else if (e.target === circles[2]) {
            clearInterval(d);
            index = 2;
            chgeImg();
            d = setInterval(() => chgeImg(), 4000);
        } else if (e.target === circles[3]) {
            clearInterval(d);
            index = 3;
            chgeImg();
            d = setInterval(() => chgeImg(), 4000);
        } else if (e.target === circles[4]) {
            clearInterval(d);
            index = 4;
            chgeImg();
            d = setInterval(() => chgeImg(), 4000);
        } else {
            clearInterval(d);
            d = setInterval(() => chgeImg(), 4000);
        }
    }

    function chgeImg() {
        showcs_img.forEach((e, i) => {
            if (i === index) {
                e.style.display = "block";
            } else {
                e.style.display = "none";
            }
        });

        chgeCirc();
        index++;
        index > showcs_img.length - 1 ? (index = 0) : null;
    }

    function chgeCirc() {
        circles.forEach((e, i) => {
            if (i === index) {
                e.classList.add("ctive");
            } else {
                e.className = "circle";
            }
        });
    }

    function openNv() {
       nv_sm.classList.toggle('ctive');
       chgeX();
    }

    function chgeX() {
       lines.forEach((ele) => {
          ele.classList.toggle('ctive');
          nv_br.classList.toggle('ctive')
       })

    }

    function chckTop(e) {
        let home_shwcs =  document.querySelector('.home-shwcs');
        let nv = document.querySelector('.top-nv');
        let btt = document.querySelector('.bck-to-top');
        if (home_shwcs.getBoundingClientRect().top < 0) {
            nv.style.paddingTop = '5px';
            nv.style.background = '#fff';
            nv.style.height = '70px';
            nv.style.borderBottom = '1px solid rgb(241, 234, 234)';
            btt.style.display = 'block'
        } else {
            nv.style.paddingTop = '20px';
            nv.style.background = 'transparent';
            nv.style.height = 'auto';
            nv.style.borderBottom = '1px solid transparent';
            btt.style.display = 'none'
        } 

    }

    function scrolled() {
        let home_des = document.querySelector(".home-description");

        home_des.scrollIntoView({behavior: 'smooth', block: 'start', inline: "start"});
    }

    function goTop() {
        let home_shwcs =  document.querySelector('.home-shwcs');

        home_shwcs.scrollIntoView({behavior: 'smooth', block: 'start', inline: "start"});
    }

    function opcityFull() {
        btt.style.opacity = '1'
    }

    function opcityNone(e) {
        clearInterval(disply);
        btt.style.opacity = '0';
        disply = setInterval(() => opcityFull(), 70)
    }
});