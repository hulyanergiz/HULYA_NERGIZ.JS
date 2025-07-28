(() => {
  const init = () => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname.includes("index.html")
    ) {
      buildHTML();
      buildCSS();
      setEvents();
    } else {
      console.log("Wrong Page!");
    }
  };

  const buildHTML = () => {
    const bannerContainer = document.createElement("div");
    bannerContainer.classList.add("banner-container");

    const headerTitle = document.createElement("h2");
    headerTitle.textContent = "Beğenebileceğinizi Düşündüklerimiz";
    headerTitle.classList.add("container-header");

    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("carousel-wrapper");

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("carousel-container");

    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-button prev";
    prevBtn.innerHTML = "&#8249;";

    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-button next";
    nextBtn.innerHTML = "&#8250;";

    bannerContainer.appendChild(headerTitle);
    bannerContainer.appendChild(wrapperDiv);
    bannerContainer.appendChild(prevBtn);
    bannerContainer.appendChild(nextBtn);
    wrapperDiv.appendChild(containerDiv);

    const sizinIcinSectiklerimizContainer = document.querySelector(
      "eb-product-carousel"
    );
    sizinIcinSectiklerimizContainer?.parentNode.insertBefore(
      bannerContainer,
      sizinIcinSectiklerimizContainer
    );
  };

  const buildCSS = () => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
          .banner-container {
            margin: 2rem auto;
            max-width: 100%;
            overflow: visible;
            position: relative;
            box-shadow: 8px 8px 40px -25px rgba(0,0,0,0.1);
            border-radius:35px;
          }
    
          .container-header {
            font-size: 3rem;
            font-family: Quicksand-Bold;
            font-weight: 700;
            line-height:1.11;
            color: #f28e00;
            margin: 0;
            display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fef6eb;
    padding: 25px 67px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
          }
    
          .carousel-wrapper {
            position: relative;
            overflow: hidden;
            padding:1.5rem 0;
          }
        
    
          .custom-carousel {
            position: relative;
            background: #fff;
            width: 100%;
            margin: 0;
            box-sizing: border-box;
          }
    
          .carousel-viewport {
            position: relative;
            width: 100%;
            display: block;
          }
    
          .carousel-items {
            display: flex;
            flex-direction: row;
            gap: 20px;
            transition: transform 0.5s ease;
            padding: 0.5rem 0 1rem 0;
            flex-wrap: nowrap;
            align-items: flex-start;
            width: max-content;
            min-width: 100%;
          }
    
          .carousel-productcard {
            flex: 0 0 270px;
            width: 270px;
            min-width: 270px;
            max-width: 270px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            height: 540px;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;

            z-index: 1;
            width: 100%;
            font-family: Poppins, "cursive";
            font-size: 12px;
            padding: 5px;
            color: #7d7d7d;
            margin: 0 0 20px 3px;
            border: 1px solid #ededed;
            border-radius: 10px;
            position: relative;
            text-decoration: none;
            background-color: #fff;
          }
    
          .carousel-productcard:hover {
            border: 3px solid #f28e00;
            transition: all 0.3s ease;
          }
    
          .product-image-container {
            position: relative;
            overflow: hidden;
            display:flex;
            justify-content:center;
          }

          .product-image {
            width: 80%;
            
            height: 220px;
            object-fit: cover;
            transition: all 0.3s ease;
          }
    
    
         
    
          .product-details {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            flex: 1;
            justify-content: space-between;
          }
    
          .product-title {
            margin-bottom: .5rem;
            font-weight: 500;
            line-height: 1.2222222222;
            font-family: Poppins, "cursive";
            margin: 0;
            line-height: 1.4;
          }
    
          .product-brand {
            font-weight: 700;
          }
    
          .product-rating {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin:17px 0;
          }
    
          .star {
            color: #ffb800;
            font-size: 1.7rem;
          }
    
          .discount-badge {
            position: absolute;
            top: 0.75rem;
            left: 0.75rem;
            background: #f28e00;
            color: #fff;
            padding: 0.4rem 0.8rem;
            border-radius: 25px;
            font-size: 1.2rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            z-index: 2;
          }
    
          .discount-percent {
            font-weight: 700;
          }
    
          .arrow-down {
            font-size: 1.2rem;
          }
    
          .product-original-price-promotion {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
    
          .price {
            display: block;
            width: 100%;
            font-size: 2.2rem;
            font-weight: 600;
          }
    
          .product-original-price {
            font-size: 1.2em;
            color: #666;
            text-decoration: line-through;
            margin: 0;
          }
    
          .product-promotion {
            background: #eaf8f3;
            color: #4bb788;
            border-radius: 15px;
            width: -moz-fit-content;
            width: fit-content;
            padding: 5.5px 9px 4.5px;
            font-weight: 600;
            font-size: 1.08rem;
          }
    
          .product-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.75rem;
            margin-top: auto;
          }
    
          .add-to-cart-button {
            width: 100%;
            padding: 15px 20px;
            border-radius: 37.5px;
            background-color: #fff7ec;
            color: #f28e00;
            font-family: Poppins, "cursive";
            font-size: 1.4rem;
            font-weight: 700;
          }
    
          .add-to-cart-button:hover {
            background-color:#f28e00;
            color: #fff7ec;
          }
    
          .favorite-button {
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
            background-color:rgb(255, 255, 255);
            border-bottom-left-radius:50%;
            border-bottom-right-radius:50%;
            border-top-left-radius:50%;
            border-top-right-radius:50%;
            box-shadow:rgba(0, 0, 0, 0.14) 0px 2px 4px 0px;
            box-sizing:border-box;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 2;
          }
    
          .favorite-button:hover {
            background: #fff;
            transform: scale(1.1);
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            border-color: #ff6b00;
          }
    
          .favorite-button svg {
            width: 22px;
            height: 22px;
            fill: none;
            stroke: #ff6b00;
            stroke-width: 2.5;
            transition: all 0.3s ease;
          }
    
          .favorite-button.filled svg {
            fill: #ff6b00;
            stroke: #ff6b00;
          }
    
          .carousel-button {
            position: absolute;
            top: 60%;
            transform: translateY(-50%);
            background-color: #fef6eb;
            border: 1px solid transparent;
            color: #f28e00;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 32px;
            font-weight: bold;
            z-index: 10;
            transition: all 0.3s ease;
            box-sizing: border-box;
          }
    
          .carousel-button:hover {
            background: #fff;
            color: #ff6b00;
            border: 1px solid #ff6b00;
          }
    
          .carousel-button.prev {
            left: -75px;
          }
    
          .carousel-button.next {
            right: -75px;
          }
    
          @media (min-width: 1280px) {
            .banner-container {
              width: 1150px;
              max-width: calc(100% - 2rem);
            }
          }
          @media (max-width: 1279px) {
              .banner-container {
                width: 930px;
                max-width: calc(100% - 2rem);
              }
            }
          
          @media (max-width: 991px) {
              .banner-container {
                width: 690px;
              }
            }
    
          @media (max-width: 768px) {
            .banner-container {
              margin: auto;
              border-radius: 20px;
              width: 510px;
              max-width: calc(100% - 2rem);
            }
    
            .container-header {
              font-size: 16px;
              padding: 20px 40px;
              text-align: left;
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
            }
    
            .carousel-wrapper {
              padding: 0 15px;
            }
    
            .custom-carousel {
              padding: 1rem;
            }
    
            .carousel-button {
              width: 40px;
              height: 40px;
              font-size: 16px;
            }
    
            .carousel-productcard {
              width: 220px;
              height: 420px;
            }
    
            .product-image {
              height: 180px;
            }
    
            .product-details {
              padding: 17px;
            }
          }
    
          @media (max-width: 480px) {
            .banner-container {
              width: 564px;
              max-width: calc(100% - 1rem);
            }
    
            .container-header {
              font-size: 14px;
              padding: 15px 25px;
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
            }
    
            .carousel-wrapper {
              padding: 0 10px;
            }
    
            .custom-carousel {
              padding: 0.75rem;
            }
    
            .carousel-button {
              width: 36px;
              height: 36px;
              font-size: 14px;
            }
    
            .carousel-button.prev {
              left: -20px;
            }
    
            .carousel-button.next {
              right: -20px;
            }
    
            .carousel-productcard {
              width: 180px;
              height: 360px;
            }
    
            .product-image {
              height: 140px;
            }
    
            .product-details {
              padding: 0.75rem;
              gap: 0.5rem;
            }
    
            .product-title {
              font-size: 0.8rem;
            }
    
            .price {
              font-size: 1.1rem;
            }
    
            .add-to-cart-button {
              padding: 0.625rem 0.75rem;
              font-size: 0.8rem;
            }
    
            .favorite-button {
              width: 36px;
              height: 36px;
            }
    
            .favorite-button svg {
              width: 18px;
              height: 18px;
            }
          }
        `;
    document.head.appendChild(styleElement);
  };

  const makeProductCard = (product) => {
    const card = document.createElement("a");
    card.classList.add("carousel-productcard");
    card.dataset.productId = product.id;
    card.href = product.url;
    card.target = "_blank";
    card.style.textDecoration = "none";

    let discount = 0;
    if (product.originalPrice && product.price < product.originalPrice) {
      discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      );
    }

    let cardContent = `
          <div class="product-image-container">
            <img src="${product.img}" class="product-image" alt="${product.name}">
      `;

    if (discount > 0) {
      cardContent += `
              <div class="discount-badge">
                <span class="discount-percent">${discount}%</span>
                <span class="arrow-down">↓</span>
              </div>
        `;
    }

    cardContent += `
            <button class="favorite-button">
              <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
          
          <div class="product-details">
            <h3 class="product-title">
              <span class="product-brand">${product.brand}</span> - ${product.name}
            </h3>
    
            <div class="product-rating">
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
    
            <div class="product-original-price-promotion">
      `;

    if (product.originalPrice && product.price < product.originalPrice) {
      cardContent += `<p class="product-original-price">${product.originalPrice} TL</p>`;
    }

    cardContent += `
              <span class="price">${product.price} TL</span>
              <p class="product-promotion">Farklı ürünlerde 3 al 2 öde</p>
            </div>
    
            <div class="product-actions">
              <button class="add-to-cart-button">Sepete Ekle</button>
            </div>
          </div>
      `;

    card.innerHTML = cardContent;
    return card;
  };

  function makeCarousel(products) {
    if (!products || products.length === 0) {
      console.error("Geçerli ürün verisi bulunamadı");
      return "There is no product";
    }

    const carouselDiv = document.createElement("div");
    carouselDiv.className = "custom-carousel";

    const viewportDiv = document.createElement("div");
    viewportDiv.className = "carousel-viewport";

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "carousel-items";

    for (let i = 0; i < products.length; i++) {
      const card = makeProductCard(products[i]);
      itemsDiv.appendChild(card);
    }

    viewportDiv.appendChild(itemsDiv);
    carouselDiv.appendChild(viewportDiv);

    let position = 0;
    const slideSize = 300;
    const visibleSlides = Math.floor(viewportDiv.offsetWidth / slideSize) || 4;
    const maxPosition = Math.max(0, products.length - visibleSlides);

    function moveCarousel() {
      const moveAmount = -position * slideSize;
      itemsDiv.style.transform = `translateX(${moveAmount}px)`;
    }

    setTimeout(() => {
      const prevBtn = document.querySelector(
        ".banner-container .carousel-button.prev"
      );
      const nextBtn = document.querySelector(
        ".banner-container .carousel-button.next"
      );

      if (prevBtn) {
        prevBtn.addEventListener("click", function () {
          position = Math.max(0, position - 1);
          moveCarousel();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          position = Math.min(maxPosition, position + 1);
          moveCarousel();
        });
      }
    }, 100);

    return carouselDiv;
  }

  const handleFavorite = (productId, favButton) => {
    let favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favoritesList.includes(productId)) {
      favoritesList = favoritesList.filter((id) => id !== productId);
      favButton.classList.remove("filled");
    } else {
      favoritesList.push(productId);
      favButton.classList.add("filled");
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
  };

  const addProductEvents = (products) => {
    const allCards = document.querySelectorAll(".carousel-productcard");

    for (let i = 0; i < allCards.length; i++) {
      const card = allCards[i];
      const productId = parseInt(card.dataset.productId);
      const favButton = card.querySelector(".favorite-button");
      let favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];

      if (favoritesList.includes(productId)) {
        favButton.classList.add("filled");
      }

      favButton.addEventListener("click", function (event) {
        event.stopPropagation();
        handleFavorite(productId, favButton);
      });
    }
  };

  const buildAndAddCarousel = (products) => {
    const carousel = makeCarousel(products);
    const container = document.querySelector(".carousel-container");
    if (container) {
      container.appendChild(carousel);
      addProductEvents(products);
    }
  };

  const setEvents = () => {
    const savedProducts = localStorage.getItem("productList");

    if (savedProducts) {
      try {
        const products = JSON.parse(savedProducts);
        buildAndAddCarousel(products);
        return;
      } catch (error) {
        console.error("No saved products. Fetching...");
      }
    }

    fetch(
      "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json"
    )
      .then(function (res) {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(function (products) {
        if (products && Array.isArray(products)) {
          localStorage.setItem("productList", JSON.stringify(products));
          buildAndAddCarousel(products);
        } else {
          console.error("No product data!");
        }
      })
      .catch(function (err) {
        console.error("No product data! Error:", err);
      });
  };

  init();
})();
