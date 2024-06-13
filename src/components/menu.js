import React, { Component } from "react";

class Menu extends Component {
    constructor() {
        super();
    }
    render() {
      return (
        <nav>
          <ul>
            <li><a href="#"> Home</a></li>
            <li><a href="#">Flavors</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
      );
    }
}

export default Menu;