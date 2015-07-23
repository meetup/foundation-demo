var views = new ViewManager(function(){
	gimme.apiKey = "7060231d422c3421e3c13406e606631"; // use your own api key!

	var groupId = getParameterByName('id') || 1579989;

	var shoppingList = [
		{"gimme": "group", "data": {"group_id": groupId}},
	];

	gimme.get(shoppingList, true).then(function(data){
		$.extend(views.data, data);

		// Now that the data is all ready, go ahead and start the router
		window.addEventListener('hashchange', processHash);
		processHash();
	});

});
