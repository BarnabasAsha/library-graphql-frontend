import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_AUTHORS } from "../queries"
import Authors from "./authors"

const AuthorsContainer = () => {
    const { loading, error, data } = useQuery(ALL_AUTHORS)

    if(error) {
        console.log(error.message)
        return null
    }else if(loading) {
        return <p>loading...</p>
    }else {
        return <Authors authors={data.allAuthors} />
    }

}

export default AuthorsContainer