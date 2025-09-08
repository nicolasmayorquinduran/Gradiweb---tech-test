import { fetchProducts } from "./featured-products";
import { conditionalStickyStyle } from "./header";
import { addCardAnimation } from "./product-card";

document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});

window.addEventListener('scroll', () => {
    conditionalStickyStyle();
});
