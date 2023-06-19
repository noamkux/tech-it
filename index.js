import products from "/js/module/products.js";

let inStockBtn = ""
let selectedCurrency = {
    symbol: "$",
    multiBy: 1
}
let userCurrency = localStorage.getItem("userCurrency")
console.log(userCurrency);

function changeCurrency(currency) {
    switch (currency) {
        case "dolar":
            selectedCurrency.multiBy = 1
            selectedCurrency.symbol = "$"
            localStorage.setItem("userCurrency" , "dolar")
            break;

        case "euro":
            selectedCurrency.multiBy = 0.9
            selectedCurrency.symbol = "€"
            localStorage.setItem("userCurrency" , "euro")
            break;

        case "shekel":
            selectedCurrency.multiBy = 3.27
            selectedCurrency.symbol = "₪"
            localStorage.setItem("userCurrency" , "shekel")
            console.log("shekel");

            break;

    }
}

if(userCurrency){
    changeCurrency(userCurrency)
}

export function displayPopProducts() {
    for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * 26)

        document.getElementById("selectedProducts").innerHTML += `
    <div class="col-sm-4 mb-2 p-0 pt-3">
    <div class="card" style="max-width: auto; height: min-content">
    <img src="${products[randomNum + i].imageURL}" class="card-img-top" alt="${products[randomNum + i].name}" data-bs-toggle="modal" data-bs-target="#productModal${i}">
    <div class="card-body text-center">
    <h5 class="card-title m-0">${products[randomNum + i].cardDescription}</h5>
    <p class="card-text m-0">${products[randomNum + i].name}</p>
    <h2 class="card-text my-3">${(Math.round(products[randomNum + i].price * selectedCurrency.multiBy))}${selectedCurrency.symbol}</h2>
    </div>  
    </div>
    </div>
    <div class="modal fade" id="productModal${i}" tabindex="-1" aria-labelledby="productModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="productModalLabel">${products[randomNum + i].name}</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">

                                            <img src=${products[randomNum + i].imageURL} class="card-img-top"
                                                style="transition: none; padding: 5px;" alt="${products[randomNum + i].name}">
                                                <h2>${products[randomNum + i].name}</h2>
                                                <h6 class="display-6 fs-6">${products[randomNum + i].manufacturer}</h6>
                                                ${inStockBtn}
                                                <p class="text-center">${products[randomNum + i].modalDescription}</p>
                                        
                                                <h3 class="text-center display-6 fs-4 py-2">Price: ${(Math.round(products[randomNum + i].price * selectedCurrency.multiBy))}${selectedCurrency.symbol}</h3>
                                                </div>
                                                <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Add To Wish List</button>
                                            <button type="button" class="btn btn-primary">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `
        console.log(products[Math.floor(Math.random() * 29)]);

    }
}

displayPopProducts()