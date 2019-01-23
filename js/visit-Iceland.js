// ***************************************************		Icon hover-effect	*************************************
$('.icon').hover(function() {
	var parent = $( this ).parent();
	$( this ).addClass('animated bounceIn')
	if (parent.hasClass('wraper-first')) { parent.addClass('bg-1');}
	else if (parent.hasClass('wraper-second')) { parent.addClass('bg-2');}
 			
 }, function() {
 	var parent = $( this ).parent();
	$( this ).removeClass('animated bounceIn')
	if (parent.hasClass('wraper-first')) { parent.removeClass('bg-1');}
	else if (parent.hasClass('wraper-second')) { parent.removeClass('bg-2');}
 });

// ***************************************************	Change menu language	*************************************
var arrLang = {
	'is' : {
		'things to do' : 'hlutir til að gera',
		'about iceland' : 'um Ísland',
		'iceland a to' : 'Ísland frá a til Ö',
		'the icelandic pledge' : 'íslenskan loforð',
	},
	'en' : {
		'things to do' : 'things to do',
		'about iceland' : 'about iceland',
		'iceland a to' : 'iceland a to Ö',
		'the icelandic pledge' : 'the icelandic pledge',
	},
	'fr' : {
		'things to do' : 'Choses à faire',
		'about iceland' : "à propos de l'Islande",
		'iceland a to' : 'Islande a à Ö',
		'the icelandic pledge' : 'le gage islandais',
	}
}
$(function(){
	$('.dropdown-item').click(function(){
		var lang = $( this ).attr('id');

		$('.nav-link').each(function(index, element){
			$( this ).text(arrLang[lang][$( this ).attr('key')]);
		});
	});
});

/**********************************			modal window 		****************************************/

$('#myModal').on('show.bs.modal', function (event) { 
	$(".modal-body").empty()
	$(event.relatedTarget).clone().appendTo($(".modal-body"));
	$(".modal-body").find(".card-img").css('border-radius', 0);
	$(".modal-body").find(".card-text").css('white-space', 'pre-line');
	$(".modal-body").find(".btn-view").text('close');
});


 