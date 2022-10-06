import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Form, TForm } from "../models/form"

export const useForm = (initialState:Form):[ Form , React.ChangeEventHandler , React.MouseEventHandler ] => {

    const [ searchParams , setSearchParamas ] = useSearchParams()

    const [ inputs , setInputs ] = useState<Form>(initialState)

    const {  type , name } = inputs

    const handleFilter = (e: TForm) => {
        const { name , value } = e.target; 

        setInputs((old) => ({
            ...old,
            [ name ] : value 
        }))
    }

    const handleUseFilter = () => {
        if(type == ""){
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

    return [ inputs , handleFilter , reset ]
}