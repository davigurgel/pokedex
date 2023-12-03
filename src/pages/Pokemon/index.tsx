/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useMemo } from "react"
import { redirect, useParams } from "react-router-dom"
import { useGetSinglePokemon } from "../../hooks/useGetSinglePokemon"
import { Star, ChevronDown } from "react-feather"
import { GlobalContext } from "../../contexts/GlobalProvider"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'
import pokeball from '../../assets/pokeball.png'
import { i18n } from "../../i18n"

const Pokemon = () => {
  const { slug } = useParams()
  const { data } = useGetSinglePokemon(slug as string)
  const { handleUpdateBookmark, isBookmarked } = useContext(GlobalContext)
  const pokemonImage = useMemo(() => (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`), [data])

  useEffect(() => {
    if (!slug) {
      redirect("/not-found");
    }
  }, [slug])

  return (
    data && (
      <section className="overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto p-5 flex flex-wrap items-center justify-center bg-white shadow-md">
            <LazyLoadImage
              alt={data.name}
              src={pokemonImage}
              className="m-auto md:w-1/2"
              effect='blur'
              placeholderSrc={pokeball}
              wrapperProps={{
                style: {transitionDelay: "1s"},
              }}
            />
            <div className="md:w-1/2 w-full p-6 mt-6 lg:mt-0 h-[700px] overflow-y-auto ">
              <div className="flex items-center justify-between">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                  {`#${data.id} - ${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`}
                </h1>
                <div className="cursor-pointer" onClick={() => handleUpdateBookmark(data.forms[0])}>
                  {isBookmarked(data.forms[0]) ? <Star size={18} fill='#70b8f0' color='#70b8f0' /> : <Star size={18} />}
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="capitalize font-semibold text-xs">{i18n.t('single.height')}</div>
                  <div className="text-xs">{data.height}</div>
                </div>
                <div className="flex gap-2">
                  <div className="capitalize font-semibold text-xs">{i18n.t('single.weight')}</div>
                  <div className="text-xs">{data.weight}</div>
                </div>
              </div>
              <hr className="my-4" />
              <div>
                <div className="font-semibold medium mb-2">{i18n.t('single.stats')}</div>
                <div className="flex flex-col gap-1">
                  {
                    data.stats.map((item: any) => (
                      <div key={item.stat.name} className="flex gap-2">
                        <div className="capitalize font-semibold text-xs">{item.stat.name}:</div>
                        <div className="text-xs">{item.base_stat}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <hr className="my-4" />
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-semibold medium">{i18n.t('single.abilities')}</span>
                    <span className="transition duration-500 group-open:rotate-180">
                      <ChevronDown />
                    </span>
                  </summary>
                  <div className="mt-3 flex flex-col px-2 gap-1">
                    {data.abilities.map((item: any) => (
                      <div key={item.ability.name} className="capitalize text-xs">{`- ${item.ability.name}`}</div>
                    ))}
                  </div>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-semibold medium">{i18n.t('single.games')}</span>
                    <span className="transition duration-500 group-open:rotate-180">
                      <ChevronDown />
                    </span>
                  </summary>
                  <div className="mt-3 flex flex-col px-2 gap-1">
                    {data.game_indices.map((item: any) => (
                      <div key={item.version.name} className="capitalize text-xs">{`- ${item.version.name}`}</div>
                    ))}
                  </div>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-semibold medium">{i18n.t('single.types')}</span>
                    <span className="transition duration-500 group-open:rotate-180">
                      <ChevronDown />
                    </span>
                  </summary>
                  <div className="mt-3 flex flex-col px-2 gap-1 h-[200px]">
                    {data.types.map((item: any) => (
                      <div key={item.type.name} className="capitalize text-xs">{`- ${item.type.name}`}</div>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  )
}

export default Pokemon
