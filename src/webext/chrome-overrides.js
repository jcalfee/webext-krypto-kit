_chrome_storage_local_get = function(parms, data) {
	AppStorage.loadNameValueArray(parms, data);
};

_chrome_storage_local_set = function(parms, data) {
	AppStorage.saveNameValueArray(parms, data);
};

// chrome
_chrome_extension_onRequest = function() {
};
