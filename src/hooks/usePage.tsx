import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

export const usePage = () => {

    let [ searchParams, setSearchParams ] = useSearchParams();

    const [ page , setPage ] = useState(1)

    useEffect(()=> {
        let page  = parseInt(searchParams.get("page"))
        if(page) setPage(page)
    }, [])

    useEffect(()=>{
        searchParams.set("page", (page.toString()))
        setSearchParams(searchParams)
    }, [ page ])

    const handlePage = (next) => {
        next ? setPage( page + 1) : setPage( page - 1)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return { page , handlePage }
}