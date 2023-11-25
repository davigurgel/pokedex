import { useContext } from 'react'
import ListItem from '../ListItem'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { PokemonProps } from '../../@types/PokemonProps'
import emptylist from '../../assets/empty-list.png'
import greatball from '../../assets/greatball.png'
import { i18n } from '../../i18n'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-feather'

const BookmarksList = () => {
  const { bookmarks } = useContext(GlobalContext)

  return bookmarks.length ? (
    <section>
      <div className="container px-6 mx-auto py-8">
        <div className='flex gap-2 items-center'>
          <img src={greatball} alt="Great ball" className='h-6' />
          <div className='font-semibold text-lg'>{i18n.t('bookmarkList.title')}</div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-6 md:mt-8 xs: md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {bookmarks?.map((item: PokemonProps) => (
            <ListItem key={item.name} pokemon={item} />
          ))}
        </div>
      </div>
    </section>
  ) : (
    <div className='m-auto h-2/3 align-middle p-4 flex items-center justify-center'>
      <div className='flex flex-col items-center justify-betweens gap-4'>
        <img src={emptylist} alt="Empty list" className='h-24' />
        <h2 className='font-semibold text-lg'>{i18n.t('bookmarkList.noBookmarks')}</h2>
        <Link to="/" className='flex justify-between hover:underline'>
          <div>{i18n.t('general.linkToHome')}</div>
          <ArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default BookmarksList
