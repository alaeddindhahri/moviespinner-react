import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Spinner = WrappedComponent => {
    return class SpinnerHOC extends Component {
        render() {
            return (
                this.props.isLoading ? <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div> : <WrappedComponent {...this.props} />
            )
        }
    }
}
export default Spinner;
