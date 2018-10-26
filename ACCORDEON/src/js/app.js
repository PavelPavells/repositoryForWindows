window.onload = function () {
     console.log('start');

     var accordion = document.querySelector('.accordion'),

         changeState = function (e) {
             // console.log(e.target);
             var accordionItem = e.target.parentNode,
                 accordionList = accordionItem.children[0].nextElementSibling,
                 accordionListHeight = 0,
                 accordionListItems = accordionList.childNodes;

             // Вычисляем суммарную высоту блока, суммируя элементы списка
            for (var i=0; i < accordionListItems.length; i++) {
                if (accordionListItems[i].nodeType == 1) {
                    accordionListHeight += +accordionListItems[i].offsetHeight;
                }
            }

             // Устанавливаем значение max-height у элемента, если оно ноль или отсутствует устанавливаем
             // суммарную высоту блока (расскрываем блок), иначе ставим высоту ноль (схлопываем блок)
             if (accordionList.style.maxHeight === '0px' || accordionList.style.maxHeight === "" ) {
                accordionList.style.maxHeight = accordionListHeight + 'px';
             } else  {
                 accordionList.style.maxHeight = '0px';
             }
         },

         setActive = function (e) {
             console.log(e.target);
             var accordionItem = e.target.parentNode;
             accordionItem.classList.toggle('accordion__item_active');
         };

    accordion.addEventListener('click', changeState);
    accordion.addEventListener('click', setActive);

 };

