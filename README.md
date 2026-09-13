# Sarvottam Restaurant — Website

A premium, animated React + Tailwind CSS website for Sarvottam Restaurant
(Nizampura, Vadodara) — a pure vegetarian Punjabi / North Indian / Chinese
restaurant.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   Reusable UI: Navbar, Footer, HeroCarousel, DishCard, etc.
  pages/        Home, About, Menu, Contact — one per route
  data/         restaurantInfo.js (business data) and menuData.js (full menu)
  App.jsx       Route definitions and shared layout
  main.jsx      React entry point
  index.css     Tailwind entry point and small global styles
```

## Notes

- All menu items and prices come directly from `src/data/menuData.js` — update
  that file to change the menu without touching any component.
- Business details (address, phone, WhatsApp number, Google rating) live in
  `src/data/restaurantInfo.js`.
- Food and gallery photography use remote Unsplash URLs. Swap them for your
  own photography by replacing the `image` fields in `restaurantInfo.js`.
- The mobile bottom action bar (Call / WhatsApp / Directions) appears on
  screens narrower than the `lg` breakpoint.
