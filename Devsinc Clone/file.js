function GenerateCard() {
    let CardArr = [];
    CardArr.push({
        Image: 'Ai.avif',
        Title: "Generative AI"
    });
    CardArr.push({
        Image: 'MS D365 ERP .avif',
        Title: "Dynamics 365 ERP"
    });
    CardArr.push({
        Image: 'web and app.avif',
        Title: "Mobile App Development"
    });
    CardArr.push({
        Image: 'Staff Augmentation.avif',
        Title: "Staff Augmentation"
    });


    let totalhtml = '';

    for (let i = 0; i < CardArr.length; i++) {

        totalhtml += `<div class="me-4 position-relative cardhov icon-link icon-link-hover" style="width: 18rem; cursor: pointer;">
          <a href="" class="bi12" viewBox="0 0 16 16" aria-hidden="true"
            style="--bs-icon-link-transform: translate3d(0, -1.125rem, 0);">
            <img src="${CardArr[i].Image}" class="card" style=" width: 18rem; " alt="...">
            <div class="card-img-overlay"
              style="width: 18rem;  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .6));">
              <div class="container">
                <h5 class="card-title text-white fw-bold mt-4 ms-3"
                  style="z-index: 1; font-size: 27px; position: absolute ;">${CardArr[i].Title}</h5>
              </div>
            </div>
          </a>
        </div>`;
    }


    document.getElementById('Card').innerHTML = totalhtml;

}

GenerateCard();


function GenerateLink() {
    let links = [];
    links.push({
        title: "Travel & Hospitality",
        Image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489aa3c274b240610bc25b_Artboard%201%20copy%203.svg"
    });
    links.push({
        title: "Public Sector",
        Image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489aa3c274b240610bc25b_Artboard%201%20copy%203.svg"
    });
    links.push({
        title: "Telecommunication",
        Image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489aa3c274b240610bc25b_Artboard%201%20copy%203.svg"
    });
    links.push({
        title: "Retail & CPG",
        Image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489aa3c274b240610bc25b_Artboard%201%20copy%203.svg"
    });
    links.push({
        title: "Oil, Gas and Energy",
        Image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67489aa3c274b240610bc25b_Artboard%201%20copy%203.svg"
    });




    let totalhtml2 = '';
    for (let i = 0; i < links.length; i++) {
        
        totalhtml2 += `
          <div class="link-item">
            <div class="link-content">
              <div class="link-icon">
                <img src="${links[i].Image}" alt="${links[i].title}">
              </div>
              <span class="link-text">${links[i].title}</span>
              <div class="arrow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
            <div class="underline"></div>
          </div>
        `;
        

        totalhtml2 += `
          <div class="link-item">
            <div class="link-content">
              <div class="link-icon">
                <img src="${links[i].Image}" alt="${links[i].title}">
              </div>
              <span class="link-text">${links[i].title}</span>
              <div class="arrow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
            <div class="underline"></div>
          </div>
        `;
    }

    document.getElementById('linkHov').innerHTML = totalhtml2;
}

GenerateLink();



const parallaxSection = document.getElementById('parallaxSection');
const animatedDivs = document.querySelectorAll('.scroll-div');

let ticking = false;

function updateParallax() {
    const sectionRect = parallaxSection.getBoundingClientRect();
    const sectionTop = sectionRect.top;
    const sectionBottom = sectionRect.bottom;
    const windowHeight = window.innerHeight;


    if (sectionBottom > 0 && sectionTop < windowHeight) {

        const scrollProgress = Math.max(0, Math.min(1, -sectionTop / (sectionRect.height - windowHeight)));

        animatedDivs.forEach(div => {
            const speed = parseFloat(div.getAttribute('data-speed'));
            const maxMove = 200;
            const translateY = scrollProgress * maxMove * speed;

            div.style.transform = `translateY(${translateY}px)`;
        });
    } else if (sectionTop >= windowHeight) {
        animatedDivs.forEach(div => {
            div.style.transform = 'translateY(0)';
        });
    } else if (sectionBottom <= 0) {
        animatedDivs.forEach(div => {
            const speed = parseFloat(div.getAttribute('data-speed'));
            const maxMove = 200;
            const finalY = maxMove * speed;
            div.style.transform = `translateY(${finalY}px)`;
        });
    }

    ticking = false;
}

function requestTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

updateParallax();


const carousel = new bootstrap.Carousel(document.getElementById('leadershipCarousel'), {
    interval: false,
    wrap: true
});

document.getElementById('prevBtn').addEventListener('click', function () {
    carousel.prev();
});

document.getElementById('nextBtn').addEventListener('click', function () {
    carousel.next();
});


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add("show")
//         }
//         else{
//             entry.target.classList.remove("hide")
//         }
//     });
// }, {})

// const element = document.querySelectorAll(".videoclass");
// element.forEach((el)=>observer.observe(el))


const videoSection = document.getElementById('videoSection');
const videoWrapper = document.getElementById('videoWrapper');
const contentWrapper = document.getElementById('contentWrapper');

window.addEventListener('scroll', function () {

    const sectionTop = videoSection.offsetTop;
    const sectionHeight = videoSection.offsetHeight;
    const scrollPosition = window.scrollY;

    const scrollProgress = Math.max(0, Math.min(1,
        (scrollPosition - sectionTop) / (sectionHeight - window.innerHeight)
    ));

    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {

        const videoWidth = 100 - (scrollProgress * 50);
        const videoLeft = scrollProgress * 0;
        const videoHeight = 100 - (scrollProgress * 20);

        videoWrapper.style.width = videoWidth + '%';
        videoWrapper.style.height = videoHeight + '%';
        videoWrapper.style.left = videoLeft + '%';
        videoWrapper.style.top = (scrollProgress * 10) + '%';
        videoWrapper.style.borderRadius = (scrollProgress * 20) + 'px';

        if (scrollProgress > 0.3) {
            contentWrapper.classList.add('visible');
        } else {
            contentWrapper.classList.remove('visible');
        }
    }
});
