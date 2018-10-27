
// Пример промисов 



new Promise(function(resolve) {
	if(document.readyState === 'complete') {
		resolve();
	} else {
		window.onload = resolve;
	}
}).then(function() {
	return new Promise(function(resolve, reject) {
		VK.init({
			apiId : 5267932
		});
		VK.Auth.login(function(response) {
			if(response.session) {
				resolve(response);
			} else {
				reject(new Error('Не удалось авторизоваться!'));
			}
		}, 2 | 4 | 8); //(2 - управление друзьями, 4 - музыка, 8 - фото)
	});
}).then(function() {
	return new Promise(function(resolve, reject) {
		VK.api('users.get', {'name_case' : 'gen'}, function(response) {
			if(response.error) {
				reject(new Error(response.error.error_msg));
			} else {
				headerInfo.textContent = `Музыка на странице ${response.response[0].first_name} ${response.response[0].last_name}`;
				resolve();
			}
		});
	})
}).then(function() {
	return new Promise(function(resolve, reject) {
		VK.api('audio.get', {}, function(response) {
			if(response.error) {
				reject(new Error(response.error.error_msg));
			} else {
				let source = playerItemTemplate.innerHTML;
				let templateFn = Handlebars.compile(source);
				let template = templateFn({list : response.response});
				results.innerHTML = template;
				resolve();
			}
		});
	});
}).catch(function(e) {
	alert('Ошибка ' + e.message);
});












