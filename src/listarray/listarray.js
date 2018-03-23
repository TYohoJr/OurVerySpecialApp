import React from "react";
import "./listarray.css";

var checkBox;

export default class ListArray extends React.Component {
    constructor(props) {
        super(props);
        this.runListItem = this.runListItem.bind(this);
        this.state = {
            checkboxState: false
        }
    }

    runListItem() {
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
        let token = localStorage.getItem("token")
        if(token){
            checkBox = <input type="checkbox" onChange={this.runListItem}/>
        }

        return (
            <div>
                <br />
                {checkBox}<div className="moose-list-text">{this.props.listItem}</div>
            </div>
        )
    }
}
