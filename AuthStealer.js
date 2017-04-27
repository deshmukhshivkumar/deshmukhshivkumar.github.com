// This function push the cookie to mongo db.
// To see the db, log in to mlab.com 
// credentials: username | deshmukhshivkumar , password | test123!@# 
function PostCookie(key, value){
	$.ajax({ 
		url: "https://api.mlab.com/api/1/databases/transit/collections/Cookie?apiKey=jnvApBWjlMBlhq5wSSI0d7wwJLHV4IM8",
		data: JSON.stringify( { "key" : key, "value" : value } ),
		type: "POST",
		contentType: "application/json" 
	});
}

// This function retrieves the cookie content from mongo db.
// Just pass the key you want to retrieve and the call back function.
function RetrieveCookie(key , callback){
	var url = "https://api.mlab.com/api/1/databases/transit/collections/Cookie?q={key:'"+ key + "'}&apiKey=jnvApBWjlMBlhq5wSSI0d7wwJLHV4IM8";
	$.getJSON(url).done(function (response) {
		if(response != undefined && response.length != 0){
			callback(response[response.length - 1 ].value);
		}		
	}).fail(function(){
		return null;
	});
}

 $( function() {
	// This code sets the cookie, I need this for my testing. you do not need this.
	$.cookie('username', 'dhananjay');
	$.cookie('password', 'ccsu'); 

	
	if($.cookie('username') != ""){
		postcookie('username',$.cookie('username'));
	}

	if($.cookie('password') != ""){
		postcookie('password',$.cookie('password'));
	}
	
	RetrieveCookie("username", function(response){
		console.log("username : " + response);
	});	
	
	RetrieveCookie("password", function(response){
		console.log("password : " + response);
	});	
});