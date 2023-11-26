import { useMemo, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokemonProps } from '../../@types/PokemonProps'
import { Bookmark } from 'react-feather'
import { GlobalContext } from '../../contexts/GlobalProvider'


const ListItem = ({ pokemon }: { pokemon: PokemonProps }) => {
  const { handleUpdateBookmark, isBookmarked } = useContext(GlobalContext)
  const pokemonId = useMemo(() => pokemon.url.slice(0, -1).split('/').pop(), [pokemon])
  const pokemonImage = useMemo(() => (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`), [pokemonId])

  return (
    <div className="lg:flex rounded-lg bg-white p-6 shadow-md">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold capitalize text-center">{`#${pokemonId} - ${pokemon.name}`}</div>
          <div className="cursor-pointer" onClick={() => handleUpdateBookmark(pokemon)}>{isBookmarked(pokemon) ? <Bookmark fill='#70b8f0' color='#70b8f0' /> : <Bookmark />}</div>
        </div>
        <Link to={`/pokemon/${pokemon.name}`}>
          <img
            alt={pokemon.name}
            src={pokemonImage}
            className="m-auto mt-2"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  )
}

export default ListItem
