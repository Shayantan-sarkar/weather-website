const express=require("express");
const bodyparser=require("body-parser");
const https=require("https");
const { dirname } = require("path");
const { response } = require("express");
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "ejs");



app.get("/",function(request,response){
    response.render("location")
    console.log(__dirname);
})
app.post("/",function(req,res){
    const city=req.body.search;
    const api_key="";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key; 
    https.get(url,function(resp){
        console.log(resp.statusCode);
        resp.on("data",function(data){
            const weather_data=JSON.parse(data);
           
           
           
           
            const temps =Math.floor(weather_data.main.temp-270);
            const feels_likes ="Feels Like:"+Math.floor(weather_data.main.feels_like-270);
            const temp_mins="MIN Temp:"+Math.floor(weather_data.main.temp_min-270);
            const temp_maxs="MAX Temp:"+Math.floor(weather_data.main.temp_max-270);
            const pressures="Pressure: "+weather_data.main.pressure+" hPa";
            const humiditys="Humidity: "+weather_data.main.humidity+" %";
            const speeds="Wind Speed: "+weather_data.wind.speed+" m/s";
            const cloudyness="Cloudiness: "+weather_data.clouds.all+" %";
            const countrys=weather_data.sys.country;
            const icon=weather_data.weather[0].icon;
            const descriptions=weather_data.weather[0].description;
            


            const w_url="http://openweathermap.org/img/wn/"+icon+"@2x.png";
          
          
            console.log(temps,feels_likes,temp_mins,temp_maxs,pressures,humiditys,speeds,cloudyness,countrys,icon,descriptions);
            res.render("weather",{loc:city,countryel:countrys,tempel:temps,cloudel:cloudyness,humel:humiditys,feel:feels_likes,mini:temp_mins,maxi:temp_maxs,pressel:pressures,wind:speeds,desc:descriptions});

        })
    

    });
    
})



app.listen( process.env.PORT || 3000);