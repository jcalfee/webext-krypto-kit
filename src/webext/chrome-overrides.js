var THIS = this;
function _Chrome() {
	this.tabs = {
		onUpdated : {
			addListener : function(listener) {

			}
		},
		onActivated : {
			addListener : function(listener) {
			}
		},
		create : function(createProperties, callback) {
			var win = window.open(createProperties.url, '_blank');
			win.focus();
		}
	};
	this.storage = {
		local : {
			get : function(parms, data) {
				AppStorage.loadNameValueArray(parms, data);
			},

			set : function(parms, callback) {
				AppStorage.saveNameValueArray(parms, callback);
			}
		}
	};
	extensionListeners = new Array();
	this.extension = {
		onRequest : {
			addListener : function(obj) {
				extensionListeners.push(obj);
			}
		},
		getBackgroundPage : function() {
			return THIS;
		}
	};
	this.windows = {
		getCurrent : function(getInfo, callback) {
			// TODO, call find_addresses.js
		}
	};
	this.runtime = {
		getManifest : function() {
			var manifest = undefined;
			$.ajax({
				url : 'manifest.json',
				type : 'get',
				dataType : 'json',
				cache : false,
				success : function(data) {
					manifest = data;
				},
				async : false,
			});
			return manifest;
		}
	};
}
_chrome = new _Chrome();
