const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskListContainer = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //get the value entered by user
    const taskTitle = taskInput.value.trim();

    if (taskTitle == "") {
        alert("Please Enter Task");
    } else {
        const listItem = document.createElement("li");
        listItem.innerHTML = taskTitle;
        taskListContainer.append(listItem);

        let span = document.createElement("span");
        span.innerHTML = `<i class="delete-task fa-solid fa-trash"></i>`;
        listItem.appendChild(span);

        //clear the input value
        taskInput.value = "";
        saveListData();
    }
});

taskListContainer.addEventListener("click", (e) => {
    //task completion
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveListData();
    }

    //task deletion
    if (e.target.classList.contains("delete-task")) {
        const li = e.target.closest("li");
        li.remove();
        saveListData();
    }
});

function saveListData() {
    localStorage.setItem("listItem", taskListContainer.innerHTML);
}

function showListData() {
    taskListContainer.innerHTML = localStorage.getItem("listItem");
}

showListData();
