$.get( "./assets/php/listado.php", ( data ) => {
    let cont = 1;
    for (const item of data) {
        const element = '<div class="product-item"><div class="product-item__thumb"><a href="detail.html?id='+item.id+'"><img class="thumb-primary" src="./assets/productos/'+cont+'.jpg" alt="Product" /><img class="thumb-secondary" src="./assets/productos/'+cont+'.jpg" alt="Product" /></a></div><div class="product-item__content mt-3"><h4 class="title text-center"><a href="detail.html?id='+item.id+'">'+item.nombre+'</a></h4></div></div>';
        const fav = '<div class="product-item"><div class="product-item__thumb"><a href="detail.html?id='+item.id+'"><img class="thumb-primary" src="./assets/productos/'+cont+'.jpg" alt="Product" /><img class="thumb-secondary" src="./assets/productos/'+cont+'.jpg" alt="Product" /></a></div><div class="product-item__content mt-3"><div class="ratting"><span><i class="ion-android-star"></i></span><span><i class="ion-android-star"></i></span><span><i class="ion-android-star"></i></span><span><i class="ion-android-star"></i></span><span><i class="ion-android-star"></i></span></div><h4 class="title text-center"><a href="detail.html?id='+item.id+'">'+item.nombre+'</a></h4></div></div>';
        if (item.fav === 1) {
            $('#fav').append(fav);
        }
        $('#'+item.categoria).append('<div class="col">'+element+'</div>');
        cont++;
    }

    // Best Product Slider Js
    $(".product-carousel").slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
         prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
        responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const goSection = (id) => {
    $('html, body').animate({
        scrollTop: $("#"+id).offset().top
    }, 2000)
};