function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$('.data').hide();
$('.loading').show();
var id = getParameterByName('id');
var productoName;
if (!id) {
    window.location.href = "index.html";
}
$.get( "./assets/php/listado.php", ( data ) => {
    let cont = 1;
    for (const item of data) {
        if (item.id == id) {
            productoName = item.nombre;
            $('.titlebreadcrumb').append(item.nombre);
            $('#thumb-gallery').append('<figure class="pro-thumb-item" data-mfp-src="assets/detail/'+cont+'.jpg"><img src="assets/detail/'+cont+'.jpg" alt="'+item.nombre+'" /></figure>');
            const arrayDesc = item.descripcion.split('|');
            for (const desc of arrayDesc) {
                $('#detalle').append('<p>'+desc+'</p>');
            }
        }
        cont++;
    }
    $('.data').show();
    $('.loading').hide();   
});

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#newsletter").offset().top
    }, 2000);
});