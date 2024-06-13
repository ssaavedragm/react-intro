import React, { Component } from "react";

class NumberFlavors extends Component {
    constructor(props) {
        super(props);
        this.state = { flavors: 3 };
    }
    render() {
        return (
            <h2>Number of Flavors: { this.state.flavors }</h2>
        );
    }
}

export default NumberFlavors;