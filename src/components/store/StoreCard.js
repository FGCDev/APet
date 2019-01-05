import React, { Suspense, memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Img } from 'the-platform';

import EB from '../helpers/ErrorBoundary';
import Loader from '../helpers/Loader';

const StoreCard = (props) => {
    // let classy = "Card ";
    // let classyinfo = "Card-Info ";
    //if (props.style) classy = classy.concat(props.style)
    return (
        <div className="BookContainer" style={{flex: 1, width: 600, height: 300, padding: 8, }}>
            <div className="BookCover"style={{ flex: 1, width: 220, height: 'inherit' }}>
                <Suspense fallback={(<Loader className="previewtext" text="Getting Your Image" />)}>
                    <Img className="loaded" src={props.cover} alt="Cover of the book" />
                </Suspense>
            </div>
            <div className="BookDetails" style={{ flex: 1, width: 100, height: 'inherit', justifyContent: 'space-between', alignContent: 'flex-start', padding: 8, flexGrow: 1, }}>
                <div style={{ flex: 1, width: 'inherit', }}>
                    {props.title}
                    {props.target}
                    {props.subject}
                    {props.board}
                </div>
                <div style={{ flex: 1, width: 'inherit', height: 60, }} >
                    {props.pages + " Pages | ." + props.format}
                    {props.rating + " " + props.reviews + "Reviews"}
                </div>
                <div className="BookPricing" style={{ flex: 1, width: 100, height: 100, }}>
                    <h2>{"Rs. "+props.price}</h2>
                </div>
            </div>
            <div  className="BookMark" style={{ flex: '1', width: '60', height: '60', padding: 'inherit', }}>
                <img src={} alt="toggle button for bookmarking the store items" />
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    target: PropTypes.string,
    subject: PropTypes.string,
    board: PropTypes.string,
    pages: PropTypes.string,
    format: PropTypes.string,
    rating: PropTypes.string,
    reviews: PropTypes.string,
    price: PropTypes.number,
    bookmarked: PropTypes.bool,
    style: PropTypes.string,
};