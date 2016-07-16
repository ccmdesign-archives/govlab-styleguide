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


    // Modal Click Behavior
    
    $('.js-open-modal').click(function() {
        $('.js-target-modal').addClass('js-active');
        $('#overlay').addClass('js-active');
        $('body').addClass('js-body-modal-active');
    });

    $('.js-close-modal').click(function() {
        $('.js-target-modal').removeClass('js-active');
        $('#overlay').removeClass('js-active');
        $('body').removeClass('js-body-modal-active');
    });


    // Sticky Click Behavior
    $('.js-close-sticky').click(function() {
        $('.js-target-sticky').removeClass('js-active');
    });

    
    $('#overlay').click(function() {
        $('.js-active').removeClass('js-active');
    });


}); // doc.ready
