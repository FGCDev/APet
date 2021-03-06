import React, { Suspense, memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Img } from 'the-platform';

import EB from '../helpers/ErrorBoundary';
import Loader from '../helpers/Loader';
import bookmark from '../../res/shapes/baseline-bookmark_border-24px.svg';

const StoreCard = (props) => {
    // let classy = "Card ";
    // let classyinfo = "Card-Info ";
    //if (props.style) classy = classy.concat(props.style)
    return (
        <Link className="BookContainer" to='/store/item'><EB>
            <Suspense className="BookCover" fallback={(<Loader className="BookCover previewtext" text="Getting Your Image" />)}>
                <Img className="BookCover loaded" src={props.cover} alt="Cover of the book" />
            </Suspense>
            <div className="BookDetails">
                <div className="BookIdentifiers">
                    <h3>{props.title}</h3>
                    <h4>{props.target}</h4>
                    <h5>{props.subject}</h5>
                    <h5>{props.board}</h5>
                </div>
                <div className="BookMeta" >
                    <h5>{props.pages + " Pages | ." + props.format}</h5>
                    <h5>{props.rating + " | " + props.reviews + " Reviews"}</h5>
                </div>
                <div className="BookPricing">
                    <h2>{"Rs. "+props.price}</h2>
                </div>
            </div>
            <img className="BookMark" src={bookmark} alt="toggle button for bookmarking the store items" />
        </EB></Link>
    );
};

StoreCard.propTypes = {
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
    price: PropTypes.string,
    bookmarked: PropTypes.bool,
    style: PropTypes.string,
};

StoreCard.defaultProps = {
    target: "12th Boards 2019",
    subject: "Mathematics",
    board: "CBSE",
    pages: "120",
    format: "PDF",
    rating: "4.67",
    reviews: "29",
    price: "149",
};
export default StoreCard
