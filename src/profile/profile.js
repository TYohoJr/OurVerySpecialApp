import React, { Component } from 'react';
import "./profile.css";

export default class Profile extends Component {

    render() {
        
        let subscriptions = this.props.userProfile.subscriptions.map((s)=>{
            return <p className="profile-subs">{s}</p>
        });

        
    

        return (
            <div id="profile-main">
                <div id="user-profile">
                     <div id="profile-box">
                        <div className="profile-base-text">Username: </div>{this.props.userProfile.username}
                        <div className="profile-base-text">Number: </div>{this.props.userProfile.number}
                        <div className="profile-base-text">Your Subscriptions:</div>
                        {subscriptions}         
                        <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
                        <button id="stop-sms" className="profile-buttons" onClick={this.props.stopSms}>Stop All SMS</button> 
                    </div>
                </div>
                <div id="welcome-logo">
                    <img src={require("../project-images/logo.png")} className="App-logo" alt="logo" /><br />
                </div>
            </div>
        )
    }
} 
