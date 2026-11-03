
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");
const result = document.getElementById("result");

searchBtn.addEventListener("click", function() {

    const query = searchInput.value.trim();

    fetch("superheroes.php?query=" + encodeURIComponent(query))
        .then(response => response.text())
        .then(data => {
            result.innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
        });

});
