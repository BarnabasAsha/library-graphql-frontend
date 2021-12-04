import { gql } from '@apollo/client'

export const ALL_BOOKS = gql`
query getBooks {
    allBooks {
        id
        title
        author
        published
    }
}
`

export const ALL_AUTHORS = gql`
query getAuthors {
    allAuthors {
        name
        born
        bookCount
        id
    }
}
`

export const ADD_BOOK = gql`
mutation addBook($title:String!, $author:String!, $published:String!) {
    addBook(
        title: $title,
        author: $author,
        published: $published
    ) {
        title,
        author,
        published
    }
}
`