const request=require('request');

var geocodeAddress=(address)=>{
    return new Promise((resolve,reject)=>{
        var encodedAddress=encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCPwZqFl1szZQd_FcIlzjpn_n1zIIiRrFU` ,
        JSON: true
    },(error, response, body)=>{
        if(error){
            reject('Unable to connect to google server');
        }
        else if(JSON.parse(response.body).status==='ZERO_RESULTS'){
            reject('unable to find address');
        }
        else if(JSON.parse(response.body).status==='OK'){
            resolve({
                address: JSON.parse(response.body).results[0].formatted_address,
                latitude: JSON.parse(response.body).results[0].geometry.location.lat,
                longitude: JSON.parse(response.body).results[0].geometry.location.lng

            })
        }   
       });  
    });
};

geocodeAddress('000000').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage);
});