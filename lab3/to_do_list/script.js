// Находим элементы на странице
const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Функция добавления задачи
function addTask() {
    const taskText = taskInput.value.trim(); // Берем текст и убираем пробелы по краям

    // Если поле пустое - ничего не делаем
    if (taskText === "") {
        alert("Введите текст задачи!");
        return;
    }

    // 1. Создаем элемент списка (li)
    const li = document.createElement("li");

    // 2. Создаем чекбокс (галочку)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // Добавляем событие: при клике зачеркиваем текст
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            span.classList.add("done"); // Добавляем класс зачеркивания
        } else {
            span.classList.remove("done"); // Убираем класс
        }
    });

    // 3. Создаем текст задачи (span)
    const span = document.createElement("span");
    span.textContent = taskText;

    // 4. Создаем кнопку удаления (корзину)
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    // Добавляем событие: при клике удаляем строку
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // 5. Собираем всё вместе: вкладываем чекбокс, текст и кнопку внутрь li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // 6. Добавляем li в общий список (ul)
    taskList.appendChild(li);

    // Очищаем поле ввода
    taskInput.value = "";
}

// Слушаем клик по кнопке "Добавить"
addButton.addEventListener("click", addTask);

// Дополнительно: чтобы работало по нажатию Enter
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
