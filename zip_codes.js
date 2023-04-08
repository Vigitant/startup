//https://www.zippopotam.us/

async function zipInfo(zipNum) {
    const response = await fetch('api.zippopotam.us/us/{zipNum}');
    const data = await response.json();
    //don't know how to access json data
}