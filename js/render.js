/* =========================================================
   RENDER.JS
   Data-driven rendering functions shared across pages. Each
   function reads from the global data objects (services,
   reviews, faq, clinic — all loaded before this file) and
   injects markup into a container element.

   Keeping this logic here (rather than repeating HTML in every
   page) is what makes the project reusable for a future dental
   clinic: swap the data files, keep this file as-is.
   ========================================================= */


/* =========================================================
   SERVICE / TREATMENT CARDS
   ========================================================= */

/**
 * Builds a single service/treatment card. Reused by both the
 * homepage preview and the full treatments.html grid.
 *
 * Clicking a card opens the reusable Treatment Modal
 * instead of linking to a separate treatment page.
 */
function buildServiceCard(service) {

  return `
    <button
      type="button"
      class="service-card"
      data-bs-toggle="modal"
      data-bs-target="#treatmentModal"
      data-treatment-slug="${service.slug}"
    >

      <span class="service-card-icon">
        ${getTreatmentIconMarkup(service.icon)}
      </span>

      <h3 class="service-card-title">
        ${service.name}
      </h3>

      <p class="service-card-desc">
        ${service.shortDescription}
      </p>

      <span class="service-card-more">
        View Details
        <i class="bi bi-arrow-right"></i>
      </span>

    </button>
  `;
}


/**
 * Renders a limited preview of services on the homepage.
 */
function renderTreatmentsPreview(containerId, limit) {

  const el = document.getElementById(containerId);

  if (!el || typeof services === "undefined") {
    return;
  }

  const items =
    services.slice(0, limit || services.length);

  el.innerHTML =
    items.map(buildServiceCard).join("");
}


/**
 * Renders the complete set of services on treatments.html.
 */
function renderTreatmentsGrid(containerId) {

  const el = document.getElementById(containerId);

  if (!el || typeof services === "undefined") {
    return;
  }

  el.innerHTML =
    services.map(buildServiceCard).join("");
}


/* =========================================================
   GALLERY
   ========================================================= */

/**
 * Renders the clinic photo grid with a click-to-enlarge
 * Bootstrap lightbox.
 *
 * Used on:
 * - Homepage gallery preview
 * - Full gallery.html
 */
function renderGallery(containerId, limit) {

  const el = document.getElementById(containerId);

  if (
    !el ||
    typeof clinic === "undefined" ||
    !clinic.gallery
  ) {
    return;
  }

  const items =
    clinic.gallery.slice(
      0,
      limit || clinic.gallery.length
    );


  el.innerHTML = items.map((photo, index) => `

    <button
      type="button"
      class="gallery-item"
      data-gallery-index="${index}"
      aria-label="View larger image: ${photo.alt}"
    >

      <img
        src="${photo.src}"
        alt="${photo.alt}"
        loading="lazy"
      >

    </button>

  `).join("");


  el.querySelectorAll(".gallery-item")
    .forEach((btn) => {

      btn.addEventListener("click", () => {

        openGalleryLightbox(
          items,
          Number(btn.dataset.galleryIndex)
        );

      });

    });
}


/**
 * Opens the Bootstrap gallery lightbox.
 *
 * The modal is created once and then reused for
 * every gallery image.
 */
function openGalleryLightbox(items, startIndex) {

  let modalEl =
    document.getElementById("galleryLightbox");


  if (!modalEl) {

    modalEl =
      document.createElement("div");

    modalEl.className =
      "modal fade gallery-lightbox";

    modalEl.id =
      "galleryLightbox";

    modalEl.tabIndex = -1;


    modalEl.innerHTML = `

      <div class="modal-dialog modal-dialog-centered modal-lg">

        <div class="modal-content">

          <button
            type="button"
            class="btn-close gallery-lightbox-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

          <div class="modal-body p-0">

            <img
              id="galleryLightboxImage"
              src=""
              alt=""
            >

          </div>

        </div>

      </div>

    `;


    document.body.appendChild(modalEl);

  }


  const imgEl =
    document.getElementById(
      "galleryLightboxImage"
    );

  const photo =
    items[startIndex];


  if (!photo) {
    return;
  }


  imgEl.src =
    photo.src;

  imgEl.alt =
    photo.alt;


  if (
    typeof bootstrap !== "undefined"
  ) {

    bootstrap.Modal
      .getOrCreateInstance(modalEl)
      .show();

  }

}


/* =========================================================
   REVIEWS
   ========================================================= */

/*
   IMPORTANT
   ----------
   Review rendering has been moved to data/reviews.js.

   reviews.js now contains:

   - renderReviews()
   - initReviewsSlider()

   This keeps all review-specific slider behavior together,
   while render.js handles the other shared rendering
   functions.

   DO NOT add another renderReviews() function here.
*/


/* =========================================================
   FAQ ACCORDION
   ========================================================= */

/**
 * Renders the FAQ accordion.
 *
 * Used on contact.html.
 */
function renderFaqAccordion(containerId) {

  const el =
    document.getElementById(containerId);


  if (
    !el ||
    typeof faq === "undefined"
  ) {
    return;
  }


  el.innerHTML = faq.map((item, index) => `

    <div class="accordion-item">

      <h3
        class="accordion-header"
        id="faqHeading${index}"
      >

        <button
          class="accordion-button ${index === 0 ? "" : "collapsed"}"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqCollapse${index}"
          aria-expanded="${index === 0 ? "true" : "false"}"
          aria-controls="faqCollapse${index}"
        >

          ${item.question}

        </button>

      </h3>


      <div
        id="faqCollapse${index}"
        class="accordion-collapse collapse ${index === 0 ? "show" : ""}"
        aria-labelledby="faqHeading${index}"
        data-bs-parent="#${containerId}"
      >

        <div class="accordion-body">

          ${item.answer}

        </div>

      </div>

    </div>

  `).join("");

}