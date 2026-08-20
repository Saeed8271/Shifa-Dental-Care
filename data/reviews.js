/* =========================================================
   REVIEWS.JS
   ---------------------------------------------------------
   Homepage + Reviews Page review data and slider rendering.

   Desktop (>= 992px):
   - Shows 3 review cards at a time
   - Automatically advances by a full group of 3 every 3.5s
   - Moves right -> left
   - Pauses on hover

   Tablet (576px - 991px):
   - Shows 2 review cards at a time
   - Same auto-advance / pause behavior as desktop

   Mobile (< 576px):
   - One review visible at a time
   - Automatic slide every 3 seconds
   - Touch/swipe supported

   Implementation notes:
   - The review list is rendered TWICE, back to back, inside
     the track. This lets the slider keep animating forward
     past the end of the "real" list into the duplicated copy
     (which is pixel-identical to the start), and then snap
     back to the real start with no transition. Because the
     snapped-to frame and the frame just shown are visually
     identical, the loop looks seamless instead of jumping.
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
   RENDER REVIEWS
   ========================================================= */

function renderReviews(containerId, limit) {

  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }


  const reviewsToShow =
    typeof limit === "number"
      ? reviews.slice(0, limit)
      : reviews.slice();


  /* -------------------------------------------------------
     Star helper
     ------------------------------------------------------- */

  function starsFor(rating) {

    return "★".repeat(rating);

  }


  /* -------------------------------------------------------
     Build a single card
     ------------------------------------------------------- */

  function buildSlide(review) {

    return `
      <div class="reviews-slider-slide">

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

      </div>
    `;

  }


  /* -------------------------------------------------------
     Slides — the list is rendered TWICE so the slider can
     loop seamlessly (see notes at the top of this file).
     ------------------------------------------------------- */

  const slidesHtml =
    reviewsToShow
      .concat(reviewsToShow)
      .map(buildSlide)
      .join("");


  /* -------------------------------------------------------
     Mobile dots — one per real review (not per duplicate)
     ------------------------------------------------------- */

  const dotsHtml = reviewsToShow
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
     Build slider
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


  initReviewsSlider(container, reviewsToShow.length);

}


/* =========================================================
   REVIEW SLIDER
   ========================================================= */

/**
 * @param {HTMLElement} container - the #reviews-grid element
 * @param {number} realCount - number of *real* reviews being
 *   shown (the track itself holds realCount * 2 slides)
 */
