let allProducts = [];
let offset = 0;
const carrouselRowLength = 4;
const parser = new DOMParser();

let isLoading = false;
let reachedEnd = false;

export function fetchProducts(){
  {
  const container = document.getElementById('featured-products-container');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  __initInitialProducts();
  if (allProducts.length === 0) {
    __loadMoreProducts();
  }

  if (!container) return;

  container.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop > 200) {
      if (scrollTopBtn) scrollTopBtn.style.display = 'block';
    } else {
      if (scrollTopBtn) scrollTopBtn.style.display = 'none';
    }

    const threshold = 20;
    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      __loadMoreProducts();
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
}


function __appendProducts(newProducts) {
  const container = document.querySelector('#featured-products-container');
  if (!container || !newProducts || newProducts.length === 0) return;

  const fragment = document.createDocumentFragment();
  newProducts.forEach(card => fragment.appendChild(card));
  container.appendChild(fragment);
}

function __initInitialProducts() {
  const container = document.querySelector('#featured-products-container');
  if (!container) return;

  const existing = Array.from(container.querySelectorAll('.product-card'));
  if (existing.length) {
    allProducts = existing.slice();
    offset = allProducts.length;
  }
}

async function __loadMoreProducts() {
  if (isLoading || reachedEnd) return;
  isLoading = true;
  try {
    const response = await fetch(`/api/products?from=${offset}&limit=${carrouselRowLength}`, {
      method: 'GET'
    });
    
    if (!response.ok) throw new Error('La respuesta de la red no fue exitosa.');

    const htmlString = await response.text();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const newNodes = Array.from(doc.querySelectorAll('.product-card'));
    
    if (newNodes.length === 0) {
      reachedEnd = true;
      return;
    }
    allProducts.push(...newNodes);
    __appendProducts(newNodes);
    offset += newNodes.length;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  } finally {
    isLoading = false;
  }
}

