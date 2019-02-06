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
import ReviewsContainer from './ReviewsContainer';

const itemsInBag = 4;

const slickArrow = (<span className="Symbol">🡐</span>)
// const thickArrow = (<span className="Symbol">🠘</span>)
const showButton = (<span className="Symbol">▼</span>);
const hideButton = (<span className="Symbol">△</span>);;

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
    source: PropTypes.string,
    description: PropTypes.string,
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
    source: "Maths 2019 Boards",
    description: "I'm an awesome book. If you have a problem with that, then you can deal with it yourself you blundering baboon.",
  }

  state = {
    showReviews: true,
    showDetails: true,
  }

  toggleDetails = () => {
    console.log('toggling details', this.state.showDetails)
    this.setState(prevState => ({ ...prevState, showDetails: !prevState.showDetails }))
    // console.log('toggled details', this.state.showDetails)
  }

  toggleReviews = () => {
    this.setState(prevState => ({ ...prevState, showReviews: !prevState.showReviews }))
  }

  componentDidMount() {
    //fetchDetails
    //fetchReviews
  }

  render() {
    let moreDetails = (
      <section className="ItemSpecs">
        <details>
          <summary>Table of Contents</summary>
          <h6>I've got stuff</h6>
        </details>
        <hr />
        <details show={true}>
          <summary>Active Offers</summary>
          <h6>Here are some amazing offers for you</h6>
        </details>
      </section>
    );
    
    let toggleSpecs = (this.state.showDetails ? (
      <React.Fragment>
        <span className='active clickable' onClick={() => this.toggleDetails()}>
          Hide Details {hideButton}
        </span>
      </React.Fragment>
      ):(
      <React.Fragment>
        <span className='active clickable' onClick={() => this.toggleDetails()}>
          Show Details {showButton}
        </span>
      </React.Fragment>))

    let reviews = (<ReviewsContainer />);

    const itemDetails = (
      <div className="ItemDetailsLayout"><EB>
        <div className="ItemCoverContainer">
          <Suspense fallback={(<Loader className="ItemCover previewtext" text="Getting Your Image" />)}>
            <Img className="ItemCover loaded" src={this.props.cover} alt="Cover of the book" />
          </Suspense>
        </div></EB><EB>
          <div className="ItemInfoContainer">
            <div className="ItemIdentifiers">
              <div>
                <span className="title">{this.props.title}</span>
                <div className="subs">{this.props.subject + ' (' + this.props.board + ')'}</div>
                <span className="target">{this.props.target}</span>
              </div>
              <div className='mar-tb-2rem'>
                <span className="meta">{this.props.pages + " Pages (." + this.props.format + ")"}</span><br />
                <span className="review">{"Avg. Rating: " + this.props.rating + " | "}
                  <a href="#reviews" onClick={() => this.toggleReviews()}>
                    <span className='active clickable'>{"Read Reviews (" + this.props.reviews + ")"}</span>
                  </a>
                </span>
              </div>
            </div>
            
            <div className="ItemDescription">
              <p>{this.props.description}</p>
              {/*toggleSpecs*/}
            </div>
            <div className="ItemPricing mar-t-16px">
              <span className='itemPrice'>{"₹ " + this.props.price}</span>
              <div className='DetailsBuyActions mar-t-16px'>
                <p className="BackPrimaryInv btnRounded btnOutline AddBag">Add to Bag</p>
                <p className="BackPrimary btnRounded QuickBuy">Quick Buy</p>
              </div>
            </div>
          </div>
          {/*<img className="DetailsBookMark" src={bookmark} alt="toggle button for bookmarking the store items" />*/}</EB><EB>
          {this.state.showDetails && moreDetails}</EB>
      </div>
    );

    return (
      <React.Fragment>
        <StoreNavBar itemsInBag={itemsInBag} />
        <nav className="HistoryBar">
          <Link to='/store'>{slickArrow} Back to Store</Link>
          <span className="HistorySearch">Last Search: "{this.props.source}"</span>
        </nav>
        <main className="ItemDetailsContainer">
          {itemDetails}
          <EB> {this.state.showReviews && reviews} </EB>
        </main>
        <BagFab itemsInBag={itemsInBag} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
