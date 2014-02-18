$('li').hover(
	function(){
		$(this).append($('<span>...</span>'));
		//if you don't add the second part, this just keeps adding dots.
	},
	//forget comma= doesn't work!
	function () {
		$(this).find('span:last').remove();
	}
	);


//fades out and up the item with this class
$('li.fade').hover(function(){
	$(this).hide('fade');
	$(this).fadeOut(10000);
	console.log('you hid it!');
});

$('li.ninja').hover(function(){
	$(this).removeClass('ninja');
	$(this).addClass('hidden');
});




