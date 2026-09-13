export const restaurantInfo = {
  name: "Sarvottam Restaurant",
  tagline: "Pure Vegetarian Punjabi, North Indian & Chinese Cuisine",
  address: "First Floor, Daksha Colony Rd, Nizampura Char Rasta, Sardar Nagar, Nizampura, Vadodara, Gujarat 390002",
  phone: "09824872429",
  phoneDisplay: "098248 72429",
  rating: 3.9,
  city: "Vadodara",
  whatsappNumber: "919824872429",
  whatsappMessage: "Hello Sarvottam Restaurant, I would like to know more about your menu/reservation.",
  mapsQuery: "Sarvottam Restaurant, First Floor, Daksha Colony Rd, Nizampura Char Rasta, Sardar Nagar, Nizampura, Vadodara, Gujarat 390002",
  characteristics: [
    "Pure Vegetarian",
    "Casual, Quiet Atmosphere",
    "Good for Groups & Kids",
    "Lunch & Dinner",
    "Solo Dining Friendly",
    "Table Service",
  ],
  serviceOptions: ["Dine-in", "Takeaway", "Delivery", "No-contact Delivery", "Reservations Accepted"],
  parking: ["Free Parking Lot", "Free Street Parking", "Paid Parking Lot", "Plenty of Parking"],
  payments: ["Credit Card", "Debit Card", "NFC Mobile Payments"],
  amenities: ["Restroom Available", "Good for Kids", "Good for Groups", "Quick Bites", "Small Plates", "Vegan Options", "Great Desserts"],
}

export const getWhatsappUrl = () =>
  `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(restaurantInfo.whatsappMessage)}`

export const getCallUrl = () => `tel:+91${restaurantInfo.phone.slice(1)}`

export const getMapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.mapsQuery)}`

export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1600&auto=format&fit=crop",
    alt: "Rich paneer curry garnished with cream in a copper bowl",
  },
  {
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1600&auto=format&fit=crop",
    alt: "Assorted Indian thali with dal, sabzi and roti",
  },
  {
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1600&auto=format&fit=crop",
    alt: "Fresh tandoori naan bread stacked on a plate",
  },
  {
    image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=1600&auto=format&fit=crop",
    alt: "Vegetable biryani served with raita",
  },
  {
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1600&auto=format&fit=crop",
    alt: "Warm dining table set with Indian dishes",
  },
]

export const featuredDishes = [
  {
    name: "Paneer Angara",
    category: "Paneer Main Course",
    price: 330,
    description: "A smoky, richly spiced paneer curry finished with a fiery tempering.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Paneer Butter Masala",
    category: "Paneer Main Course",
    price: 350,
    description: "Soft paneer cubes simmered in a velvety tomato and butter gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dal Makhani",
    category: "Dal Preparation",
    price: 300,
    description: "Slow-cooked black lentils finished with cream and butter.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Vegetable Biryani",
    category: "Rice & Biryani",
    price: 255,
    description: "Aromatic rice dish served with seasonal vegetables.",
    image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Paneer Tikka Dry",
    category: "Starters",
    price: 360,
    description: "Char-grilled paneer skewers marinated in tandoori spices, 8 pieces.",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cheese Garlic Naan",
    category: "Breads",
    price: 140,
    description: "Tandoor-baked naan layered with cheese and roasted garlic.",
    image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kaju Cheese Masala",
    category: "Kaju Main Course",
    price: 435,
    description: "Roasted cashews and cheese in a rich, creamy tomato gravy.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Chocolate Milkshake",
    category: "Milkshakes",
    price: 210,
    description: "A thick, chilled chocolate milkshake to finish your meal.",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=1200&auto=format&fit=crop",
  },
]

export const gallery = [
  { image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop", alt: "Creamy paneer curry" },
  { image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1000&auto=format&fit=crop", alt: "Cheese garlic naan" },
  { image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=1000&auto=format&fit=crop", alt: "Vegetable biryani" },
  { image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop", alt: "Indian thali platter" },
  { image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1000&auto=format&fit=crop", alt: "Restaurant dining table" },
  { image: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1000&auto=format&fit=crop", alt: "Paneer tikka skewers" },
  { image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1000&auto=format&fit=crop", alt: "Tandoori naan bread" },
  { image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1000&auto=format&fit=crop", alt: "Cashew masala curry" },
  { image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=1000&auto=format&fit=crop", alt: "Sweet lassi in a clay glass" },
]
