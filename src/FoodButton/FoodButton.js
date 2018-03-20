import React from 'react';

export default class FoodButton extends React.Component {
    constructor(props){
        super(props);
        this.subscribeHandler = this.subscribeHandler.bind(this);
    }

    subscribeHandler(){
        this.props.subscribeToPlace(this.props.place.name)
    }
    
    render(){
        return (
            <div>
                <button id="tncSmsBtn" className="tabsBtns" onClick={this.subscribeHandler}><img className="tncBtns"  src={require("../project-images/sms.png")} alt="sms" />Daily Alert</button>
                <a href={this.props.place.links.company} target="_blank" rel="noopener noreferrer" ><button id="tncSiteBtn" className="tabsBtns"><img className="tncBtns" src={require("../project-images/site.png")} alt="site" />Website</button></a>
                <a href={this.props.place.links.review} target="_blank" rel="noopener noreferrer"><button id="tncReviewBtn" className="tabsBtns"><img className="tncBtns" src={require("../project-images/review.png")} alt="review" />Reviews</button></a>
          </div>
        )
    }

}