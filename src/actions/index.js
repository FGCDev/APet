import { receiveBooks } from './store';
import books from '../components/meh/schema';

export default function handleInitialStoreData(search){
    const booksArray = Object.values(books);
    let searchItems = "maths 12th".toUpperCase().split(" ");
        let id = [];
        const fun = (item) =>{
            if(id.includes(item.id)){
                return item
            }
        }
            let j = 0, count=0; 
            let t; 
            
            while(j<booksArray.length){
                t = (booksArray[j].tags)

                for(let key of t.keys()){
                    t[key]=t[key].toUpperCase();
                }
                
                for(let keys of searchItems.keys()){
                    if(t.includes(searchItems[keys])){
                        
                        if(count===0)
                        id.push(booksArray[j].id)
                        console.log("Here1", id);
                        count++
                    }
                }    
                count=0;             
                j++;
            }
        
    return(dispatch) => {
        dispatch(receiveBooks(booksArray.filter(fun)));
    }
}