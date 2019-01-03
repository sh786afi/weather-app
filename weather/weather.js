const request=require('request');

var getWeather=(lat,lng,callback)=>{
    request({
     url: `https://api.darksky.net/forecast/b1627cc4395c8c5f463b4b177edfaddd/${lat},${lng}`,
     json: true
     },(error,response, body)=>{
        if(error){
            callback('Unable to connect forecast server');
        }
         else if(response.statusCode===400){
            callback('unable to fetch weather');
        }
        else if(response.statusCode===200){
            callback(undefined,{
                temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
            });            
       }
    });
};
module.exports.getWeather=getWeather;