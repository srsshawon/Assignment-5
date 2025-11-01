const activityMessage = document.getElementById("activity-log");


function addActivityLog(taskTitle, timeString) {
    const message = document.createElement("div");
    message.classList.add("bg-gray-100", "p-2", "rounded-lg", "shadow-sm");
    message.innerHTML = `
    <p class ="text-sm font-medium">You Have Completed the Task ${taskTitle} at ${timeString}</p>
    
    `;
    activityMessage.appendChild(message)
}