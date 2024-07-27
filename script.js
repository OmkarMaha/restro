const menuItemsContainer = document.getElementById('menuItems');
const menuItems = [
    {
        "title": "Chicken Burger",
        "price": "$5.99/-",
        "image": "https://www.recipetineats.com/tachyon/2019/08/Avocado-Chicken-Burgers_9.jpg"
    },
    {
        "title": "Pizza",
        "price": "$8.99/-",
        "image": "https://img.freepik.com/foto-gratis/deliciosa-pizza-interior_23-2150873912.jpg"
    },
    {
        "title": "Tacos",
        "price": "$3.99/-",
        "image": "https://t4.ftcdn.net/jpg/06/31/89/01/360_F_631890122_2PdSK3qD8cn66cK8BIUMSXKiX7GRunFi.jpg"
    },
    {
        "title": "Ramen",
        "price": "$9.49/-",
        "image": "https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22.jpg"
    },
    {
        "title": "Club Sandwich",
        "price": "$6.99/-",
        "image": "https://www.eatingwell.com/thmb/N-JCkp8CernBl6roHb3HNuZ2aCk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/loaded-veggie-club-sandwich-7994591-step-1x1-c779776e14814acc9503d4e48544863d.jpg"
    },
    {
        "title": "Icecream Flavour",
        "price": "$3.99/-",
        "image": "https://cdn.cdnparenting.com/articles/2019/01/29111835/717444871-H-1024x700.webp"
    }
];

menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    menuItem.appendChild(image);

    const info = document.createElement('div');
    info.classList.add('menu-item-info');

    const title = document.createElement('h3');
    title.classList.add('menu-item-title');
    title.textContent = item.title;
    info.appendChild(title);

    const price = document.createElement('p');
    price.classList.add('menu-item-price');
    price.textContent = item.price;
    info.appendChild(price);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.textContent = 'Add to Cart';
    info.appendChild(addToCartBtn);

    menuItem.appendChild(info);
    menuItemsContainer.appendChild(menuItem);
});
