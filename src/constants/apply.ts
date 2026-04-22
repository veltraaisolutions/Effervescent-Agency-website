export const UK_CITIES = [
  "Aberdeen", "Bedford", "Billericay (Essex)", "Birmingham", "Bristol", "Cardiff",
  "Chelmsford", "Cheltenham", "Chester", "Chichester", "Colchester", "Coventry",
  "Derby", "Dundee", "Evesham", "Exeter", "Glasgow", "Guildford", "Herne Bay",
  "Hinckley", "Hull", "Inverness", "Leicester", "Leeds", "Liverpool",
  "London - Aldgate", "London - Camden", "London - Edgware", "London - Greenwich",
  "London - Harlesden", "London - Hounslow", "Loughborough", "Manchester",
  "Mansfield", "Margate", "Milton Keynes", "Newcastle", "Newport", "Northampton",
  "Nottingham", "Peterborough", "Plymouth", "Portsmouth/Southsea", "Sheffield",
  "Southend", "Solihull", "Southampton", "St Albans", "Walsall", "Wolverhampton",
  "Worthing", "Thanet", "Swansea", "Wrexham", "Winchester", "Worcester",
];

export const HEARD_ABOUT_OPTIONS = [
  "Instagram", "TikTok", "Facebook", "Twitter/X", "Direct Message from your page",
  "Friends / Word of mouth", "Adverts", "Met a Shot-Seller!", "Headhunter",
  "Trade shows / Exhibitions",
];

export const GENDER_OPTIONS = ["Female", "Male", "Non-binary", "Prefer not to say"];

export const WEBHOOK_URL = "https://n8n.veltraai.net/webhook/web-form-milli";
export const MAX_FILE_SIZE = 10 * 1024 * 1024;
export const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const ALLOWED_ID_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const BRAND_COLOR = "#FD88D7";

export const SLIDE_LABELS = [
  "Personal", "Location", "Photos", "Experience", "Declarations",
];

export const SLIDE_TITLES = [
  "Personal Information", "Location & Availability", "Photos & ID",
  "Experience & Motivation", "Final Declarations",
];

import { FormState } from "../types/apply";

export const INITIAL_FORM_STATE: FormState = {
  fullName: "",
  dob: "",
  gender: "",
  email: "",
  phone: "",
  instagram: "",
  primaryCity: "",
  secondCity: "",
  manualCity: "",
  isStudent: "",
  homeCity: "",
  doesDrive: "",
  photos: [],
  passportId: null,
  nonUkPassport: false,
  shareCode: "",
  priorExp: "",
  prevCompany: "",
  yearsExp: "",
  understandRole: "",
  whyFit: "",
  salesExp: "",
  startDate: "",
  selfEmployed: false,
  weekendWork: false,
  heardAbout: "",
};
