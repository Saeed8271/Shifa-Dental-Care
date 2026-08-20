/* =========================================================
   MAIN.JS
   =========================================================

   Entry point for site-wide JavaScript.

   Global behavior:
   - Header and footer
   - Mobile action bar
   - Appointment modal
   - Treatment modal
   - Google Business Profile links

   Page-specific behavior:
   - Homepage hero slider
   - About page image slider
   - About page philosophy card slider

   Responsive behavior:
   - Philosophy card slider runs ONLY on mobile
   - Desktop and tablet philosophy cards remain normal grids

   Philosophy slider architecture:

     .philosophy-slider
       └── .about-philosophy-grid
             ├── .about-philosophy-card
             ├── .about-philosophy-card
             └── .about-philosophy-card

   IMPORTANT:
   - .philosophy-slider is the fixed viewport.
   - .about-philosophy-grid is the moving track.
   - Only the track receives translateX().
   - The viewport itself NEVER moves.

   ========================================================= */


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  initHeaderAndFooter();

  initSmoothScrolling();

  initNavbarScrollState();

  initGoogleProfileLinks();

  initHeroSlider();

  initAboutSlider();

  initPhilosophySlider();

});


/* =========================================================
   GOOGLE BUSINESS PROFILE
   ========================================================= */

/**
 * Points every "View on Google" style link
 * to the clinic's Google Business Profile URL.
 *
 * The URL comes from data/clinic.js.
 */
function initGoogleProfileLinks() {

  if (
    typeof clinic === "undefined" ||
    !clinic.google ||
    !clinic.google.profileUrl
  ) {
    return;
  }

  document
    .querySelectorAll(".google-profile-link")
    .forEach((link) => {

      link.href = clinic.google.profileUrl;

    });

}


/* =========================================================
   SHARED COMPONENTS
   ========================================================= */

/**
 * Renders shared site components:
 *
 * - Header
 * - Footer
 * - Mobile action bar
 * - Appointment modal
 * - Treatment modal
 */
function initHeaderAndFooter() {

  if (typeof renderHeader === "function") {
    renderHeader();
  }

  if (typeof renderFooter === "function") {
    renderFooter();
  }

  if (typeof renderMobileActionBar === "function") {
    renderMobileActionBar();
  }

  if (typeof renderAppointmentModal === "function") {
    renderAppointmentModal();
  }

  if (typeof renderTreatmentModal === "function") {
    renderTreatmentModal();
  }

}


/* =========================================================
   SMOOTH SCROLLING
   ========================================================= */

/**
 * Smooth scrolling for in-page anchor links.
 *
 * Full behavior can be expanded later.
 */
function initSmoothScrolling() {

  // To be implemented in a later phase.

}


/* =========================================================
   NAVBAR SCROLL STATE
   ========================================================= */

/**
 * Adds a "scrolled" class to the navbar after
 * the page has been scrolled.
 *
 * Full behavior can be implemented later.
 */
function initNavbarScrollState() {

  // To be implemented in a later phase.

}


/* =========================================================
   HERO SLIDER
   ========================================================= */

/**
 * Initializes the homepage hero image slider.
 *
 * Behavior:
 *
 * - Automatically changes slides every 2.5 seconds.
 * - Supports clickable navigation dots.
 * - Restarts the timer after manual navigation.
 * - Works with desktop and mobile <picture> images.
 * - Does nothing if the slider does not exist.
 */
