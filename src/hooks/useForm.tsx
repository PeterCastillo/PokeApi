import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useForm = (initialState) => {

    const [ searchParamas , setSearchParamas ] = useSearchParams()

    const [ inputs , setInputs ] = useState(initialState)

    const {  type } = inputs

    const handleFilter = (e) => {
        const { name , value } = e.target; 

        setInputs((old) => ({
            ...old,
            [ name ] : value 
        }))
    }

    const handleUseFilter = () => {
        if(type.length > 1 ){
            searchParamas.set("type", type ) 
            setSearchParamas(searchParamas)
        }
    }

    useEffect(()=>{
        handleUseFilter();
    } , [type])

    return[ inputs , handleFilter ]
}