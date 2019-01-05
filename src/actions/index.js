import { receiveBooks } from './store';
import books from '../components/meh/schema';

export default function handleInitialStoreData(){
    return(dispatch) => {
        dispatch(receiveBooks(books));
    }
}