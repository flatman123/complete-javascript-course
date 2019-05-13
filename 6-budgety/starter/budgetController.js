var budgetController = (function() {

	var randomNumber = Math.floor(Math.random(0) * 100);;
	var addStuffPrivate = function(o) {
		return randomNumber + o;
	}
	return {
		publicAcessTest: function(p) {
			console.log(addStuffPrivate(p));
		}
	}
})();

