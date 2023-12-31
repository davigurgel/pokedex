import banner from '../../assets/pokedex-banner.png'
import greatball from '../../assets/greatball.png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Header = () => {
  return (
    <section>
      <div className='flex items-center px-3 justify-between w-full h-10 bg-[#a82028]'>
        <nav className="flex flex-wrap items-center text-base">
          <Link to="/">
            <LazyLoadImage
              src={banner}
              alt="Pokedex Banner"
              className='h-8'
              effect='blur'
              wrapperProps={{
                style: {transitionDelay: "1s"},
              }}
            />
          </Link>
        </nav>
        <nav className="flex flex-wrap items-center text-base">
          <Link to="/bookmarks">
            <LazyLoadImage
              src={greatball}
              alt="Great ball"
              className='h-8'
              effect='blur'
              wrapperProps={{
                style: {transitionDelay: "1s"},
              }}
            />
          </Link>
        </nav>
      </div>
    </section>
  )
}

export default Header
