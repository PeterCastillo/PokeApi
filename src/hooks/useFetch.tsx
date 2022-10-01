export const useFetch = () => {

    const fetchAPI = async(url) => {
        try {
            const res = await fetch(url)
            const { results } = await res.json()
            return  results
        } catch (error) {
            console.log(error)
        }
    }
    return { fetchAPI }
}