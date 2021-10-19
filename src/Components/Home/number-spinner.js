import React from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

export default class NumberSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    decrement() {
        let new_value = this.props.qty - 1;
        if (new_value >= 0) {
            this.props.incrHandler.call(new_value);
        }
    }

    increment() {
        let new_value = this.props.qty + 1;
        this.props.incrHandler.call(new_value);
    }

    render() {
        return (
            <div className="number-spinner">
                <div className="number-spinner-less" onClick={this.decrement}>
                    -
                </div>
                <div className="number-spinner-input">
                    <input type="text" value={this.props.qty} />
                </div>
                <div className="number-spinner-more" onClick={this.increment}>
                    +
                </div>
            </div>
        );
    }
}
