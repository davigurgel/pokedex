import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { API_ROUTES } from '../constants/api-routes'
import { KEYS } from '../constants/keys'

export const getPokemons = async (params: string) => {
  const response = await api.get(`${API_ROUTES.pokemon}?${params}`)

  return response.data
}

export const useGetPokemons = (params: string | undefined = 'limit=20&offset=0') => {
  return useQuery({
    queryKey: [KEYS.pokemons, params],
    queryFn: () => getPokemons(params),
  })
}
