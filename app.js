const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');
const argv=yargs
.option({
    a:{
        demand: true,
        alias: 'address',
        describe:'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;
geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResult)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currenlty ${weatherResult.temperature}.It feels like ${weatherResult.apparentTemperature}`);
                //console.log(JSON.stringify(weatherResult,undefined,2));
            }
        });
        //console.log(JSON.stringify(results,undefined,2));

    }
});

