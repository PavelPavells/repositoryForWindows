$(function() {
	var toDo = function() {
		this.model = [
			{text : 'Купить молоко'},
			{text : 'Сходить на работу'},
			{text : 'Сходить в магазин'}
		];
		this.inputField = $('.task-form__text');
		this.form = $('.tadk-form');
		this.todoList = $('.table__body');
		this.init();
	};
	//Получить размер модели - кол-во элементов на даннный момент
	ToDo.prototype.getLength = function() {
		return this.model.length;
	};
	// генерация HTML для новой строки с элементом
	ToDO.prototype.getItemHtml = function(index, item) {
		var tmpl = '<tr><th>:position</th><td>:index</td><td><button type="button" class="btn btn-info">&#8593;</button></td><td><button type="button" data-index=":index" class="btn btn-danger">X</button>';
		return tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position - 1);
	};
	// Добавить новый элемент в список
	ToDo.prototype.addItem = function(todoText) {
		var newTodo = {text : todoText};
		this.model.push(newTodo);
		this.appendRenderItem(this.getLength(), newTodo);
	};
	//добавить в DOM новый элемент вниз списка
	ToDo.prototype.appendRenderItem = function(index, item) {
		this.todoList.append(this.getItemHtml(index, item.text));
	};
	// Отредеррить полностью весь список.
	ToDo.prototype.renderList = function() {
		var list = '';
		__self = this;
		$.each(this.model, function(index, item) {
			list += __self.getItemHtml(index + 1, item.text);
		});
		this.todoList.html(list);
	};
	// на Submit формы
	ToDo.prototype.onFormSubmit = function(e) {
			e.preventDefault();
			//console.lof(this);
			//console.log(this.inputField.val());
			this.addItem(this.inputField.val());
			this.form.trigger('reset');
	};
	// Удаление элемента
	ToDo.prototype.removeItem = function(index) {
		this.model.splice(index, 1);
		this.renderList();
	};
	// Инициализация
	ToDo.prototype.init = function() {
		var__self = this;
		this.renderList();
		this.todoList.on('click', '.btn-danger', function(e) {
			var index $(e.target).data('index');
			__self.removeItem(index);
		});
		this.form.submit(function(e) {
			__self.onFormSubmit(e);
		});
	};
	window.todo = new toDo();
})();























