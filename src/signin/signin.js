/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./signin.css";
import 'bootstrap/dist/css/bootstrap.css';

export default class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            username: "",
            password: "",
            number: ""
        };
    }

    render() {
        return (
            <div>
                <Button id="signin-button" color="danger" onClick={this.props.toggle}>Log In</Button>
                <Modal id="signInModal" isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Please sign in</ModalHeader>
                    <ModalBody>
                        <div>
                            <p>Username:</p>
                            <input type="text" name="username" placeholder="username" value={this.props.username} onChange={this.props.onUserChange} />
                            <p>Password:</p>
                            <input type="password" name="password" placeholder="password" value={this.props.password} onChange={this.props.onPasswordChange} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.signIn}>Sign In</Button>{' '}
                    </ModalFooter>
                </Modal>
                <br />
                <br />
                {/* <button id="sendSmsBtn" onClick={this.props.sendSms}>Sign up for daily text alerts</button> */}
                {/* <button onClick={this.props.stopSms}>Stop Texts</button> */}
            </div>
        );
    }
}
