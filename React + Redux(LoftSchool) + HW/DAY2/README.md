# Homework 2

Домашнее задание №2 онлайн курсов по ReactJS от LoftSchool.

Задачи:

1. Написать компонент App, который содержит input, div.App, а так же список компонент NewsPost.
2. Компонент App должен иметь метод handleChange который реагирует на onChange компонента input.
3. Компонент App должен иметь метод handleKeyDown который реагирует на onKeyDown компонента input.
4. State компоненты App должен содержать список постов в news и строку newsInput, в которую поподают значения из input.
5. Компонент App должен создавать список компонент NewsPost.
6. Написать компонент NewsPost, который содержит input, и параграф p, в котором будет текст новости, которую передаёт компонент App через props text.
7. Компонент NewsPost должен содержать методы handleChange, handleKeyDown и handleDelete.
8. Компонент NewsPost должен создавать компоненты Comments на каждый новый коментарий созданный через инпут, по аналогии с App.
9. Компонент Comment должен получать уникальный id при создании.
10. Компонент Comment должен содержать p с текстом переданным из компоненты NewsPost.
11. Компонент Comment должен содержать span.delete, при клике на который должен вызываться метод onDelete который передают из props. onDelete должен получать id комментария.
12. Все тесты должны работать.

Инструкции как запустить проект:

1. git clone https://github.com/mrOrlando/loftschool-react-homework-2
2. cd loftschool-react-homework-2
3. yarn install
4. yarn run start

Запуск тестов: yarn run test