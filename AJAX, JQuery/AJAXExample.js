$(function() {
	var RSSReader = function() {
		this.feedURL = '';
		this.articlesList = $('.articles');
		this.articleTmpl = $('.article');
		this.init();
	};
	RSSReader.prototype.init = function() {
		var __self = this;
		this.getFeed(__self.getUrlHash()); // habr - example
		this.updateMenu('menu__li');
		$(window).on('haschange', function(event) {
			__self.getFeed(__self.getUrlHash());
			__self.updateMenu();
		});
		/*$('menu_item').click(function(event) {
			var current = $(event.target);
			//event.preventDefault();
			$('.sf-menu li').each(function(i, item) {
				$(item).removeClass('current-menu-item');
			});
			current.parent().addClass('current-menu-item');
			__self.getFeed(current.data('feed-id'))
		});*/
	};
	RSSReader.prototype.updateMenu = function() {
		$('.sf-menu li').each(function(i, item) {
				$(item).removeClass('current-menu-item');
		});
		var current = getUrlHash();
		$('.menu__li_' + current).addClass('current-menu-item');
	};
	RSSReader.prototype.getUrlHash = function() {
		var hash = window.location.hash || 'habr';
		return hash.replace('#', '');
	};
	RSSReader.prototype.getFeed = function(feedId) {
		$.ajax({
			url : this.feedURL,
			data : {kind : feedId},
			method : 'GET',
			dataType : 'json'
		})
		.success(this.onGetData.bind(this));
		.error(function(error) {
			console.log(error);
		});
	};
	RSSReader.prototype.onGetData = function(data) {
		this.renderFeed(data.items);
	};
	RSSReader.prototype.renderFeed = function(dataList) {
		var __self = this,
			listHtml = [];
		dataList.forEach(function(item) {
			listHtml.push(__self.renderItem(item));
		});
		this.articlesList.html(listHtml);
	};
	RSSReader.prototype.convertDate = function() {
		return new Date(date);
	};
	RSSReader.prototype.renderItem = function(item) {
		var newItem = this.articleTmpl.clone().removeClass('.article_tmpl');
		newItem
				.find('.post-heading')
				.html(item.title);
		newItem
				.find('.excerpt')
				.html(item.summary);
		newItem
				.find('.author')
				.html(item.author);
		newItem
				.find('.date')
				.html(item.pubDate);
		newItem
				.find('.action-button')
				.attr('href', item.guid);
		return newItem;
	};
	window.rssReader = new RSSReader();
});















