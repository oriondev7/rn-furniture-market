import { useState, useEffect } from 'react'
import axios, { isAxiosError } from 'axios'
import { ProductsModel } from '../models'
import { APIDomain } from '../constants'

export const useFetch = () => {
  const [data, setData] = useState<ProductsModel[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.get(`${APIDomain.local}/api/products/`)
      setData(response.data)
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetchData = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetchData }
}
