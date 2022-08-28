
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c55d886cf75943009ade4dccc2c9d60e";

const resultContainer = document.querySelector(".results");



async function getData() {
    
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    const info = data.results;

    resultContainer.innerHTML = "";


for(let i = 0; i < info.length; i++ ){

    console.log(info[i].name)

    if(i === 8) {
        break
    }

    resultContainer.innerHTML += `<div class="result">${info[i].name}</div>`;

}

for(let i = 0; i < info.length; i++ ){

    console.log(info[i].rating)

    if(i === 8) {
        break
    }

    resultContainer.innerHTML += `<div class="result">${info[i].rating}</div>`;

}

}

getData();




// Loop through and display the following properties in HTML,// but only for the first eight results

// name, rating, number of tags.

// Loading indicator when API is called.

// use promise or await, async.