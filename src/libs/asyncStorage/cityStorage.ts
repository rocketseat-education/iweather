import AsyncStorage from '@react-native-async-storage/async-storage';
import { CityProps } from '@services/getCityByNameService';

const STORAGE_KEY = '@iweather:city';

export async function getStorageCity() {
  const storage = await AsyncStorage.getItem(STORAGE_KEY);

  const response = storage ? JSON.parse(storage) as CityProps : null;

  return response;
}

export async function saveStorageCity(city: CityProps) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(city));
}

export async function removeStorageCity() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}