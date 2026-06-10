// Single Thread Demo

const runTasksBtn = document.getElementById("runTasks");
const taskOutput = document.getElementById("taskOutput");

runTasksBtn.addEventListener("click", () => {

    taskOutput.innerHTML = "";

    const tasks = [
        "Task 1 Completed",
        "Task 2 Completed",
        "Task 3 Completed"
    ];

    tasks.forEach((task, index) => {

        setTimeout(() => {

            taskOutput.innerHTML += `${task}<br>`;

        }, index * 1000);

    });

});


// Playground

const runCodeBtn = document.getElementById("runCode");
const codeEditor = document.getElementById("codeEditor");
const consoleOutput = document.getElementById("consoleOutput");

runCodeBtn.addEventListener("click", () => {

    consoleOutput.innerHTML = "";

    const originalLog = console.log;

    console.log = function(message) {

        consoleOutput.innerHTML += message + "<br>";

    };

    try {

        eval(codeEditor.value);

    } catch (error) {

        consoleOutput.innerHTML =
            "Error: " + error.message;

    }

    console.log = originalLog;

});