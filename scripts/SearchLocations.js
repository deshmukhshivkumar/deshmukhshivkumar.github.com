 $( function() {
    var availableTags = [
		{id:"12283",name:"East Main St Station Platform A",stopLat:"41.6714820", stopLan:"-72.766231"},
		{id:"12284",name:"East St. Station Platform A",stopLat:"41.6879390", stopLan:"-72.758109"},
		{id:"12285",name:"Cedar St Station Platform A",stopLat:"41.6963630", stopLan:"-72.753477"},
		{id:"12286",name:"Newington Junction Station Platform A",stopLat:"41.7164150", stopLan:"-72.736083"},
		{id:"12288",name:"Flatbush Ave Station Platform A",stopLat:"41.7417090", stopLan:"-72.716480"},
		{id:"12289",name:"Kane St Station Platform A",stopLat:"41.7504160", stopLan:"-72.708981"},
		{id:"12290",name:"Park St Station Platform A",stopLat:"41.7570960", stopLan:"-72.703676"},
		{id:"12296",name:"Parkville Station Platform B",stopLat:"41.7570870", stopLan:"-72.703906"},
		{id:"12297",name:"Kane St Station Platform B",stopLat:"41.7504610", stopLan:"-72.709077"},
		{id:"12298",name:"Flatbush Ave Station Platform B",stopLat:"41.7411910", stopLan:"-72.716347"},
		{id:"12299",name:"Elmwood Station Platform B",stopLat:"41.7305090", stopLan:"-72.724864"},
		{id:"12300",name:"Newington Junction Station Platform B",stopLat:"41.7162100", stopLan:"-72.736410"},
		{id:"12301",name:"Cedar St Station Platform B",stopLat:"41.6958540", stopLan:"-72.753853"},
		{id:"12302",name:"East St. Station Platform B",stopLat:"41.6876170", stopLan:"-72.758666"},
		{id:"12303",name:"East Main St Station Platform B",stopLat:"41.6715000", stopLan:"-72.766279"},
		{id:"12305",name:"New Britain Station G",stopLat:"41.6684040", stopLan:"-72.779130"},
		{id:"12383",name:"Sigourant St Lot",stopLat:"41.7647200", stopLan:"-72.694831"},
		{id:"12482",name:"Cedar St Lot",stopLat:"41.6961490", stopLan:"-72.753925"},
		{id:"12483",name:"Cedar St. Lot",stopLat:"41.6961580", stopLan:"-72.754615"},
		{id:"12562",name:"New Britain Station Bay L",stopLat:"41.6686730", stopLan:"-72.780340"},
		{id:"12563",name:"New Britain Station Bay B",stopLat:"41.6687530", stopLan:"-72.779529"},
		{id:"12586",name:"New Britain Bay R Express",stopLat:"41.6682970", stopLan:"-72.778852"},
		{id:"12587",name:"New Britain Station S Express",stopLat:"41.6689230", stopLan:"-72.780049"},
		{id:"12589",name:"New Britain Station J",stopLat:"41.6685390", stopLan:"-72.779735"},
		{id:"12618",name:"New Britain Station D",stopLat:"41.6686190", stopLan:"-72.778948"},
    ];
	
    $( "#inputFromLocation" ).typeahead({
      source: availableTags
    });
	
	$( "#inputToLocation" ).typeahead({
      source: availableTags
    });
	
	$("#clearFromLocation").click(function(){
		$("#inputFromLocation").val('');
	});
	
	$("#clearToLocation").click(function(){
		$("#inputToLocation").val('');
	});
	
});
  
function initMap(){

	var map = new google.maps.Map(document.getElementById('divTransitMap'),
			{
				center: {lat: 41.6714820, lng: -72.766231},
				zoom: 10
			});	
			
	var fastTrackBoundryCoordinates = [
                   {lat: 41.806523, lng: -72.751854},
                   {lat: 41.806523, lng: -72.586373},
                   {lat: 41.726378, lng: -72.590493},
                   {lat: 41.616617, lng: -72.754944},
                   {lat: 41.645357, lng: -72.869614},
                   {lat: 41.750716, lng: -72.853821},
                   {lat: 41.806523, lng: -72.751854}
               ];
			   
	var fastrakPolygon = 
			new google.maps.Polygon({paths: fastTrackBoundryCoordinates});	
	
	// ToDo: Change the URL
	var	ctfastrak = new google.maps.KmlLayer({
				map: map,
				url: 'https://drive.google.com/uc?export=download&id=0B4WRPCH-9r7qcFVPajgzTk5wanc',
					  
				preserveViewport: true,
				suppressInfoWindows: true
			}); 
}

  
  