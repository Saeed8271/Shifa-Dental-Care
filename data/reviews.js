/* =========================================================
   REVIEWS.JS
   ---------------------------------------------------------
   Review data + review rendering.

   HOMEPAGE:
   - Uses the existing horizontal review slider.
   - Desktop: 3 cards visible.
   - Tablet: 2 cards visible.
   - Mobile: 1 card visible.
   - Auto-advances.
   - Pauses on hover.
   - Supports touch/swipe.

   REVIEWS PAGE:
   - Displays ALL reviews.
   - Reviews are divided into multiple horizontal rows.
   - Odd rows move RIGHT -> LEFT.
   - Even rows move LEFT -> RIGHT.
   - Each row continuously animates.
   - Animation speed is controlled by CSS.
   - No JavaScript slider logic is used for the full page.

   IMPORTANT:
   - Homepage and Reviews page intentionally use
     different rendering systems.
   - This prevents the full-page review animation from
     disturbing the homepage review component.
   ========================================================= */


/* =========================================================
   DEMO REVIEW DATA
   ========================================================= */

const reviews = [

  {
    name: "Aarav Kumar",
    rating: 5,
    text: "Very comfortable experience. The doctor explained every step before starting, which really helped calm my nerves.",
    source: "Demo Review"
  },

  {
    name: "Priya Singh",
    rating: 5,
    text: "Clean clinic, friendly staff and no long waiting time. My cleaning appointment was quick and painless.",
    source: "Demo Review"
  },

  {
    name: "Mohammad Faisal",
    rating: 4,
    text: "Good experience overall. Booked through WhatsApp and got a same-week slot for a filling.",
    source: "Demo Review"
  },

  {
    name: "Ayesha Khatoon",
    rating: 5,
    text: "Took my daughter for her first checkup and the staff were wonderful with kids. Highly recommend for families.",
    source: "Demo Review"
  },

  {
    name: "Rohit Verma",
    rating: 5,
    text: "Professional and gentle treatment. The clinic uses modern equipment and everything felt very hygienic.",
    source: "Demo Review"
  },

  {
    name: "Sana Parveen",
    rating: 4,
    text: "Root canal treatment went smoothly with minimal discomfort. Would visit again for future dental needs.",
    source: "Demo Review"
  },

  {
    name: "Amit Kumar",
    rating: 5,
    text: "Affordable pricing and honest advice — no unnecessary treatments were suggested. Appreciated the transparency.",
    source: "Demo Review"
  },

  {
    name: "Fatima Begum",
    rating: 5,
    text: "The doctor was very patient with my elderly mother during her visit. Comfortable seating and a calm environment.",
    source: "Demo Review"
  },

  {
    name: "Suresh Prasad",
    rating: 4,
    text: "Easy to reach from Anisabad and parking was convenient. Treatment for a chipped tooth was handled well.",
    source: "Demo Review"
  },

  {
    name: "Nazia Fatima",
    rating: 5,
    text: "Loved how clearly the dentist explained my braces options before we decided on a treatment plan.",
    source: "Demo Review"
  },

  {
    name: "Vikas Kumar",
    rating: 5,
    text: "Booked an appointment online and it was confirmed quickly over a WhatsApp message. Smooth process.",
    source: "Demo Review"
  },

  {
    name: "Zainab Sheikh",
    rating: 4,
    text: "Good clinic near Haroon Nagar. The teeth whitening results were noticeable after just one sitting.",
    source: "Demo Review"
  },

  {
    name: "Deepak Singh",
    rating: 5,
    text: "Very gentle hands during the extraction. Almost no pain and the recovery instructions were clear.",
    source: "Demo Review"
  },

  {
    name: "Rukhsar Ali",
    rating: 5,
    text: "Genuinely caring staff. They followed up after my visit to check how I was feeling, which was thoughtful.",
    source: "Demo Review"
  },

  {
    name: "Manoj Kumar",
    rating: 4,
    text: "The intraoral scanner was impressive — could see exactly what the dentist was looking at on screen.",
    source: "Demo Review"
  },

  {
    name: "Shabana Khan",
    rating: 5,
    text: "Best dental clinic I've visited in Phulwari Sharif so far. Neat, tidy and well organised.",
    source: "Demo Review"
  },

  {
    name: "Anil Kumar",
    rating: 5,
    text: "Got my dental implant consultation here. Detailed explanation of the procedure with realistic expectations.",
    source: "Demo Review"
  },

  {
    name: "Farheen Ansari",
    rating: 4,
    text: "Appointment ran a little late but the quality of care made up for the short wait.",
    source: "Demo Review"
  },

  {
    name: "Ravi Ranjan",
    rating: 5,
    text: "Took my whole family here for checkups. Everyone felt comfortable, including my kids.",
    source: "Demo Review"
  },

  {
    name: "Nasreen Jahan",
    rating: 5,
    text: "Very reasonably priced compared to other clinics in Patna, without compromising on cleanliness.",
    source: "Demo Review"
  },

  {
    name: "Sandeep Kumar",
    rating: 4,
    text: "Crown fitting was precise and comfortable. The dentist double-checked the bite before finishing.",
    source: "Demo Review"
  },

  {
    name: "Yasmeen Kausar",
    rating: 5,
    text: "Appreciated the gentle approach for my son's first ever dental visit. He wasn't scared at all.",
    source: "Demo Review"
  },

  {
    name: "Pankaj Kumar",
    rating: 5,
    text: "Electrocautery procedure was handled very professionally with clear aftercare guidance.",
    source: "Demo Review"
  },

  {
    name: "Ruby Perween",
    rating: 4,
    text: "Convenient location near Mahavir Cancer Sansthan, easy to find and easy to reach by auto.",
    source: "Demo Review"
  },

  {
    name: "Gaurav Sinha",
    rating: 5,
    text: "The clinic felt calm and modern, not like a typical crowded dental clinic. Great first impression.",
    source: "Demo Review"
  },

  {
    name: "Shazia Perveen",
    rating: 5,
    text: "Very satisfied with the scaling and polishing session. My teeth feel noticeably cleaner.",
    source: "Demo Review"
  },

  {
    name: "Kunal Kumar",
    rating: 4,
    text: "Straightforward appointment booking and the reception team was helpful over the phone.",
    source: "Demo Review"
  },

  {
    name: "Afreen Naaz",
    rating: 5,
    text: "Dr. Sania was thorough during my checkup and answered every question I had patiently.",
    source: "Demo Review"
  },

  {
    name: "Rajeev Ranjan",
    rating: 5,
    text: "Clean waiting area, gentle staff, and the whole visit felt well organised from start to finish.",
    source: "Demo Review"
  },

  {
    name: "Tabassum Khatoon",
    rating: 4,
    text: "Filling treatment done comfortably in one sitting. Would recommend to anyone nearby.",
    source: "Demo Review"
  },

  {
    name: "Abhishek Kumar",
    rating: 5,
    text: "Great multi-speciality setup — got my checkup and a minor procedure done on the same visit.",
    source: "Demo Review"
  },

  {
    name: "Nikhat Parveen",
    rating: 5,
    text: "Friendly, professional and patient-focused. Exactly what you want from a family dental clinic.",
    source: "Demo Review"
  }

];


