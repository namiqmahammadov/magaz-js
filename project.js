let shopGoods = [
    {
        "store_name": "Moda Dünyası",
        "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
        "products": [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        "store_name": "Zərif Moda",
        "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
        "products": [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        "store_name": "Əliyev Moda Mərkəzi",
        "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
        "products": [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
]

function showAllProducts() {
    console.log("Mağaza məhsulları:");
    for (let shop of shopGoods) {
        console.log("Mağaza adı:", shop.store_name);
        console.log("Ünvan:", shop.store_address);
        console.log("Məhsullar:");
        for (let product of shop.products) {
            console.log("Məhsul adı:", product.product_name);
            console.log("Təsviri:", product.product_description);
            console.log("Qiyməti:", product.product_price);
            console.log("-----------------------------");
        }
    }
}
function showAllProductsForBuyer() {
    showAllProducts();
}
function findProductByName(productName) {
    for (let shop of shopGoods) {
        for (let product of shop.products) {
            if (product.product_name === productName) {
                console.log("Məhsul adı:", product.product_name);
                console.log("Təsviri:", product.product_description);
                console.log("Qiyməti:", product.product_price);
                console.log("Mağaza adı:", shop.store_name);
                return;
            }
        }
    }
    console.log("Bu adla məhsul tapılmadı.");
}
function findProductForBuyer(productName) {
    findProductByName(productName);
}

function removeProduct(productName) {
    for (let shop of shopGoods) {
        for (let i = 0; i < shop.products.length; i++) {
            if (shop.products[i].product_name === productName) {
                shop.products.splice(i, 1);
                console.log(productName, "adlı məhsul silindi. Mallarin siyahisindan silindiyine baxa bilersiniz");
                return;
            }
        }
    }
    console.log("Bu adla məhsul tapılmadı.");
}

function changeProductPrice(productName, newPrice) {
    for (let shop of shopGoods) {
        for (let product of shop.products) {
            if (product.product_name === productName) {
                product.product_price = newPrice;
                console.log(productName, "məhsulunun yeni qiyməti:", newPrice);
                return;
            }
        }
    }
    console.log("Bu adla məhsul tapılmadı.");
}

function addNewProduct(newProduct) {
    shopGoods[0].products.push(newProduct);
    console.log("Yeni məhsul əlavə edildi:", newProduct.product_name, newProduct.product_description, newProduct.product_price);
}

function sortProductsByPrice(order) {
    for (let shop of shopGoods) {
        shop.products.sort((a, b) => {
            if (order === "artan") {
                return a.product_price - b.product_price;
            } else if (order === "azalan") {
                return b.product_price - a.product_price;
            }
        });
    }
    console.log("Məhsullar qiymətə görə sıralandı, Mallarin siyasindan baxa bilersiniz");
}

function sortProductsForBuyer(order) {
    sortProductsByPrice(order);
}


let productOfClient = [];
function addToCart(productName) {
    for (let shop of shopGoods) {
        for (let i = 0; i < shop.products.length; i++) {
            if (shop.products[i].product_name === productName) {
                productOfClient.push(shop.products[i].product_name,shop.products[i].product_description,shop.products[i].product_price);
                console.log(productOfClient);
            }
        }
    }
}

function showCart() {
    let finalPrice = 0;

    console.log(productOfClient);
    for(let i = 0; i<productOfClient.length; i++){
        if(typeof productOfClient[i] === 'number'){
            finalPrice += productOfClient[i];
        }
    }
    console.log('aldiginiz mehsullarin cemi qiymeti: ' + finalPrice);
}

function mainMenu() {
    while (true) {
        let responsibility = prompt('admin yoxsa musterisiniz? \n1.admin \n2.musteri \n0. proqramdan cixin');

        switch (responsibility) {
            case '1':
                let action = prompt("Zəhmət olmasa etmək istədiyiniz əməliyyatı seçin:\n1. Bütün malları göstər\n2. Məhsul axtar\n3. Malları qiymətə görə sırala\n4. Məhsul əlavə et\n5. Məhsulu sil\n6. Məhsul qiymətini dəyiş");

                switch (action) {
                    case "1":
                        showAllProductsForBuyer();
                        break;
                    case "2":
                        let productName = prompt("Axtardığınız məhsulun adını daxil edin:");
                        findProductForBuyer(productName);
                        break;
                    case "3":
                        let order = prompt("Qiyməti necə sıralamaq istəyirsiniz? (artan/azalan):");
                        sortProductsForBuyer(order);
                        break;
                    case "4":
                        let stIndex = prompt('hansi magazaya elave olunsun? \n1.Moda dunyasi \n2. Zerif moda \n3.Əliyev Moda Mərkəzi \nYazi ile daxil edin');
                        let name = prompt('product name daxil edin');
                        let desc = prompt('product description daxil edin');
                        let price = prompt('qiymetini daxil edin');
                        let newProduct = {
                            "product_name": name,
                            "product_description": desc,
                            "product_price": price
                          };
                          console.log(stIndex + " magazasina:")
                        addNewProduct(newProduct);
                        break;
                    case "5":
                        let proName = prompt('silinecek olan mehsulun adini daxil edin')
                        removeProduct(proName);

                        break;
                    case "6":
                        let proName2 = prompt('silinecek olan mehsulun adini daxil edin')
                        let newpr = prompt('yeni qiymeti daxil edin');
                        changeProductPrice(proName2,newpr);
                        break;
                    default:
                        console.log("Düzgün əməliyyat seçilməyib. Zəhmət olmasa yenidən cəhd edin.");
                }
                break;
            case '2':
                let action2 = prompt("Zəhmət olmasa etmək istədiyiniz əməliyyatı seçin:\n1. Bütün malları göstər\n2. Məhsul axtar\n3. Malları qiymətə görə sırala\n4. Sebetinize Məhsul əlavə et\n5. Aldiqlariniza baxin");

                switch (action2) {
                    case "1":
                        showAllProductsForBuyer();
                        break;
                    case "2":
                        let productName = prompt("Axtardığınız məhsulun adını daxil edin:");
                        findProductForBuyer(productName);
                        break;
                    case "3":
                        let order = prompt("Qiyməti necə sıralamaq istəyirsiniz? (artan/azalan):");
                        sortProductsForBuyer(order);
                        break;
                    case "4":
                        let proName3 = prompt('almaq istediyiniz mehsulu secin')
                        addToCart(proName3);
                        break;
                    case "5":
                        showCart();
                        break;
                    default:
                        console.log("Düzgün əməliyyat seçilməyib. Zəhmət olmasa yenidən cəhd edin.");
                        break;
                }
                break;
            case "0":
                console.log("Proqramdan cixilir.");
                return;
        }
    }
}

function startShopping() {
    mainMenu();
}



document.getElementById("startButton").addEventListener("click", function() {
    startShopping();
});
