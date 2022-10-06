import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

export const usePage = () => {

    let [ searchParams, setSearchParams ] = useSearchParams();

    const [ page , setPage ] = useState<number>(1)

    useEffect(()=> {
        let page: string | null = searchParams.get("page")
        if(page) setPage(parseInt(page))
    }, [])

    useEffect(()=>{
        if(page == 0) {
            setPage(1)
        }
        if(page == 1 && searchParams.has('page')){
            searchParams.delete('page')
            setSearchParams(searchParams)
        }
        if(page > 1 ){
            searchParams.set("page", (page.toString()))
            setSearchParams(searchParams)
        }
    }, [ page ])

    const handlePage = (next:boolean) => {
        next ? setPage( page + 1) : setPage( page - 1)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        if(searchParams.has('type')){
            searchParams.delete('type')
        }
    }

    return { page , handlePage }
}