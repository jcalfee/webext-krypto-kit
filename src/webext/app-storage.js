if (typeof AppStorage == "undefined" || !AppStorage.loadNameValueArray) {
	(function() {
		var AppStorage = window.AppStorage = {};

		AppStorage.loadNameValueArray = function(names, values) {
			for ( var int = 0; int < names.length; int++) {
				var key = names[int];
				values[key] = localStorage.getItem(key);
			}
		};

		AppStorage.saveNameValueArray = function(data, callback) {
			$.each(data, function(k, v) {
				localStorage.setItem(k, v);
			});
			callback();
		};

	})();// AppStorage
}
window.AppStorage = AppStorage;

/*
 * var headers={} for(var i=0;i<names.length;i++){
 * headers['_property-'+names[i]]=""; } alert(JSON.stringify(headers)); var
 * jqXHR =$.ajax({ url: '/_app/storage/loadNameValue', headers: headers, async:
 * false });
 */