
//Поле только для цифр
// При помощи событий клавиатуры сделайте так, чтобы в поле можно было вводить только цифры. 

//<!DOCTYPE HTML>
//<html>//
//<head>
//  <meta charset="utf-8">
//</head>
//<body>
//  Введите ваш возраст:
//  <input type="text"/>
//  <script>
//      e = e || event;
//      if (e.ctrlKey || e.altKey || e.metaKey) return;
//      var chr = getChar(e);
//      // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
//      // на всякий случай лучше вынести проверку chr == null отдельно
//      if (chr == null) return;
//      if (chr < '0' || chr > '9') {
//    function getChar(event) {
//      if (event.which == null) {
//        if (event.keyCode < 32) return null;
//        return String.fromCharCode(event.keyCode) // IE
//      }
//      if (event.which != 0 && event.charCode != 0) {
//        if (event.which < 32) return null;
//        return String.fromCharCode(event.which) // остальные
//      }
//      return null; // специальная клавиша
//    }
//  </script>
//</body>
//</html>