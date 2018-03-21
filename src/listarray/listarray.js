import React from "react";

export default class ListArray extends React.Component {
    constructor(props) {
        super(props);
        this.runListItem = this.runListItem.bind(this);
        this.state = {
            checkboxState: false
        }
    }

    runListItem() {
        console.log(this.props)
        let token = localStorage.getItem("token")
        if (token) {
            if (!this.state.checkboxState) {
                this.setState({
                    checkboxState: !this.state.checkboxState
                })
                this.props.addRemoveItem(this.props.listItem, "/sendListItem")
            } else if (this.state.checkboxState) {
                this.setState({
                    checkboxState: !this.state.checkboxState
                })
                this.props.addRemoveItem(this.props.listItem, "/removeListItem")
            }
        } else {
            alert("You must be signed in the add specials")
        }
    }

    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.runListItem} /> {this.props.listItem}
            </div>
        )
    }
}
