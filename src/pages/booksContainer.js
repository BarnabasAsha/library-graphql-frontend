import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_BOOKS } from "../queries"
import Books from "./books"

const BooksContainer = () => {
    const { loading, error, data } = useQuery(ALL_BOOKS)

    if(error) {
        console.log(error.message)
        return null
    }else if(loading) {
        return <p>loading...</p>
    }else {
        return <Books books={data.allBooks} />
    }

}

export default BooksContainer