/* =========================================================
   SHARED HELPERS
   ========================================================= */


/**
 * Creates the star rating markup.
 */
function starsFor(rating) {

  return "★".repeat(rating);

}


/**
 * Builds one review card.
 *
 * This markup is shared by:
 * - Homepage slider
 * - Full Reviews page rows
 */
function buildReviewCard(review) {

  return `
    <article class="review-card">

      <div class="review-card-stars">
        ${starsFor(review.rating)}
      </div>

      <p class="review-card-text">
        "${review.text}"
      </p>

      <p class="review-card-name">
        ${review.name}
        <span> · ${review.source}</span>
      </p>

    </article>
  `;

}


/* =========================================================
   RENDER REVIEWS
   ---------------------------------------------------------
   This is the ONLY renderReviews() function in the project.
   ========================================================= */

function renderReviews(containerId, limit) {

  const container =
    document.getElementById(containerId);


  if (!container) {
    return;
  }


  /* -------------------------------------------------------
     Detect full Reviews page.
     ------------------------------------------------------- */

  const isReviewsPage =
    document.body.contains(
      document.querySelector(".reviews-page")
    );


  /* -------------------------------------------------------
     Select the appropriate renderer.
     ------------------------------------------------------- */

  if (isReviewsPage) {

    renderReviewsPage(container);

    return;

  }


  /* -------------------------------------------------------
     Otherwise render homepage review slider.
     ------------------------------------------------------- */

  renderHomepageReviews(
    container,
    limit
  );

}