function initHeroSlider() {

  const slider =
    document.querySelector(".hero-slider");


  /* -------------------------------------------------------
     Exit if this page does not contain the hero slider.
     ------------------------------------------------------- */

  if (!slider) {
    return;
  }


  const slides =
    slider.querySelectorAll(".hero-slide");


  const dots =
    slider.querySelectorAll(
      ".hero-slider-dots button"
    );


  /* -------------------------------------------------------
     No need to initialize a slider with zero
     or one slide.
     ------------------------------------------------------- */

  if (slides.length <= 1) {
    return;
  }


  let currentIndex = 0;

  let intervalId = null;


  /* -------------------------------------------------------
     DISPLAY SLIDE
     ------------------------------------------------------- */

  function showSlide(index) {

    slides.forEach((slide, slideIndex) => {

      slide.classList.toggle(
        "active",
        slideIndex === index
      );

    });


    dots.forEach((dot, dotIndex) => {

      const isActive =
        dotIndex === index;


      dot.classList.toggle(
        "active",
        isActive
      );


      if (isActive) {

        dot.setAttribute(
          "aria-current",
          "true"
        );

      } else {

        dot.removeAttribute(
          "aria-current"
        );

      }

    });


    currentIndex = index;

  }


  /* -------------------------------------------------------
     NEXT SLIDE
     ------------------------------------------------------- */

  function nextSlide() {

    const nextIndex =
      (currentIndex + 1) % slides.length;


    showSlide(nextIndex);

  }


  /* -------------------------------------------------------
     STOP SLIDER
     ------------------------------------------------------- */

  function stopSlider() {

    if (intervalId !== null) {

      clearInterval(intervalId);

      intervalId = null;

    }

  }


  /* -------------------------------------------------------
     START SLIDER
     ------------------------------------------------------- */

  function startSlider() {

    stopSlider();

    intervalId = setInterval(
      nextSlide,
      2500
    );

  }


  /* -------------------------------------------------------
     NAVIGATION DOTS
     ------------------------------------------------------- */

  dots.forEach((dot, index) => {

    dot.addEventListener(
      "click",
      function () {

        showSlide(index);

        startSlider();

      }
    );

  });


  /* -------------------------------------------------------
     INITIAL STATE
     ------------------------------------------------------- */

  showSlide(0);

  startSlider();

}


/* =========================================================
   ABOUT SECTION IMAGE SLIDER
   ========================================================= */

/**
 * Initializes the About page image slider.
 *
 * Behavior:
 *
 * - Automatically changes slides every 2 seconds.
 * - Supports clickable navigation dots.
 * - Restarts the timer after manual navigation.
 * - Does nothing if the About slider does not exist.
 */
function initAboutSlider() {

  const slider =
    document.querySelector(".about-slider");


  /* -------------------------------------------------------
     Exit if this page does not contain the slider.
     ------------------------------------------------------- */

  if (!slider) {
    return;
  }


  const slides =
    slider.querySelectorAll(".about-slide");


  const dots =
    slider.querySelectorAll(
      ".about-slider-dots button"
    );


  /* -------------------------------------------------------
     No need to initialize if there are zero
     or one slides.
     ------------------------------------------------------- */

  if (slides.length <= 1) {
    return;
  }


  let currentIndex = 0;

  let intervalId = null;


  /* -------------------------------------------------------
     DISPLAY SLIDE
     ------------------------------------------------------- */

  function showSlide(index) {

    slides.forEach((slide, slideIndex) => {

      slide.classList.toggle(
        "active",
        slideIndex === index
      );

    });


    dots.forEach((dot, dotIndex) => {

      const isActive =
        dotIndex === index;


      dot.classList.toggle(
        "active",
        isActive
      );


      if (isActive) {

        dot.setAttribute(
          "aria-current",
          "true"
        );

      } else {

        dot.removeAttribute(
          "aria-current"
        );

      }

    });


    currentIndex = index;

  }


  /* -------------------------------------------------------
     NEXT SLIDE
     ------------------------------------------------------- */

  function nextSlide() {

    const nextIndex =
      (currentIndex + 1) % slides.length;


    showSlide(nextIndex);

  }


  /* -------------------------------------------------------
     STOP SLIDER
     ------------------------------------------------------- */

  function stopSlider() {

    if (intervalId !== null) {

      clearInterval(intervalId);

      intervalId = null;

    }

  }


  /* -------------------------------------------------------
     START SLIDER
     ------------------------------------------------------- */

  function startSlider() {

    stopSlider();

    intervalId = setInterval(
      nextSlide,
      2000
    );

  }


  /* -------------------------------------------------------
     NAVIGATION DOTS
     ------------------------------------------------------- */

  dots.forEach((dot, index) => {

    dot.addEventListener(
      "click",
      function () {

        showSlide(index);

        startSlider();

      }
    );

  });


  /* -------------------------------------------------------
     INITIAL STATE
     ------------------------------------------------------- */

  showSlide(0);

  startSlider();

}


/* =========================================================
   ABOUT PAGE — PHILOSOPHY CARD SLIDER
   =========================================================

   Desktop:
   - 3-column grid.

   Tablet:
   - 2-column grid.

   Mobile:
   - One card visible at a time.
   - Cards slide from right to left.
   - Automatic movement every 3 seconds.
   - Loops continuously.

   IMPORTANT STRUCTURE:

     .philosophy-slider
       └── .about-philosophy-grid
             ├── card 1
             ├── card 2
             └── card 3

   .philosophy-slider:
     - remains fixed
     - clips overflow
     - NEVER gets translated

   .about-philosophy-grid:
     - acts as the track
     - receives translateX()
     - contains all cards

   MOBILE FIX:
   - The track is translated using the actual
     viewport width in pixels.
   - This avoids percentage-transform issues
     caused by the track being wider than the viewport.

   ========================================================= */

