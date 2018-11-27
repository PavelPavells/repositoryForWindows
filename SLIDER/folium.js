/**
 * Folium - простой слайдер изображений
 * User: Smirnov
 * Version: 0.2
 */


function folium() {
    var folium = document.getElementsByClassName('folium');

    /**
     *  Создаем указанный элемент, при необходимости задает ему атрибут с именем.
     *  @param <string> element
     *  @param <string> name
     *  @return <element>
     */
    function createElement(element, name) {
        var unit = document.createElement(element);
        var attr = name[0] === '.' ? 'class' : 'id';
        unit.setAttribute(attr, name.substr(1));
        return unit;
    }

    /**
     *  Изменяем описание к изображению
     *  @param <element> slide
     *  @param <element> image
     */
    function changeDescription(slide, image) {
        var alt = image.getAttribute('alt');
        var figCaption = slide.getElementsByClassName('folium--caption');
        if (figCaption.length) {
            figCaption[0].textContent = alt;
        } else {
            figCaption = createElement('figcaption', '.folium--caption');
            figCaption.textContent = alt;
            slide.appendChild(figCaption);
        }

    }

    /**
     *  Инициализируем слайдер
     *  @param <element> item
     */
    function initSlider(item) {
        var currentImage = 0;
        var images = [];
        var foliumNavigationItem;
        var foliumNavigation = createElement('ul', '.folium--navigation');

        // Выбираем только фотографии
        for (var i = 0; i < item.children.length; i++) {
            if (item.children[i].tagName.toLowerCase() === 'img') {
                images.push(item.children[i]);
            }
        }

        // Скрываем все фотографии, кроме первой
        for (var img = 1; img < images.length; img++) {
            images[img].style.display = 'none';
        }

        // Добавляем навигацию
        for (var nav = 0; nav < images.length; nav++) {
            foliumNavigationItem = createElement('li', '.folium--navigation--item');
            foliumNavigationItem.setAttribute('data-count', nav.toString());
            foliumNavigation.appendChild(foliumNavigationItem);
        }

        changeDescription(item, images[currentImage]);
        foliumNavigation.children[currentImage].setAttribute('class', 'folium--navigation--item__current');
        item.insertBefore(foliumNavigation, item.firstChild);

        // Обработка кликов по элементам навигации в слайдере
        foliumNavigation.addEventListener('click', function (e) {
            var element = e.target;
            var selectedId = element.getAttribute('data-count');
            if (selectedId) {
                foliumNavigation.children[currentImage].setAttribute('class', 'folium--navigation--item');
                element.setAttribute('class', 'folium--navigation--item__current');
                images[currentImage].style.display = 'none';
                images[selectedId].style.display = 'block';
                changeDescription(item, images[selectedId]);
                currentImage = selectedId;
            }
        }, false);
    }

    // Инициализируем все слайдеры
    for (var slider = 0; slider < folium.length; slider++) {
        initSlider(folium[slider]);
    }
};

window.onload = function(){
    folium();
}
