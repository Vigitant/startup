function zipInfo(zipNum) {
    fetch('http://ZiptasticAPI.com/{zipNum}')
        .then((response) => response.json())
        /*.then((data) => {
            //...now what?*/
}