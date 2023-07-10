import { api } from "./api";

export type CityProps = {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
}

export type CityAPIResponse = {
  id: string;
  name: string;
  sys: {
    country?: string;
  },
  coord: {
    lon: number;
    lat: number;
  }
}

export async function getCityByNameService(name: string): Promise<CityProps[] | []> {
  try {
    const { data } = await api.get<CityAPIResponse>(`/weather?q=${name}`);

    const city = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    };

    return [city];
  } catch (error) {
    return [];
  }
}