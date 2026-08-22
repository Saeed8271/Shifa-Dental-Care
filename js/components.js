/* =========================================================
   COMPONENTS.JS
   Shared UI components:
   - Header / Navbar
   - Footer
   - Mobile action bar
   - Appointment modal
   - Treatment modal
   - Treatment SVG icon rendering

   Uses:
   - data/clinic.js
   - data/services.js
   ========================================================= */


/* =========================================================
   SITE PATH HELPER
   ========================================================= */

function sitePrefix() {
  return window.location.pathname.includes("/treatments/")
    ? "../"
    : "";
}


/* =========================================================
   LOGO FALLBACK
   ========================================================= */

function createTextLogoFallback() {
  const span = document.createElement("span");

  span.className = "brand-mark";
  span.setAttribute("aria-hidden", "true");

  span.innerHTML = `
    <i class="bi bi-heart-pulse-fill"></i>
  `;

  return span;
}


/* =========================================================
   HEADER / NAVBAR
   ========================================================= */

function renderHeader() {
  const headerEl = document.getElementById("site-header");

  if (!headerEl) return;

  const base = sitePrefix();

  headerEl.innerHTML = `
    <nav class="navbar navbar-expand-lg site-navbar sticky-top">

      <div class="container site-container">

        <!-- Brand -->
        <a class="navbar-brand" href="${base}index.html">

          <span class="brand-logo">
            <img
              src="${base}images/logo/shifa-dental-care-logo.png"
              alt="Shifa Dental Care logo"
              class="brand-logo-img"
              onerror="this.replaceWith(createTextLogoFallback())"
            >
          </span>

          <span class="brand-text">
            Shifa Dental Care
            <small>${clinic.tagline}</small>
          </span>

        </a>


        <!-- Mobile Toggle -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>


        <!-- Navigation -->
        <div class="collapse navbar-collapse" id="mainNav">

          <ul class="navbar-nav mx-lg-auto gap-lg-2">

            <li class="nav-item">
              <a class="nav-link" href="${base}index.html">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${base}about.html">
                About
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${base}treatments.html">
                Treatments
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${base}gallery.html">
                Gallery
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${base}reviews.html">
                Reviews
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${base}contact.html">
                Contact
              </a>
            </li>

          </ul>


          <!-- Right Actions -->
          <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0">

            <button
              type="button"
              class="btn btn-clinic-primary btn-sm-full"
              data-bs-toggle="modal"
              data-bs-target="#appointmentModal"
            >
              Book Appointment
            </button>

          </div>

        </div>

      </div>

    </nav>
  `;
}


/* =========================================================
   FOOTER
   ========================================================= */

