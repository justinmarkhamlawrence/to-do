$(document).ready(function(){
	$('.add').on('click', function (e) {
		e.preventDefault();
		
		var input = $('input').val();
		if (input) {	
		$('.need').append('<li class="uncheck">' + '<img src="images/tick.png" alt="tick" />' + ' ' + input + ' ' + '<a href="">x</a></li>')
		};
		$('input').val('');
	});

	$(document).on('click', 'a', function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
	$(document).on('click', 'img', function (e) {
		e.preventDefault();
		$(this).parent().addClass("check");
		$(this).parent().removeClass("uncheck");
		$(this).parent().css("background-color", "yellow");
	})
	 $('.remain').on('click', function (e) {
		 e.preventDefault();
		 $(".check").hide();	
	 })	
	 $('.show').on('click', function (e) {
		 e.preventDefault();
		 $(".check").show();
		 $(".uncheck").show();	
	 })	
	 $('.still-need').on('click', function (e) {
		 e.preventDefault();
		 $(".uncheck").hide();	
	 })	
})