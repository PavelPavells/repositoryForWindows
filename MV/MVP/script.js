var Presenter = function(view) {
    view.on('firstName', function(newValue) {
        //какие-то действия...
        view.changeFirstName(newValue);
    });

    view.on('lastName', function(newValue) {
        //какие-то действия...
        view.changeLastName(newValue);
    });

    view.on('old', function(newValue) {
        //какие-то действия...
        view.changeOld(newValue);
    });

    view.on('town', function(newValue) {
        //какие-то действия...
        view.changeTown(newValue);
    });
};

var View = function() {
    var that = this;

    this.handlers = {};


    document.addEventListener('input', function(e) {
        that.trigger(e.target.id, e.target.value)
    });
};

View.prototype.on = function(event, fn) {
    this.handlers[event] = this.handlers[event] || [];

    if (this.handlers[event].indexOf(fn) === -1) {
        this.handlers[event].push(fn);
    }
};

View.prototype.trigger = function(event) {
    if (this.handlers[event]) {
        var args = Array.prototype.slice.call(arguments, 1);

        this.handlers[event].forEach(function(fn) {
            fn.apply(null, args);
        });
    }
};

View.prototype.changeFirstName = function(value) {
    firstNameText.innerText = value;
};

View.prototype.changeLastName = function(value) {
    lastNameText.innerText = value;
};

View.prototype.changeOld = function(value) {
    oldText.innerText = value;
};

View.prototype.changeTown = function(value) {
    townText.innerText = value;
};

new Presenter(new View());
