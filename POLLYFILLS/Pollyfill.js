// Полифилл, 
// который гарантирует стандартный синтаксис elem.matches(css) для всех браузеров.

(function() {
	if(!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelecor;
	}
})();

// Метод elem.closest(css) для поиска ближайшего родителя,
// удовлетворяющего селектору css, не поддерживается некоторыми браузерами, например IE11-.
// Полифилл для него.

(function() {
	if(!Element.prototype.closest) {
		Element.prototype.closest = function(css) {
			var node = this;
			while(node) {
				if(node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();

// Полифилл для textContent(IE8-)

(function() {
	if(document.documentElement.textContent === undefined) {
		Object.defineProperty(HTMLElement.prototype, 'textContent', {
			get : function() {
				return this.innerText;
			},
			set : function(value) {
				this.innerText = value;
			}
		});
	}
})();

// Полифилл для метода remove() elem.remove(), для старых браузеров.

if(!Element.prototype.remove) {
	Element.prototype.remove = function remove() {
		if(this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}
//var elem = document.body.children[1];
elem.remove();

// Для получения свойств pageX && pageY для старых браузеров и старых IE.

function fixPageXY(e) {
  if (e.pageX == null && e.clientX != null) { // если нет pageX..
    var html = document.documentElement;
    var body = document.body;

    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;

    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
  }
}

// Несовметсимость с realtedTarget IE8-

function fixRelatedTarget(e) {
  if (e.relatedTarget === undefined) {
    if (e.type == 'mouseover') e.relatedTarget = e.fromElement;
    if (e.type == 'mouseout') e.relatedTarget = e.toElement;
  }
}

// Для отлавливания прокрутки, включая IE8-

if (elem.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    elem.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    elem.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    elem.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  elem.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
  e = e || window.event;

  // wheelDelta не дает возможность узнать количество пикселей
  var delta = e.deltaY || e.detail || e.wheelDelta;

  var info = document.getElementById('delta');

  info.innerHTML = +info.innerHTML + delta;

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

//Исправление событий для IE8-

function fixEvent(e) {

  e.currentTarget = this;
  e.target = e.srcElement;

  if (e.type == 'mouseover' || e.type == 'mouseenter') e.relatedTarget = e.fromElement;
  if (e.type == 'mouseout' || e.type == 'mouseleave') e.relatedTarget = e.toElement;

  if (e.pageX == null && e.clientX != null) {
    var html = document.documentElement;
    var body = document.body;

    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;

    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
  }

  if (!e.which && e.button) {
    e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
  }

  return e;
}
// Полифилл для pageYOffset в IE8-(IE7)

Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});

// использование полифилла
alert( window.pageYOffset );

// Кроссбраузерный способ включая IE8- для получения координат в документе.

function getCoords(elem) {
  // (1)
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  // (2)
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // (3)
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // (4)
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}

// Кроссбраузерное создание IFRAME .

function createIframe(name, src, debug) {
  src = src || 'javascript:false'; // пустой src

  var tmpElem = document.createElement('div');

  // в старых IE нельзя присвоить name после создания iframe
  // поэтому создаём через innerHTML
  tmpElem.innerHTML = '<iframe name="' + name + '" id="' + name + '" src="' + src + '">';
  var iframe = tmpElem.firstChild;

  if (!debug) {
    iframe.style.display = 'none';
  }

  document.body.appendChild(iframe);

  return iframe;
}
