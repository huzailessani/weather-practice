import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";

const Temp = () => {
    // const [searchValue, setSearchValue] = useState("karachi");
    // const [tempInfo, setTempInfo] = useState({});

    // const getWeatherInfo = async () => {
    //     try {
    //         let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=cbf0b808e2d62db9e5c0cc33f8946b89`;

    //         let res = await fetch(url);
    //         let data = await res.json();

    //         const { temp, humidity, pressure } = data.main;
    //         const { main: weathermood } = data.weather[0];
    //         const { name } = data;
    //         const { speed } = data.wind;
    //         const { country, sunset } = data.sys;

    //         const myNewWeatherInfo = {
    //             temp,
    //             humidity,
    //             pressure,
    //             weathermood,
    //             name,
    //             speed,
    //             country,
    //             sunset,
    //         };

    //         setTempInfo(myNewWeatherInfo);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getWeatherInfo();
    // }, []);

    const [searchValue, setSearchValue] = useState("karachi")
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=cbf0b808e2d62db9e5c0cc33f8946b89`
            let res = await fetch(url)
            let data = await res.json()

            const { temp, pressure, humidity } = data.main
            const { main: weathermood, description } = data.weather[0]
            const { sunset, sunrise, country } = data.sys
            const { name } = data
            const { speed } = data.wind

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
                sunrise,
                country
            };


            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, []);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button
                        className="searchButton"
                        type="button"
                        onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>

            {/* our temp card  */}
            <WeatherCard {...tempInfo} />
        </>
    );
};

export default Temp;