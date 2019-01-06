import React, { Component } from 'react'
import { connect } from "react-redux";

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
    render() {
        const booksArray = Object.values(this.props.book);
        return (
            <div>
                {booksArray.map((book, i) => <StoreCard key = {i} obj={book} />)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.store,
    }
}

export default connect(mapStateToProps)(TempStore);
