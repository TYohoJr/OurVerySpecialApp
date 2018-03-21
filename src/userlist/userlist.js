import React, { Component } from 'react';

export default class Userlist extends Component {

    render() {
        let specialsList = this.props.userProfile.items.map((item, index) => {
            var someList =
            <div>
                <li>{item}</li>
            </div>
            return someList
        });
        console.log(this.props.userProfile.items)
        return (
            <div>
                {specialsList}
                <br/>
                hello
            </div>
        )
    }
}
