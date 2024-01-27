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

// Генерация div.hint-column
const columnHint = [[], [1, 1, 1, 0, 0], [1, 1, 1, 2, 5]]; // подсказки по оси Y
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

// Генерация div.row
const divRow = document.createElement("div");
divRow.classList.add("row");
divGridContainer.append(divRow);

// Генерация div.hint-row
const rowHint = [[], [0, 0, 1, 1, 1], [5, 2, 1, 1, 1]]; // подсказки по оси X
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

// Генерация div.grid-template
const divGridTemplate = document.createElement("div");
divGridTemplate.classList.add("grid-template");
divGridContainer.append(divGridTemplate);

// Генерация div.grid-template__block
// Шаблон игровой сетки
const gridTemplateBlocks = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

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

// Условие победы
const winningIds = [1, 2, 3, 4, 5, 9, 10, 13, 15, 17, 20, 21, 25];

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
    setTimeout(function () {
      alert("Вы победили!");
    }, 100);
  }
}

// Добавляем обработчики событий для каждого элемента
winningIds.forEach(function (id) {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", checkWinCondition);
  }
});

// Генерация таймера
//

// Добавляем обработчики событий для работы таймера
let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

const spanMinutes = document.querySelector(".minutes");
const spanSeconds = document.querySelector(".seconds");
const spanMiliseconds = document.querySelector(".miliseconds");

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

let isTimerRunnig = false;
divGridContainer.addEventListener("click", () => {
  if (!isTimerRunnig) {
    interval = setInterval(startTimer, 10);
    isTimerRunnig = true;
  }
  if (allIdsAreMarked) {
    clearInterval(interval);
  }
});
