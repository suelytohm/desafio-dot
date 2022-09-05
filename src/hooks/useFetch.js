import { useState, useEffect } from 'react'

// Criando custom hook

export const useFetch = url => {
  const [data, setData] = useState(null)

  // Refatorando o POST
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      setMethod(method)
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          'Content-type': 'application/json',
        },
      })

      setMethod(method)
      setItemId(data)
    }
  }

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      try {
        const res = await fetch(url)
        const json = await res.json()

        setData(json)
        setError(null)
      } catch (error) {
        setError('Erro ao carregar dados!')
      }

      setLoading(false)
    })()
  }, [url, callFetch])

  useEffect(() => {
    ;(async () => {
      let json

      if (method === 'POST') {
        let fetchOptions = [url, config]

        const res = await fetch(...fetchOptions)

        json = await res.json()

        setCallFetch(json)
      } else if (method === 'DELETE') {
        let deleteUrl = `${url}/${itemId}`

        const res = await fetch(deleteUrl, config)

        json = await res.json()

        setCallFetch(json)
      }
    })()
  }, [config, method, url, itemId])

  return { data, httpConfig, loading, error }
}
