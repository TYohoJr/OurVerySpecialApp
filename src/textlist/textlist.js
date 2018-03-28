import React from "react";
import axios from "axios";
import "./textlist.css";
import { Button } from 'reactstrap';

export default class TextList extends React.Component {
    constructor(props) {
        super(props)
        this.textList = this.textList.bind(this);
    }

    textList() {
        var list = this.props.list.map((item, index) => {
            return `"${item.props.children.props.children}"\n`
        })
        axios.post("/textList", { username: this.props.username, list: list, number: this.props.number, token: localStorage.getItem("token") }).then((result) => {
        })
    }
    render() {
        var listTextButton
        if (this.props.list) {
            listTextButton = <Button className='happyHourItem' color='dark' onClick={this.textList}>Text me this list</Button>
        }
        return (
            <div>
                <div className='list-item'><div className='dayOfTheWeek'>{this.props.dayText}</div>{this.props.list}</div>{listTextButton}
            </div>
        )
    }
}
