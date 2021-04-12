const randoBtn = document.querySelector("#random-btn");
const randoImg = document.querySelector("#random-img");

randomButton.addEventListener("click", () => {
    console.log("Button pressed");

//queired site that will be accompanied with api 
const URL = "https://dog.ceo/api/breeds/image/random";
    fetch(URL)
    .then((res) => {
        console.log("Response success");
        console.log("Response", res);
        return res.json();
    })
    .then((json) => {
        console.log("response object acquired");
        console.log("Json", json);

        randomImage.src = json.message;
    })
    .catch((error) => console.log(error));
});

//queried weather section, btn and input 
const weatherBtn = document.querySelector("#weather-btn");
const weatherContent = document.querySelector("#weather-content");
const tempOutput = document.querySelector("#temperature");
const windOutput = document.querySelector("#wind");
const weatherInfoOutput = document.querySelector("#weather-info");

weatherButton.addEventListener("click", () => {
    console.log("Button pressed!");
    const URL = `https://goweather.herokuapp.com/weather/${weatherInput.value}`;
    fetch(URL)
    .then((rawRes) => {
        console.log("Response Success");
        console.log("Response", rawRes);
        return rawRes.json();
    })
    .then((json) => {
        console.log("Json object received");
        console.log("Json", json);

        tempOutput.innerHTML = json.temperature;
        windOutput.innerHTML = json.wind;
        weatherInfoOutput.innerHTML = json.description;
    })
    .catch((error) => console.log(error));
});