
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c55d886cf75943009ade4dccc2c9d60e";

const resultContainer = document.querySelector(".results");


async function getData() {
    

try{
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    const info = data.results;

    resultContainer.innerHTML = " ";


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
} catch (error) {
    console.log("An error has occurred");
    resultContainer.innerHTML = "An error has occurred";
}
}

getData();






