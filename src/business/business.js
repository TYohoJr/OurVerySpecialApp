import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./business.css";
import axios from "axios";
export default class Biz extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onCommentsChange = this.onCommentsChange.bind(this);
        this.onFacebookUrlChange = this.onFacebookUrlChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.bizSignUp = this.bizSignUp.bind(this);
        this.state = {
            modal: false,
            email: '',
            password: '',
            facebookUrl: '',
            comments: '',
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    bizSignUp() {
        debugger
        axios.post("/signUpBiz", { email: this.state.email, password: this.state.password, comments: this.state.comments, facebookUrl: this.state.facebookUrl }).then((result) => {
            if (result.data === "Sign Up Successful") {
                this.setState({
                    email: "",
                    facebookUrl: "",
                    comments: "",
                    password: "",
                    modal: !this.state.modal,
                })
            } else {
                alert(result.data)
            }
        })
    }

    onCommentsChange = (e) => {
        this.setState({
            comments: (e.target.value)
        })
    }

    onFacebookUrlChange = (e) => {
        this.setState({
            facebookUrl: (e.target.value)
        })
    }

    onEmailChange = (e) => {
        this.setState({
            email: (e.target.value)
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: (e.target.value)
        })
    }


    render() {
        return (
            <div>
                <Button id="businessSignUp" color="danger" onClick={this.toggle}>For Business</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className='businessModal' toggle={this.toggle}>Business Sign Up Form</ModalHeader>
                    <ModalBody className='businessModal'>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Must be a valid email" value={this.state.email} onChange={this.onEmailChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUrl">Facebook URL</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="Paste your business Facebook URL here" value={this.state.facebookUrl} onChange={this.onFacebookUrlChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select Approximate Time You Will Post Lunch Speicals</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>8:00AM</option>
                                    <option>8:30AM</option>
                                    <option>9:00AM</option>
                                    <option>9:30AM</option>
                                    <option>10:00AM</option>
                                    <option>10:30AM</option>
                                    <option>11:00AM</option>
                                    <option>11:30AM</option>
                                    <option>12:00PM</option>
                                    <option>12:30PM</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Any additional comments</Label>
                                <Input type="textarea" name="text" id="exampleText" value={this.state.comments} onChange={this.onCommentsChange} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className='businessModal'>
                        <Button color="primary" onClick={this.bizSignUp}>Submit</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
