import React, { Suspense, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Img } from 'the-platform';
import { Link/*, withRouter*/ } from 'react-router-dom'
import { Formik } from 'formik';

import logo from '../../res/imgs/ap_logo_inv.png';

import Profile from '../nav/Profiler';
import EB from '../helpers/ErrorBoundary';
import Loader from '../helpers/Loader';
import bookmark from '../../res/shapes/baseline-bookmark_border-24px.svg';
import '../nav/navbar.css';
import './ItemDetails.css'

const NavBar = props => {
  return (
    <React.Fragment>
      <div className="NavBar">
        <Link className="logoContainer" to="/"><img className="logo" src={logo} alt="Logo for Aditya Publication © 2018" /></Link>
        <div className="links-container">
          {/* searchFeild */}
        </div>
        <Link className="Link" to="/Dashboard"><Profile min={true} /></Link>
      </div>

    </React.Fragment>
  )
}

NavBar.propTypes = {
  user: PropTypes.object,
}

NavBar.defaultProps = {}

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
        <NavBar />
        <div className="ItemContainer">
          <EB>
            <Suspense className="BookCover" fallback={(<Loader className="BookCover previewtext" text="Getting Your Image" />)}>
              <Img className="BookCover loaded" src={this.props.cover} alt="Cover of the book" />
            </Suspense>
          </EB><EB>
            <div className="BookDetails">
              <div className="BookIdentifiers">
                <h3>{this.props.title}</h3>
                <h4>{this.props.target}</h4>
                <h5>{this.props.subject}</h5>
                <h5>{this.props.board}</h5>
              </div>
              <div className="BookMeta" >
                <h5>{this.props.pages + " Pages | ." + this.props.format}</h5>
                <h5>{"Avg. Rating: " + this.props.rating + " | " + this.props.reviews + " Reviews"} {" ("}<a href="#reviews">browse reviews</a>{")"}</h5>
              </div>
              <div className="BookPricing">
                <h2>{"Rs. " + this.props.price}</h2>
              </div>
            </div>
            <img className="BookMark" src={bookmark} alt="toggle button for bookmarking the store items" />
          </EB><EB>
            <div className="BookReviews">
              Are you ready for some awesome Reviews????? <hr />
              Are you really sure?  <hr />
              Why do you even care about Public Opinion? <hr />
              You really need to learn the art of NGAF <hr />
              You should go learn from the great oyu... <hr />
              Why are you still here. Just go. <hr />
              NOW!!! <hr />
            </div>
          </EB>
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
