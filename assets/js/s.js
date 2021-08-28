const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".filter__list-item");
const tabActive = $$(".filter__list-item.active");
const line = $('.filter__list .line');
const line1 = $('.filter__list .line1');
const line2 = $('.filter__list .line2');

const view = $('.view__more');
const viewItems = $$('.brand__list-item');
const viewMoreText = $('.view__more-text');

const viewItem = $$('.list-item');
const collapse = $('.collapse');
const collapseText = $('.collapse-text');


 view.addEventListener("click", function () {
    viewItems.forEach((viewItem) => {
        viewItem.classList.toggle('display');
            if( viewItem.className=="brand__list-item active"){
              viewMoreText.innerHTML = ` Xem thêm <i class="fa fa-angle-down view__more-icon"></i>`;
            }
            if( viewItem.className=="brand__list-item display"){
           
                viewMoreText.innerHTML = ` Thu gọn <i class="fa fa-angle-up view__more-icon"></i>`;
                
            }
    })
    
})
collapse.addEventListener("click", function () {
    viewItems.forEach((viewItem) => {
        // const body = document.body;
        // console.log(body);
        // body.style.height = '100vh';
        // body.style.overflowY = 'hidden';
        viewItem.classList.toggle('display');
        
        
            if( viewItem.className=="brand__list-item active"){
                collapseText.innerHTML = ` Xem thêm <i class="fa fa-angle-down view__more-icon"></i>`;
            }
            if( viewItem.className=="brand__list-item display"){
           
                collapseText.innerHTML = ` Thu gọn <i class="fa fa-angle-up view__more-icon"></i>`;
                
            }
    })
    
})



tabs.forEach(tab => {
    // tab.addEventListener('mouseover', function () {

    //     line.style.left = this.offsetLeft + 'px';
    //     line.style.width = this.offsetWidth + 'px';

    tab.onclick = function () {
        $('.filter__list-item.active').classList.remove('active');
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active');

    }

});





