function setCookie(cookieName, cookieValue, daysUntilExpiration) {
	var date = new Date();
	date.setTime(date.getTime() + daysUntilExpiration * 86400000);
	var expires = "expires=" + date.toGMTString();
	document.cookie =
		cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
	var name = cookieName + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function deleteCookie(cookieName) {
	document.cookie =
		cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
}
