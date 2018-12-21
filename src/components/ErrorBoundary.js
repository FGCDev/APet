import React from 'react'

export default class ErrorBoundary extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		hasError: false
	// 	};
	// }
	state = {
		hasError: false
	};

	//Warning: Only works with class components
	// static getDerivedStateFromError(error) {
	// 	// Update state so the next render will show the fallback UI.
		
	// }
	
	componentDidCatch(error, info) {
		// You can also log the error to an error reporting service
		console.log("The Error is: ", error, "The Error Info is: ", info)

		// Update state so the next render will show the fallback UI.
		return this.setState(state => ({ ...state, hasError: true }));
	}

  render() {
    if (this.state.hasError) {
			// You can render any custom fallback UI
			return <div>Sorry, something went wrong.</div>;
		} else {
			return this.props.children;
		}
  }
}