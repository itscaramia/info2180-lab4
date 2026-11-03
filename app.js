
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {

    fetch("superheroes.php")
        .then(response => response.text())
        .then(data => {
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");

    const superheroes = html.body.innerText;

    alert(superheroes);
});
});
