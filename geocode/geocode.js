const request=require('request');

var geocodeAddress=(address,callback)=>{    
    var encodedAddress=encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCPwZqFl1szZQd_FcIlzjpn_n1zIIiRrFU` ,
        JSON: true
    },(error, response, body)=>{
        if(error){
            callback('Unable to connect to google server');
        }
        else if(JSON.parse(response.body).status==='ZERO_RESULTS'){
            callback('unable to find address');
        }
        else if(JSON.parse(response.body).status==='OK'){
            callback(undefined,{
                address: JSON.parse(response.body).results[0].formatted_address,
                latitude: JSON.parse(response.body).results[0].geometry.location.lat,
                longitude: JSON.parse(response.body).results[0].geometry.location.lng

            })
            // console.log(`Address: ${JSON.parse(response.body).results[0].formatted_address}`);
            // console.log(`Latitiude: ${JSON.parse(response.body).results[0].geometry.location.lat}`);
            // console.log(`longitude: ${JSON.parse(response.body).results[0].geometry.location.lng}`);
            //console.log(JSON.stringify(response,undefined,2));        
        }   
    });
};
module.exports.geocodeAddress=geocodeAddress;
