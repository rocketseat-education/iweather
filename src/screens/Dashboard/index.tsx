import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import { useCity } from '@hooks/useCity';
import { CityProps, getCityByNameService } from '@services/getCityByNameService';
import { WeatherResponseProps, getWeatherByCityService } from '@services/getWeatherByCityService';

import { Loading } from '@components/Loading';
import { NextDays } from '@components/NextDays';
import { SelectList } from '@components/SelectList';
import { WeatherToday } from '@components/WeatherToday';
import { WeatherDetails } from '@components/WeatherDetails';

export function Dashboard() {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [isWeatherLoading, setWeatherIsLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherResponseProps>({} as WeatherResponseProps);

  const { city, handleChanceCity, cityIsLoading } = useCity();

  function handleSelect(value: CityProps) {
    handleChanceCity(value);
    setSearch('');
    setCities([]);
  }

  async function getWeatherDetails() {
    if (!city) {
      return;
    }

    setWeatherIsLoading(true);

    const { latitude, longitude } = city;
    const response = await getWeatherByCityService({ latitude, longitude });

    setWeather(response);
    setWeatherIsLoading(false);
  }

  async function getCities(city: string) {
    setIsSearching(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsSearching(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    getCities(search)
    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  useEffect(() => {
    getWeatherDetails();
  }, [city]);

  if (isWeatherLoading || cityIsLoading || !city) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SelectList
        data={cities}
        value={search}
        onChange={setSearch}
        onPress={handleSelect}
        isLoading={isSearching}
        placeholder="Buscar local"
      />

      <WeatherToday city={city.name} weather={weather.today.weather} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <WeatherDetails data={weather.today.details} />
        <NextDays data={weather.nextDays} />
      </ScrollView>
    </View>
  );
}