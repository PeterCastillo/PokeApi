import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useForm = (initialState) => {

    const [ searchParams , setSearchParamas ] = useSearchParams()

    const [ inputs , setInputs ] = useState(initialState)

    const {  type , name } = inputs

    const handleFilter = (e) => {
        const { name , value } = e.target; 

        setInputs((old) => ({
            ...old,
            [ name ] : value 
        }))
    }

    const handleUseFilter = () => {
        if(type == "none"){
            searchParams.delete("type")
            setSearchParamas(searchParams)
            return
        }
        searchParams.set("type", type ) 
        setSearchParamas(searchParams)
    }
    
    const reset = () => {
        setInputs((old)=>(
            {
                ...old,
                name : ""
            }))
    }

    useEffect(()=>{
        handleUseFilter();
    } , [type])

    return[ inputs , handleFilter , reset ]
}