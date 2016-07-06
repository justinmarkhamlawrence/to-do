$(document).ready(function() {
	$('.add').on('click', function (e) {
		e.preventDefault();
		var input = $('#add-stuff').val();
		if (input) {	
			$('.need').append('<li class="uncheck">' + '<img src="images/tick.png" alt="tick" />' + ' ' + input + ' ' + '<a href="">x</a></li>')
		};
		arr.push(input);
		$('#add-stuff').val('');
	});

	var arr = [];
	
	var i
	$('#search').on('click', function (e) {
		var searchVal = $('#add-stuff').val();
		for (i = 0; i < arr.length; i++) {
			if (searchVal === arr[i]) {
				console.log(i)
				$('li:nth-child(i)').css('background', 'red') 
			}	
			//else {
				//console.log("nope")
			//}
		}
	});
	//loop over array
	//send results to DOM
	//clear text field

	$(document).on('click', 'a', function (e) {
		e.preventDefault();
		console.log($(this).parent())
		$(this).parent().remove();
		//remove item from array by looping over array
		//use .find
		//create variable from this.text
		//splice 

	})
	$(document).on('click', 'img', function (e) {
		e.preventDefault();
		$(this).parent().addClass("check");
		$(this).parent().removeClass("uncheck");
		$(this).parent().css("background-color", "yellow");
	})
	 $('.remain').on('click', function (e) {
		 e.preventDefault();
		 $(".check").fadeOut(800);	
	 })	
	 $('.show').on('click', function (e) {
		 e.preventDefault();
		 $(".check").fadeIn(800);
		 $(".uncheck").fadeIn(800);	
	 })	
	 $('.still-need').on('click', function (e) {
		 e.preventDefault();
		 $(".uncheck").fadeOut(800);	
	 })	

})