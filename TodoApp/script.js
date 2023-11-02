const taskFormElement = document.getElementById("task-form");
const taskInputElement = document.getElementById("task-input");
const taskListElement = document.getElementById("task-list");

taskFormElement.addEventListener("submit", (event) => {
    //prevent the form from submitting and refreshing automatically
    event.preventDefault();

    //jo form input ka value hai usko mai get kar sakta hn using taskInputElement.value
    const taskTitle = taskInputElement.value.trim();
    console.log(taskTitle);

    if (taskTitle != "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${taskTitle}</span>
        <i class="delete-task fas fa-trash"></i>
        <i class="fas fa-pencil-alt edit-task"></i>
        `;
        // console.log(listItem);
        taskListElement.appendChild(listItem);
        taskInputElement.value = "";
    }
});

//event listener for tast deletion
taskListElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-task")) {
        const taskItem = event.target.parentElement; //get the parent <li> </li> element
        taskItem.remove(); //remove the task
    }
});

//event listener for task completion
taskListElement.addEventListener("change", (event) => {
    if (event.target.classList.contains("task-checkbox")) {
        const taskItem = event.target.parentElement; //get the parent <li></li>
        console.log(taskItem);
        const taskTitle = taskItem.querySelector("span");
        console.log(taskTitle);
        taskTitle.classList.toggle("completed");
    }
});

//event Listener for task editing
taskListElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-task")) {
        const taskItem = event.target.parentElement;
        const taskTitle = taskItem.querySelector("span");
        const newTitle = prompt("Edit task:", taskTitle.textContent);

        if (newTitle != null) {
            taskTitle.textContent = newTitle;
        }
    }
});
