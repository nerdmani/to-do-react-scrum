import React from "react";
import "./Nav.css";

const Nav = ({text}) => {
    return (
        <div className="container">
            <h1>ToDo List</h1>
            <h3>{text}</h3>
        </div>
    );
}
export default Nav;