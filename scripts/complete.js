const taskCount = document.getElementById("task-count");
const taskCompleted = document.getElementById("completed-count");
const completeButtons = document.querySelectorAll(".complete");
completeButtons.forEach(button => {

    button.addEventListener("click", function(event) {
        event.preventDefault();

        const card = button.closest(".task-card");
        const taskTitle = card.querySelector("h2").textContent;

        const timeString = getCurrentTime();
        button.classList.add("btn-disabled");
        card.style.opacity = "0.6";
        alert(`Board updated Successfully!`);
        
        addActivityLog(taskTitle, timeString);

        let currentCount = parseInt(taskCount.textContent);
        let currentCompleted = parseInt(taskCompleted.textContent);
        

        if(currentCount > 0) {
            taskCount.textContent = currentCount - 1;
            taskCompleted.textContent = currentCompleted + 1;
        }
        else {
            alert("All tasks are already completed!");
        }
    });
});