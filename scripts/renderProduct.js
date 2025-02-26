document.addEventListener("DOMContentLoaded", function () {
    let productGetter = JSON.parse(localStorage.getItem("productGetter"))
    const productObject = JSON.parse(localStorage.getItem(productGetter))

    const productCard = document.querySelector(".product")
    productCard.innerHTML = `
        <h1 class="plan-name">${productObject.name}</h1>
        <p>${productObject.description}</p>
        <h1>${productObject.price}</h1>
        <div>${productObject.details}</div>
    `

    const title = document.querySelector('title')
    title.innerText = productObject.name
});
