import {
  useEffect,
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState
} from 'react'

import { GlobalProviderProps } from './GlobalProviderProps'
import { useGetPokemons } from '../hooks/useGetPokemons'
import { PokemonProps } from '../@types/PokemonProps'

export const GlobalContext = createContext({} as GlobalProviderProps)

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [params, setParams] = useState<string | undefined>(undefined)
  const [bookmarks, setBookmarks] = useState<PokemonProps[]>([])
  const pokemons = useGetPokemons(params)

  const isBookmarked = useCallback((pokemon: PokemonProps) => (
    !!bookmarks.filter((item) => item.name === pokemon.name).length
  ), [bookmarks])

  const handleUpdateBookmark = useCallback((pokemon: PokemonProps) => {
    if (isBookmarked(pokemon)) {
      setBookmarks((prevState) => (prevState.filter((item) => item.name !== pokemon.name)))
    } else {
      setBookmarks((prevState) => ([...prevState, pokemon]))
    }
  }, [isBookmarked])

  useEffect(() => {
    const storage = localStorage.getItem('pokedex')

    if (storage) {
      setBookmarks(JSON.parse(storage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'pokedex',
      JSON.stringify(bookmarks),
    )
  }, [bookmarks])

  const valuesContext = useMemo(
    () => ({
      pokemons,
      handleUpdateBookmark,
      isBookmarked,
      setParams,
      bookmarks,
    }),
    [
      pokemons,
      handleUpdateBookmark,
      isBookmarked,
      bookmarks
    ],
  )

  return (
    <GlobalContext.Provider value={valuesContext}>
      {children}
    </GlobalContext.Provider>
  )
}
