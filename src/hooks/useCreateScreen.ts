import { useEffect, useState } from 'react'
import { api } from '../services'

interface CreateScreenProps {
  id: string
  name: string
  component_a: boolean
  component_b: boolean
  component_c: boolean
}

const useCreateScreen = () => {
  const [screens, setScreens] = useState<CreateScreenProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getScreens = async () => {
    try {
      setIsLoading(true)
      const response = await api.get('/screens')
      setScreens(response.data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getScreens()
  }, [])

  return { screens, isLoading }
}

export { useCreateScreen }
