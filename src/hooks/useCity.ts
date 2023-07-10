import { useContext } from 'react'

import { CityContext } from '@contexts/CityContext';

export function useCity() {
  const context = useContext(CityContext)

  return context
}