
    $(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.go-top').fadeIn();
            } else {
                $('.go-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('.go-top').click(function () {
            $('.go-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('.go-top').tooltip('show');
});