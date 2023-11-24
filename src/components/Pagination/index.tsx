import { useContext, useCallback } from 'react'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { i18n } from '../../i18n'

const DEFAULT_BUTTON = 'text-sm bg-[#a82028] hover:bg-[#c85048] text-white font-semibold py-2 px-4'
const DISABLED_BUTTON = 'text-sm bg-[#a8b8c8] text-white font-semibold py-2 px-4'

const Pagination = () => {
  const {
    pokemons: { data: { next, previous } },
    setParams,
  } = useContext(GlobalContext)

  const handleClick = useCallback((link: string) => {
    if (!link) return

    const params = link.split('?').pop()

    setParams(params)
  }, [setParams])

  return (
    <div
      className="px-5 py-5 border-t flex flex-col xs:flex-row items-center xs:justify-between">
      <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={() => handleClick(previous)}
            disabled={!previous}
            className={`${previous ? DEFAULT_BUTTON : DISABLED_BUTTON} rounded-l`}
          >
              {i18n.t('pagination.previous')}
          </button>
          <button
            onClick={() => handleClick(next)}
            disabled={!next}
            className={`${next ? DEFAULT_BUTTON : DISABLED_BUTTON} rounded-r`}
          >
              {i18n.t('pagination.next')}
          </button>
      </div>
    </div>
  )
}

export default Pagination
