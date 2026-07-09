// --- Core System Mock Dataset Architecture ---
const productDatabase = [
    {
        id: 1,
        name: "QuantumX Pro Smartphone",
        category: "Mobiles",
        basePrice: 899,
        discountPrice: 799,
        rating: 4.8,
        aiScore: 96,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        stores: [
            { name: "Amazon", price: 799, discount: "11%", delivery: "Free Tomorrow", best: true },
            { name: "Flipkart", price: 810, discount: "10%", delivery: "Free within 2 days", best: false },
            { name: "Croma", price: 830, discount: "7%", delivery: "$10 Delivery", best: false },
            { name: "Reliance Digital", price: 825, discount: "8%", delivery: "Free Setup", best: false }
        ]
    },
    {
        id: 2,
        name: "AeroBook Ultra 14 Laptop",
        category: "Laptops",
        basePrice: 1499,
        discountPrice: 1249,
        rating: 4.9,
        aiScore: 98,
        image: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=400&q=80",
        stores: [
            { name: "Amazon", price: 1260, discount: "15%", delivery: "Free 2 days", best: false },
            { name: "Flipkart", price: 1249, discount: "16%", delivery: "Free Express", best: true },
            { name: "Croma", price: 1299, discount: "13%", delivery: "Store Pickup Free", best: false },
            { name: "Reliance Digital", price: 1280, discount: "14%", delivery: "Free 3 days", best: false }
        ]
    },
    {
        id: 3,
        name: "SonicWave ANC Headphones",
        category: "Headphones",
        basePrice: 299,
        discountPrice: 189,
        rating: 4.6,
        aiScore: 92,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
        stores: [
            { name: "Amazon", price: 189, discount: "36%", delivery: "Free Prime Delivery", best: true },
            { name: "Flipkart", price: 199, discount: "33%", delivery: "$5 Delivery", best: false },
            { name: "Croma", price: 210, discount: "29%", delivery: "Free Delivery", best: false },
            { name: "Reliance Digital", price: 205, discount: "31%", delivery: "Free Delivery", best: false }
        ]
    },
    {
        id: 4,
        name: "Chronos Fit Smart Watch",
        category: "Smart Watches",
        basePrice: 199,
        discountPrice: 149,
        rating: 4.4,
        aiScore: 89,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
        stores: [
            { name: "Amazon", price: 155, discount: "22%", delivery: "Free Tomorrow", best: false },
            { name: "Flipkart", price: 149, discount: "25%", delivery: "Free Delivery", best: true },
            { name: "Croma", price: 160, discount: "19%", delivery: "Free Delivery", best: false },
            { name: "Reliance Digital", price: 159, discount: "20%", delivery: "Free Delivery", best: false }
        ]
    },
    {
        id: 5,
        name: "Stratus Foam Running Shoes",
        category: "Shoes",
        basePrice: 120,
        discountPrice: 85,
        rating: 4.7,
        aiScore: 94,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
        stores: [
            { name: "Amazon", price: 85, discount: "29%", delivery: "Free Delivery", best: true },
            { name: "Flipkart", price: 90, discount: "25%", delivery: "$2 Delivery", best: false },
            { name: "Croma", price: 110, discount: "8%", delivery: "Not Available", best: false },
            { name: "Reliance Digital", price: 105, discount: "12%", delivery: "Standard Shipping", best: false }
        ]
    },
    {
        id: 6,
        name: "ThermaChill Smart Refrigerator",
        category: "Home Appliances",
        basePrice: 2199,
        discountPrice: 1899,
        rating: 4.8,
        aiScore: 95,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80",
        stores: [
            { name: "Amazon", price: 1950, discount: "11%", delivery: "$50 Installation", best: false },
            { name: "Flipkart", price: 1920, discount: "12%", delivery: "$40 Installation", best: false },
            { name: "Croma", price: 1899, discount: "13%", delivery: "Free Scheduled Delivery", best: true },
            { name: "Reliance Digital", price: 1910, discount: "13%", delivery: "Free Delivery", best: false }
        ]
    }
];

