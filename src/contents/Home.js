import React, { Component } from 'react'
import Information from '../components/Information'
import profilepic from '../img/profile.png'
import ReactTypingEffect from 'react-typing-effect' 


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['NATACHA P.', 'WEB DEVELOPER', 'EDIT FOR YOUR INFORMATION']} speed={80} eraseDelay={500} className="typingEffect" />
                <Information />
            </div>
        )
    }
}
export default Home;