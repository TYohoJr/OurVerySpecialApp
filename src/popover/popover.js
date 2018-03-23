import React from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';
import "./popover.css"

export default class Popover1 extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <div>
                <Button id="Popover1" onClick={this.toggle}>
                    <img className="tncBtns" src={require("../project-images/profile.png")} alt="profile"/>
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverBody><div id="popover-text">Please login to view profile</div></PopoverBody>
                </Popover>
            </div>
        );
    }
}
