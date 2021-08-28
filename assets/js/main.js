const buyBtn = document.querySelectorAll('.product-item__btn-buy-red');
const modal = document.querySelector('.modalBuy');

function showModal() {
    modal.classList.add('closeModal');
}
function hideModal() {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    window.scrollTo(0, parseInt(window.scrollY));
    modal.classList.remove('closeModal');
    const child = document.querySelector(".form__product-wrapp");
    console.log(child.parentElement);
    if (child.parentElement) {
        child.parentElement.removeChild(child);
    }
}
//window.addEventListener('scroll', () => {
//    let scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
//    scrollY = this.scrollY;
//    console.log(scrollY);

//});
function detailModal(event) {
    const button = event.target;
    console.log(button);
    const cartItem = button.parentElement.parentElement.parentElement;
    const name = cartItem.querySelectorAll('p')[0].innerText;
    const price = cartItem.querySelectorAll('.product-item__price-new')[0].innerText;
    const url = cartItem.querySelectorAll('.product-item__img')[0];
    const image = url.style.backgroundImage.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
    console.log(name, price, image);
    displayModal(image, name, price);
}
function displayModal(image, name, price) {
    //const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
    const main = document.getElementById('modalBuy');
    main.classList.add('closeModal');
    if (main) {
        const viewModal = document.createElement('div');
        viewModal.classList.add('modal__body', 'form__product-wrapp');
        viewModal.innerHTML = ` <div class="form__product-wrap">
                                    <form class="form__product">
                                        <i class="fa fa-times form__product-btn-close"></i>
                                        <div class="form__product-heading">
                                            <i class="fa fa-check form__heading-icons"></i>
                                            <h3 class="form__heading-text">Sản phẩm vừa đươc thêm vào giỏ hàng</h3>
                                        </div>
                                        <div class="form__product-content">
                                            <img class="form__product-content-img" src="${image}" />
                                            <div class="form__product-content-detail">
                                                <p class="form__product-text">${name}</p>
                                                <p class="form__product-price"> ${price}</p>
                                            </div>
                                        </div>
                                        <div class="form__product-input">
                                            <a class="form__product-info-link current-cart">Giỏ hàng hiên có (7) sản phẩm</a>
                                            <a class="form__product-input-checkout">Tiến hành đặt hàng</a>
                                        </div>

                                    </form>
                                </div>`;

        main.appendChild(viewModal);
        const closeModal = document.querySelector('.form__product-btn-close');
        closeModal.addEventListener('click', hideModal);

    }

}

for (var i = 0; i < buyBtn.length; i++) {
    const btnBuy = buyBtn[i];
    //btnBuy.addEventListener('click', showModal);
    btnBuy.addEventListener('click', detailModal);
}