function initPhilosophySlider() {

  /* -------------------------------------------------------
     Find the philosophy grid.
     ------------------------------------------------------- */

  const philosophyGrid =
    document.querySelector(
      ".about-philosophy-grid"
    );


  /* -------------------------------------------------------
     Exit if the About page does not contain
     the philosophy cards.
     ------------------------------------------------------- */

  if (!philosophyGrid) {
    return;
  }


  /* -------------------------------------------------------
     Get all philosophy cards.
     ------------------------------------------------------- */

  const cards =
    philosophyGrid.querySelectorAll(
      ".about-philosophy-card"
    );


  /* -------------------------------------------------------
     A slider requires at least two cards.
     ------------------------------------------------------- */

  if (cards.length <= 1) {
    return;
  }


  /* -------------------------------------------------------
     Prevent duplicate initialization.
     ------------------------------------------------------- */

  if (
    philosophyGrid.dataset.sliderInitialized === "true"
  ) {
    return;
  }


  philosophyGrid.dataset.sliderInitialized =
    "true";


  /* =======================================================
     CREATE VIEWPORT
     ======================================================= */

  const sliderWrapper =
    document.createElement("div");


  sliderWrapper.className =
    "philosophy-slider";


  /* -------------------------------------------------------
     Insert viewport before original grid.
     ------------------------------------------------------- */

  philosophyGrid.parentNode.insertBefore(
    sliderWrapper,
    philosophyGrid
  );


  /* -------------------------------------------------------
     Move grid inside viewport.
     ------------------------------------------------------- */

  sliderWrapper.appendChild(
    philosophyGrid
  );


  /* -------------------------------------------------------
     Mark grid as moving track.
     ------------------------------------------------------- */

  philosophyGrid.classList.add(
    "philosophy-slider-track"
  );


  /* -------------------------------------------------------
     Tell the CSS exactly how many cards exist.

     The mobile track width and each card's width are
     defined in about.css as:

       track width  = calc(var(--philosophy-card-count) * 100%)
       card width   = calc(100% / var(--philosophy-card-count))

     Setting this here (instead of hardcoding the card
     count in CSS) keeps the math correct even if a card
     is added or removed later, and is what makes each
     card resolve to exactly one viewport-width instead of
     collapsing to its intrinsic content width.
     ------------------------------------------------------- */

  philosophyGrid.style.setProperty(
    "--philosophy-card-count",
    cards.length
  );


  /* =======================================================
     SLIDER STATE
     ======================================================= */

  let currentIndex = 0;

  let intervalId = null;


  /* =======================================================
     MOBILE MEDIA QUERY
     ======================================================= */

  const mobileQuery =
    window.matchMedia(
      "(max-width: 575.98px)"
    );


  /* =======================================================
     REDUCED MOTION MEDIA QUERY
     ======================================================= */

  const reducedMotionQuery =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );


  /* =======================================================
     CHECK MOBILE
     ======================================================= */

  function isMobile() {

    return mobileQuery.matches;

  }


  /* =======================================================
     GET VIEWPORT WIDTH
     ======================================================= */

  function getViewportWidth() {

    return sliderWrapper.getBoundingClientRect().width;

  }


  /* =======================================================
     RESET TRACK
     ======================================================= */

  function resetTrack() {

    philosophyGrid.style.transform = "";

    currentIndex = 0;

  }


  /* =======================================================
     MOVE TRACK
     ======================================================= */

  function moveTrack() {

    /* -----------------------------------------------------
       Never transform the track on tablet/desktop.
       CSS handles the normal grid layout there.
       ----------------------------------------------------- */

    if (!isMobile()) {

      resetTrack();

      return;

    }


    /* -----------------------------------------------------
       Get the actual visible viewport width.
       ----------------------------------------------------- */

    const viewportWidth =
      getViewportWidth();


    /* -----------------------------------------------------
       Prevent invalid transform before layout
       has been calculated.
       ----------------------------------------------------- */

    if (viewportWidth <= 0) {
      return;
    }


    /* -----------------------------------------------------
       Calculate exact pixel offset.

       Card 1:
         0px

       Card 2:
         -viewport width

       Card 3:
         -2 × viewport width

       Card 4:
         -3 × viewport width
       ----------------------------------------------------- */

    const offset =
      currentIndex * viewportWidth;


    philosophyGrid.style.transform =
      `translate3d(-${offset}px, 0, 0)`;

  }


  /* =======================================================
     SHOW CARD
     ======================================================= */

  function showCard(index) {

    if (!isMobile()) {
      return;
    }


    /* -----------------------------------------------------
       Keep index inside valid range.
       ----------------------------------------------------- */

    currentIndex =
      index % cards.length;


    if (currentIndex < 0) {

      currentIndex =
        cards.length - 1;

    }


    moveTrack();

  }


  /* =======================================================
     NEXT CARD
     ======================================================= */

  function nextCard() {

    if (!isMobile()) {
      return;
    }


    const nextIndex =
      (currentIndex + 1) % cards.length;


    showCard(nextIndex);

  }


  /* =======================================================
     STOP AUTOMATIC SLIDER
     ======================================================= */

  function stopSlider() {

    if (intervalId !== null) {

      clearInterval(intervalId);

      intervalId = null;

    }

  }


  /* =======================================================
     START AUTOMATIC SLIDER
     ======================================================= */

  function startSlider() {

    /* -----------------------------------------------------
       Always stop the existing timer first.
       ----------------------------------------------------- */

    stopSlider();


    /* -----------------------------------------------------
       Do not run automatic slider when:
       - Not on mobile
       - Reduced motion is enabled
       ----------------------------------------------------- */

    if (
      !isMobile() ||
      reducedMotionQuery.matches
    ) {
      return;
    }


    /* -----------------------------------------------------
       Move to next card every 3 seconds.
       ----------------------------------------------------- */

    intervalId =
      setInterval(
        nextCard,
        3000
      );

  }


  /* =======================================================
     HANDLE RESPONSIVE CHANGE
     ======================================================= */

  function handleResponsiveChange() {

    /* -----------------------------------------------------
       Leaving mobile:
       stop timer and remove inline transform.
       ----------------------------------------------------- */

    if (!isMobile()) {

      stopSlider();

      resetTrack();

      return;

    }


    /* -----------------------------------------------------
       Entering mobile:
       start from the first card.
       ----------------------------------------------------- */

    currentIndex = 0;

    moveTrack();

    startSlider();

  }


  /* =======================================================
     INITIALIZE
     ======================================================= */

  currentIndex = 0;

  moveTrack();

  startSlider();


  /* =======================================================
     RESPONSIVE CHANGE LISTENER
     ======================================================= */

  if (
    typeof mobileQuery.addEventListener ===
    "function"
  ) {

    mobileQuery.addEventListener(
      "change",
      handleResponsiveChange
    );

  } else {

    /* -----------------------------------------------------
       Fallback for older browsers.
       ----------------------------------------------------- */

    mobileQuery.addListener(
      handleResponsiveChange
    );

  }


  /* =======================================================
     REDUCED MOTION CHANGE LISTENER
     ======================================================= */

  function handleReducedMotionChange() {

    if (
      reducedMotionQuery.matches
    ) {

      stopSlider();

    } else {

      startSlider();

    }

  }


  if (
    typeof reducedMotionQuery.addEventListener ===
    "function"
  ) {

    reducedMotionQuery.addEventListener(
      "change",
      handleReducedMotionChange
    );

  } else {

    /* -----------------------------------------------------
       Fallback for older browsers.
       ----------------------------------------------------- */

    reducedMotionQuery.addListener(
      handleReducedMotionChange
    );

  }


  /* =======================================================
     WINDOW RESIZE
     =======================================================

     Recalculate the exact position whenever
     the viewport size changes.

     Useful for:
     - Mobile browser viewport changes
     - Device orientation
     - Browser resizing
     ======================================================= */

  let resizeTimeout = null;


  function handleResize() {

    clearTimeout(resizeTimeout);


    resizeTimeout =
      setTimeout(
        function () {

          if (isMobile()) {

            moveTrack();

          } else {

            resetTrack();

          }

          startSlider();

        },
        150
      );

  }


  window.addEventListener(
    "resize",
    handleResize
  );

}


/* =========================================================
   END OF MAIN.JS
   ========================================================= */