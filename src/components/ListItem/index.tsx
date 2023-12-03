import { useMemo, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokemonProps } from '../../@types/PokemonProps'
import { Star } from 'react-feather'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import pokeball from '../../assets/pokeball.png'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ListItem = ({ pokemon }: { pokemon: PokemonProps }) => {
  const { handleUpdateBookmark, isBookmarked } = useContext(GlobalContext)
  const pokemonId = useMemo(() => pokemon.url.slice(0, -1).split('/').pop(), [pokemon])
  const pokemonImage = useMemo(() => (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`), [pokemonId])

  return (
    <div className="lg:flex rounded-lg bg-white p-6 shadow-md">
      <section>
        <Link to={`/pokemon/${pokemon.name}`}>
          <LazyLoadImage
            alt={pokemon.name}
            src={pokemonImage}
            placeholderSrc={pokeball}
            className="m-auto mt-2"
            effect='blur'
            wrapperProps={{
              style: {transitionDelay: "1s"},
            }}
          />
        </Link>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold capitalize text-center">{`#${pokemonId} - ${pokemon.name}`}</div>
          <div className="cursor-pointer" onClick={() => handleUpdateBookmark(pokemon)}>
            {isBookmarked(pokemon) ? <Star size={18} fill='#70b8f0' color='#70b8f0' /> : <Star size={18} />}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ListItem
