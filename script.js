function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByClassName("button")[0];

    body.classList.toggle("dark-mode"); 
    button.classList.toggle("light-mode"); 

    if (button.classList.contains("light-mode")) {
        button.innerHTML = '<span class="light"></span>🌜 Pasar a modo nocturno 🌛';
        document.body.style.backgroundColor = "#d1d1d1";
    } else {
        button.innerHTML = '<span class="dark"></span>🌞 Pasar a modo diurno 🌞';
        document.body.style.backgroundColor = "#323232";
    }
}