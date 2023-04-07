function zipInfo(zipNum) {
    fetch('api.zippopotam.us/us/{zipNum}')
        .then((response) => response.json())
        /*.then((data) => {
            //...now what?*/
}