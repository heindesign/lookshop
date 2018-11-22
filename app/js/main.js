var	cardList = document.querySelector('.catalog__list'),
	totalPrice = 0,
	count = 0;

cardList.onclick = function(event) {
	var target = event.target;
	if (target.classList.contains('clothes__btn')) {	
		var parentEl = target.parentNode,
			price = parentEl.querySelector('.clothes__price'),
			priceAttr = parseInt(price.getAttribute('data-price')),
			basket = document.querySelector('.items-cost');

		parentEl.classList.toggle('active');

		if (parentEl.classList.contains('active')) {
			totalPrice += priceAttr;
			count += 1;
		} else {
			totalPrice -= priceAttr;
			count -= 1;
		}
	}
	if (totalPrice == 0) {
		basket.textContent = 'Корзина';
	} else {
		basket.textContent = totalPrice + ' Р';
	}
	var itemsAmount = document.querySelector('.items-amount');
	itemsAmount.textContent = count;
}