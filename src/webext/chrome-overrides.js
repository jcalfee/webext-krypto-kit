"use strict";
var THIS = this;
function _Chrome() {
	this.tabs = {
		onUpdated : {
			addListener : function(listener) {
			  console.log("_chrome.tabs.onUpdated "+listener);
			}
		},
		onActivated : {
			addListener : function(listener) {
			  console.log("_chrome.tabs.onActivated "+listener);
			}
		},
		create : function(createProperties, callback) {
			var win = window.open(createProperties.url, '_blank');
			win.focus();
		},
		query : function(queryInfo, callback) {
		  console.log("_chrome.tabs.query "+JSON.stringify(queryInfo)+" "+callback);
		  callback([THIS]);
		},
		executeScript : function(tabId, injectDetails, callback) {
		  $.getScript( injectDetails.file, function(data, textStatus, jqxhr){
		      if(callback)
		        this.callback();
		  });
		  
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
	var extensionListeners = new Array();
	this.extension = {
		onRequest : {
			addListener : function(obj) {//
				extensionListeners.push(obj);
			}
		},
		getBackgroundPage : function() {
			return THIS;
		},
		sendRequest : function(data){
		  console.log("_chrome.extensions.sendRequest "+JSON.stringify(data));
		},
		getURL : function(url) {
		  return url;
		}
	};
	this.windows = {
		getCurrent : function(getInfo, callback) {
			console.log("_chrome.windows.getCurrent "+getInfo+" "+callback);
			getInfo(THIS);
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
var _chrome = new _Chrome();
window._chrome = _chrome;
