// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggleDarkMode(){
    var element = document.body;
    element.classList.toggle("dark");
}

document.getElementById("toggleDarkLight").addEventListener("click", toggleDarkMode);
// TODO: Create functions to read and write from local storage
