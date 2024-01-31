import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.get('http://localhost:3000/api/products/')
      setData(response.data)
    } catch (error) {
      setError(error)
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

  return {data, isLoading, error, refetchData}
}
