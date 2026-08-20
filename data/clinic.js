/* =========================================================
   CLINIC.JS
   =========================================================

   Central object holding all clinic business information.

   Edit THIS file whenever clinic information changes.
   Components and pages can read from this object so that
   information stays consistent throughout the website.

   Anything not yet confirmed by the client uses a clear
   placeholder such as "To be confirmed" or "To be updated".

   ========================================================= */


const clinic = {

  /* =======================================================
     BASIC CLINIC INFORMATION
     ======================================================= */

  name: "Shifa Dental Care",

  tagline: "A Multi Speciality Dental Clinic",


  /* =======================================================
     DOCTOR INFORMATION
     ======================================================= */

  doctor: {

    name: "Dr. Sania Shakeel",

    qualification: "B.D.S.",

    institution: "Govt. Dental College & Hospital, Patna",

    registration: "9412/A",

    experience: "X+ Years", // To be confirmed by client

    specialization: "To be updated",

    certifications: "To be updated",

    awards: "To be updated",

    // Real, client-supplied photo of Dr. Sania Shakeel.
    image: "images/doctor/dr_shifa.jpg",

    isDemoImage: false
  },


  /* =======================================================
     CONTACT INFORMATION
     ======================================================= */

  contact: {

    phone: "9122123028",

    // A second number appears on clinic print material.
    // Confirm with client before using site-wide.
    phoneSecondary: "To be confirmed",

    whatsapp: "9122123028",

    email: "shifadentalcare18@gmail.com"
  },


  /* =======================================================
     CLINIC ADDRESS
     ======================================================= */

  address: {

    line1: "Hurmat Complex",

    line2: "Near Mahavir Cancer Sansthan",

    area: "B Sector, Phulwari Sharif",

    city: "Patna",

    state: "Bihar",

    pincode: "801505"
  },


  /* =======================================================
     OPENING HOURS
     ======================================================= */

  hours: {

    monday: "10:00 AM – 8:00 PM",

    tuesday: "10:00 AM – 8:00 PM",

    wednesday: "10:00 AM – 8:00 PM",

    thursday: "10:00 AM – 8:00 PM",

    friday: "2:00 PM – 8:00 PM",

    saturday: "10:00 AM – 8:00 PM",

    sunday: "12:00 PM – 6:00 PM",

    note: "Hours may vary on holidays. Please call ahead to confirm."
  },


  /* =======================================================
     SOCIAL MEDIA
     =======================================================

     Keep all social links here so the footer and other
     sections can use the same information.

     Links that are not yet confirmed remain placeholders.
     ======================================================= */

  social: {

    instagram: "To be confirmed",

    facebook: "To be confirmed",

    youtube: "To be confirmed",

    /*
       WhatsApp is already stored in contact.whatsapp.

       We are keeping it there rather than duplicating the
       phone number here. The footer can generate the
       WhatsApp link from contact.whatsapp.
    */
  },


  /* =======================================================
     GOOGLE BUSINESS PROFILE
     ======================================================= */

  google: {

    rating: "To be confirmed",

    reviewCount: "To be confirmed",

    /*
       Google Business Profile URL.

       This points to the existing Shifa Dental Care
       Google Maps listing.
    */

    profileUrl: "https://www.google.com/maps?cid=7476190122962152143"
  },


  /* =======================================================
     GOOGLE MAPS LOCATION
     ======================================================= */

  location: {

    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14395.80970429912!2d85.06115220413905!3d25.57324948952938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a9000493bb9d%3A0x67c0c34e68716acf!2sShifa%20Dental%20Care!5e0!3m2!1sen!2sin!4v1786776245889!5m2!1sen!2sin"
  },


  /* =======================================================
     CLINIC GALLERY
     =======================================================

     Real clinic photos used throughout the website.

     Add new photos here when they become available.
     No HTML changes are required because the gallery
     renders from this list.
     ======================================================= */

  gallery: [

    {
      src: "images/clinic/clinic_image_1.webp",
      alt: "Entrance to Shifa Dental Care clinic, Hurmat Complex, Phulwari Sharif"
    },

    {
      src: "images/clinic/clinic_image_2.webp",
      alt: "Dental treatment chair at Shifa Dental Care clinic"
    },

    {
      src: "images/clinic/clinic_image_3.webp",
      alt: "Shifa Dental Care ribbon cutting on opening day"
    },

    {
      src: "images/clinic/clinic_image_4.webp",
      alt: "Dental treatment room at Shifa Dental Care clinic"
    },

    {
      src: "images/clinic/clinic_image_5.webp",
      alt: "Reception area of Shifa Dental Care clinic"
    },

    {
      src: "images/clinic/clinic_image_6.webp",
      alt: "Entrance to Shifa Dental Care clinic decorated on opening day"
    }

  ],


  /* =======================================================
     WEBSITE DEVELOPER / CREDITS
     =======================================================

     Displayed in the footer bottom section.

     This is kept in clinic.js so it can be changed later
     without modifying components.js.
     ======================================================= */

  developer: {

    name: "Saeed Anwar",

    github: "https://github.com/Saeed8271"
  }

};