function initReviewsSlider(container, realCount) {

  const slider =
    container.querySelector(".reviews-slider");

  const track =
    container.querySelector(".reviews-slider-track");

  const dotsWrap =
    container.querySelector(".reviews-slider-dots");


  if (!track || !realCount) {
    return;
  }


  const slides =
    Array.from(track.children);

  const dots =
    dotsWrap
      ? Array.from(dotsWrap.children)
      : [];


  if (slides.length === 0) {
    return;
  }


  let pageIndex = 0;

  let autoplayId = null;

  let touchStartX = 0;

  let touchEndX = 0;


  /* -------------------------------------------------------
     Breakpoints
     ---------------------------------------------------------
     < 576px   -> 1 card at a time  (mobile)
     576-991px -> 2 cards at a time (tablet)
     >= 992px  -> 3 cards at a time (desktop)
     ------------------------------------------------------- */

  function cardsPerView() {

    const w = window.innerWidth;

    if (w <= 575.98) {
      return 1;
    }

    if (w <= 991.98) {
      return 2;
    }

    return 3;

  }


  function isMobile() {

    return cardsPerView() === 1;

  }


  /**
   * Number of "pages" in the *real* (non-duplicated) list for
   * the current cards-per-view.
   */
  function numPages(perView) {

    return Math.ceil(realCount / perView);

  }


  /**
   * Pixel distance one page-step covers, measured live from
   * the rendered cards so it always matches the current
   * breakpoint's card width + gap (set in reviews.css).
   */
  function stepPx(perView) {

    const sample = slides[0];

    if (!sample) {
      return 0;
    }

    const trackStyle =
      getComputedStyle(track);

    const gap =
      parseFloat(
        trackStyle.columnGap || trackStyle.gap || "0"
      ) || 0;

    const cardWidth =
      sample.getBoundingClientRect().width;

    return (cardWidth + gap) * perView;

  }


  function updateDots(perView) {

    if (!dots.length) {
      return;
    }

    const activeIndex =
      (pageIndex * perView) % realCount;

    dots.forEach(function (dot, i) {

      const active =
        i === activeIndex;

      dot.classList.toggle("active", active);

      dot.setAttribute(
        "aria-current",
        active ? "true" : "false"
      );

    });

  }


  /**
   * Moves the track to a given page index.
   * animate=false skips the transition (used on load/resize).
   */
  function goToPage(index, animate) {

    const perView =
      cardsPerView();

    const step =
      stepPx(perView);

    pageIndex = index;

    track.style.transition =
      animate === false
        ? "none"
        : "transform 0.6s ease";

    track.style.transform =
      `translateX(-${pageIndex * step}px)`;

    updateDots(perView);

  }


  /**
   * Advances forward by one page (one card on mobile, one
   * group of cards on tablet/desktop). Handles the seamless
   * loop back to the real start once we've scrolled through
   * the duplicated copy.
   */
  function nextPage() {

    const perView =
      cardsPerView();

    const pages =
      numPages(perView);

    const targetIndex =
      pageIndex + 1;

    goToPage(targetIndex, true);


    if (targetIndex >= pages) {

      const handleTransitionEnd = function () {

        track.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );

        track.style.transition = "none";

        pageIndex = 0;

        track.style.transform = "translateX(0)";

        updateDots(perView);

        // Force reflow so the next transition re-applies.
        void track.offsetHeight;

        track.style.transition = "transform 0.6s ease";

      };

      track.addEventListener(
        "transitionend",
        handleTransitionEnd
      );

    }

  }


  /**
   * Steps back by one page. Manual/swipe use only.
   */
  function prevPage() {

    const perView =
      cardsPerView();

    const pages =
      numPages(perView);

    const targetIndex =
      (pageIndex - 1 + pages) % pages;

    goToPage(targetIndex, true);

  }


  /* -------------------------------------------------------
     Autoplay
     ------------------------------------------------------- */

  function startAutoplay() {

    stopAutoplay();

    const interval =
      isMobile() ? 3000 : 3500;

    autoplayId =
      setInterval(nextPage, interval);

  }


  function stopAutoplay() {

    if (autoplayId !== null) {

      clearInterval(autoplayId);

      autoplayId = null;

    }

  }


  /* -------------------------------------------------------
     Dot navigation (mobile only — hidden via CSS elsewhere)
     ------------------------------------------------------- */

  dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

      goToPage(index, true);

      startAutoplay();

    });

  });


  /* -------------------------------------------------------
     Pause on hover / focus — all breakpoints
     ------------------------------------------------------- */

  if (slider) {

    slider.addEventListener("mouseenter", stopAutoplay);

    slider.addEventListener("mouseleave", startAutoplay);

    slider.addEventListener("focusin", stopAutoplay);

    slider.addEventListener("focusout", startAutoplay);

  }


  /* =======================================================
     TOUCH / SWIPE — all breakpoints
     ======================================================= */

  track.addEventListener(
    "touchstart",
    function (event) {

      stopAutoplay();

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  track.addEventListener(
    "touchend",
    function (event) {

      touchEndX =
        event.changedTouches[0].screenX;

      const swipeDistance =
        touchStartX - touchEndX;

      const minimumSwipe = 50;


      if (swipeDistance > minimumSwipe) {

        nextPage();

      }
      else if (swipeDistance < -minimumSwipe) {

        prevPage();

      }


      startAutoplay();

    },
    { passive: true }
  );


  /* =======================================================
     RESPONSIVE RESET
     ---------------------------------------------------------
     A breakpoint change alters cards-per-view, so realign to
     a clean page 0 rather than trying to preserve a page
     index that may no longer make sense.
     ======================================================= */

  window.addEventListener(
    "resize",
    function () {

      stopAutoplay();

      goToPage(0, false);

      startAutoplay();

    }
  );


  /* =======================================================
     INITIAL STATE
     ======================================================= */

  goToPage(0, false);

  startAutoplay();

}