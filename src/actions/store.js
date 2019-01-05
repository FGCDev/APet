export const RECEIVE_BOOKS = 'RECEIVE BOOKS';

export function receiveBooks (books) {
    return{
        type: RECEIVE_BOOKS,
        value: books,
    }

}