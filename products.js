
class Product {
    constructor(name, category, manufacturer, cardDescription, modalDescription, price, stock, imageURL, display) {
        this.name = name
        this.category = category
        this.manufacturer = manufacturer
        this.cardDescription = cardDescription
        this.modalDescription = modalDescription
        this.price = price
        this.stock = stock
        this.imageURL = imageURL
        this.display = display
    }
}
let products = [
    new Product(
        "iPhone 13 Pro",
        "Phone",
        "Apple",
        "Powerful and feature-packed smartphone.",
        "The iPhone 13 Pro is the latest flagship phone from Apple, offering a stunning display, advanced camera system, and blazing-fast performance.",
        1299,
        true,
        "media/products/iphone_13_midnight.png",
        true,
    ),
    new Product(
        "MacBook Pro",
        "Laptop",
        "Apple",
        "High-performance laptop for professionals.",
        "The MacBook Pro is designed for professionals who require top-notch performance and reliability. It features a sleek design, brilliant Retina display, and powerful processors.",
        1999,
        false,
        "media/products/MacBook-Pro-14-inch-M1.webp",
        true
    ),
    new Product(
        "Dell XPS 13",
        "Laptop",
        "Dell",
        "Ultra-portable and powerful laptop.",
        "The Dell XPS 13 is a compact and lightweight laptop that doesn't compromise on performance. It features a borderless display, long battery life, and impressive processing power.",
        1399,
        true,
        "media/products/dell-xps-13.jpg",
        true
    ),
    new Product(
        "Sony PlayStation 5",
        "Gaming Console",
        "Sony",
        "Next-generation gaming console.",
        "The Sony PlayStation 5 revolutionizes gaming with its powerful hardware, immersive graphics, and lightning-fast loading times. Get ready for the ultimate gaming experience.",
        499,
        true,
        "media/products/ps-5.jpg",
        true
    ),
    new Product(
        "LG OLED TV",
        "TV",
        "LG",
        "Stunning picture quality in a sleek design.",
        "Experience breathtaking visuals with the LG OLED TV. Its perfect blacks, vibrant colors, and incredible contrast create an immersive viewing experience like no other.",
        1999,
        false,
        "media/products/lg-oled.webp",
        true
    ),
    new Product(
        "Google Pixel 6",
        "Phone",
        "Google",
        "Capture moments like never before.",
        "The Google Pixel 6 is equipped with a cutting-edge camera system that captures stunning photos and videos in any lighting condition. It also offers a seamless and intuitive user experience.",
        899,
        true,
        "media/products/pixel-6.jpg",
        true
    ),
    new Product(
        "HP Spectre x360",
        "Laptop",
        "HP",
        "Versatile and stylish convertible laptop.",
        "The HP Spectre x360 combines the power of a laptop with the flexibility of a tablet. Its sleek design, long battery life, and high-performance components make it perfect for productivity and creativity.",
        1499,
        false,
        "media/products/Spectre-x360-14-ea0000nj.jpeg",
        true
    ),
    new Product(
        "Bose QuietComfort 35 II",
        "Headphones",
        "Bose",
        "Immersive noise-canceling headphones.",
        "Experience true audio bliss with the Bose QuietComfort 35 II. These wireless headphones provide exceptional noise cancellation, rich sound, and a comfortable fit for long listening sessions.",
        349,
        true,
        "media/products/boseqc45.webp",
        true
    ),
    new Product(
        "Nintendo Switch",
        "Gaming Console",
        "Nintendo",
        "Gaming on the go.",
        "The Nintendo Switch is a versatile gaming console that allows you to play your favorite games at home or on the go. With its unique design and expansive game library, it offers endless entertainment.",
        299,
        true,
        "media/products/nintendo-switch.jpg",
        true
    ),

    new Product(
        "Samsung Galaxy S21",
        "Phone",
        "Samsung",
        "Stylish and innovative smartphone.",
        "The Samsung Galaxy S21 is a flagship phone with a stunning design, powerful performance, and an exceptional camera system. Experience the latest technology in the palm of your hand.",
        1099,
        true,
        "media/products/galaxy-s23.png",
        true
    ),
    new Product(
        "Sony WH-1000XM4",
        "Headphones",
        "Sony",
        "Premium wireless noise-canceling headphones.",
        "The Sony WH-1000XM4 headphones deliver industry-leading noise cancellation, exceptional audio quality, and smart features. Immerse yourself in your music with these top-of-the-line headphones.",
        349,
        false,
        "media/products/Sony-WH-1000XM4.webp",
        true
    ),
    new Product(
        "Canon EOS R5",
        "Camera",
        "Canon",
        "Revolutionary mirrorless camera.",
        "The Canon EOS R5 is a game-changing mirrorless camera that pushes the boundaries of what's possible in photography and videography. Capture stunning images and videos with this state-of-the-art camera.",
        3899,
        false,
        "media/products/canon.jpg",
        true
    ),
    new Product(
        "Fitbit Versa 3",
        "Fitness Tracker",
        "Fitbit",
        "Advanced fitness and health tracking.",
        "The Fitbit Versa 3 is a versatile fitness tracker that monitors your heart rate, tracks your workouts, and provides insights into your sleep and overall health. Stay motivated and achieve your fitness goals.",
        229,
        true,
        "media/products/starligh-sport-band.jpg",
        true
    ),
    new Product(
        "Samsung Galaxy S22",
        "Phone",
        "Samsung",
        "Cutting-edge smartphone with advanced features.",
        "The Samsung Galaxy S22 is a flagship phone that offers a sleek design, powerful performance, and a range of innovative features. Stay connected and enjoy a seamless mobile experience.",
        1199,
        true,
        "media/products/samsungGalaxyS22.webp",
        true
    ),
    new Product(
        "Lenovo ThinkPad X1 Carbon",
        "Laptop",
        "Lenovo",
        "Ultra-light and durable business laptop.",
        "The Lenovo ThinkPad X1 Carbon is a premium laptop designed for professionals on the go. It combines high-performance hardware with a sleek and lightweight design, making it perfect for productivity.",
        1699,
        false,
        "media/products/lenovoThinkPadX1Carbon.webp",
        true
    ),
    new Product(
        "Amazon Echo Show 10",
        "Smart Speaker",
        "Amazon",
        "Smart speaker with a rotating display.",
        "The Amazon Echo Show 10 features a 10.1-inch HD screen that automatically rotates to face you, making it perfect for video calls and watching content. Enjoy hands-free voice control and access to a world of information.",
        249,
        true,
        "media/products/amazonEchoShow10.jpg",
        true
    ),
    new Product(
        "Microsoft Surface Pro 8",
        "Tablet",
        "Microsoft",
        "Versatile tablet with laptop-like performance.",
        "The Microsoft Surface Pro 8 is a powerful and versatile tablet that can replace your laptop. With its high-resolution display, fast processors, and extensive battery life, it's perfect for work and entertainment.",
        1299,
        true,
        "media/products/MicrosoftSurfacePro8.jpg",
        true
    ),
    new Product(
        "GoPro HERO10 Black",
        "Action Camera",
        "GoPro",
        "Capture stunning action footage.",
        "The GoPro HERO10 Black is a high-performance action camera that delivers exceptional image quality and smooth video stabilization. With its advanced features and rugged design, it's the perfect companion for adventure seekers.",
        399,
        true,
        "media/products/goProHERO10Black.png",
        true
    ),
    new Product(
        "Sony A7 IV",
        "Camera",
        "Sony",
        "Full-frame mirrorless camera for professionals.",
        "The Sony A7 IV is a professional-grade mirrorless camera that combines high-resolution image sensors with advanced autofocus and shooting capabilities. Capture stunning photos and videos with unmatched clarity and detail.",
        2999,
        false,
        "media/products/sonyA7IV.jpg",
        true
    ),
    new Product(
        "Apple Watch Series 8",
        "Smartwatch",
        "Apple",
        "The ultimate smartwatch with advanced health and fitness features.",
        "The Apple Watch Series 8 is packed with innovative features that help you stay connected, track your workouts, monitor your health, and more. With its sleek design and powerful performance, it's the perfect companion for your active lifestyle.",
        399,
        true,
        "media/products/appleWatchSeries8.jpg",
        true
    ),
    new Product(
        "Samsung Odyssey G9",
        "Gaming Monitor",
        "Samsung",
        "Immersive gaming monitor with a curved display.",
        "The Samsung Odyssey G9 is a gaming monitor that offers a stunning 49-inch curved display, high refresh rates, and HDR support. Experience gaming like never before with this immersive and visually impressive monitor.",
        1499,
        true,
        "media/products/samsungOdysseyG9.jpg",
        true
    ),
    new Product(
        "Sony WH-1000XM5",
        "Headphones",
        "Sony",
        "Premium wireless noise-canceling headphones.",
        "The Sony WH-1000XM5 headphones build upon the success of their predecessor with even better noise cancellation, improved sound quality, and enhanced comfort. Immerse yourself in your favorite music with these top-of-the-line headphones.",
        399,
        true,
        "media/products/sonyWH-1000XM5.webp",
        true
    ),
    new Product(
        "Canon EOS R6",
        "Camera",
        "Canon",
        "Versatile mirrorless camera for photography and videography.",
        "The Canon EOS R6 is a highly capable mirrorless camera that delivers exceptional image quality, fast autofocus, and impressive video capabilities. Whether you're capturing stunning photos or shooting professional-quality videos, this camera won't disappoint.",
        2499,
        false,
        "media/products/canonEOSR6.jpg",
        true
    ),
    new Product(
        "Bose SoundLink Revolve+",
        "Bluetooth Speaker",
        "Bose",
        "360-degree portable Bluetooth speaker with impressive sound.",
        "The Bose SoundLink Revolve+ offers true 360-degree sound that fills any room with deep and immersive audio. With its durable design and long battery life, you can take your music wherever you go.",
        299,
        true,
        "media/products/boseSoundLinkRevolve+.jpg",
        true
    ),
    new Product(
        "Microsoft Xbox Series X",
        "Gaming Console",
        "Microsoft",
        "Next-generation gaming console with powerful performance.",
        "The Microsoft Xbox Series X is designed to deliver stunning graphics, fast load times, and smooth gameplay. Immerse yourself in a world of gaming with this high-performance console.",
        499,
        true,
        "media/products/MicrosoftXboxSeriesX.jpg",
        true
    ),
    new Product(
        "Amazon Kindle Oasis",
        "E-Reader",
        "Amazon",
        "Premium e-reader with a high-resolution display.",
        "The Amazon Kindle Oasis offers a premium reading experience with its high-resolution display and adjustable warm light. With its lightweight design and long battery life, you can enjoy your favorite books for hours on end.",
        279,
        true,
        "media/products/amazonKindleOasis.webp",
        true
    ),
    new Product(
        "Nikon Z7 II",
        "Camera",
        "Nikon",
        "Professional mirrorless camera with exceptional image quality.",
        "The Nikon Z7 II is a powerful mirrorless camera that features a high-resolution sensor, advanced autofocus, and robust build quality. Capture every detail with stunning clarity and take your photography to new heights.",
        2999,
        false,
        "media/products/nikonZ7II.png",
        true
    ),
    new Product(
        "Fitbit Charge 5",
        "Fitness Tracker",
        "Fitbit",
        "Advanced fitness tracker with health monitoring features.",
        "The Fitbit Charge 5 is a feature-packed fitness tracker that helps you track your activity, monitor your heart rate, and manage your stress levels. With its sleek design and long battery life, it's the perfect companion for your fitness journey.",
        179,
        true,
        "media/products/fitbitCharge5.webp",
        true
    ),
    new Product(
        "Sony BRAVIA XR A90J",
        "TV",
        "Sony",
        "High-end OLED TV with stunning picture quality.",
        "The Sony BRAVIA XR A90J is a top-of-the-line OLED TV that offers incredible contrast, vibrant colors, and impressive HDR performance. Immerse yourself in a cinematic viewing experience with this premium television.",
        2999,
        false,
        "media/products/sonyBRAVIAXRA90J.webp",
        true
    )
];
let selectedCurrency = {
    symbol: "$",
    multiBy: 1
}
let searchInput = document.getElementById("searchInput");
let displayedProductsAmount = 0
let inStockBtn = ""
let categoryList = []
let currentCategory

