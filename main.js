const imgBlackAndWhite = document.querySelectorAll(
    '.achieved__bottom__inner .list .item'
);

console.log(imgBlackAndWhite);

imgBlackAndWhite.forEach(element => {
    element.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.target.classList.remove('img-black-and-white');
        setTimeout(() => {
            e.target.classList.add('img-black-and-white');
        }, 3000);
    });

    // if (element.style.hover === true) {
    //     element.classList.remove('img-black-and-white');
    // }
    // else {
    //     element.classList.add('img-black-and-white');
    // }


    // element.addEventListener("mouseover", (e) => {
    //     e.preventDefault();
    //     if (element) {
    //         //cop đống kia vào và bỏ setTimeout đi
    //         element.classList.remove('img-black-and-white');
    //     }
    //     else {
    //         //cop cái dòng trong setTimeOut
    //         element.classList.add('img-black-and-white');
    //     }
    // })

});
