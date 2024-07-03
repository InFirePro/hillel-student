/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const promo__adv = document.querySelectorAll('.promo__adv img');

promo__adv.forEach(item => {
    item.remove();
});

const promo__genre = document.getElementsByClassName('promo__genre');
const promo__title = document.getElementsByClassName('promo__title');
promo__genre[0].remove();
const div = document.createElement('div');
promo__title[0].before(div);
div.innerHTML = 'Драма';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

