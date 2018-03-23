import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./profile.css";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false
        };
    }

    toggle() {
        let token = localStorage.getItem("token")
        if (token) {
            this.setState({
                modal: !this.state.modal
            });
        }
    }

    render() {
        let token = localStorage.getItem("token")
        if (token) {
            var subscriptions = this.props.userProfile.subscriptions.map((s) => {
                return <p className="profile-subs">{s}</p>
            });
        }

        return (
            <div id="profile-main">
                <Button id="show-profile-button" onClick={this.toggle}><img className="tncBtns" src={require("../project-images/profile.png")} alt="profile"/></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader >Your Profile</ModalHeader>
                    <ModalBody>
                        <div id="user-profile">
                            <div id='profile-container'> <div id="profile-box">
                                <div className="profile-base-text">Username: </div>{this.props.userProfile.username}
                                <div className="profile-base-text">Number: </div>{this.props.userProfile.number}
                                <br />
                            </div>
                                <div id="profile-box">
                                    <div className="profile-base-text">Your Subscriptions:</div>
                                    <br />
                                    {subscriptions}
                                    <button id="test-sms" className="profile-buttons" onClick={this.props.testSms}>Test SMS</button>
                                    <button id="stop-sms" className="profile-buttons" onClick={this.props.stopSms}>Stop All SMS</button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
} 
