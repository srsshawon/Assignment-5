function dateCard(){
    const dayElement = document.getElementById("day");
    const dateElement = document.getElementById("date");

    const now = new Date();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    dayElement.textContent = `${dayName},`;
    dateElement.textContent = `${monthName} ${date} ${year}`;
}

dateCard();