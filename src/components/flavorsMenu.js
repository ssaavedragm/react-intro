import React, { Component } from "react";
import Flavors from "./flavors";

class FlavorsMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      const { flavor, desc } = this.props;
      return (
        <main>
          <Flavors flavor="Vanilla" desc="Classic vanilla ice cream"/>
          <Flavors flavor="Chocolate" desc="Rich chocolate ice cream"/>
          <Flavors flavor="Strawberry" desc="Sweet strawberry ice cream"/>
        </main>

      );
    }
}

export default FlavorsMenu;