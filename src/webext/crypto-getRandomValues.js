// if (window.crypto == undefined) {
// window.crypto = function() {
// };
// }

// window.crypto.getRandomValues is not supported in all browsers (until FF 21
// for example)
// if (window.crypto.getRandomValues == undefined) {
// SAMPLE CALL: var c=new Uint32Array(1);
// SAMPLE CALL: window.crypto.getRandomValues(c);

// window.crypto.getRandomValues = function(array) {
// for ( var int = 0; int < array.length; int++) {
// TODO add entropy
// array[int] = Math.random();
// }
// };
// }
