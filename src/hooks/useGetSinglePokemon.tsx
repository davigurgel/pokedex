import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { API_ROUTES } from '../constants/api-routes'
import { KEYS } from '../constants/keys'

export const getPokemon = async (slug: string) => {
  const response = await api.get(`${API_ROUTES.pokemon}${slug}`)

  return response.data
}

export const useGetSinglePokemon = (slug: string) => {
  return useQuery({
    queryKey: [KEYS.pokemon, slug],
    queryFn: () => getPokemon(slug),
  })
}