/* =========================================================
   HOMEPAGE REVIEWS
   ---------------------------------------------------------
   Existing homepage slider behavior.
   ========================================================= */

function renderHomepageReviews(container, limit) {

  const reviewsToShow =
    typeof limit === "number"
      ? reviews.slice(0, limit)
      : reviews.slice();


  if (!reviewsToShow.length) {
    return;
  }


  /* -------------------------------------------------------
     Build slides twice.

     The duplicate set allows the JavaScript slider to
     move continuously through the second copy before
     resetting to the beginning.
     ------------------------------------------------------- */

  const slidesHtml =
    reviewsToShow
      .concat(reviewsToShow)
      .map(function (review) {

        return `
          <div class="reviews-slider-slide">
            ${buildReviewCard(review)}
          </div>
        `;

      })
      .join("");


  /* -------------------------------------------------------
     Mobile dots.
     ------------------------------------------------------- */

  const dotsHtml =
    reviewsToShow
      .map(function (_, index) {

        const active =
          index === 0;


        return `
          <button
            type="button"
            class="${active ? "active" : ""}"
            aria-label="Show review ${index + 1}"
            aria-current="${active ? "true" : "false"}">
          </button>
        `;

      })
      .join("");


  /* -------------------------------------------------------
     Homepage slider markup.
     ------------------------------------------------------- */

  container.innerHTML = `

    <div class="reviews-slider">

      <div class="reviews-slider-track">

        ${slidesHtml}

      </div>

    </div>


    <div class="reviews-slider-dots">

      ${dotsHtml}

    </div>

  `;


  initHomepageReviewsSlider(
    container,
    reviewsToShow.length
  );

}


/* =========================================================
   HOMEPAGE REVIEW SLIDER
   ========================================================= */

