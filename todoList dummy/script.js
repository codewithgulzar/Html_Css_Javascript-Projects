const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskButton = document.getElementById("add-task-btn");

addTaskButton.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
});

listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    }
    if (event.target.classList.contains("fa-trash")) {
        // Traverse up the DOM to find the parent <li> element and remove it
        //ansestor me sabse closes li jo hoga wo select ho jayega
        const li = event.target.closest("li");
        if (li) {
            li.remove();
            saveData();
        }
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
