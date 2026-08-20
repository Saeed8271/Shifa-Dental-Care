/* =========================================================
   APPOINTMENT.JS
   Logic tied to:
   - the appointment modal rendered by renderAppointmentModal()
     in components.js (Call / WhatsApp / Book Through Website)
   - the full appointment form on contact.html (#book)

   No backend exists. "Book Through Website" sends the patient
   to the full form on contact.html, and submitting that form
   opens WhatsApp with the details pre-filled — the clinic still
   receives the request as a normal WhatsApp message, and staff
   confirm the appointment as usual.
   ========================================================= */

/**
 * Tracks which treatment (if any) the patient was looking at
 * when they chose to book — set by startAppointmentFlow() and
 * read wherever the appointment flow needs that context (the
 * appointment modal's WhatsApp link, and the full form's
 * "Preferred Treatment" field on contact.html).
 */
let selectedTreatmentName = "";

/**
 * Resolves a relative link to contact.html#book. An optional
 * treatment name is passed as a query parameter so the full
 * appointment form can pre-select it (see initTreatmentPreselect
 * below). The query string must come before the #hash in a URL.
 */
function contactBookHref(treatmentName) {
  const base = `${sitePrefix()}contact.html`;
  const query = treatmentName ? `?treatment=${encodeURIComponent(treatmentName)}` : "";
  return `${base}${query}#book`;
}

/**
 * Called when the user clicks "Book Through Website" inside the
 * appointment modal. Sends them to the full appointment form,
 * carrying over any treatment they were already looking at.
 */
function handleBookThroughWebsite() {
  window.location.href = contactBookHref(selectedTreatmentName);
}

/**
 * Entry point used by the Treatment Modal's "Book Appointment"
 * button (see renderTreatmentModal() in components.js). Since the
 * patient already has Call/WhatsApp available directly in that
 * modal, "Book Appointment" here goes straight to the full
 * appointment form with the treatment pre-selected — this is the
 * "existing appointment system" the treatment modal connects to,
 * not a second one.
 */
function startAppointmentFlow(treatmentName) {
  selectedTreatmentName = treatmentName || "";
  window.location.href = contactBookHref(selectedTreatmentName);
}

/**
 * Opens the appointment modal programmatically (e.g. from a
 * future custom trigger that isn't a data-bs-toggle button).
 */
function openAppointmentModal() {
  const modalEl = document.getElementById("appointmentModal");
  if (!modalEl || typeof bootstrap === "undefined") return;
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

/**
 * Closes the appointment modal programmatically.
 */
function closeAppointmentModal() {
  const modalEl = document.getElementById("appointmentModal");
  if (!modalEl || typeof bootstrap === "undefined") return;
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
}

/**
 * Fills the "Preferred Treatment" <select> on the appointment
 * form from data/services.js, so the list stays in sync with the
 * treatments the clinic actually offers. The first option (kept
 * in the HTML) stays selected by default, keeping this field
 * genuinely optional.
 */
function populateTreatmentSelect(selectId) {
  const select = document.getElementById(selectId);
  if (!select || typeof services === "undefined") return;

  services.forEach((service) => {
    const option = document.createElement("option");
    option.value = service.name;
    option.textContent = service.name;
    select.appendChild(option);
  });
}

/**
 * Wires up the full appointment form. On submit:
 * 1. Runs native HTML5 + Bootstrap validation styling.
 * 2. Builds a readable message from the filled fields.
 * 3. Opens WhatsApp (wa.me) with that message pre-filled.
 * 4. Shows a success notice confirming what happened.
 *
 * No data is stored or sent anywhere except directly into the
 * WhatsApp message the patient sends themselves.
 */
function initAppointmentForm(formId, successId) {
  const form = document.getElementById(formId);
  const successEl = document.getElementById(successId);
  if (!form || typeof clinic === "undefined") return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const name = form.elements["name"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const date = form.elements["date"].value;
    const time = form.elements["time"].value;
    const treatment = form.elements["treatment"] ? form.elements["treatment"].value : "";
    const message = form.elements["message"] ? form.elements["message"].value.trim() : "";

    const lines = [
      "Hello Shifa Dental Care, I would like to book an appointment.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred Date: ${formatDateForMessage(date)}`,
      `Preferred Time: ${time}`
    ];

    if (treatment) lines.push(`Preferred Treatment: ${treatment}`);
    if (message) lines.push(`Message: ${message}`);

    const waText = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/91${clinic.contact.whatsapp}?text=${waText}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");

    form.classList.add("d-none");
    if (successEl) successEl.classList.remove("d-none");
  });
}

/**
 * Reads ?treatment=... from the URL (set by startAppointmentFlow
 * or the appointment modal) and pre-selects it in the "Preferred
 * Treatment" dropdown, if it matches one of the listed services.
 * The field remains fully optional either way.
 */
function preselectTreatmentFromUrl(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;

  const params = new URLSearchParams(window.location.search);
  const treatment = params.get("treatment");
  if (!treatment) return;

  const matchingOption = Array.from(select.options).find((opt) => opt.value === treatment);
  if (matchingOption) {
    select.value = treatment;
  }
}

/**
 * Formats an <input type="date"> value (YYYY-MM-DD) into a more
 * readable string for the WhatsApp message. Falls back to the
 * raw value if parsing fails for any reason.
 */
function formatDateForMessage(isoDate) {
  if (!isoDate) return "";
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
