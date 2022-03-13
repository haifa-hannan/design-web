import React from "react";
import './App.css';

class Navbar extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="Nav-left">
                        <h3>Egyptian History</h3>
                    </div>
                    <div className="Nav-right">
                        <a href="">Home</a>
                        <a href="">Contact</a>
                        <a href="">About</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;