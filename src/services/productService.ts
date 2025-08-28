const baseUrl = 'https://dummyjson.com/'

export const getProducts = async () => {
  const res = await fetch(`${baseUrl}products`)
  return res.json()
}

export const getProductDetails = async (id: string) => {
  const res = await fetch(`${baseUrl}products/${id}`)
  return res.json()
}

export const searchProducts = async (query: string) => {
  const res = await fetch(`${baseUrl}products/search?q=${query}`)
  return res.json()
}