function displayProductsInCards() {
    displayedProductsAmount = 0
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock) {
            inStockBtn = ` <span class="badge rounded-pill text-bg-success mb-3">In Stock</span>
        `
        }
        else inStockBtn = `<span class="badge rounded-pill text-bg-danger mb-3">Out Of Stock</span>`;

        if (products[i].display) {
            displayedProductsAmount++
            document.getElementById("products").innerHTML += `

            <div class="col-lg-4 mb-2 d-flex justify-content-center p-0 pt-3">
                <div class="card" style="width: 18rem;">
                    <img src="${products[i].imageURL}" data-bs-toggle="modal" data-bs-target="#productModal${i}" class="card-img-top" alt="${products[i].name}">
                        <div class="card-body">
                            <h5 class="card-title text-center">${products[i].name}</h5>
                            <p class="card-text text-center">${products[i].cardDescription}</p>
                            
                        <h3 class="text-center display-6 fs-4 py-2">Price:${(Math.round(products[i].price * selectedCurrency.multiBy))}${selectedCurrency.symbol}</h3>
                            <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal"
                                data-bs-target="#productModal${i}"}">
                                Click Here For More
                            </button>
                            <div class="modal fade" id="productModal${i}" tabindex="-1" aria-labelledby="productModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="productModalLabel">${products[i].name}</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">

                                            <img src=${products[i].imageURL} class="card-img-top"
                                                style="transition: none; padding: 5px;" alt="${products[i].name}">
                                                <h2>${products[i].name}</h2>
                                                <h6 class="display-6 fs-6">${products[i].manufacturer}</h6>
                                                ${inStockBtn}
                                                <p class="text-center">${products[i].modalDescription}</p>
                                        
                                                <h3 class="text-center display-6 fs-4 py-2">Price: ${(Math.round(products[i].price * selectedCurrency.multiBy))}${selectedCurrency.symbol}</h3>
                                                </div>
                                                <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Add To Wish List</button>
                                            <button type="button" class="btn btn-primary">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            `
        }


    }

    if (document.getElementById("products").innerHTML == "") {
        document.getElementById("products").innerHTML = `<h1 class="text-center p-5 m-5 ">Oops It Seems That We Cant Find Whay you liking for
        <h2 class="text-center mb-5">Try Looking For Somthing Else</h2>
        </h1>`

    }

    document.getElementById("productsLength").innerText = displayedProductsAmount
}

