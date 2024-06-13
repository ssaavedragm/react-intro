import React, { Component } from "react";
import FlavorsMenu from "./flavorsMenu";

class Flavors extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      const { flavor, desc } = this.props;
        return (
          <section>
            <h3>{ flavor } </h3>
            <h5>{ desc } </h5>
          </section>
      );
    }
}

export default Flavors;