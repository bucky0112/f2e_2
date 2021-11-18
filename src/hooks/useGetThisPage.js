import { useContext, useEffect } from 'react'
import SearchContext from '../store/SearchContext'

export const useGetThisPage = (ID) => {
  const { dispatch } = useContext(SearchContext)

  useEffect(() => {
    dispatch({ type: 'getThisPage', payload: ID })
  }, [])
}
