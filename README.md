# weather-app

## Project Description

This project was a way to get experience with the Async nature of JavaScript. It allowed me to use promises and async/await to interact with an API and get data from it. The API I used is the WeatherAPI, just the free tier since it can be quite expensive. This project displays the date, time, temperature, name of the city that was searched, and weather data. The weather data consists of both a 24 hour forecast and a 7 day forecast. It also includes misc weather data for the current day; this includes Humidity, Wind Speed & Direction, Sunset & Sunrise, UVI, Dew Point, and Feels Like statistics. For each weather condition (ex Storm, Rain, Windy, Tornado, Snow, etc.) there is a SVG for it to create a visual of the weather conditions.

The website uses the Session-Storage in the browser. When you load up it will query the weather for Charlotte, NC. However, once the webpage loads the user can search and city the desire in the search bar and it will refresh the page with data for that city.

## Tech Stack

* HTML

* CSS

* JavaScript

* Webpack

* WeatherAPI


## Link

Sadly for this project the webpage runs into errors when hosted on GitHub pages (you can see the errors [here](https://jhagg26.github.io/weather-app/) if you use the devtools To view this webpage the project has to be run locally. So you download it and view the `index.html` file via your browser. Sorry about that, to compensate I will have images of the webpage below! 

There are errors because with the free tier of the WeatherAPI you can NOT make HTTPS request to the WeatherAPI on a live website, it forces free tier users to use HTTP. It works locally but when hosted on GitHub Pages it runs to errors due to this issue. Now I considered paying the subscription but the cheapest option that allowed HTTPS request was $470 a month... I cannot afford that and if I could I wouldn't want to spend that money for a silly little project. 

* Here is an example of Charlotte  

  ![CLT-1](https://github.com/jhagg26/weather-app/assets/60297426/9341ed81-c123-435a-8669-c932690685a7)

	
  ![CLT-2](https://github.com/jhagg26/weather-app/assets/60297426/74811557-2817-4644-9dcf-8dab9a14bbb0)


* Here is an example of Boston
  
  ![BST-1](https://github.com/jhagg26/weather-app/assets/60297426/fcb492ef-af81-475a-b9ae-3813beebc6f5)


   
  ![BST-2](https://github.com/jhagg26/weather-app/assets/60297426/3dd0af70-a911-43f5-9e55-469335dd6e60)

## Challenges Faced

* Storing API Keys 
    * This had a simple solution, store the API key in an environmental variable, and ignore the file that stores it. I found the solution [online](https://www.learnhowtoprogram.com/intermediate-javascript/asynchrony-and-apis/protecting-api-keys).

* Interacting with APIs with JS Asnyc Code
    * These are things that I had no experience with going into this project outside or reading three articles/blogs and watching some YouTube vidoes on this. I will say it was easy to do with Promises and the async, await keywords. After going over some examples I saw when learning about these things I was confident in being able to implement it myself.

* Using SOLID and DRY Principles
    * These are things are still new to me but I keep them in mind when coding now. I want to make code flexible, easy to read, as decoupled as possible, and with as little redundancies as possible.

    * When it comes to SOLID, I mainly focused on the Separation of Concerns aspect. Each module has one responsibility and each function in it does one thing. I didn't have to focus on the OLID aspects for this project. I didn't have subclasses to worry about and there are no interfaces.
