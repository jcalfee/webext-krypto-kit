// window.crypto.getRandomValues is not supported in all browsers (until FF 21 for example)
if (window.crypt = "undefined") {
	function Crypt() {
		// var c=new Uint32Array(1);
		// window.crypto.getRandomValues(c);
		this.getRandomValues = function(array) {
			for ( var int = 0; int < array.length; int++) {
				array[int] = Math.random();
			}
		};
	}
	window.crypt = new Crypt();
}