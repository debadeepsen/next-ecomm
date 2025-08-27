const baseUrl = 'https://dummyjson.com/'

export const getProducts = async () => {
    const res = await fetch(`${baseUrl}products`)
    return res.json()
}