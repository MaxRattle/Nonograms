// генерация div.container
const divContainer = document.createElement("div");
divContainer.classList.add("container");
document.body.append(divContainer);

// генерация div.grid-container
const divGridContainer = document.createElement("div");
divGridContainer.classList.add("grid-container");
divContainer.append(divGridContainer);

// генерация div.column
const divColumn = document.createElement("div");
divColumn.classList.add("column");
divGridContainer.append(divColumn);

// генерация div.hint-column
const columnHint = [[], [1, 1, 1, 0, 0], [1, 1, 1, 2, 5]]; // подсказки по оси Y
while (
  document.getElementsByClassName("hint-column").length != columnHint.length
) {
  const divHintColumn = document.createElement("div");
  divHintColumn.classList.add("hint-column");
  divColumn.append(divHintColumn);
}

// генерация div.cell_column //потно
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

// проверка, на отсутствие пустых div.hint-column
const divColumnsCells = document.querySelectorAll(".hint-column");
divColumnsCells.forEach((divColumnsCells) => {
  const cellColumns = divColumnsCells.querySelectorAll(".cell_column");
  if (cellColumns.length === 0) {
    divColumnsCells.remove();
  }
});

const columnList = document.querySelectorAll(".hint-column");

// const rowHint = [[], [[], [], 1, 1, 1], [5, 2, 1, 1, 1]];

// генерация div.grid-template
const divGridTemplate = document.createElement("div");
divGridTemplate.classList.add("grid-template");
divGridContainer.append(divGridTemplate);

// генерация div.grid-template__block
// шаблон игровой сетки
const gridTemplateBlocks = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

while (
  document.getElementsByClassName("grid-template__block").length !=
  gridTemplateBlocks.length
) {
  const divGridTemplateBlock = document.createElement("div");
  divGridTemplateBlock.classList.add("grid-template__block");
  divGridTemplate.append(divGridTemplateBlock);
}

// генерация div.cell

// // добавление переключателя ячеек
// const cells = document.querySelectorAll(".cell");
// const grid_template = document.querySelector(".grid-template");
// let isMouseDown = false;
// let currentCell = null;

// grid_template.addEventListener("mousedown", () => {
//   isMouseDown = true;
// });

// grid_template.addEventListener("mouseup", () => {
//   isMouseDown = false;
// });

// cells.forEach((cell) => {
//   cell.addEventListener("mouseover", () => {
//     if (isMouseDown && cell !== currentCell) {
//       toggleMarked(cell);
//       currentCell = cell;
//     }
//   });

//   cell.addEventListener("mouseleave", () => {
//     if (cell === currentCell) {
//       currentCell = null;
//     }
//   });
// });

// cells.forEach((cell) => {
//   cell.addEventListener("click", () => {
//     toggleMarked(cell);
//     currentCell = cell;
//   });
// });

// function toggleMarked(cell) {
//   cell.classList.toggle("marked");
// }

// // условие победы
// const winningIds = [1, 2, 3, 4, 5, 9, 10, 13, 15, 17, 20, 21, 25];

// function checkWinCondition() {
//   let allIdsAreMarked = true;
//   for (let i = 0; i < winningIds.length; i++) {
//     const id = winningIds[i];
//     const element = document.getElementById(id);
//     if (!element || !element.classList.contains("marked")) {
//       allIdsAreMarked = false;
//       break;
//     }
//   }
//   if (allIdsAreMarked) {
//     setTimeout(function () {
//       alert("Вы победили!");
//     }, 100);
//   }
// }

// // Добавляем обработчики событий для каждого элемента
// winningIds.forEach(function (id) {
//   const element = document.getElementById(id);
//   if (element) {
//     element.addEventListener("click", checkWinCondition);
//   }
// });
