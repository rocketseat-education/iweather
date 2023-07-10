import dayjs from "dayjs";
import { api } from "./api";
import { getNextDays } from "@utils/getNextDays";
import { WeatherIconsKeysProps, weatherIcons } from "@utils/weatherIcons";

import { DayProps } from "@components/Day";
import { WeatherTodayProps } from "@components/WeatherToday";
import { WeatherDetailsProps } from "@components/WeatherDetails";

export interface WeatherAPIResponseProps {
  list: {
    pop: number;
    dt_txt: string;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      humidity: number;
      temp_kf: number;
    },
    wind: {
      speed: number;
    };
    weather: {
      description: string;
      main: WeatherIconsKeysProps;
    }[]
  }[];
}

type SearchCityWeatherProps = {
  latitude: number;
  longitude: number;
}

export type WeatherResponseProps = {
  today: {
    weather: WeatherTodayProps;
    details: WeatherDetailsProps;
  },
  nextDays: DayProps[];
}

export async function getWeatherByCityService({ latitude, longitude }: SearchCityWeatherProps): Promise<WeatherResponseProps> {
  const { data } = await api.get<WeatherAPIResponseProps>(`/forecast?lat=${latitude}&lon=${longitude}`);
  const { main, weather, wind, pop } = data.list[0];

  const today = {
    weather: {
      temp: `${Math.ceil(main.temp)}ºc`,
      temp_min: `${Math.floor(main.temp_min)}ºc`,
      temp_max: `${Math.ceil(main.temp_max)}ºc`,
      description: weather[0].description,
      details: weatherIcons[weather[0].main],
    },
    details: {
      feels_like: `${Math.floor(main.feels_like)}ºc`,
      probability: `${pop * 100}%`,
      wind_speed: `${wind.speed}km/h`,
      humidity: `${main.humidity}%`,
      temp_kf: `${Math.floor(main.temp_kf)}`
    }
  }

  const days = getNextDays();
  const daysAdded: string[] = [];
  const nextDays: DayProps[] = [];

  data.list.forEach((item: any) => {
    const day = dayjs(new Date(item.dt_txt)).format('DD/MM');

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day);

      const status: WeatherIconsKeysProps = item.weather[0].main;

      const details = weatherIcons[status];

      nextDays.push({
        day: dayjs(new Date(item.dt_txt)).format('ddd'),
        min: `${Math.floor(item.main.temp_min)}ºc`,
        max: `${Math.ceil(item.main.temp_max)}ºc`,
        weather: item.weather[0].description,
        icon: details.icon_day
      });
    }
  });

  return { today, nextDays }
}