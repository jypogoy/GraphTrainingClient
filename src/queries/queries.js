import { gql } from 'apollo-boost';

const getBooksQuery = gql`
    {
        books {
            id
            title
            genre
            author {
                name
            }
        }
    }
`;

const getBookQuery = gql`
    query($id: ID!) {
        book(id: $id) {
            title
            genre
            id
            author {
                name
                age
                books {
                    title
                    genre
                    id
                }
            }
        }
    }
`;

const getAuthorsQuery = gql`
    {
        authors {
            id
            name
            age
        }
    }
`;

const addBookMutation = gql`
    mutation($title: String, $genre: String!, $authorId: ID!) {
        createBook(title: $title, genre: $genre, authorId: $authorId) {
            title
            id
        }
    }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery };

