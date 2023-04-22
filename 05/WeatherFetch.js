
export function get (lat, lon) {
    const options = {
        mathod: 'GET',
    }
    const resource = `http://api.weatherapi.com/v1/current.json?key=beac70e0629f44999b064940223012&q=${lat},${lon}&aqi=no`
    return fetchData(resource, options)
}

function fetchData(resource, options){
    const path = resource;
    const promise = fetch(path, options)
    return promise
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        })
}