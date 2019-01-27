import { RECEIVE_BOOKS } from './../actions/store';

export default function setBooks (state={}, action) {
    switch (action.type){
        case RECEIVE_BOOKS:
        return{
            ...state,
            ...action.value,
        }
        default:
        return state;
    }
}