function initHomepageReviewsSlider(
  container,
  realCount
) {

  const slider =
    container.querySelector(
      ".reviews-slider"
    );


  const track =
    container.querySelector(
      ".reviews-slider-track"
    );


  const dotsWrap =
    container.querySelector(
      ".reviews-slider-dots"
    );


  if (
    !slider ||
    !track ||
    !realCount
  ) {
    return;
  }


  const slides =
    Array.from(track.children);


  const dots =
    dotsWrap
      ? Array.from(dotsWrap.children)
      : [];


  let pageIndex = 0;

  let autoplayId = null;

  let touchStartX = 0;

  let touchEndX = 0;


  /* -------------------------------------------------------
     Cards per view.
     ------------------------------------------------------- */

  function cardsPerView() {

    const width =
      window.innerWidth;


    if (width <= 575.98) {
      return 1;
    }


    if (width <= 991.98) {
      return 2;
    }


    return 3;

  }


  /* -------------------------------------------------------
     Mobile check.
     ------------------------------------------------------- */

  function isMobile() {

    return cardsPerView() === 1;

  }


  /* -------------------------------------------------------
     Number of pages.
     ------------------------------------------------------- */

  function numberOfPages(perView) {

    return Math.ceil(
      realCount / perView
    );

  }


  /* -------------------------------------------------------
     Calculate movement distance.

     Uses the actual card width and CSS gap so the slider
     remains correct across responsive breakpoints.
     ------------------------------------------------------- */

  function getStepDistance(perView) {

    const firstSlide =
      slides[0];


    if (!firstSlide) {
      return 0;
    }


    const trackStyle =
      window.getComputedStyle(track);


    const gap =
      parseFloat(
        trackStyle.columnGap ||
        trackStyle.gap ||
        "0"
      ) || 0;


    const cardWidth =
      firstSlide.getBoundingClientRect().width;


    return (
      (cardWidth + gap) *
      perView
    );

  }


  /* -------------------------------------------------------
     Update mobile dots.
     ------------------------------------------------------- */

  function updateDots(perView) {

    if (!dots.length) {
      return;
    }


    const activeIndex =
      (
        pageIndex * perView
      ) % realCount;


    dots.forEach(function (dot, index) {

      const active =
        index === activeIndex;


      dot.classList.toggle(
        "active",
        active
      );


      dot.setAttribute(
        "aria-current",
        active
          ? "true"
          : "false"
      );

    });

  }


  /* -------------------------------------------------------
     Move to page.
     ------------------------------------------------------- */

  function goToPage(
    index,
    animate
  ) {

    const perView =
      cardsPerView();


    const step =
      getStepDistance(perView);


    pageIndex =
      index;


    track.style.transition =
      animate === false
        ? "none"
        : "transform 0.6s ease";


    track.style.transform =
      `translateX(-${pageIndex * step}px)`;


    updateDots(perView);

  }


  /* -------------------------------------------------------
     Next page.
     ------------------------------------------------------- */

  function nextPage() {

    const perView =
      cardsPerView();


    const pages =
      numberOfPages(perView);


    const targetIndex =
      pageIndex + 1;


    goToPage(
      targetIndex,
      true
    );


    /* -----------------------------------------------------
       When the second copy has been reached, reset to
       the real beginning without animation.
       ----------------------------------------------------- */

    if (
      targetIndex >= pages
    ) {

      const handleTransitionEnd =
        function () {

          track.removeEventListener(
            "transitionend",
            handleTransitionEnd
          );


          track.style.transition =
            "none";


          pageIndex = 0;


          track.style.transform =
            "translateX(0)";


          updateDots(perView);


          void track.offsetHeight;


          track.style.transition =
            "transform 0.6s ease";

        };


      track.addEventListener(
        "transitionend",
        handleTransitionEnd
      );

    }

  }


  /* -------------------------------------------------------
     Previous page.
     ------------------------------------------------------- */

  function previousPage() {

    const perView =
      cardsPerView();


    const pages =
      numberOfPages(perView);


    const targetIndex =
      (
        pageIndex - 1 + pages
      ) % pages;


    goToPage(
      targetIndex,
      true
    );

  }


  /* =======================================================
     AUTOPLAY
     ======================================================= */

  function stopAutoplay() {

    if (
      autoplayId !== null
    ) {

      clearInterval(
        autoplayId
      );


      autoplayId = null;

    }

  }


  function startAutoplay() {

    stopAutoplay();


    const interval =
      isMobile()
        ? 3000
        : 3500;


    autoplayId =
      setInterval(
        nextPage,
        interval
      );

  }


  /* =======================================================
     DOT NAVIGATION
     ======================================================= */

  dots.forEach(
    function (dot, index) {

      dot.addEventListener(
        "click",
        function () {

          goToPage(
            index,
            true
          );


          startAutoplay();

        }
      );

    }
  );


  /* =======================================================
     HOVER / FOCUS PAUSE
     ======================================================= */

  slider.addEventListener(
    "mouseenter",
    stopAutoplay
  );


  slider.addEventListener(
    "mouseleave",
    startAutoplay
  );


  slider.addEventListener(
    "focusin",
    stopAutoplay
  );


  slider.addEventListener(
    "focusout",
    startAutoplay
  );


  /* =======================================================
     TOUCH / SWIPE
     ======================================================= */

  track.addEventListener(
    "touchstart",
    function (event) {

      stopAutoplay();


      touchStartX =
        event.changedTouches[0].screenX;

    },
    {
      passive: true
    }
  );


  track.addEventListener(
    "touchend",
    function (event) {

      touchEndX =
        event.changedTouches[0].screenX;


      const swipeDistance =
        touchStartX -
        touchEndX;


      const minimumSwipe =
        50;


      if (
        swipeDistance >
        minimumSwipe
      ) {

        nextPage();

      }
      else if (
        swipeDistance <
        -minimumSwipe
      ) {

        previousPage();

      }


      startAutoplay();

    },
    {
      passive: true
    }
  );


  /* =======================================================
     RESPONSIVE RESET
     ======================================================= */

  let resizeTimeout =
    null;


  window.addEventListener(
    "resize",
    function () {

      clearTimeout(
        resizeTimeout
      );


      resizeTimeout =
        setTimeout(
          function () {

            stopAutoplay();


            goToPage(
              0,
              false
            );


            startAutoplay();

          },
          150
        );

    }
  );


  /* =======================================================
     INITIAL STATE
     ======================================================= */

  goToPage(
    0,
    false
  );


  startAutoplay();

}


