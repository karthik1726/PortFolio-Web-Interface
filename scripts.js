$(document).ready(function(){
    $('nav ul li a').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });

    // Smooth scrolling
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
