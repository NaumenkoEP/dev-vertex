document.addEventListener("DOMContentLoaded", function () {
    // Header Text
    document.getElementById("site-title").innerHTML = "Dev Vertex";
    document.getElementById("nav-about").innerText = "About";
    document.getElementById("nav-products").innerText = "Products";
    document.getElementById("nav-contact").innerText = "Contact";

    // Hero Section
    document.getElementById("hero-title-white").innerText = "We Build";
    document.getElementById("hero-title-main").innerText = "Digital Excellence";
    document.getElementById("hero-subtitle").innerHTML = "Elevate your business with high-performance websites, seamless UX, <br> and cutting-edge designs.";
    document.getElementById("btn-get-started").innerText = "Get Started";
    document.getElementById("btn-learn-more").innerText = "Learn More";

    // About Section
    document.getElementById("about-title-1").innerText = "What Do We Do?";
    document.getElementById("about-text-1").innerText = "As a leading web agency, we specialize in delivering comprehensive, high-quality web development solutions tailored to your unique business or personal needs.";

    document.getElementById("about-title-2").innerText = "Why Choose Us?";
    document.getElementById("about-text-2").innerHTML = `
        ✔ Customized Solutions to Meet Your Unique Needs <br>
        ✔ Lightning-Fast Delivery 1-30 Calendar Days <br>
        ✔ Round-the-Clock Support, Anytime You Need Us <br>
        ✔ Unbeatable Value: High Quality at Affordable Prices
    `;

    document.getElementById("records-title").innerText = "Personal Records";
    document.getElementById("records-text").innerHTML = `
        • 96% of our clients recommend our services<br>
        • 500+ websites were built for businesses <br>
        • Serving clients for over 3 years in this industry<br>
    `;

    document.getElementById("products-title").innerText = "Websites";

    // Function to dynamically create product cards
    function renderProducts(productsArray, containerId) {
        const container = document.getElementById(containerId);
        productsArray.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("products-card");

            productCard.innerHTML = `
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <h1 class="price-tag">${product.price}</h1>
            <div>${product.details.join("<br>")}</div>
            <a target="_blank" href="product.html"><button onclick="redirectToProductPage('${product.name}')">Get Started</button></a>
        `;
            container.appendChild(productCard);
        });
    }

    // Insert Regular and Specialized Products into the page
    renderProducts(products, "products-grid", 1);

    // Create a specialized products section dynamically
    const specializedHeader = document.createElement("div");
    specializedHeader.classList.add("products-header");
    specializedHeader.innerHTML = `
        <span class="products-outline"></span>
        <h1>Specialized</h1>
        <span class="products-outline"></span>
    `;

    document.getElementById("products").appendChild(specializedHeader);

    // Create a new grid container for specialized products
    const specializedGrid = document.createElement("div");
    specializedGrid.classList.add("products-grid");
    specializedGrid.id = "specialized-products-grid";

    document.getElementById("products").appendChild(specializedGrid);

    // Insert specialized products
    renderProducts(specializedProducts, "specialized-products-grid");
    
    document.querySelector(".contact-header h1").innerText = "Get In Touch";
    document.querySelector(".contact-header p").innerText = `Want to get in touch? We'd love to hear from you, here is how you can reach us:`;
    document.querySelector(".contact-card1").innerHTML = `
        <img src="img/phone-label.png" class="contact-card-label-phone">
        <h1>Talk to support</h1>
        <p>
            Have unanswered questions? Just pick up the 
            phone and give us a call. We are here to help!
        </p>
        <p>+30 698 193 73 60</p>
    `;
    document.querySelector(".contact-card2").innerHTML = `
        <img src="img/mail-label.png" class="contact-card-label-mail">
        <h1 class="R16">Send us an Email</h1>
        <p>
            Have any questions? Just send us an email, 
            and we will get back to you as soon as possible. 
        </p>
        <p>info@devvertex.com</p>
    `;
});

const redirectToProductPage = (productName) => {
    let cleanedStr = productName.replace(/[-\s]/g, "");
    let product;
    for(let i = 0; i < productsFull.length; i++){
        if(productsFull[i].id === cleanedStr){
            product = productsFull[i];
            break;
        }
    }
    let productGetter = productName
    localStorage.setItem("productGetter", JSON.stringify(productGetter))
    localStorage.setItem(productName, JSON.stringify(product));
}

const handleNavMenu = () => {
    if (this.window.innerWidth <= 1500) {
        this.document.querySelector("header div").innerHTML = `
            <img src='img/bars.png' class='bars-button'>
        `;
        document.querySelector(".bars-button").addEventListener("click", toggleNavMenu);
        this.document.querySelector("header h1").style.textWrap = "nowrap"

        const header = document.querySelector("header");
        const mobileMenu = document.querySelector(".mobile-menu");
        const headerHeight = window.getComputedStyle(header).height;
        mobileMenu.style.top = headerHeight;
        
        if(this.window.innerWidth <= 1000){
            this.document.querySelector("header").style.gridTemplateColumns = "30vw 18vw"
            this.document.querySelector("header").style.gap = "52vw"
        }
    } else if (this.window.innerWidth > 1500) {
        this.document.querySelector("header div").innerHTML = `
            <nav>
                <a href="#about" id="nav-about">Products</a>
                <a href="#products" id="nav-products">About</a>
                <a href="#contact" id="nav-contact">Contact</a>
            </nav>
        `;
        mobileMenu.style.display = "none"
        menuOpen = false;
    }
}

window.addEventListener("resize", handleNavMenu);
document.addEventListener("DOMContentLoaded", () => {
    handleNavMenu();
    console.log("Window loaded, checking for correct nav settings.");
});

setInterval(function(){
    console.log(window.innerWidth)
}, 100)


let menuOpen = false;
let mobileMenu = document.querySelector(".mobile-menu");
const toggleNavMenu = () => {
    if (!menuOpen) {
        mobileMenu.style.display = "flex";
        menuOpen = true;
    } else {
        mobileMenu.style.display = "none";
        menuOpen = false;
    }
};
