function reset () {

};

jQuery(function($) {

$('#opleiding').click(
		function(event) { 
			$("#opleidingsubnav").slideToggle('medium');
			
		}
	);

$('#stages').click(
		function(event) { 
			$("#stagesubnav").slideToggle('medium');
			
		}
	);


$(document).ready(function(){

var navcontainer = $('#menu');
        $(window).resize(function(){

            var width = $(window).width();

            if (width > 699 && navcontainer.is(':hidden')){

                navcontainer.removeAttr('style');

            }

        });


});

});
