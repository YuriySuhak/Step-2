console.log("Test");

const $goodsList = [
    {
        id: 1,
        name: "Sunbaby Magic Bear Chair",
        img: "img/products/furniture/14.png",
        price: 350,
        discountPrice: 250,
    },
    {
        id: 2,
        name: "Orange Chair",
        img: "img/products/furniture/12.png",
        price: 400,
        discountPrice: 300,
    }
];

// Шаблон для добавления товара
$(".cart-modal__list").append("<div class=\"cart-modal__goods mx-0 px-2\">\n" +
    "                    <div class=\"grid-item-1\">\n" +
    "                        <img class=\"cart-modal__goods--image\" src=\"img/products/furniture/14.png\" alt=\"14\">\n" +
    "                    </div >\n" +
    "                    <div class=\"grid-item-2\">\n" +
    "                        <a href=\"#\" class=\"cart-modal__goods--title\">Sunbaby Magic Bear Chair</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"grid-item-3\">\n" +
    "                        <span class=\"cart-modal__goods--price\">$350.00</span>\n" +
    "                        <span class=\"cart-modal__goods--discount-price\">$250.00</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"grid-item-4\">\n" +
    "                        <span class=\"cart-modal__goods--quantity-text\">Quantity:</span>\n" +
    "                        <div class=\"cart-modal__goods--quantity-number\">2</div>\n" +
    "                        <div class=\"cart-modal__goods--quantity-minus\">-</div>\n" +
    "                        <div class=\"cart-modal__goods--quantity-plus\">+</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"grid-item-5\">\n" +
    "                        <div class=\"cart-modal__goods--sum-number\">$500.00</div>\n" +
    "                    </div>\n" +
    "                </div>");

// Конец

// Вставка общей суммы в корзину
$(".cart-modal__total-amount--number").text('$' + 1000);

// Вставка количества товаров в корзине
$(".header__cart--quantity").text(2);
