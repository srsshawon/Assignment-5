const themeButton = document.getElementById("themeChanger");
let currentTheme = 0;

themeButton.addEventListener("click", function() {
    
    document.body.classList.remove(
        "bg-base-200",
        "bg-blue-100",
        "bg-green-100",
        "bg-yellow-100",
        "bg-gray-900"
    );

    if (currentTheme === 0) {
        document.body.classList.add("bg-blue-100");
        currentTheme = 1;
    } 
    else if (currentTheme === 1) {
        document.body.classList.add("bg-green-100");
        currentTheme = 2;
    } 
    else if (currentTheme === 2) {
        document.body.classList.add("bg-yellow-100");
        currentTheme = 3;
    } 
    else if (currentTheme === 3) {
        document.body.classList.add("bg-gray-900");
        currentTheme = 4;
    } 
    else {
        document.body.classList.add("bg-base-200");
        currentTheme = 0;
    }
});
