const pathJson = "./assets/data.json";

fetch(pathJson)
.then(response => response.json())
.then(data => console.log(data));