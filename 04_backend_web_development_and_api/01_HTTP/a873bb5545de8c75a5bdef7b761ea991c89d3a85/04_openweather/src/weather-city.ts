import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByCity(city:string):void {
  request(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`, (error, html) => {
  if (error) {
    console.error(error);
    return;
  } else {
    const data = JSON.parse(html);
    console.log(`${data.main.temp} °C`);
  }
});
}
// leave lines below for tests to work properly
export { weatherByCity }


