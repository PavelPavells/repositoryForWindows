# Homework 3

Домашнее задание №3 онлайн курсов по ReactJS от LoftSchool.

Задачи:

```
Компонент App
    Рендер
      Должен присутствовать элемент с классом
        ✓ container
        ✓ container tab-panel
        ✓ form-content
        ✓ button-panel
        ✓ button-panel button.button-next
      Должен возвращать 3 компонента Step
        Если state.step === 1
          ✓ Первый компонент Step должен содержать props key="Personal information", onClick=App.handleTabClick, isSelected=true, number=1, isClickable=false
          ✓ Второй компонент Step должен содержать props key="Card information", onClick=App.handleTabClick, isSelected=false, number=2, isClickable=false
          ✓ Третий компонент Step должен содержать props key="Finish", onClick=App.handleTabClick, isSelected=false, number=3, isClickable=false
        Если state.step === 2
          ✓ Первый компонент Step должен содержать props key="Personal information", onClick=App.handleTabClick, isSelected=false, number=1, isClickable=true
          ✓ Второй компонент Step должен содержать props key="Card information", onClick=App.handleTabClick, isSelected=false, number=2, isClickable=false
          ✓ Третий компонент Step должен содержать props key="Finish", onClick=App.handleTabClick, isSelected=false, number=3, isClickable=false
          Если state.step === 3
            ✓ Первый компонент Step должен содержать props key="Personal information", onClick=App.handleTabClick, isSelected=false, number=1, isClickable=true
            ✓ Второй компонент Step должен содержать props key="Card information", onClick=App.handleTabClick, isSelected=false, number=2, isClickable=false
            ✓ Третий компонент Step должен содержать props key="Finish", onClick=App.handleTabClick, isSelected=false, number=3, isClickable=false
      Кнопка button.button-next
        ✓  должна быть disabled если !this.isFormCommitable() || !isTimeOver
        ✓ При клике должен быть вызыван метод handleClickNextForm
    state должен содержать поля со значениями:
      ✓ step: 1
      ✓ firstName: ''
      ✓ lastName: ''
      ✓ email: ''
      ✓ cardNumber: ''
      ✓ isTimeOver: false
    Методы класса
      handleTabClick
        ✓ Присутствует
        ✓ При вызове с аргументом меняется state.step на значение аргумента
      handleChangeForm
        ✓ Присутствует
        ✓ При вызове с 2 аргументами меняется state[первый аргумент] = второй аргумент
      handleClickNextForm
        ✓ Присутствует
        ✓ После вызова state.step увеличивается на 1
      handleChangeTimeOver
        ✓ Присутствует
        ✓ При вызове с аргументом, аргумент меняет значение state.isTimeOver
      isFormCommitable
        ✓ Присутствует
        Если state.step === 1
          ✓ Должен возвращать true если state.firstName !== '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')
          ✓ Должен возвращать false если state.firstName === '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')
          ✓ Должен возвращать false если state.firstName !== '' && state.lastName === '' && state.email !== '' && state.email.includes('@') (10ms)
          ✓ Должен возвращать false если state.firstName !== '' && state.lastName !== '' && state.email === '' && state.email.includes('@')
        Если state.step === 2
          ✓ Должен возврать  true если cardNumber.length === 16
        Если state.step !== 1 | 2
          ✓ Должен возврать false
      renderForm
        ✓ Присутствует
        ✓ Если state.step === 1 возвращает компонент <PersonalForm firstName={state.firstName} lastName={state.lastName} email={state.email onChangeForm={App.handleChangeForm} />
        ✓ Если state.step === 2 возвращает компонент <CardForm cardNumber={state.cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />
        ✓ Если state.step === 3 возвращает строку 'Поздравляем!'


Компонент Step
    Рендер
      ✓ Если props isSelected=true должен присутствовать элемент с классом step-selected
      ✓ Если props isClickable=true, должен присутствовать класс step-clickable вместе с классом step
      ✓ Тег с классом step__number должен содержать номер переданный через props number
      ✓ Тег с классом step__title должен содержать текст переданный через children
      Должен присутствовать элемент с классом
        ✓ step
        ✓ step__number
        ✓ step__title
    Методы класса
      handleClick
        ✓ Должен присутствовать метод handleClick
        При вызове
          ✓ Если isClickable=true, должен вызываться метод onClick переданный через props
          ✓ Если isClickable=false, метод onClick переданный через props не должен вызываться
          ✓ Если isClickable=true, должен вызываться метод onClick переданный через props c аргументом равным number переданным через props

Компонент CardForm
    Рендер
      Должен присутствовать элемент с классом
        ✓ .card-form
        ✓ .left-time
        ✓ .card-form input[name="cardNumber"]
        ✓ onChange input[name="cardNumber"] должен вызывать handleChangeForm
        ✓ onChange input[name="cardNumber"] должен вызывать handleChangeForm
      Методы класса
        handleChangeForm
          ✓ Присутствует
          ✓ При вызове вызывает функцию onChangeForm переданную через props, аргументами name и value становятся значения из event.target
        componentWillUnmount
          ✓ Присутствует
        componentDidMount
          ✓ Присутствует
          ✓ При монтировании запускает интервал
          ✓ Интервал меняет состояние компоненты state.leftTime
        constructor
          ✓ Присутствует

Компонент PersonalForm
    Рендер
      Должен присутствовать элемент с классом
        ✓ .personal-form
        ✓ .personal-form input[name="firstName"]
        ✓ .personal-form input[name="lastName"]
        ✓ .personal-form input[name="email"]
        ✓ onChange input[name="firstName"] должен вызывать handleChangeForm
        ✓ onChange input[name="lastName"] должен вызывать handleChangeForm
        ✓ onChange input[name="email"] должен вызывать handleChangeForm
      Методы класса
        handleChangeForm
          ✓ Присутствует
          ✓ При вызове вызывает функцию onChangeForm переданную через props, аргументами name и value становятся значения из event.target

Tests:       73 passed, 73 total
```

Инструкции как запустить проект:

1. git clone https://github.com/PavelPavells/practiceTasks
2. yarn install
3. yarn run start

Запуск тестов: yarn run test