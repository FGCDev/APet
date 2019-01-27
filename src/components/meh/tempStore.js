import React, { Component, Suspense } from 'react'
import { connect } from "react-redux";
import ReactDOM from 'react-dom';
import handleInitialStoreData from './../../actions/index.js';

const StoreCard = props => {
    return (
        <div className="BookContainer" >
            <div className="BookCover" >
                <img className="loaded" src={props.obj.img[0]} alt="Cover of the book" />
            </div>
            <div className="BookDetails">
                <p>{props.obj.title}</p>
                <p>{props.obj.description}</p>
                <p>{props.obj.target_year} &nbsp; {props.obj.target_class}</p>
                <p>{props.obj.subject}</p>
                <p>{props.obj.topic}</p>
                <p>{props.obj.price}</p>
            </div>
        </div>
    )
}

class TempStore extends Component {
    componentWillMount(){
        this.props.handle("maths");
    }

    render() {
        
        /* const booksArray = Object.values(this.props.book);
        console.log(booksArray);
        let search = "Maths Book".toUpperCase().split(" ");
        let id = [];
        const handle = () => {
            let j = 0; 
            let t; 
            
            while(j<booksArray.length){
                t = (booksArray[j].tags)

                for(let key of t.keys()){
                    t[key]=t[key].toUpperCase();
                }
                
                for(let keys of search.keys()){
                    if(t.includes(search[keys])){
                        id.push(booksArray[j].id)
                        console.log("Here1", id);
                    }
                }                 
                j++;
            }
        }
 */
 /*        const isObjEmpty = (obj) => {
            return new Promise((resolve, reject) => {
              setTimeout(function() {
                if (obj!==undefined&& obj!==null&& obj.length!==0) {
                  resolve(obj);
                } else {
                  reject({
                    error: 'empty obj'
                  });
                }
              }, 1500);
            });
          }; */

        /* const delayRender = () => {
            if(id.length!==0){
                console.log(id)
                ReactDOM.render(booksArray.filter(fun).map((book, i) => <StoreCard key = {i} obj={book} />), document.getElementById('root2'))}
        }

        const fun = (item) =>{
            if(id.includes(item.id)){
                return item
            }
        } */
        return (
            <div id ="root2">
                <Suspense fallback = {null} >
                    {//setTimeout(handle, 0)
                    }
                    {//setTimeout(delayRender, 100)
                    }
                    
                    {this.props.booksArray.map((book, i) => <StoreCard key = {i} obj={book} />)}
                </Suspense>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        booksArray: Object.values(state.store),
    }
}
const mapDispatchToProps = dispatch => ({
    handle: message => dispatch(handleInitialStoreData(message)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(TempStore);
