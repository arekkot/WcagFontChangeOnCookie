window.onload = function(event){
	var fontSize = getCookie('fontSize');
	if(fontSize > 0){
		jQuery('body').addClass('fontSize' + fontSize)
	}
}
jQuery(document).ready(function(){
	jQuery('#wcagFont0').on('click', function(){
		jQuery('body').removeClass('fontSize1').removeClass('fontSize2').removeClass('fontSize3');
		setCookie('fontSize', 0, 365);
	});
	jQuery('#wcagFont1').on('click', function(){
		jQuery('body').removeClass('fontSize1').removeClass('fontSize2').removeClass('fontSize3');
		jQuery('body').addClass('fontSize1');
		setCookie('fontSize', 1, 365);
	});
	jQuery('#wcagFont2').on('click', function(){
		jQuery('body').removeClass('fontSize1').removeClass('fontSize2').removeClass('fontSize3');
		jQuery('body').addClass('fontSize2');
		setCookie('fontSize', 2, 365);
	});
	jQuery('#wcagFont3').on('click', function(){
		jQuery('body').removeClass('fontSize1').removeClass('fontSize2').removeClass('fontSize3');
		jQuery('body').addClass('fontSize3');
		setCookie('fontSize', 3, 365);
	});
});

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
