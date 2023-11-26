import Pagination from "../../components/Pagination"
import PokemonsList from "../../components/PokemonsList"

const Home = () => {
  return (
    <div className="flex flex-col overflow-y-auto h-full pt-6 pb-14 gap-4">
      <PokemonsList />
      <Pagination />
    </div>
  )
}

export default Home
