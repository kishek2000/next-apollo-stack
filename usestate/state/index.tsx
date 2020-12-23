import React, { useCallback, useEffect, useState } from "react";
import { APIController } from "../apiClient";

export const Container = ({ children }) => {
  const apiClient = new APIController();

  const [cityWeather, setCityWeather]: any = useState({});

  const getCityWeather = useCallback((city: string) => {
    apiClient.getWeatherForCity(city).then((data) => setCityWeather(data));
  }, []);

  return children({ getCityWeather: getCityWeather, cityWeather: cityWeather });
};
