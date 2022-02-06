import React, { Component } from 'react'
import profilepic from '../img/profile.png'

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                
                <img src={profilepic} alt="profile" className="profilepic" />
                <div className="container">
                    <li>Faculty of Informatics : Computer Science</li>
                    <li>Senior Project : Development of Broadcast Management System</li>
                    <li></li>
                </div>       
            </div>
        )
    }
}
export default About;