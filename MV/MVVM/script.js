var bindMap = {},
    scope = {},
    bindedEls = document.querySelectorAll('*[data-bind]');

for (var i = 0; i < bindedEls.length; i++) {
    var el = bindedEls[i],
        bindTo = el.dataset.bind;

    if (!bindMap[bindTo]) {
        bindMap[bindTo] = [];
    }

    bindMap[bindTo].push(el);
}

function bindValue(bindingName, value) {
    scope[bindingName] = value;
}

function syncBindings() {
    for (var bindTo in scope) {
        var value = scope[bindTo];

        bindMap[bindTo].forEach(function(el) {
            if (el.tagName === 'INPUT') {
                el.value = value;
            } else {
                el.innerText = value;
            }
        });

        delete scope[bindTo];
    }
}

document.addEventListener('input', function(e) {
    var target = e.target,
        bindTo = target.dataset.bind;

    if (bindTo && bindMap[bindTo]) {
        bindValue(bindTo, target.value);

        if (bindingEnabled.checked) {
            syncBindings();
        }

    }
}, true);

bindingEnabled.addEventListener('change', function() {
    if (bindingEnabled.checked) {
        syncBindings();
    }
});
