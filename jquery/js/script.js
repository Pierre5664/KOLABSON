/*NavMenu */
$(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

    /* Scrolling Effect NAV */

  $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      });

/*parallax */

$(function () {

    "use strict";

    var $bgobj = $(".ha-bg-parallax"); // assigning the object

    $(window).on("scroll", function () {

        var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

        // Put together our final background position

        var coords = '100% ' + yPos + 'px';

        // Move the background

        $bgobj.css({ backgroundPosition: coords });

    });
        $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
		$(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
		$(this).addClass('selected');
		$(this).find('input[type="radio"]').prop("checked", true);
		
	});

});


$('#myAlert').on('closed.bs.alert', function () {
    document.location.href="index.php#ancre2";
})



