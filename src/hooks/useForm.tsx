import { useState } from "react"

export const useForm = (initialState) => {
    const [ inputs , setInputs ] = useState(initialState)

    const handleFilter = (e) => {
        const { name , value } = e.target; 

        setInputs((old) => ({
            ...old,
            [ name ] : value 
        }))
    }

    return[ inputs , handleFilter ]
}