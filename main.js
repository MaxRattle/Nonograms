// Статичная генерация

// Генерация div.container
const divContainer = document.createElement("div");
divContainer.classList.add("container");
document.body.append(divContainer);

// Генерация div.grid-container
const divGridContainer = document.createElement("div");
divGridContainer.classList.add("grid-container");
divContainer.append(divGridContainer);

// Генерация div.column
const divColumn = document.createElement("div");
divColumn.classList.add("column");
divGridContainer.append(divColumn);

// Генерация div.row
const divRow = document.createElement("div");
divRow.classList.add("row");
divGridContainer.append(divRow);

// Генерация div.grid-template
const divGridTemplate = document.createElement("div");
divGridTemplate.classList.add("grid-template");
divGridContainer.append(divGridTemplate);

// Генерация div.modal
const divModal = document.createElement("div");
divModal.classList.add("modal");
document.body.prepend(divModal);

// Генерация div.timer
const divTimer = document.createElement("div");
divTimer.classList.add("timer");
divContainer.prepend(divTimer);

// тут нужно исправить логику времени, возможно снести блок вниз
divModal.innerHTML = `<div class="modal_box">
                        <h1>Поздравляю! Вы победитель!</h1>
                        <p>Вы решили нонограмму за <span id="time-modal"></span></p>
                        <p>Результат занесен в список!</p>
                        <button id="modal_box_close_btn" type="button">Вернуться</button>
                      </div>`;

// Генерация span.minutes, span.separator, span.seconds, span.miliseconds
divTimer.innerHTML = `<div class="timer_block">
                        <span class="minutes">00</span>
                        <span class="separator">:</span>
                        <span class="seconds">00</span>
                        <span class="separator">:</span>
                        <span class="miliseconds">00</span>
                      </div>`;

// Генерация div.interface
const divInterface = document.createElement("div");
divInterface.classList.add("interface");
divTimer.append(divInterface);

// Генерация button#solution
const buttonSolution = document.createElement("button");
buttonSolution.type = "button";
buttonSolution.classList.add("interface_btn");
buttonSolution.id = "solution";
buttonSolution.textContent = "Решение";
divInterface.append(buttonSolution);

// Генерация button#reset
const buttonReset = document.createElement("button");
buttonReset.type = "button";
buttonReset.classList.add("interface_btn");
buttonReset.id = "reset";
buttonReset.textContent = "Сброс";
divInterface.append(buttonReset);

// Генерация button#random-task
const buttonRandomTask = document.createElement("button");
buttonRandomTask.type = "button";
buttonRandomTask.classList.add("interface_btn");
buttonRandomTask.id = "random-task";
buttonRandomTask.textContent = "Случайная игра";
divInterface.append(buttonRandomTask);

