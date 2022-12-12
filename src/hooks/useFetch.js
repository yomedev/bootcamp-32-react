import { useCallback, useEffect, useState } from "react"

export const useFetch = (requst, dependacy = []) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = useCallback(async params => {
    try {
      setIsLoading(true)
      const { data } = await requst(params)
      setData(data)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData].concat(dependacy))

  return [data, isLoading, isError]
}


const MyComponent = () => {
  const [data, isError, isLoading] = useFetch(() => axios.get('...'), ['...'])
  useQuery()

  

  return <></>
}