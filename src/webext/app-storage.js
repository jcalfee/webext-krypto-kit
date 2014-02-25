if (typeof AppStorage == "undefined" || !AppStorage.loadNameValueArray) {
	(function() {
		var AppStorage = window.AppStorage = {};

		AppStorage.loadNameValueArray = function(names, callback) {
		  var data={};
			for ( var int = 0; int < names.length; int++) {
				var key = names[int];
				try {
				  data[key] = JSON.parse(localStorage.getItem(key));
				} catch(e) {
				  //simple number or string
				  data[key] = localStorage.getItem(key);
				}
				//console.log("AppStorage LOAD "+key+"="+data[key]);
			}
			callback(data);
		};

		AppStorage.saveNameValueArray = function(data, callback) {
			$.each(data, function(k, v) {
        //console.log("AppStorage SAVE " +k+"="+JSON.stringify(v));
				localStorage.setItem(k, JSON.stringify(v));
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