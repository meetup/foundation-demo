var router = new Rlite();

function processHash() {
	var hash = location.hash || '#!/';
	router.run(hash.substr(2));
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

router.add('', function(context){
	views.show({
		template: 'main-template',
		events: {
		},
		observe: {
		},
		header : {
			title: views.data.group.name,
			buttons: [
				{ label: 'Actions', icon: 'ellipsis-h', fn: function(){alert('take action')} }
			]
		}
	});
});
