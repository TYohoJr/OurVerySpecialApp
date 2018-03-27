import React from "react";
import axios from "axios";
import "./textlist.css"

export default class TextList extends React.Component {
    constructor(props) {
        super(props)
        this.textList = this.textList.bind(this);
    }

    textList() {
        if (this.props.list) {
            var list = this.props.list.map((item, index) => {
                return `"${item.props.children.props.children}"\n`
            })
            axios.post("/textList", { username: this.props.username, list: list, number: this.props.number, token: localStorage.getItem("token") }).then((result) => {
            })
        } else {
            alert("Please make sure you are signed in and have saved specials for this day")
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.textList}>Text me this list</button><div className='list-item'><div className='dayOfTheWeek'>{this.props.dayText}</div>{this.props.list}</div>
            </div>
        )
    }
}