import { useContext } from 'react'
import ListItem from '../ListItem'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { PokemonProps } from '../../@types/PokemonProps'

const PokemonsList = () => {
  const {
    pokemons: { data: { results } },
  } = useContext(GlobalContext)

  return (
    <section>
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-6 md:mt-8 xs: md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results?.map((item: PokemonProps) => (
            <ListItem key={item.name} pokemon={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PokemonsList
