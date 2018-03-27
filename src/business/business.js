import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./business.css";

export default class Biz extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.runBizSignUp = this.runBizSignUp.bind(this);
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

    runBizSignUp() {
        this.props.bizSignUp().then((result) => {
            this.setState({
                modal: !this.state.modal
            })
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
                                <Input type="email" name="email" id="exampleEmail" placeholder="Must be a valid email" value={this.props.email} onChange={this.props.onEmailChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUrl">Facebook URL</Label>
                                <Input type="text" name="fbUrl" id="exampleFbUrl" placeholder="Paste your business Facebook URL here" value={this.props.facebookUrl} onChange={this.props.onFacebookUrlChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUrl">Company Name</Label>
                                <Input type="text" name="companyName" id="exampleCompanyName" placeholder="Company name" value={this.props.companyName} onChange={this.props.onCompanyNameChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUrl">Company Website</Label>
                                <Input type="text" name="companyWebsite" id="exampleCompanyWebsite" placeholder="Company website" value={this.props.companyWebsite} onChange={this.props.onCompanyWebsiteChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUrl">Yelp review URL</Label>
                                <Input type="text" name="companyReview" id="exampleCompanyReview" placeholder="Yelp review URL" value={this.props.companyReview} onChange={this.props.onCompanyReviewChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.props.password} onChange={this.props.onPasswordChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Any additional comments</Label>
                                <Input type="textarea" name="text" id="exampleText" value={this.props.comments} onChange={this.props.onCommentsChange} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className='businessModal'>
                        <Button color="primary" onClick={this.runBizSignUp}>Submit</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