function renderFooter() {
  const footerEl = document.getElementById("site-footer");

  if (!footerEl) return;

  const c = clinic;
  const year = new Date().getFullYear();
  const base = sitePrefix();


  /* =======================================================
     GOOGLE PROFILE URL
     ======================================================= */

  const googleProfileUrl =
    c.google && c.google.profileUrl
      ? c.google.profileUrl
      : "#";


  footerEl.innerHTML = `
    <div class="site-footer">

      <div class="container site-container">

        <div class="footer-main">


          <!-- =================================================
               CLINIC INFORMATION
               ================================================= -->

          <div class="footer-column footer-column--brand">

            <a
              href="${base}index.html"
              class="footer-brand-link"
              aria-label="${c.name} - Home"
            >

              <span class="footer-logo">

                <img
                  src="${base}images/logo/shifa-dental-care-logo.png"
                  alt="${c.name} logo"
                  class="footer-logo-img"
                  onerror="this.style.display='none'"
                >

              </span>

              <span class="footer-brand">
                ${c.name}
              </span>

            </a>


            <!--
              Hidden on mobile.
              Visible on tablet and desktop.
            -->
            <p class="footer-tagline footer-mobile-hide">
              ${c.tagline}
            </p>


            <!--
              Hidden on mobile.
              Visible on tablet and desktop.
            -->
            <p class="footer-description footer-mobile-hide">
              Gentle, modern dental care focused on
              your comfort, health, and well-being.
            </p>


            <!--
              Full address hidden on mobile.
              The shorter location remains available
              inside Contact Us.
            -->
            <div class="footer-address-block footer-mobile-hide">

              <i class="bi bi-geo-alt-fill"></i>

              <span>
                ${c.address.line1}, ${c.address.line2}<br>
                ${c.address.area}, ${c.address.city},
                ${c.address.state} - ${c.address.pincode}
              </span>

            </div>

          </div>


          <!-- =================================================
               QUICK LINKS
               ================================================= -->

          <div class="footer-column footer-column--links">

            <h3 class="footer-heading">
              Quick Links
            </h3>


            <ul class="footer-links list-unstyled">

              <li>
                <a href="${base}index.html">
                  Home
                </a>
              </li>

              <li>
                <a href="${base}about.html">
                  About
                </a>
              </li>

              <li>
                <a href="${base}treatments.html">
                  Treatments
                </a>
              </li>

              <li>
                <a href="${base}gallery.html">
                  Gallery
                </a>
              </li>

              <li>
                <a href="${base}reviews.html">
                  Reviews
                </a>
              </li>

              <li>
                <a href="${base}contact.html">
                  Contact
                </a>
              </li>

            </ul>

          </div>


          <!-- =================================================
               CONTACT
               ================================================= -->

          <div class="footer-column footer-column--contact">

            <h3 class="footer-heading">
              Contact Us
            </h3>


            <ul class="footer-contact-list list-unstyled">

              <!-- Phone -->
              <li>

                <span class="footer-contact-icon">
                  <i class="bi bi-telephone-fill"></i>
                </span>

                <a href="tel:${c.contact.phone}">
                  ${c.contact.phone}
                </a>

              </li>


              <!-- Email -->
              <li>

                <span class="footer-contact-icon">
                  <i class="bi bi-envelope-fill"></i>
                </span>

                <a href="mailto:${c.contact.email}">
                  ${c.contact.email}
                </a>

              </li>


              <!-- Location -->
              <li>

                <span class="footer-contact-icon">
                  <i class="bi bi-geo-alt-fill"></i>
                </span>

                <span>
                  ${c.address.area}, ${c.address.city}
                </span>

              </li>


              <!-- View on Google -->
              <li>

                <span class="footer-contact-icon">
                  <i class="bi bi-google"></i>
                </span>

                ${
                  googleProfileUrl !== "#"
                    ? `
                      <a
                        href="${googleProfileUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Google
                      </a>
                    `
                    : `
                      <span>
                        View on Google
                      </span>
                    `
                }

              </li>

            </ul>


            <!-- =================================================
                 SOCIAL MEDIA
                 ================================================= -->

            <h3 class="footer-heading footer-heading--social">
              Follow Us
            </h3>


            <div class="footer-social">

              ${buildFooterSocialLink(
                "instagram",
                c.social.instagram,
                "bi-instagram"
              )}


              ${buildFooterSocialLink(
                "facebook",
                c.social.facebook,
                "bi-facebook"
              )}


              ${buildFooterSocialLink(
                "youtube",
                c.social.youtube,
                "bi-youtube"
              )}


              ${buildFooterSocialLink(
                "whatsapp",
                `https://wa.me/91${c.contact.whatsapp}`,
                "bi-whatsapp"
              )}

            </div>

          </div>

        </div>

      </div>


      <!-- =====================================================
           FOOTER BOTTOM
           ===================================================== -->

      <div class="footer-bottom">

        <div class="container site-container">

          <div class="footer-bottom-inner">

            <p class="footer-copyright">
              &copy; ${year} ${c.name}.
              All rights reserved.
            </p>


            <p class="footer-developer">

              Designed &amp; Developed by

              <a
                href="https://github.com/Saeed8271"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saeed Anwar
              </a>

            </p>

          </div>

        </div>

      </div>

    </div>
  `;
}


/* =========================================================
   FOOTER SOCIAL LINK
   ========================================================= */

function buildFooterSocialLink(platform, url, iconClass) {

  const isReal =
    url &&
    url !== "#" &&
    url !== "To be confirmed";


  const label =
    platform.charAt(0).toUpperCase() +
    platform.slice(1);


  if (isReal) {

    return `
      <a
        href="${url}"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-social-link"
        aria-label="${label}"
        title="${label}"
      >
        <i class="bi ${iconClass}"></i>
      </a>
    `;

  }


  return `
    <span
      class="footer-social-link footer-social-link--pending"
      role="img"
      aria-label="${label} link coming soon"
      title="${label} link coming soon"
    >
      <i class="bi ${iconClass}"></i>
    </span>
  `;
}


/* =========================================================
   MOBILE ACTION BAR
   ========================================================= */

function renderMobileActionBar() {

  if (document.querySelector(".mobile-action-bar")) {
    return;
  }


  const phone = clinic.contact.phone;
  const whatsapp = clinic.contact.whatsapp;


  const waHref =
    `https://wa.me/91${whatsapp}?text=` +
    encodeURIComponent(
      "Hello Shifa Dental Care, I would like to book an appointment."
    );


  const bar = document.createElement("div");

  bar.className = "mobile-action-bar";


  bar.innerHTML = `

    <a
      href="tel:${phone}"
      class="mobile-action-item"
    >
      <i class="bi bi-telephone-fill"></i>
      <span>Call</span>
    </a>


    <a
      href="${waHref}"
      target="_blank"
      rel="noopener noreferrer"
      class="mobile-action-item mobile-action-item--whatsapp"
    >
      <i class="bi bi-whatsapp"></i>
      <span>WhatsApp</span>
    </a>


    <button
      type="button"
      class="mobile-action-item mobile-action-item--book"
      data-bs-toggle="modal"
      data-bs-target="#appointmentModal"
    >
      <i class="bi bi-calendar-check-fill"></i>
      <span>Book</span>
    </button>

  `;


  document.body.appendChild(bar);
}