/* =========================================================
   FULL REVIEWS PAGE
   ---------------------------------------------------------
   Creates multiple animated rows.

   Example with 32 reviews:

   Row 1:
   Review 1 → Review 6

   Row 2:
   Review 7 → Review 12

   Row 3:
   Review 13 → Review 18

   Row 4:
   Review 19 → Review 24

   Row 5:
   Review 25 → Review 30

   Row 6:
   Review 31 → Review 32

   CSS controls:
   - direction
   - speed
   - gap
   - card width
   - responsive sizing
   ========================================================= */

function renderReviewsPage(container) {

  const reviewsPerRow =
    6;


  const rows = [];


  /* -------------------------------------------------------
     Divide all reviews into rows.
     ------------------------------------------------------- */

  for (
    let i = 0;
    i < reviews.length;
    i += reviewsPerRow
  ) {

    rows.push(
      reviews.slice(
        i,
        i + reviewsPerRow
      )
    );

  }


  /* -------------------------------------------------------
     Build all rows.
     ------------------------------------------------------- */

  const rowsHtml =
    rows.map(
      function (row, rowIndex) {

        const direction =
          rowIndex % 2 === 0
            ? "reviews-row-left"
            : "reviews-row-right";


        const cardsHtml =
          row
            .map(buildReviewCard)
            .join("");


        /*
         * Duplicate the cards inside every row.
         *
         * CSS can therefore animate the track continuously
         * without reaching an empty area at the end.
         */

        const duplicatedCards =
          cardsHtml +
          cardsHtml;


        return `
          <div
            class="reviews-page-row ${direction}"
          >

            <div class="reviews-page-row-track">

              ${duplicatedCards}

            </div>

          </div>
        `;

      }
    )
    .join("");


  /* -------------------------------------------------------
     Insert full-page review rows.
     ------------------------------------------------------- */

  container.innerHTML =
    `
      <div class="reviews-page-rows">

        ${rowsHtml}

      </div>
    `;


  /* -------------------------------------------------------
     Reduced-motion support.

     If the user prefers reduced motion, CSS will stop
     the animation. No JavaScript animation is required.
     ------------------------------------------------------- */

}


/* =========================================================
   END OF REVIEWS.JS
   ========================================================= */