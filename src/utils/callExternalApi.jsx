// create a function to call the external api using axios , it taken in config as parameters


function callExternalApi(config){
    return axios(config)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.log(err);
    });
}