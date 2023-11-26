import { useContext } from 'react'
import ListItem from '../ListItem'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { PokemonProps } from '../../@types/PokemonProps'

const PokemonsList = () => {
  const {
    pokemons: { data },
  } = useContext(GlobalContext)

  return data?.results.length && (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.results?.map((item: PokemonProps) => (
          <ListItem key={item.name} pokemon={item} />
        ))}
      </div>
    </div>
  )
}

export default PokemonsList
