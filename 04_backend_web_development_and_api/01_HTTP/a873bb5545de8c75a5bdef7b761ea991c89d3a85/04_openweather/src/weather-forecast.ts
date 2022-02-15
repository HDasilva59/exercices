import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string): void {
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, html) => {
      if (error){
        console.error(error);
        return;
      } else {
        const data = JSON.parse(html);
        console.log(`Weather for ${data.city.name}`)
        const date: string = data.list[0].dt_txt;
        const dataToPrint = {
          temperature: `${data.list[0].main.temp} °C`,
          date: date.slice(0, 10),
          hour: date.slice(11),
          weather: data.list[0].weather[0].description,
        };
        console.log(dataToPrint);
      }
    },
  );
}

function weatherByLatitudeAndLongitude(latitude, longitude) {
  // code the function here
}

// leave lines below for tests to work properly
export { weatherByZipcode, weatherByLatitudeAndLongitude };
