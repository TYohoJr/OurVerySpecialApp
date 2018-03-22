import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import "./modal.css";

export default class SitePopover extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <span id="site-modal-main">
                <Button id="modal-toggle" onClick={this.toggle}>{this.props.siteTitle}</Button>
                <Modal id="modal-main" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <table id="modal-table">
                            <td>
                                <img id="modal-img" src={this.props.imgUrl} alt={this.props.siteTitle} />
                            </td>
                            <tr>
                                <button className="modal-buttons"><a className="website-anchor" href={this.props.siteUrl} target="_blank" rel="noopener noreferrer">{this.props.siteTitle} - Website</a></button>
                            </tr>
                        </table>
                    </ModalBody>
                </Modal>
            </span>
        );
    }
}
