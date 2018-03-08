import React, { Component } from 'react';
import "./signin.css";
import axios from "axios";



export default class Signin extends Component {
    constructor() {
        super();
        this.signIn = this.signIn.bind(this);
        this.sendSms = this.sendSms.bind(this);
        this.state = {
            username: "",
            password: "",
            number: ""
        }
    }

    signIn() {
        axios.post("/signInData", { username: this.state.username, password: this.state.password }).then((result) => {
            console.log(result.data.message)
            localStorage.setItem('token', result.data.myToken);

            this.setState({
                number: result.data.number
            })
        })
    }

    // sendSms() {
    //     axios.post("/text", { number: this.state.number }).then((result) => {
    //         console.log(result.data)
    //     })
    // }

    sendSms() {
        axios.post("/text", { number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
           console.log(result.data)
        })
    }

    onUserChange = (e) => {
        this.setState({
            username: (e.target.value)
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: (e.target.value)
        })
    }



    render() {

        // function sendSmsms (){
        //     axios.post("/text", { number: this.state.number }).then((result) => {
        //         console.log("Message sent!")
        //     })
        // }

        return (
            <div>
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onUserChange} />
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChange} />
                <button id="signInBtn" onClick={this.signIn}>Sign In</button>
                <button onClick={this.sendSms}>Sign up for daily text alerts</button>
            </div>
        )
    }
}