/* =========================================================
   APPOINTMENT MODAL
   ========================================================= */

function renderAppointmentModal() {

  if (document.getElementById("appointmentModal")) {
    return;
  }


  const phone = clinic.contact.phone;


  const modal = document.createElement("div");

  modal.className =
    "modal fade appointment-modal";

  modal.id = "appointmentModal";

  modal.tabIndex = -1;

  modal.setAttribute(
    "aria-labelledby",
    "appointmentModalLabel"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  modal.innerHTML = `

    <div class="modal-dialog modal-dialog-centered">

      <div class="modal-content">


        <div class="modal-header">

          <h2
            class="modal-title"
            id="appointmentModalLabel"
          >
            Book Appointment
          </h2>


          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

        </div>


        <div class="modal-body">

          <p class="modal-intro">
            Choose how you would like to contact
            Shifa Dental Care:
          </p>


          <div class="d-grid gap-3">


            <!-- Call -->
            <a
              href="tel:${phone}"
              class="btn btn-clinic-secondary btn-lg appointment-option"
            >
              <i class="bi bi-telephone-fill"></i>
              Call the Clinic
            </a>


            <!-- WhatsApp -->
            <a
              id="appointmentModalWaLink"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-clinic-secondary btn-lg appointment-option"
            >
              <i class="bi bi-whatsapp"></i>
              WhatsApp
            </a>


            <!-- Website -->
            <button
              type="button"
              class="btn btn-clinic-primary btn-lg appointment-option"
              onclick="handleBookThroughWebsite()"
            >
              <i class="bi bi-globe"></i>
              Book Through Website
            </button>

          </div>

        </div>

      </div>

    </div>

  `;


  document.body.appendChild(modal);


  modal.addEventListener(
    "show.bs.modal",
    function () {

      const treatment =
        typeof selectedTreatmentName !== "undefined"
          ? selectedTreatmentName
          : "";


      const text = treatment
        ? `Hello Shifa Dental Care, I would like to know more about ${treatment} and book an appointment.`
        : "Hello Shifa Dental Care, I would like to book an appointment.";


      const waLink =
        document.getElementById(
          "appointmentModalWaLink"
        );


      if (waLink) {

        waLink.href =
          `https://wa.me/91${clinic.contact.whatsapp}` +
          `?text=${encodeURIComponent(text)}`;

      }

    }
  );
}


/* =========================================================
   TREATMENT ICON HELPER
   ========================================================= */

function getTreatmentIconMarkup(icon) {

  if (!icon) {

    return `
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="9"></circle>
      </svg>
    `;

  }


  /* Inline SVG */
  if (
    typeof icon === "string" &&
    icon.trim().startsWith("<svg")
  ) {

    return icon;

  }


  /* SVG file path */
  if (
    typeof icon === "string" &&
    icon.trim().toLowerCase().endsWith(".svg")
  ) {

    return `
      <img
        src="${icon}"
        alt=""
        aria-hidden="true"
        class="service-icon-img"
      >
    `;

  }


  /* Bootstrap Icons */
  if (
    typeof icon === "string" &&
    icon.trim().startsWith("bi-")
  ) {

    return `
      <i
        class="bi ${icon}"
        aria-hidden="true"
      ></i>
    `;

  }


  return "";
}


/* =========================================================
   TREATMENT MODAL
   ========================================================= */

function renderTreatmentModal() {

  if (document.getElementById("treatmentModal")) {
    return;
  }


  const phone = clinic.contact.phone;


  const modal = document.createElement("div");

  modal.className =
    "modal fade treatment-modal";

  modal.id = "treatmentModal";

  modal.tabIndex = -1;

  modal.setAttribute(
    "aria-labelledby",
    "treatmentModalLabel"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  modal.innerHTML = `

    <div class="modal-dialog modal-dialog-centered">

      <div class="modal-content">


        <!-- Modal Header -->
        <div class="modal-header">

          <h2
            class="modal-title"
            id="treatmentModalLabel"
          >

            <span
              class="treatment-modal-icon"
              id="treatmentModalIcon"
            ></span>

            <span id="treatmentModalName">
              Treatment
            </span>

          </h2>


          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

        </div>


        <!-- Modal Body -->
        <div class="modal-body">

          <p
            id="treatmentModalDesc"
            class="modal-intro"
          ></p>


          <div class="d-grid gap-3">


            <!-- Book Appointment -->
            <button
              type="button"
              id="treatmentModalBookBtn"
              class="btn btn-clinic-primary btn-lg appointment-option"
            >
              <i class="bi bi-calendar-check-fill"></i>
              Book Appointment
            </button>


            <!-- Call the Clinic -->
            <a
              id="treatmentModalCallLink"
              href="tel:${phone}"
              class="btn btn-clinic-secondary btn-lg appointment-option"
            >
              <i class="bi bi-telephone-fill"></i>
              Call the Clinic
            </a>


            <!-- WhatsApp -->
            <a
              id="treatmentModalWaLink"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-clinic-secondary btn-lg appointment-option"
            >
              <i class="bi bi-whatsapp"></i>
              WhatsApp
            </a>


          </div>

        </div>

      </div>

    </div>

  `;


  document.body.appendChild(modal);


  /* =======================================================
     POPULATE MODAL
     ======================================================= */

  modal.addEventListener(
    "show.bs.modal",
    function (event) {

      const trigger =
        event.relatedTarget;


      const slug =
        trigger
          ? trigger.dataset.treatmentSlug
          : null;


      const service =
        (
          typeof services !== "undefined"
            ? services
            : []
        ).find(
          (s) => s.slug === slug
        );


      if (!service) {
        return;
      }


      /* ---------------------------------------------------
         Treatment Icon
         --------------------------------------------------- */

      const iconContainer =
        document.getElementById(
          "treatmentModalIcon"
        );


      if (iconContainer) {

        iconContainer.innerHTML =
          getTreatmentIconMarkup(
            service.icon
          );

      }


      /* ---------------------------------------------------
         Treatment Name
         --------------------------------------------------- */

      const nameEl =
        document.getElementById(
          "treatmentModalName"
        );


      if (nameEl) {

        nameEl.textContent =
          service.name;

      }


      /* ---------------------------------------------------
         Treatment Description
         --------------------------------------------------- */

      const descEl =
        document.getElementById(
          "treatmentModalDesc"
        );


      if (descEl) {

        descEl.textContent =
          service.description ||
          service.shortDescription ||
          "";

      }


      /* ---------------------------------------------------
         Call Link
         --------------------------------------------------- */

      const callLink =
        document.getElementById(
          "treatmentModalCallLink"
        );


      if (callLink) {

        callLink.href =
          `tel:${clinic.contact.phone}`;

      }


      /* ---------------------------------------------------
         WhatsApp Link
         --------------------------------------------------- */

      const waText =
        encodeURIComponent(
          `Hello Shifa Dental Care, I would like to know more about ${service.name} and book an appointment.`
        );


      const waLink =
        document.getElementById(
          "treatmentModalWaLink"
        );


      if (waLink) {

        waLink.href =
          `https://wa.me/91${clinic.contact.whatsapp}` +
          `?text=${waText}`;

      }


      /* ---------------------------------------------------
         Appointment Button
         --------------------------------------------------- */

      const bookBtn =
        document.getElementById(
          "treatmentModalBookBtn"
        );


      if (bookBtn) {

        bookBtn.onclick =
          function () {

            if (
              typeof startAppointmentFlow ===
              "function"
            ) {

              startAppointmentFlow(
                service.name
              );

            }

          };

      }

    }
  );
}


/* =========================================================
   TREATMENT CARD ICON RENDERING
   ========================================================= */

function renderTreatmentCardIcon(service) {

  if (!service) {
    return "";
  }


  return `
    <span
      class="service-card-icon"
      aria-hidden="true"
    >
      ${getTreatmentIconMarkup(service.icon)}
    </span>
  `;
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

/*
   Components are initialized from main.js.

   This file only defines the shared component functions.
*/