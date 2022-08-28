
const url = "https://api.rawg.io/api/games/names?dates=2019-01-01,2019-12-31&ordering=-rating&key=c55d886cf75943009ade4dccc2c9d60e";

const resultContainer = document.querySelector(".results");

async function getData() {
    
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    const info = data.object;

    console.log(info);

    resultContainer.innerHTML = " ";

for(let i = 0; i < info.length; i++ ){
    console.log(info[i])

    if(i === 8) {
        break
    }

    resultContainer.innerHTML += `<div class="results">${info[i].text}</div>`;

}
}

getData();




// Loop through and display the following properties in HTML, 
// but only for the first eight results

// name, rating, number of tags.

// Loading indicator when API is called.

// use promise or await, async.