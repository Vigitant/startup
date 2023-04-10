/*https://www.zippopotam.us/

async function zipInfo(zipNum) {
    const response = await fetch(`https://api.zippopotam.us/us/${zipNum}`);
    const data = await response.json();
    console.log(data.places[0].state);

    const city = data.places[0];
    console.log(places['place name']);
}

zipInfo(84602);*/