var THIS = this;
function _Chrome() {
	this.abc = {};
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

			set : function(parms, data) {
				AppStorage.saveNameValueArray(parms, data);
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
}
_chrome = new _Chrome();
