import { useContext, useCallback } from 'react'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { i18n } from '../../i18n'

const DEFAULT_BUTTON = 'text-sm bg-[#a82028] hover:bg-[#c85048] text-white font-semibold py-2 px-4'
const DISABLED_BUTTON = 'text-sm bg-[#a8b8c8] text-white font-semibold py-2 px-4'

const Pagination = () => {
  const {
    pokemons: { data },
    setParams,
  } = useContext(GlobalContext)

  const handleClick = useCallback((link: string) => {
    if (!link) return

    const params = link.split('?').pop()

    setParams(params)
  }, [setParams])

  return data?.results.length && (
    <div
      className="flex flex-col xs:flex-row items-center xs:justify-between">
      <div className="inline-flex">
          <button
            onClick={() => handleClick(data?.previous)}
            disabled={!data?.previous}
            className={`${data?.previous ? DEFAULT_BUTTON : DISABLED_BUTTON} rounded-l`}
          >
              {i18n.t('pagination.previous')}
          </button>
          <button
            onClick={() => handleClick(data?.next)}
            disabled={!data?.next}
            className={`${data?.next ? DEFAULT_BUTTON : DISABLED_BUTTON} rounded-r`}
          >
              {i18n.t('pagination.next')}
          </button>
      </div>
    </div>
  )
}

export default Pagination
