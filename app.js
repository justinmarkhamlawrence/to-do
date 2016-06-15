$(document).ready(function(){
	$('button').on('click', function (e) {
		e.preventDefault();
		
		var input = $('input').val();
		if (input) {	
		$('ul').append('<li>' + '<img src="images/tick.png" alt="tick" />' + ' ' + input + ' ' + '<a href="">x</a></li>')
		};
		$('input').val('');
	});

	$(document).on('click', 'a', function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
	$(document).on('click', 'img', function (e) {
		e.preventDefault();
		$(this).parent().css("background-color", "yellow");
	})
})