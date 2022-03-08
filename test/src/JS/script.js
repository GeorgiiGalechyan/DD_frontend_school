'use strict'

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    // добавляем класс active бургеру при открытом бургерном меню.
    // стобы потом можно было модифицировать активный бургер
    $('.header__burger,.header__menu').toggleClass('active')

    // добавляем класс lock элементу body при открытом бургерном меню.
    // потом в css будем ставить запрет на прокрутку при открытом бургерном меню.
    // запрет на прокрутку - overflow:hidden
    $('body').toggleClass('lock')
  })
})
