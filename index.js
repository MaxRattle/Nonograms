// генерации элементов
// генерация div.container
const divContainer = document.createElement("div");
divContainer.classList.add("container");
document.body.append(divContainer);

// генерация div.grid-container
const divGridContainer = document.createElement("div");
divGridContainer.classList.add("grid-container");
divContainer.append(divGridContainer);

// генерация div.hint-column
const columnHint = [[], [1, 1, 1], [1, 1, 1, 2, 5]];
while (
	document.getElementsByClassName("hint-column").length != columnHint.length
) {
	const divHintColumn = document.createElement("div");
	divHintColumn.classList.add("hint-column");
	divGridContainer.append(divHintColumn);
}

// генерация div.cell_column
for (let i = 0; i <= columnHint.length; i++) {}

//const rowHint = [[], [[],[],1,1,1], [5,2,1,1,1]]

// добавление переключателя ячеек
// const cells = document.querySelectorAll('.cell');
// const grid_template = document.querySelector('.grid-template');
// let isMouseDown = false;
// let currentCell = null;

// grid_template.addEventListener('mousedown', () => {
//     isMouseDown = true;
// });

// grid_template.addEventListener('mouseup', () => {
//     isMouseDown = false;
// });

// cells.forEach((cell) => {
//     cell.addEventListener('mouseover', () => {
//         if (isMouseDown && cell !== currentCell) {
//             toggleMarked(cell);
//             currentCell = cell;
//         }
//     });

//     cell.addEventListener('mouseleave', () => {
//         if (cell === currentCell) {
//             currentCell = null;
//         }
//     });
// });

// cells.forEach((cell) => {
//     cell.addEventListener('click', () => {
//         toggleMarked(cell);
//         currentCell = cell;
//     });
// });

// function toggleMarked(cell) {
//     cell.classList.toggle('marked');
// }

// // условие победы
// const winningIds = [1, 2, 3, 4, 5, 9, 10, 13, 15, 17, 20, 21, 25];

// function checkWinCondition() {
//     let allIdsAreMarked = true;
//     for (let i = 0; i < winningIds.length; i++) {
//         const id = winningIds[i];
//         const element = document.getElementById(id);
//         if (!element || !element.classList.contains('marked')) {
//             allIdsAreMarked = false;
//             break;
//         }
//     }
//     if (allIdsAreMarked) {
//         setTimeout(function() {
//             alert('Вы победили!');
//         }, 100);
//     }
// }

// // Добавляем обработчики событий для каждого элемента
// winningIds.forEach(function(id) {
//     const element = document.getElementById(id);
//     if (element) {
//         element.addEventListener('click', checkWinCondition);
//     }
// });
