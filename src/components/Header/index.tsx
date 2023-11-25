import banner from '../../assets/pokedex-banner.png'
import greatball from '../../assets/greatball.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <section>
      <div className='flex items-center px-3 justify-between w-full h-10 bg-[#a82028]'>
        <nav className="flex flex-wrap items-center text-base">
          <Link to="/">
            <img src={banner} alt="Pokedex Banner" className='h-8' />
          </Link>
        </nav>
        <nav className="flex flex-wrap items-center text-base">
          <Link to="/bookmarks">
            <img src={greatball} alt="Great ball" className='h-8' />
          </Link>
        </nav>
      </div>
    </section>
  )
}

export default Header
