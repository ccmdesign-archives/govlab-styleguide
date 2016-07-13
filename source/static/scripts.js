$(document).ready(function() {
    // Smooth Scrolling Function
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var tgt = $(this.hash);
                tgt = tgt.length ? tgt : $('[name=' + this.hash.slice(1) +']');

                if (tgt.length) {
                    $('html, body').animate({
                        scrollTop: tgt.offset().top
                    }, 1000);

                    return false;
                }
            }
        });
    });

    $('.m-prev').click(function() {
        $(this).closest('.e-testimonial-item').slick('slickPrev');
    });

    $('.m-next').click(function() {
        $(this).closest('.e-testimonial-item').slick('slickNext');
    });
}); // doc.ready
