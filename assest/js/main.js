/*=============== HOME SPLIT TEXT ===============*/
 const { animate ,splitText, stagger } = anime
 const { chars:chars1 } = splitText('.home__profession-1', {chars:true })
  const { chars:chars2 } = splitText('.home__profession-2', {chars:true })

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});


/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {

  loop: true,
spaceBetween:24,
slidesPerView:'auto',
grabCursor:true,
speed:600,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
})


/*=============== WORK TABS ===============*/

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {

    const targetSelector = tab.dataset.target;
    const targetContent = document.querySelector(targetSelector);

    // Disable all content and active tabs
    tabContents.forEach((content) => {
      content.classList.remove('work-active');
    });

    tabs.forEach((t) => {
      t.classList.remove('work-active');
    });

    // Activate the clicked tab and its content
    tab.classList.add('work-active');
    targetContent.classList.add('work-active');
  });
});
/*==================== SERVICES ACCORDION ====================*/
const servicesButtons = document.querySelectorAll('.services__button')

servicesButtons.forEach(button => {
  // Add your height to services info
  const heightInfo = document.querySelector('.services__info')
  heightInfo.style.height = heightInfo.scrollHeight + 'px'

  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.services__card'),
          currentCard = button.parentNode,
          currentInfo = currentCard.querySelector('.services__info'),
          isCardOpen = currentCard.classList.contains('services-open')
          // Close all other services info
    servicesCards.forEach(card => {
      card.classList.replace('services-open', 'services-close')

      const info = card.querySelector('.services__info')
      info.style.height = '0'
    })

    // Open only if not already open
    if(!isCardOpen){
      currentCard.classList.replace('services-close', 'services-open')
      currentInfo.style.height = currentInfo.scrollHeight + 'px'
    }
  })
})


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/

/*==================== COPY EMAIL IN CONTACT ====================*/
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
  // Use the clipboard API to copy text
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

    // Restore the original text
    setTimeout(() => {
      copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
    }, 2000)
  })
})



/*==================== CURRENT YEAR OF THE FOOTER ====================*/
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear()

// Each year it is updated to the current year
textYear.textContent = currentYear

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== CUSTOM CURSOR ===============*/
/*hide custom cursor on links*/