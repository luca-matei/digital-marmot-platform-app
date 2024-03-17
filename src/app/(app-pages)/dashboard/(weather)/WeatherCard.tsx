"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  temp_c: number;
  condition: WeatherCondition;
  wind_kph: number;
  pressure_mb: number;
  humidity: number;
}

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: CurrentWeather;
}

export default function WeatherCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:4096/weather?city=Bucharest');
        setWeather(response.data);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-5">
      <div className="font-bold text-xl mb-2">{weather.location.name}</div>
      <div>
        <img src={`https:${weather.current.condition.icon}`} alt="Weather icon" className="w-20 h-20" />
        <p>{weather.current.condition.text}</p>
        <p>Temperature: {weather.current.temp_c}°C</p>
        <p>Wind: {weather.current.wind_kph} kph</p>
        <p>Pressure: {weather.current.pressure_mb} mb</p>
        <p>Humidity: {weather.current.humidity}%</p>
      </div>
    </div>
  );
};
