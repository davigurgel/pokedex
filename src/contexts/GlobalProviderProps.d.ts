import { UseQueryResult } from '@tanstack/react-query'
import { PokemonProps } from '../@types/PokemonProps'
import { RequestListProps } from '../@types/RequestLisProps'

export type GlobalProviderProps = {
  pokemons: UseQueryResult<RequestListProps | null>
  handleUpdateBookmark: (pokemon: PokemonProps) => void
  isBookmarked: (pokemon: PokemonProps) => boolean
  setParams: (value: string | undefined) => void
}
