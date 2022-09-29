import { useEffect, useState } from "react"

export const getData = (url:string) => {

    const [ loading , setLoading ] = useState<Boolean>(true)
    const [ data , setData ] = useState<any>()

    const fetchAPI = async() => {
        try {
            console.log("fetch")
            const res = await fetch(url)
            const info = await res.json()
            setData(info)
            setLoading(false)
            console.log('fetch')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [url])

    return { data , loading }
}