var views = new ViewManager(function(){
	gimme.apiKey = "7060231d422c3421e3c13406e606631"; // use your own api key!

	var groupId = getParameterByName('mugID') || 1579989,
			eventId = getParameterByName('mupID') || "smcwglytkbkc";

	var shoppingList = [
		{"gimme": "group", "data": {"group_id": groupId}},
		{"gimme": "events", "data": {"event_id": eventId}},
		{"gimme": "rsvps", "data": {"event_id": eventId}}
	];

	gimme.get(shoppingList, true).then(function(data){
		$.extend(views.data, data);

		// Now that the data is all ready, go ahead and start the router
		window.addEventListener('hashchange', processHash);
		processHash();
	});

});
