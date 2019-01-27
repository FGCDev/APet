import React, {/*Suspense,*/ Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink/*, withRouter*/ } from 'react-router-dom'
//import { Img } from 'the-platform'
import './nav/navbar.css';
import './newer.css';
import hero from '../res/imgs/Artboard1.jpg';
import pic1 from '../res/imgs/land1.jpg';
import pic2 from '../res/imgs/land3.jpg';
import pic3 from '../res/imgs/land4.jpg';

import logo from '../res/imgs/ap_logo_inv.png';
import logo2 from '../res/imgs/ap_logo.png';
import Profile from './nav/Profiler';

const preface_heading = "Another educational startup?";
const preface_textLeft = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula felis sed mauris dapibus malesuada.",
	"Fusce sit amet elit consequat, pulvinar tellus vel, aliquam orci. Aliquam sodales, metus ut pulvinar maximus, nulla augue volutpat tortor, et euismod velit diam finibus urna. Nam a ligula lectus. Suspendisse cursus malesuada neque.",
	"Donec auctor urna a lacus aliquam aliquam. In et rutrum purus. Curabitur et dapibus augue. Maecenas sagittis suscipit sapien vel dignissim. Donec auctor urna a lacus aliquam aliquam. In et rutrum purus. Curabitur et dapibus augue. Maecenas sagittis suscipit sapien vel dignissim."];
const preface_textRight = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula felis sed mauris dapibus malesuada.",
	"Fusce sit amet elit consequat, pulvinar tellus vel, aliquam orci. Aliquam sodales, metus ut pulvinar maximus, nulla augue volutpat tortor, et euismod velit diam finibus urna. Nam a ligula lectus. Suspendisse cursus malesuada neque.",
	"Donec auctor urna a lacus aliquam aliquam. In et rutrum purus. Curabitur et dapibus augue. Maecenas sagittis suscipit sapien vel dignissim. Donec auctor urna a lacus aliquam aliquam. In et rutrum purus. Curabitur et dapibus augue. Maecenas sagittis suscipit sapien vel dignissim."];

const footer_link = [["Title", "Link 1", "Link 2", "Link 3"],
["Title", "Link 1", "Link 2", "Link 3"],
["Title", "Link 1", "Link 2", "Link 3"],]

const profile = (
	<div className="profile">
		<Profile />
	</div>
);

const Nav = props => {
	return (
		<div className="NavBar">
			<img className="logo" src={logo} alt="Logo for Aditya Publication © 2018" />
			<div className="links-container">
				<ul className="links-list">
					<li><NavLink className="Link" to="/">Home</NavLink></li>
					<li><NavLink className="Link" to="/landed">Landing</NavLink></li>
					<li><NavLink className="Link" to="/store">Store</NavLink></li>
				</ul>
			</div>
			{profile}
		</div>
	)
}

const Preface = props => {
	return (
		<div className="clearfix">
			<div className="root rootText">
				<div className="header headerText">
					{props.heading} <b> Not Really! </b>
				</div>
				<div className="paraLeft">
					<p className="quote">"{props.textLeft[0]}"</p>
					<p>{props.textLeft[1]}</p>
					<p>{props.textLeft[2]}</p>
				</div>
				<div className="paraRight">
					{props.textRight.map((para, i) =>
						<p key={i}>{para}</p>)}
				</div>
			</div>
			<div className="alignRight marginRight">
				<button className="button roundCorners colorSecondary colorTextSecondary">Start Learning</button>
				<button className="button roundCorners colorTextHighlight buttonOutlined">Skip To Store</button>
			</div>
		</div>
	)
}

Preface.propTypes = {
	heading: PropTypes.string,
}

Preface.defaultProps = {
	heading: preface_heading,
	textLeft: preface_textLeft,
	textRight: preface_textRight
}

const InlineImageText = props => {
	return (
		<div className="clearfix">
			<div className={props.imageProps}>
				<img src={props.imagePath} height="450px" alt="Aditya Publications" />
			</div>
			<div className="sectionText">
				<h2>{props.heading}</h2>
				<p>{props.paragraph}</p>
				<button className="button roundCorners colorPrimary colorTextHighlight shadow">{props.button1}</button>
				<button className="button roundCorners buttonOutlined colorTextHighlight">{props.button2}</button>
			</div>
		</div>
	)
}

const Papercut = () => {
	return (
		<div className="papercut">
			<InlineImageText
				imageProps="alignLeft sectionImage center shadowLeft"
				imagePath={pic1}
				heading="Feature Set 01"
				paragraph={preface_textLeft[1]}
				button1="GO TO STORE"
				button2="GET RECOMMENDATIONS" />
			<div className="space"></div>
			<InlineImageText
				imageProps="alignRight sectionImage center shadowRight"
				imagePath={pic2}
				heading="Feature Set 01"
				paragraph={preface_textLeft[1]}
				button1="FREE CHECKUP"
				button2="FREE CHECKUP" />
			<div className="space"></div>
			<InlineImageText
				imageProps="alignLeft sectionImage center shadowLeft"
				imagePath={pic3}
				heading="Feature Set 01"
				paragraph={preface_textLeft[1]}
				button1="ASK the experts"
				button2="Know your experts" />
		</div>
	)
}

const FooterCol = props => {
	const colHeader = props.link[0];
	let links = props.link.slice(1);
	return (
		<div className="footerCol">
			<ul className="footerList">
				<h4>{colHeader}</h4>
				{links.map((item,i) => <a key={i} href="/" target="_blank"><li>{item}</li></a>)}
			</ul>
		</div>
	)
}

const Footer = props => {
	return (
		<div className="Flex footer">
			<div className="footerCol flexGrow">
				<img src={logo2} width="300px" alt="Aditya Publications" />
				<p>Adrress line 1 lorem ipsum <br /> New Delhi lorem ipsum <br /> hellow helleow mew mew</p>
				<br /> &nbsp;© Aditya Publications. Powered by SaarthiEngine
          </div>
			{footer_link.map((linkArray,i) => <FooterCol key={i} link={linkArray} />)}
			<div className="footerCol flexGrow">
				<h4>GET EXAM AND COURSE UPDATES</h4>
				<p>Get invited to our mailing list</p>
				<input type="text" name="title" value="" />
				<br />
				<button className="buttonCondensed">Subscribe</button>
			</div>
		</div>
	)
}
class newer extends Component {
	static propTypes = {
		// prop: PropTypes
	}

	render() {
		return (
			<div className="setFont">
				<Nav />

				<div className="icon"></div>
				<div className="prefaceArt">
					<h1 className="rotate prefaceArtText">PREFACE</h1>
				</div>
				<div className="landing">
					<img className="hero" src={hero} alt="The mission of AP" />
				</div>

				<Preface />

				<Papercut />

				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(newer)
