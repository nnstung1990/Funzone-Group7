// back to top
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#backtotop').fadeIn();
			} else {
				$('#backtotop').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#backtotop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

$(document).ready(function(){
    $('.staff').hover(
        function(){
            $(this).animate({
                marginTop: "-=5%",
            },500);
        },

        function(){
            $(this).animate({
                marginTop: "0%",
            },500);
        }
    );
});
function showinfo(){
        alert("Thanks. We acknowledge your contribution.!!!!!")
    }
$(document).ready(function(){
    $('.expr').hover(
        function(){
            $(this).animate({
                marginTop: "-=2%",
            },500);
        },

        function(){
            $(this).animate({
                marginTop: "0%",
            },500);
        }
    );
});
