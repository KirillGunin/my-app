// хук обработки индикатора загрузки, ошибки  и выполнение коллбека
import { useState } from "react"

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  // обработка ошибок. В случае ошибки будет помещаться в State
  const [error, setError] = useState('')

  const fetching = async (...args) => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }
  // возвращаем состояния которые можно использовать
  return [fetching, isLoading, error]
}