// Генерация div#select-task
const divSelectTask = document.createElement("div");
divSelectTask.classList.add("interface_btn");
divSelectTask.id = "select-task";
divInterface.append(divSelectTask);

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
                            <option value="option_15x15_3">Cementory</option>
                            <option value="option_15x15_4">Dota2</option>
                            <option value="option_15x15_5">Plus</option>
                        </optgroup>
                    </select>`;

// Генерация вариантов выбора для div#select-task
divSelectTask.innerHTML = selectTask;

// Генерация div.results
const divResults = document.createElement("div");
divResults.classList.add("results");
divTimer.append(divResults);

// Генерация в div.results h1#selected-task
const h1_select = document.createElement("h1");
h1_select.id = "selected-task";
divResults.append(h1_select);
h1_select.textContent = "Arrow";

// Переменная для хранения данных из JSON файла
let jsonData;

// Функция чтения и сохранения данных из JSON файла
function readJsonFile() {
  return fetch("./tasks/tasks.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;

      // Проверка, что выбранная опция в селекте уже существует и вызов функции для создания задачи по умолчанию
      if (selectTaskId.selectedIndex > -1) {
        const changeTask =
          selectTaskId.options[selectTaskId.selectedIndex].text;
        h1_select.textContent = changeTask;

        const columnHint = jsonData[h1_select.textContent].columnHint;
        const rowHint = jsonData[h1_select.textContent].rowHint;
        const gridTemplateBlocks =
          jsonData[h1_select.textContent].gridTemplateBlocks;
        const winningIds = jsonData[h1_select.textContent].winningIds;

        taskRunner(columnHint, rowHint, gridTemplateBlocks, winningIds);
      }
    })
    .catch((error) => {
      console.log(error); // Ошибка запроса или парсинга JSON;
    });
}

// Вызов функции чтения и сохранения данных из JSON файла при загрузке страницы
readJsonFile();

// Обработчик события изменения выбранной опции в селекте // как я намучился с этим
const selectTaskId = document.getElementById("select");
selectTaskId.addEventListener("change", function () {
  const changeTask = selectTaskId.options[selectTaskId.selectedIndex].text;
  h1_select.textContent = changeTask;

  // Проверка, что данные из JSON файла уже загружены
  if (jsonData) {
    const columnHint = jsonData[h1_select.textContent].columnHint;
    const rowHint = jsonData[h1_select.textContent].rowHint;
    const gridTemplateBlocks =
      jsonData[h1_select.textContent].gridTemplateBlocks;
    const winningIds = jsonData[h1_select.textContent].winningIds;

    taskRunner(columnHint, rowHint, gridTemplateBlocks, winningIds);
  }
});

// Функция запуска динамической генерации
function taskRunner(columnHint, rowHint, gridTemplateBlocks, winningIds) {
  // Проверка, что div.column, div.row. div.grid-template пустые // как я намучился с этим
  if (
    divColumn.childElementCount != 0 ||
    divRow.childElementCount != 0 ||
    divGridTemplate.childElementCount != 0
  ) {
    divColumn.innerHTML = "";
    divRow.innerHTML = "";
    divGridTemplate.innerHTML = "";
  }
  // Динамическая генерация
  while (
    document.getElementsByClassName("hint-column").length != columnHint.length
  ) {
    const divHintColumn = document.createElement("div");
    divHintColumn.classList.add("hint-column");
    divColumn.append(divHintColumn);
  }

  // Генерация div.cell_column //потно
  for (let i = 0; i < columnHint.length; i++) {
    const divColumn = document.getElementsByClassName("hint-column")[i];
    const column = columnHint[i];
    for (let j = 0; j < column.length; j++) {
      const divCellColumn = document.createElement("div");
      divCellColumn.classList.add("cell_column");
      divCellColumn.innerText = column[j];
      divColumn.append(divCellColumn);
      if (Boolean(column[j]) === false) {
        divCellColumn.classList.add("cell_column", "dissapear");
      }
    }
  }

  // Проверка, на отсутствие пустых div.hint-column
  const divColumnsCells = document.querySelectorAll(".hint-column");
  divColumnsCells.forEach((divColumnsCells) => {
    const cellColumns = divColumnsCells.querySelectorAll(".cell_column");
    if (cellColumns.length === 0) {
      divColumnsCells.remove();
    }
  });

  // Генерация div.hint-row

  while (document.getElementsByClassName("hint-row").length != rowHint.length) {
    const divHintRow = document.createElement("div");
    divHintRow.classList.add("hint-row");
    divRow.append(divHintRow);
  }

  // Генерация div.cell_row
  for (let i = 0; i < rowHint.length; i++) {
    const divRow = document.getElementsByClassName("hint-row")[i];
    const row = rowHint[i];
    for (let j = 0; j < row.length; j++) {
      const divCellRow = document.createElement("div");
      divCellRow.classList.add("cell_row");
      divCellRow.innerText = row[j];
      divRow.append(divCellRow);
      if (Boolean(row[j]) === false) {
        divCellRow.classList.add("cell_row", "dissapear");
      }
    }
  }

  // Проверка, на отсутствие пустых div.hint-row
  const divRowsCells = document.querySelectorAll(".hint-row");
  divRowsCells.forEach((divRowsCells) => {
    const cellRows = divRowsCells.querySelectorAll(".cell_row");
    if (cellRows.length === 0) {
      divRowsCells.remove();
    }
  });

  while (
    document.getElementsByClassName("grid-template__block").length !=
    gridTemplateBlocks.length
  ) {
    const divGridTemplateBlock = document.createElement("div");
    divGridTemplateBlock.classList.add("grid-template__block");
    divGridTemplate.append(divGridTemplateBlock);
  }

  // Генерация div.cell
  for (let i = 0; i < gridTemplateBlocks.length; i++) {
    const divGridTemplate__Block = document.getElementsByClassName(
      "grid-template__block"
    )[i];
    const cells = gridTemplateBlocks[i];
    for (let j = 0; j < cells.length; j++) {
      const divCell = document.createElement("div");
      divCell.classList.add("cell");
      divGridTemplate__Block.append(divCell);
    }
  }

  // Добавление id к div.cell
  const divCells = document.querySelectorAll(".cell");
  for (let i = 0; i < divCells.length; i++) {
    divCells[i].id = gridTemplateBlocks.flat()[i];
  }

  // Добавление переключателя ячеек
  const cells = document.querySelectorAll(".cell");
  const grid_template = document.querySelector(".grid-template");
  let isMouseDown = false;
  let currentCell = null;

  grid_template.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  grid_template.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      if (isMouseDown && cell !== currentCell) {
        toggleMarked(cell);
        currentCell = cell;
      }
    });

    cell.addEventListener("mouseleave", () => {
      if (cell === currentCell) {
        currentCell = null;
      }
    });
  });

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      toggleMarked(cell);
      currentCell = cell;
    });
  });

  function toggleMarked(cell) {
    cell.classList.toggle("marked");
  }

  // Добавляем обработчики событий для работы таймера //
  let interval;
  let minutes = 0;
  let seconds = 0;
  let miliseconds = 0;

  const spanMinutes = document.querySelector(".minutes");
  const spanSeconds = document.querySelector(".seconds");
  const spanMiliseconds = document.querySelector(".miliseconds");

  // Добавляем обработчики событий для работы таймера
  function startTimer() {
    miliseconds++;
    spanMiliseconds.innerHTML = miliseconds;

    if (miliseconds > 99) {
      seconds++;
      miliseconds = 0;
      if (seconds < 10) {
        spanSeconds.innerHTML = "0" + seconds;
      } else {
        spanSeconds.innerHTML = seconds;
      }
      if (seconds > 59) {
        minutes++;
        spanMinutes.innerHTML = minutes;
        seconds = 0;
      }
    }
  }

  // Условие победы
  const modal = document.querySelector(".modal");
  const timeModal = document.getElementById("time-modal");
  function checkWinCondition() {
    let allIdsAreMarked = true;
    for (let i = 0; i < winningIds.length; i++) {
      const id = winningIds[i];
      const element = document.getElementById(id);
      if (!element || !element.classList.contains("marked")) {
        allIdsAreMarked = false;
        break;
      }
    }
    if (allIdsAreMarked) {
      const timerResultsModal = `${spanMinutes.innerText}:${spanSeconds.innerText}:${spanMiliseconds.innerText}`;
      timeModal.textContent = timerResultsModal;
      modal.classList.add("open");
    }
  }

  // Добавляем обработчики событий для каждого элемента условия победы
  winningIds.forEach(function (id) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", checkWinCondition);
    }
  });

  // Остановка таймера при победе
  let isTimerRunnig = false;
  divGridContainer.addEventListener("click", () => {
    if (!isTimerRunnig) {
      interval = setInterval(startTimer, 10);
      isTimerRunnig = true;
    }
    if (modal.classList.contains("open")) {
      clearInterval(interval);
    }
  });

  // Возврат из модального окна
  const buttonReturn = document.getElementById("modal_box_close_btn");
  buttonReturn.addEventListener("click", () => modal.classList.remove("open"));

  // Добавление обработчика событий к button#solution
  buttonSolution.addEventListener("click", function () {
    // Удаление прошлых отмеченных решение этой кнопки
    const markedSolutionElements =
      document.querySelectorAll(".marked-solution");
    markedSolutionElements.forEach(function (element) {
      element.classList.remove("marked-solution");
    });
    for (let i = 0; i < winningIds.length; i++) {
      const id = winningIds[i];
      const element = document.getElementById(id);
      if (element) {
        element.classList.add("marked-solution");
      }
    }
    checkWinCondition();
  });

  // Добавление обработчика событий к button#reset // здесь будет занесения времени в тир-лист результатов
  buttonReset.addEventListener("click", function () {
    clearInterval(interval);
    spanMinutes.innerHTML = "00";
    spanSeconds.innerHTML = "00";
    spanMiliseconds.innerHTML = "00";
    isTimerRunnig = false;
    for (let i = 0; i < divCells.length; i++) {
      divCells[i].classList.remove("marked", "marked-solution");
    }
  });

  // Добавление названия задачи в div.results
  const selectedTask = document.getElementById("select");
  selectedTask.addEventListener("change", function () {
    const changeTask = select.options[select.selectedIndex].text;
    h1_select.textContent = changeTask;
    // Обнуление таймера и удаление записанных ранее результатов
    clearInterval(interval);
    spanMinutes.innerHTML = "00";
    spanSeconds.innerHTML = "00";
    spanMiliseconds.innerHTML = "00";
    isTimerRunnig = false;
    const divResults = document.querySelector(".results");
    const paragraphs = divResults.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.remove();
    });
    п;
  });

  // Добавление div.timer в div.results после закрытия модалього окна
  buttonReturn.addEventListener("click", () => {
    const timerResults = `${spanMinutes.innerText}:${spanSeconds.innerText}:${spanMiliseconds.innerText}`;
    // Проверяем наличие существующих элементов <p>
    const existingParagraphs = divResults.querySelectorAll("p");
    existingParagraphs.forEach((paragraph) => {
      paragraph.remove();
    });
    const pTimerResults = document.createElement("p");
    pTimerResults.innerText = timerResults;
    divResults.append(pTimerResults);
  });
}