// --- Interface Initialization & Component Mapping ---
document.addEventListener("DOMContentLoaded", () => {
    // UI Elements
    const loader = document.getElementById("loader");
    const themeToggle = document.getElementById("theme-toggle");
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navLinksContainer = document.querySelector(".nav-links");
    const productGrid = document.getElementById("product-grid");
    const bestDealsContainer = document.getElementById("best-deals-container");
    
    // Modal Infrastructure Elements
    const compareModal = document.getElementById("compare-modal");
    const closeModalBtn = document.querySelector(".close-modal");
    const modalProductName = document.getElementById("modal-product-name");
    const compareTableBody = document.getElementById("compare-table-body");
    
    // Search Framework Selectors
    const searchInput = document.getElementById("search-input");
    const budgetInput = document.getElementById("budget-input");
    const categorySelect = document.getElementById("category-select");
    const aiApplyBtn = document.getElementById("ai-apply-btn");
    const resultsHeading = document.getElementById("results-heading");
    
    // Auxiliary Elements
    const backToTopBtn = document.getElementById("back-to-top");
    const contactForm = document.getElementById("contact-form");

    // Clear Loader Frame
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 300);
    }, 600);

    // --- Render Pipeline ---
    function renderProducts(productsList) {
        productGrid.innerHTML = "";
        if(productsList.length === 0) {
            productGrid.innerHTML = `<div class="card" style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-secondary);">
                <i class="fas fa-robot" style="font-size:3rem; margin-bottom:15px; display:block;"></i>
                No optimized matches found for your parameters. Try broadening your criteria.
            </div>`;
            return;
        }

        productsList.forEach(prod => {
            const card = document.createElement("div");
            card.className = "card product-card";
            card.innerHTML = `
                <div class="img-container">
                    <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy">
                </div>
                <div class="card-header-meta">
                    <span class="badge badge-ai"><i class="fas fa-brain"></i> AI Score: ${prod.aiScore}</span>
                    <span class="badge badge-success">${prod.category}</span>
                </div>
                <h3 class="product-title" title="${prod.name}">${prod.name}</h3>
                <div class="rating-layer">
                    ${generateStars(prod.rating)} <span>(${prod.rating})</span>
                </div>
                <div class="price-block">
                    <span class="original-price">$${prod.basePrice}</span>
                    <span class="current-price">$${prod.discountPrice}</span>
                </div>
                <div class="action-layer">
                    <button class="btn btn-secondary width-100 compare-trigger" data-id="${prod.id}"><i class="fas fa-balance-scale"></i> Compare</button>
                    <a href="#" class="btn btn-primary buy-now-btn"><i class="fas fa-shopping-cart"></i> Buy</a>
                </div>
            `;
            productGrid.appendChild(card);
        });
        attachModalEvents();
    }

    function renderBestDeals() {
        // AI Logic filters for high discount metrics or elite AI validation score
        const optimalDeals = productDatabase.filter(p => (p.basePrice - p.discountPrice) > 100 || p.aiScore >= 95).slice(0, 2);
        bestDealsContainer.innerHTML = "";
        
        optimalDeals.forEach(deal => {
            const calculatedSavings = deal.basePrice - deal.discountPrice;
            const dealCard = document.createElement("div");
            dealCard.className = "card deal-card";
            dealCard.innerHTML = `
                <span class="badge badge-success badge-ribbon">Save $${calculatedSavings}</span>
                <img src="${deal.image}" alt="${deal.name}" class="deal-image">
                <div class="deal-info">
                    <h3 class="product-title">${deal.name}</h3>
                    <div class="rating-layer">${generateStars(deal.rating)}</div>
                    <div class="price-block">
                        <span class="original-price">$${deal.basePrice}</span>
                        <span class="current-price" style="color: var(--accent-secondary);">$${deal.discountPrice}</span>
                    </div>
                    <div>
                        <button class="btn btn-primary compare-trigger" data-id="${deal.id}"><i class="fas fa-bolt"></i> View Store Engine Drop</button>
                    </div>
                </div>
            `;
            bestDealsContainer.appendChild(dealCard);
        });
    }

    function generateStars(rating) {
        let starsHtml = "";
        const floor = Math.floor(rating);
        for(let i=0; i<5; i++) {
            if(i < floor) starsHtml += `<i class="fas fa-star"></i>`;
            else if(i === floor && rating % 1 !== 0) starsHtml += `<i class="fas fa-star-half-alt"></i>`;
            else starsHtml += `<i class="far fa-star"></i>`;
        }
        return starsHtml;
    }

    // --- Dynamic Filters & Analytical Engine Search ---
    function filterEngine() {
        const query = searchInput.value.toLowerCase().trim();
        const budgetLimit = parseFloat(budgetInput.value) || Infinity;
        const selectedCat = categorySelect.value;

        const filtered = productDatabase.filter(product => {
            const matchQuery = product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
            const matchBudget = product.discountPrice <= budgetLimit;
            const matchCategory = selectedCat === "all" || product.category === selectedCat;
            return matchQuery && matchBudget && matchCategory;
        });

        // Dynamic Subheading UI status update
        if (query || budgetLimit !== Infinity || selectedCat !== "all") {
            resultsHeading.textContent = `AI Analysis Results (${filtered.length} Items Found)`;
        } else {
            resultsHeading.textContent = "Recommended for You";
        }

        renderProducts(filtered);
    }

    // --- Modal Actions Ecosystem ---
    function attachModalEvents() {
        document.querySelectorAll(".compare-trigger").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const pId = parseInt(e.currentTarget.getAttribute("data-id"));
                const targetProduct = productDatabase.find(p => p.id === pId);
                if(targetProduct) launchComparisonModal(targetProduct);
            });
        });
    }

    function launchComparisonModal(product) {
        modalProductName.textContent = `Live Analysis: ${product.name}`;
        compareTableBody.innerHTML = "";
        
        product.stores.forEach(store => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${store.name}</strong></td>
                <td><span class="current-price" style="font-size:1.1rem;">$${store.price}</span></td>
                <td><span class="badge badge-success">${store.discount} Off</span></td>
                <td><small>${store.delivery}</small></td>
                <td>
                    ${store.best ? `<span class="badge badge-ai" style="margin-right:8px;"><i class="fas fa-award"></i> Optimal</span>` : ''}
                    <a href="#" class="btn btn-primary buy-now-btn" style="padding: 6px 14px; font-size:0.8rem;">Go to Store</a>
                </td>
            `;
            compareTableBody.appendChild(tr);
        });
        compareModal.style.display = "flex";
    }

    // Modal Close Triggers
    closeModalBtn.addEventListener("click", () => compareModal.style.display = "none");
    window.addEventListener("click", (e) => { if(e.target === compareModal) compareModal.style.display = "none"; });

    // --- Event Listeners Engine ---
    aiApplyBtn.addEventListener("click", filterEngine);
    searchInput.addEventListener("input", filterEngine);

    // Dark/Light Toggle Logic
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const isLight = document.body.classList.contains("light-mode");
        themeToggle.innerHTML = isLight ? `<i class="fas fa-moon"></i>` : `<i class="fas fa-sun"></i>`;
    });

    // Mobile Navigation Drawer Toggle
    mobileMenuBtn.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
        mobileMenuBtn.innerHTML = navLinksContainer.classList.contains("active") ? `<i class="fas fa-times"></i>` : `<i class="fas fa-bars"></i>`;
    });

    // Navigation Links Auto-Collapse
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("active");
            mobileMenuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
        });
    });

    // Scroll Events Management Layer
    window.addEventListener("scroll", () => {
        // Sticky Header / Scroll Active Link Highlights
        const scrollPos = window.scrollY;
        if(scrollPos > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // --- Contact Form Structural Validation ---
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let isFormValid = true;

        const inputs = contactForm.querySelectorAll("input[required], textarea[required]");
        inputs.forEach(input => {
            const group = input.parentElement;
            if(!input.value.trim()) {
                group.classList.add("invalid");
                isFormValid = false;
            } else if(input.type === "email" && !validateEmail(input.value)) {
                group.classList.add("invalid");
                isFormValid = false;
            } else {
                group.classList.remove("invalid");
            }
        });

        if(isFormValid) {
            alert("Success! Your consultation request has been parsed by our team.");
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Run Initial Layout Builders
    renderProducts(productDatabase);
    renderBestDeals();
});