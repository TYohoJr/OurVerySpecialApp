import React from "react";

export default class ListArray extends React.Component {
    constructor(props) {
        super(props);
        this.addFunction = this.addFunction.bind(this);
        this.removeFunction = this.removeFunction.bind(this);
        this.runFunction = this.runFunction.bind(this);
        this.state = {
            checkboxState: false
        }
    }

    addFunction() {
        this.props.addListItem(this.props.listItem)
    }

    removeFunction() {
        this.props.removeListItem(this.props.listItem)
    }

    runFunction() {
        if (!this.state.checkboxState) {
            this.setState({
                checkboxState: !this.state.checkboxState
            })
            this.props.addListItem(this.props.listItem)
        } else if (this.state.checkboxState) {
            this.setState({
                checkboxState: !this.state.checkboxState
            })
            this.props.removeListItem(this.props.listItem)
        }
    }

    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.runFunction} /> {this.props.listItem}
                {/* <button onClick={this.addFunction}>Add to list</button><button onClick={this.removeFunction}>Remove</button> {this.props.listItem} */}
            </div>
        )
    }
}
