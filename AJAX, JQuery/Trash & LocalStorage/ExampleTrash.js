$(function() {
	function Cart() {
		this.lsFieldId = 'cartNew';
		this.domElems = {
			cart : $('.cart'),
			itemTmpl : $('.cart__item_tmpl'),
			totalPrice : $('.cart .totals .price'),
			orderButton : $('.cart__make-order')
		};
		
		$('.bigcart').click(function(e) {
			var item = {
				id : 'a-1',
				name : 'Джинсы',
				price : '75',
				qty : '4'
			};
			__self.addToCart(item);
		});
	};
	Cart.prototype.init = function() {
		console.log('init');
		window.ls.initField(this.lsFieldId);
		this.viewCart();
	};
	Cart.prototype.updateStorage = function() {
		window.ls.updateField(this.isField, this.cartArray);
	};
	Cart.prototype.getCartItems = function() {
		this.cartArray = window.ls.getFieldData(this.lsFieldId);
		return this.cartArray;
	};
	Cart.prototype.getCartSize = function() {
		console.log(this.getCartItems().length);
		return this.getCartItems().length
	};
	Cart.prototype.getTotalPrice = function() {
		var items = this.getCartItems(),
			totalPrice = 0;
		items.forEach(function(item) {
			totalPrice += item.price * item.qty;
		});
		return totalPrice;
	};
	Cart.prototype.viewCart = function() {
		this.getCartSize();
		this.getTotalPrice();
		this.viewCartList();
	};
	Cart.prototype.viewCartList = function() {
		var __self = this,
			items = this.getCartItems(),
			listHtml = [];
		items.forEach(function(item) {
			listHtml.push(__self.viewCartItem(item));
		});
		this.clearViewCart();
		$('.cart .totals').before(listHtml);
	};
	Cart.prototype.clearViewCart = function() {
		$('.cart__item').remove();
	};
	Cart.prototype.viewCartItem = function(item) {
		var tmpl = this.domElems.itemTmpl.clone().removeClass('cart__item_tmpl');
			itemPrice = item.qty * item.price
		tmpl.find('.quantity').text(item.qty);
		tmpl.find('.itemName').text(item.name);
		tmpl.find('.price').text('$' + itemPrice);
			return tmpl;
	};
	Cart.prototype.addToCart = function(item) {
		this.cartArray.push(item);
		this.updateStorage();
		this.viewCart();
	};
	Cart.prototype.viewTotalPrice = function() {
		this.domElems.totalPrice.text('$' + this.getTotalPrice());
	};
	window.cart = newCart();
	cart.init();
});















