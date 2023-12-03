import { Link } from "react-router-dom"
import notfound from '../../assets/not-found.png'
import { ArrowRight } from "react-feather"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'
import { i18n } from "../../i18n"

const NotFound = () => {
  return (
    <div className='m-auto h-2/3 align-middle p-4 flex items-center justify-center'>
      <div className='flex flex-col items-center justify-betweens gap-2'>
        <LazyLoadImage
          src={notfound}
          alt="Not Found"
          className='h-32'
          effect='blur'
          wrapperProps={{
            style: {transitionDelay: "1s"},
          }}
        />
        <div className="relative">
          <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
          <div className="bg-[#a82028] px-2 text-sm text-white rounded rotate-12 absolute top-1/2 left-1/4">
            Page Not Found
          </div>
        </div>
        <Link to="/" className='flex justify-between hover:underline'>
          <div>{i18n.t('general.linkToHome')}</div>
          <ArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default NotFound
