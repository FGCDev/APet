import React, { Suspense, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Img } from 'the-platform';
import { Link/*, withRouter*/ } from 'react-router-dom'
/*import { Formik } from 'formik';*/

import EB from '../helpers/ErrorBoundary';
import Loader from '../helpers/Loader';
// import bookmark from '../../res/shapes/baseline-bookmark_border-24px.svg';
import '../nav/navbar.css';
import './ItemDetails.css'
import StoreNavBar from './StoreNavBar';
import BagFab from './BagFab';

const itemsInBag = 4;

const ReviewItems = props => {
  return (
    <div>
      I'm a simple Review
    </div>
  )
}

ReviewItems.propTypes = {

}

// export default ReviewItems


const ReviewsContainer = props => {
  return (
    <div className="DetailsBookReviews">
      Are you ready for some awesome Reviews????? <hr />
      Are you really sure?  <hr />
      Why do you even care about Public Opinion? <hr />
      You really need to learn the art of NGAF <hr />
      You should go learn from the great oyu... <hr />
      Why are you still here. Just go. <hr />
      NOW!!! <hr />
      <ReviewItems />
    </div>
  )
}

ReviewsContainer.propTypes = {

}

// export default ReviewsContainer


class ItemDetails extends Component {
  static propTypes = {
    id: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
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
  }

  static defaultProps = {
    cover: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio5.png",
    title: "My Simply Awesome Book",
    target: "12th Boards 2019",
    subject: "Mathematics",
    board: "CBSE",
    pages: "120",
    format: "PDF",
    rating: "4.67",
    reviews: "29",
    price: "149",
  };

  state = {
    showReviews: false
  }



  render() {
    return (
      <React.Fragment>
        <StoreNavBar itemsInBag={itemsInBag}/>
        <div style={{display: "flex", height: "100%", width: "100%", alignItems: "center"}}>
          <div className="LHS">
          <div className="DetailsItemContainer">
              <EB>
                <Suspense className="DetailsBookCover" fallback={(<Loader className="DetailsBookCover previewtext" text="Getting Your Image" />)}>
                  <Img className="DetailsBookCover loaded" src={this.props.cover} alt="Cover of the book" />
                </Suspense>
              </EB><EB>
                <div className="DetailsBookInfo">
                  <div className="DetailsBookIdentifiers">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.target}</h4>
                    <h5>{this.props.subject}</h5>
                    <h5>{this.props.board}</h5>
                  </div>
                  <div className="DetailsBookMeta" >
                    <h5>{this.props.pages + " Pages | ." + this.props.format}</h5>
                    <h5>{"Avg. Rating: " + this.props.rating + " | " + this.props.reviews + " Reviews"} {" ("}<a href="#reviews">browse reviews</a>{")"}</h5>
                  </div>
                  <div className="DetailsBookPricing">
                    <h2>{"Rs. " + this.props.price}</h2>
                  </div>
                </div>
                {/*<img className="DetailsBookMark" src={bookmark} alt="toggle button for bookmarking the store items" />*/}
              </EB>
            </div>
            <EB>
              <ReviewsContainer />
            </EB>
          </div>
          <div className="RHS">
            I'm just conditional
            
          </div>
          <BagFab itemsInBag={itemsInBag}/>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
