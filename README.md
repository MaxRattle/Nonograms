# **Нонограммы**
Проект представляет собой реализацию типичной игры - [нонограммы](https://en.wikipedia.org/wiki/Nonogram).

# Деплой
[**Нонограммы**](https://maxrattle.github.io/Nonograms/)

## Превью:
![2024-02-03_16-33-39](https://github.com/MaxRattle/Nonograms/assets/94513379/47c7caca-eaef-440b-82d2-999b83588c54)


Правила игры [тут](https://nonograms-katana.fandom.com/wiki/Tips_for_solving).

### **Функционал проекта**

- изначально, ```<body>``` в файле ```index.html``` пустой (используется только тег ```<script>```), абсолютно все элементы генерируются с помощью JS.
- дизайн адаптивный (500 пикселей <= ширина).
- размер рамки по умолчанию - 5x5. Подсказки даны вверху и слева от сетки.
- игрок может заполнить ячейку в сетке, щелкнув ЛКМ. При щелчке активируется функция изменения цвета сетки на темный (black). Когда игрок нажимает на темную ячейку - она меняется на пустую.
- реализован таймер.
- реализовано модальное окно при победе.
- реализованы кнопки: 
1. позволяют "чистить" сетку и останавливать таймер. 
2. получить готовое решение и оно не попадет в список решенных за время.
3. выбор задачи с помощью ```<select>``` и изменения заголовка задачи и сброс прошлых результатов.
4. получить случайную задачу.
- задачи внутри ```<select>``` разделены по сложности. 
- завершение игры вызывает модальное окно, где пользователя поздравляют и ему сообщается информация за какое время он решил задачу.
- завершение игры также добавляет результат под названием задачи.
- задачи "берутся" локально из файла ```tasks.json```, которые я создал.


### Что можно улучшить ?
- можно улучшить генерацию ```<select>``` взависимости от ```tasks.json```, на данном этапе я просто вставил готовый элемент ```<select>```:
```javascript
// Генерация вариантов выбора для div#select-task // тут мб сделать функцию генерации
const selectTask = `<select id="select">
                        <optgroup label="Сложность 5x5">
                          <option value="option_5x5_1">Arrow</option>
                          <option value="option_5x5_2">Chessboard</option>
                          <option value="option_5x5_3">House</option>
                          <option value="option_5x5_4">Skull</option>
                          <option value="option_5x5_5">Tree</option>
                        </optgroup>
                        <optgroup label="Сложность 10x10">
                          <option value="option_10x10_1">Car</option>
                          <option value="option_10x10_2">Man</option>
                          <option value="option_10x10_3">Portal</option>
                          <option value="option_10x10_4">Rhomb</option>
                          <option value="option_10x10_5">RS</option>
                        </optgroup>
                        <optgroup label="Сложность 15x15">
                            <option value="option_15x15_1">2024</option>
                            <option value="option_15x15_2">Apple</option>
                            <option value="option_15x15_3">Cemetery</option>
                            <option value="option_15x15_4">Dota2</option>
                            <option value="option_15x15_5">Plus</option>
                        </optgroup>
                    </select>`;
  ```
- улучшить стиль приложения (я слаб в дизайне).
- убрать "дерганье" элементов при динамеческой генерации (цифры таймера и другое).
- улучшить SEO, поскольку все состоит из ```<div>```.
- добавить различные звуки при клике или при победе.
- добавить вторую тему оформления.
- добавить событие, которое при клике ПКМ будет добавлять крестик, как в привычной игре нонограмм.
- добавить сортировку результатов задачи с указанием того, что это была за задача и за какое время решена и, соответсвенно, при переключение на другую эти результаты не исчезали.
- сделать ```backend```?

# Итоги
Если рассматривать это как ```frontend``` приложение, я считаю, что сделал достаточно. Масштабировать и добавлять фичи можно до бесконечности. Есть, как мне кажется, проблемы с код-стайлом, излишне нагроможден, следует скорее всего делить на модули или аналогичное что-то. В целом, проект мне понравился, определенные выводы, по ходу написания программы, сделал.

# Планы на будущее
Далее идут последние технологии, после изучения которых можно пробовать "залететь" в Айтишечку, а именно: ```TypeScript```, ```Angular Framework```. В не совсем ближайшем будущем планирую изучить ```backend``` и стать ```fullstack``` (полноценным ```dev```). Еще далее, изучить ```blockchain``` и прикоснутся к ```Rust```.

# Поставьте звездочку :)
