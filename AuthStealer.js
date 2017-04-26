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
 
 $( function() {
	// This code sets the cookie, I need this for my testing. you do not need this.
	document.cookie = "username=dhananjay";
	document.cookie = "password=CCSU"; 

	console.log(getCookie("username"));
	console.log(getCookie("password"));
	
});


