import React, { Component } from 'react'
import  Navitems  from './Navitems';


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'NavItemActive': ''
        }

    }
    render() {
        return (
            <nav>
                <ul className="nav-bar">
                    <Navitems item="Home" tolink="/"></Navitems>
                    <Navitems item="Information" tolink="/about"></Navitems>
                    <Navitems item="Work experiences" tolink="/experience"></Navitems>
                    <Navitems item="Contact" tolink="/contact"></Navitems>  
                </ul>
            </nav>
        )
    }


}
export default Navbar;