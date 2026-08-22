/* =========================================================
   SERVICES.JS
   Central treatment/service data.

   Powers:
   - Homepage Treatments Preview
   - treatments.html full treatment grid
   - Treatment Modal
   - Related treatment information

   Icon system:
   - Treatment icons are SVG files stored in:
     images/services/
   - Each service stores the SVG filename/path.
   - components.js renders the SVG as an <img>.

   ========================================================= */


const services = [

  /* =======================================================
     1. DENTAL CHECKUP
     ======================================================= */

  {
    id: 1,
    name: "Dental Checkup",
    slug: "dental-checkup",
    icon: "images/services/dental-checkup.svg",
    category: "General Dentistry",

    shortDescription:
      "A general examination to assess the health of your teeth, gums and mouth.",

    description:
      "A dental checkup is a general examination of your teeth, gums and mouth. It helps the dentist assess your oral health and identify common dental concerns that may need attention.",

    image: ""
  },


  /* =======================================================
     2. TEETH CLEANING
     ======================================================= */

  {
    id: 2,
    name: "Teeth Cleaning",
    slug: "teeth-cleaning",
    icon: "images/services/teeth-cleaning.svg",
    category: "General Dentistry",

    shortDescription:
      "Professional cleaning to remove plaque and tartar buildup from teeth and gums.",

    description:
      "Professional teeth cleaning helps remove plaque and tartar buildup that regular brushing may not fully clear, particularly around the gumline. It is an important part of maintaining good oral hygiene.",

    image: ""
  },


  /* =======================================================
     3. ROOT CANAL
     ======================================================= */

  {
    id: 3,
    name: "Root Canal Treatment",
    slug: "root-canal",
    icon: "images/services/root-canal.svg",
    category: "Endodontics",

    shortDescription:
      "Treatment to clean and restore a tooth affected by infection or inflammation inside the tooth.",

    description:
      "Root canal treatment involves removing infected or inflamed tissue from inside a tooth, cleaning the root canals and sealing the tooth. It is used when the inside of a tooth has been affected by infection or inflammation.",

    image: ""
  },


  /* =======================================================
     4. DENTAL FILLING
     ======================================================= */

  {
    id: 4,
    name: "Dental Filling",
    slug: "dental-filling",
    icon: "images/services/dental-filling.svg",
    category: "General Dentistry",

    shortDescription:
      "Restoring a tooth affected by decay or minor damage with a suitable filling material.",

    description:
      "A dental filling restores a tooth that has been affected by decay or minor damage. The affected area is cleaned and filled with suitable dental material to restore the tooth's shape and function.",

    image: ""
  },


  /* =======================================================
     5. TOOTH EXTRACTION
     ======================================================= */

  {
    id: 5,
    name: "Tooth Extraction",
    slug: "tooth-extraction",
    icon: "images/services/tooth-extraction.svg",
    category: "General Dentistry",

    shortDescription:
      "Removal of a tooth when it cannot be saved or is causing a dental problem.",

    description:
      "Tooth extraction involves removing a tooth when it cannot be saved or when removal is recommended because of a dental problem. The dentist will explain the reason for extraction and the appropriate aftercare.",

    image: ""
  },


  /* =======================================================
     6. DENTAL CROWN
     ======================================================= */

  {
    id: 6,
    name: "Dental Crown",
    slug: "dental-crown",
    icon: "images/services/dental-crown.svg",
    category: "Restorative Dentistry",

    shortDescription:
      "A custom restoration used to protect and restore the shape and function of a damaged tooth.",

    description:
      "A dental crown is a custom-made restoration that covers a damaged or weakened tooth. It can help restore the tooth's shape, function and appearance when recommended by the dentist.",

    image: ""
  },


  /* =======================================================
     7. DENTAL BRIDGES
     ======================================================= */

  {
    id: 7,
    name: "Dental Bridges",
    slug: "dental-bridges",
    icon: "images/services/dental-bridges.svg",
    category: "Restorative Dentistry",

    shortDescription:
      "A dental restoration used to replace one or more missing teeth.",

    description:
      "A dental bridge replaces one or more missing teeth by using supporting teeth or other appropriate structures. It is designed to restore the appearance and function of the affected area.",

    image: ""
  },


  /* =======================================================
     8. DENTAL IMPLANTS
     ======================================================= */

  {
    id: 8,
    name: "Dental Implants",
    slug: "dental-implants",
    icon: "images/services/dental-implants.svg",
    category: "Implant Dentistry",

    shortDescription:
      "A treatment option for replacing one or more missing teeth.",

    description:
      "Dental implants are used to replace missing teeth with an artificial tooth root and restoration. Suitability depends on the individual's oral health and is assessed during a dental consultation.",

    image: ""
  },


  /* =======================================================
     9. BRACES & ORTHODONTICS
     ======================================================= */

  {
    id: 9,
    name: "Braces & Orthodontics",
    slug: "braces-orthodontics",
    icon: "images/services/braces-orthodontics.svg",
    category: "Orthodontics",

    shortDescription:
      "Orthodontic treatment to gradually improve the alignment and position of teeth.",

    description:
      "Braces and orthodontic treatment gradually move teeth into a more suitable position. They may be used to address concerns such as crowding, spacing and certain bite alignment issues.",

    image: ""
  },


  /* =======================================================
     10. TEETH WHITENING
     ======================================================= */

  {
    id: 10,
    name: "Teeth Whitening",
    slug: "teeth-whitening",
    icon: "images/services/teeth-whitening.svg",
    category: "Cosmetic Dentistry",

    shortDescription:
      "A cosmetic treatment designed to reduce staining and brighten the appearance of teeth.",

    description:
      "Teeth whitening is a cosmetic dental treatment that aims to reduce certain types of staining and discoloration. The result can vary depending on the type and extent of staining.",

    image: ""
  },


  /* =======================================================
     11. PEDIATRIC DENTISTRY
     ======================================================= */

  {
    id: 11,
    name: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    icon: "images/services/pediatric-dentistry.svg",
    category: "Pediatric Dentistry",

    shortDescription:
      "Dental care focused on the oral health and developing teeth of children.",

    description:
      "Pediatric dentistry focuses on the dental needs of children, including regular checkups, preventive care and treatment of common dental concerns affecting growing teeth.",

    image: ""
  },


  /* =======================================================
     12. GUM TREATMENT
     ======================================================= */

  {
    id: 12,
    name: "Gum Treatment",
    slug: "gum-treatment",
    icon: "images/services/gum-treatment.svg",
    category: "Periodontics",

    shortDescription:
      "Dental care focused on maintaining healthy gums and managing gum-related concerns.",

    description:
      "Gum treatment focuses on the health of the tissues surrounding and supporting the teeth. Depending on the condition, treatment may include professional cleaning and other periodontal care recommended by the dentist.",

    image: ""
  },


  /* =======================================================
     13. DENTAL X-RAY
     ======================================================= */

  {
    id: 13,
    name: "Dental X-Ray",
    slug: "dental-xray",
    icon: "images/services/dental-xray.svg",
    category: "Diagnostic Dentistry",

    shortDescription:
      "Dental imaging used to help examine areas of the teeth and mouth that may not be visible during a routine examination.",

    description:
      "Dental X-rays provide images of structures inside and around the teeth and jaw. They can assist the dentist in assessing areas that cannot be fully examined through a visual examination alone.",

    image: ""
  },


  /* =======================================================
     14. SMILE DESIGNING
     ======================================================= */

  {
    id: 14,
    name: "Smile Designing",
    slug: "smile-designing",
    icon: "images/services/smile-designing.svg",
    category: "Cosmetic Dentistry",

    shortDescription:
      "A personalised approach to improving the appearance of the smile using suitable cosmetic treatments.",

    description:
      "Smile designing considers factors such as tooth shape, alignment, colour and overall smile appearance. Suitable cosmetic treatments can then be discussed based on the individual's needs and preferences.",

    image: ""
  },


  /* =======================================================
     15. FULL MOUTH REHABILITATION
     ======================================================= */

  {
    id: 15,
    name: "Full Mouth Rehabilitation",
    slug: "full-mouth-rehabilitation",
    icon: "images/services/full-mouth-rehabilitation.svg",
    category: "Restorative Dentistry",

    shortDescription:
      "A comprehensive treatment approach addressing multiple dental needs across the mouth.",

    description:
      "Full mouth rehabilitation involves planning and coordinating multiple dental treatments to address several oral health and restorative needs. The treatment plan is customised according to the patient's individual condition.",

    image: ""
  },


  /* =======================================================
     16. DENTURES
     ======================================================= */

  {
    id: 16,
    name: "Dentures",
    slug: "dentures",
    icon: "images/services/dentures.svg",
    category: "Prosthodontics",

    shortDescription:
      "Removable dental appliances used to replace missing teeth.",

    description:
      "Dentures are removable dental appliances designed to replace missing teeth and surrounding oral structures. They can be made in different forms depending on the number of missing teeth and individual requirements.",

    image: ""
  },


  /* =======================================================
     17. WISDOM TOOTH TREATMENT
     ======================================================= */

  {
    id: 17,
    name: "Wisdom Tooth Treatment",
    slug: "wisdom-tooth-treatment",
    icon: "images/services/wisdom-tooth-treatment.svg",
    category: "Oral Surgery",

    shortDescription:
      "Assessment and treatment of dental problems associated with wisdom teeth.",

    description:
      "Wisdom tooth treatment involves assessing the position and condition of wisdom teeth and managing problems such as discomfort, crowding or other dental concerns when treatment is required.",

    image: ""
  },


  /* =======================================================
     18. EMERGENCY DENTAL CARE
     ======================================================= */

  {
    id: 18,
    name: "Emergency Dental Care",
    slug: "emergency-dental-care",
    icon: "images/services/emergency-dental-care.svg",
    category: "General Dentistry",

    shortDescription:
      "Dental care for urgent situations requiring prompt assessment and treatment.",

    description:
      "Emergency dental care is intended for urgent dental concerns that require prompt professional assessment. The appropriate treatment depends on the nature and severity of the dental problem.",

    image: ""
  }

];