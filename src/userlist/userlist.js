import React from "react";

export default class Userlist extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.userList}
            </div>
        )
    }
}
