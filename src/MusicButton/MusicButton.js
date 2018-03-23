import React from 'react';
import "./MusicButton.css";

export default class MusicButton extends React.Component {
    constructor(props) {
        super(props);
        this.subscribeHandler = this.subscribeHandler.bind(this);
    }

    subscribeHandler() {
        let token = localStorage.getItem("token")
        if (token) {
            this.props.subscribeToPlace(this.props.music.name, this.props.music.time)
            alert("Added To Your Profile")
        } else {
            alert("You must be signed in to subscribe to alerts")
        }
    }

    render() {
        return (
            <div>
                <button id="tncSmsBtn" className="tabsBtns" onClick={this.subscribeHandler}><img className="tncBtns" src={require("../project-images/sms.png")} alt="sms" />Daily Alert</button>
                <a href={this.props.music.links.directions} target="_blank" rel="noopener noreferrer" ><button id="tncSiteBtn" className="tabsBtns"><img className="tncBtns" src={require("../project-images/directions.jpg")} alt="directions" />Directions</button></a>
                <a href={this.props.music.links.events} target="_blank" rel="noopener noreferrer"><button id="tncReviewBtn" className="tabsBtns"><img className="tncBtns" src={require("../project-images/music.png")} alt="events" />Events</button></a>
            </div>
        )
    }
}
