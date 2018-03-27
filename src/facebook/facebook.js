import React from "react";
import "./facebook.css"

export default class Facebook extends React.Component {
    render() {        
        return (
            <div>
                 <div class="fb-page" width="380" data-href={this.props.places.url} data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite={this.props.places.url} class="fb-xfbml-parse-ignore"><a href={this.props.places.url}> </a></blockquote></div> 
            </div>
        )
       
    }
}
