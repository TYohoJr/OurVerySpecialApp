import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Profile from "../profile/profile.js";

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
                <img className="tncBtns" src={require("../project-images/profile.png")}/>
                    {/* <Profile stopSms={this.props.stopSms} userProfile={this.props.userProfile} /> */}
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    {/* <PopoverHeader>Popover Title</PopoverHeader> */}
                    <PopoverBody>Please login to view profile</PopoverBody>
                </Popover>
            </div>
        );
    }
}