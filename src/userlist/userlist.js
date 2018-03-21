import React, { Component } from 'react';
import "./userlist.css";

export default class Userlist extends Component {

    render() {
        let specialsList = this.props.userProfile.items.map((item, index) => {
            var someList =
                <div>
                    <li>{item}</li>
                </div>
            return someList
        });
        return (
            <div>
                {specialsList}
            </div>
        )
    }
}
