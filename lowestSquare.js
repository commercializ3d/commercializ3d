$(document).ready(function() {
	setInterval(function() {
		var lowestPrice = 999999999999999;
		var lowestPriceIds = [];
		$('.SquarePrice p').each(function(e) {
			var text = this.innerHTML.replace(" ETH", "");
			var price = parseFloat(text);
			var id = this.getAttribute('data-id');
			if (price && price < lowestPrice) {
				lowestPriceIds = [id];
				lowestPrice = price;
			} else if (price === lowestPrice) {
				lowestPriceIds.push(id)
			}
		});

		for (var i = 0; i < lowestPriceIds.length; i++) {
			var id = lowestPriceIds[i];
			$('#Square-' + id).css({ border: "2px solid gold" });
		}
	}, 1000)
});