if (localStorage.getItem("userCurrency")) {
    currency = localStorage.getItem("userCurrency")}

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

    displayProductsInCards()
    resetDom()

}
function sortBy(sortMethod) {
    if (sortMethod == "priceUp") {
        products.sort((a, b) => a.price - b.price);
        resetDom()
    }
    if (sortMethod == "priceDown") {
        products.sort((a, b) => b.price - a.price);
        resetDom()
    }
    if (sortMethod == "alphabetical") {
        products.sort((a, b) => a.name.localeCompare(b.name));
        resetDom()
    }

}
function resetDom() {
    document.getElementById("products").innerHTML = ""
    searchInput.innerHTML.value = ""
    displayProductsInCards()
}
function performSearch() {
    products.forEach(product => {
        product.display = false

    });
    products.map(product => {
        if (product.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            product.category.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            product.manufacturer.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            product.cardDescription.toLowerCase().includes(searchInput.value.toLowerCase())) {
            product.display = true

        }
        if (product.category != currentCategory && currentCategory) {
            product.display = false
        }
    })


    resetDom()
}
function categorysToSort() {
    // Initialize an empty array to store categories
    for (let i = 0; i < products.length; i++) {
        if (!categoryList.includes(products[i].category)) {
            categoryList.push(products[i].category); document.getElementById("categoryToSort").innerHTML += `
            <li><a class="dropdown-item" onclick="sortByCategory('${products[i].category}')">${products[i].category}</a></li>
        `;

        }
    }
}
function sortByCategory(category) {
    currentCategory = category
    products.forEach(product => {
        product.display = false

    });
    products.map(product => {
        if (
            product.category == (category)) {
            product.display = true
            console.log(products)

        }

    })
    console.log(currentCategory);
    resetDom()
}

// function populerProducts() {
//     for (let i = 0; i < products.length; i++) {
//         document.getElementById("populerProducts").innerHTML += `
//         <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${products[i].name}</h5>
//           <p class="card-text">${products[i].modalDescription}</p>
//         </div>
//       </div>    
//         `

//     }
// }

displayProductsInCards()
changeCurrency()
// populerProducts()
categorysToSort()
