// Define constants for categories and collections
export const CATEGORIES = {
  RING: "rings",
  BRACELET: "bracelets",
  EARRING: "earrings",
  PENDANT: "pendants",
  OTHER: "others",
};

export const RINGSIZE = [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12];

export const COLLECTIONS = {
  MOTHER_OF_PEARL: {
    name: "mother of pearl",
    titleImage: "irridescent.jpg",
    hoverImages: ["irr.gif", "irr1.jpeg", "irr4.jpeg", "irr6.jpg"],
    hoverAlts: ["irr.gif", "irr1.jpeg", "irr4.jpeg", "irr6.jpg"],
    description: "Irridescent, Irresistable, Irrefutably Greenwood",
    featured: true,
  },
  AMALFI: {
    name: "amalfi",
    titleImage: "amalfi1.jpeg",
    hoverImages: [
      "amalfi1.jpeg",
      "amalfi2.jpeg",
      "amalfi3.jpeg",
      "amalfi4.jpeg",
    ],
    hoverAlts: ["amalfi1.jpeg", "amalfi2.jpeg", "amalfi3.jpeg", "amalfi4.jpeg"],
    description: "Sourced from, inspired by, dreaming of the Amalfi Coast",
    featured: false,
  },
  TEXTURE: {
    name: "texture",
    titleImage: "",
    hoverImages: ["irr.gif", "irr1.jpeg", "irr2.jpeg", "irr6.jpg"],
    hoverAlts: ["amalfi1.jpeg", "amalfi2.jpeg", "amalfi3.jpeg", "amalfi4.jpeg"],
    description: "Unpretrentious, gritty, industrial",
    featured: false,
  },
};


export const ABOUT = 
{
  image: "NICK.jpeg",
  alt: "Photo of Nick Boisvert",
  description:
    "Pellentesque interdum eros quam, sed imperdiet leo accumsan non. Phasellus auctor cursus mauris, vitae vehicula quam. Aenean suscipit porttitor dapibus. Cras pulvinar, erat nec iaculis aliquam, est nibh dignissim diam, vel condimentum eros elit in sem. Quisque pretium enim nisl, non elementum diam finibus quis. Proin eleifend, felis id feugiat ullamcorper, mauris augue pulvinar turpis, nec porttitor augue tellus ut justo. Morbi mattis massa sit amet fringilla luctus. Aenean scelerisque hendrerit massa a vehicula. Vivamus ac mattis nulla. Aliquam dapibus lacinia orci. Fusce sed elit suscipit, pellentesque quam et, cursus turpis. Sed et sem tincidunt, laoreet lorem vel, lobortis eros. Aenean non bibendum tortor, non eleifend ipsum. Ut ac libero vel mauris aliquam venenatis.",
};




export const INVENTORY = [
  {
    id: 1,
    name: "Signet Ring",
    size: 5.5,
    price: 23.75,
    description: "A guilded set of ruby earrings",
    image: ["greenwood2.jpg", "greenwood3.jpg"],
    category: CATEGORIES.RING,
    collection: COLLECTIONS.TEXTURE,
    featured: true,
    inStock: true,
    alt: "alt text",
  },
  {
    id: 2,
    name: "Bababaoot",
    size: "24",
    price: 18.75,
    description: "Boo boo ba ba",
    image: ["greenwood3.jpg", "greenwood2.jpg"],
    category: CATEGORIES.BRACELET,
    collection: COLLECTIONS.TEXTURE,
    featured: true,
    inStock: true,
    alt: ["a boo boo", "a ba ba"],
  },
  {
    id: 3,
    name: "Irridescent Ring",
    size: 12,
    price: 18.75,
    description: "Size 13 irridecesnt ring with a silver inlay",
    image: ["irr1.jpeg", "irr2.jpeg"],
    category: CATEGORIES.RING,
    collection: COLLECTIONS.MOTHER_OF_PEARL,
    featured: true,
    inStock: true,
    alt: ["shiny ring", "shiny ring side image"],
  },
  {
    id: 5,
    name: "Irridescent earring",
    size: "8",
    price: 18.75,
    description: "Size 13 irridecesnt ring with a silver inlay",
    image: ["irr2.jpeg", "irr1.jpeg"],
    category: CATEGORIES.EARRING,
    collection: COLLECTIONS.MOTHER_OF_PEARL,
    featured: true,
    inStock: true,
    alt: ["shiny ring", "shiny ring side image"],
  },
  {
    id: 6,
    name: "Irridescent earring",
    size: "One Size",
    price: 18.75,
    description: "Size 13 irridecesnt ring with a silver inlay",
    image: ["irr6.jpg", "irr4.jpeg"],
    category: CATEGORIES.EARRING,
    collection: COLLECTIONS.MOTHER_OF_PEARL,
    featured: true,
    inStock: true,
    alt: ["shiny ring", "shiny ring side image"],
  },
  {
    id: 7,
    name: "Irridescent EARS",
    size: "One Size",
    price: 2005,
    description: "Size 13 irridecesnt ring with a silver inlay",
    image: ["irr4.jpeg", "irr6.jpg"],
    category: CATEGORIES.BRACELET,
    collection: COLLECTIONS.MOTHER_OF_PEARL,
    featured: true,
    inStock: true,
    alt: ["shiny ring", "shiny ring side image"],
  },
  {
    id: 8,
    name: "Irridescent hoop earring",
    size: "One Size",
    price: 18.75,
    description: "Size 13 irridecesnt ring with a silver inlay",
    image: ["irr6.jpg", "irr.gif"],
    category: CATEGORIES.PENDANT,
    collection: COLLECTIONS.MOTHER_OF_PEARL,
    featured: true,
    inStock: true,
    alt: ["shiny ring", "shiny ring side image"],
  },
  {
    id: 9,
    name: "Hummin Birds",
    size: "One Size",
    price: 200,
    description: "stained glass hummingbird",
    image: ["greenwood.gif", "greenwood.jpg", "greenwood2.jpg"],
    category: CATEGORIES.PENDANT,
    collection: null,
    featured: true,
    inStock: false,
    alt: ["shiny ring", "shiny ring side image", "third image test"],
  },
  {
    id: 10,
    name: "Hummus Boards",
    size: "16mm",
    price: 2200,
    description: "stained glass hummus",
    image: [
      "greenwood4.jpg",
      "greenwood5.jpg",
      "amalfi4.jpeg",
      "amalfi5.jpeg",
      "amalfi1.jpeg",
    ],
    category: CATEGORIES.PENDANT,
    collection: null,
    inStock: false,
    alt: ["shiny ring", "shiny ring side image", "", "", ""],
  },
];

export const PAYMENTS = [
  "payments/amex.png",
  "payments/applepay.png",
  "payments/discover.png",
  "payments/mastercard.png",
  "payments/visa.png",
];
