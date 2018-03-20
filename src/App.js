import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from "./tabs/tabs.js";
import axios from "axios";
import Navbar2 from "./navbar/navbar.js";

export default class App extends Component {
  constructor() {
    super()
    this.sendTnCText = this.sendTnCText.bind(this);
    this.signIn = this.signIn.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.stopSms = this.stopSms.bind(this);
    this.sendDavesText = this.sendDavesText.bind(this);
    this.sendHeebsText = this.sendHeebsText.bind(this);
    this.testSms = this.testSms.bind(this);
    this.sendFillingText = this.sendFillingText.bind(this);
    this.sendZebraText = this.sendZebraText.bind(this);
    this.sendRialtoText = this.sendRialtoText.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
    this.state = {
      number: "",
      password: "",
      modal: false,
      tncSubscribe: "",
      heebsSubscribe: "",
      davesSubscribe: "",
      fillingSubscribe: "",
      zebraSubscribe: "",
      rialtoSubscribe: "",
      userProfile: "",
      userList: "",
    }
  }

  addListItem(item) {
    axios.post("/sendListItem", { item: item.props.children, token: localStorage.getItem("token"), number: this.state.number }).then((result) => {
      console.log(result.data.item)
      this.setState({
        userList: result.data.item[0].items.map((item, index) => {
          var somelist = <div>
            <li>{item}</li>
          </div>
          return somelist
        })
      })
    })
  }

  removeListItem(item) {
    axios.post("/removeListItem", { item: item.props.children, token: localStorage.getItem("token"), number: this.state.number }).then((result) => {
      console.log(result.data.item)
      this.setState({
        userList: result.data.item[0].items.map((item, index) => {
          var somelist = <div>
            <li>{item}</li>
          </div>
          return somelist
        })
      })
    })
  }

  sendTnCText() {
    axios.post("/textTnC", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
      if (result.data.number) {
        this.setState({
          tncSubscribe: result.data.tncSubscribe,
          userProfile:
            <div id="profile-box">
              <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
              <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
              <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p>
              <p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
              <p className="profile-subs">{result.data.fillingSubscribe}</p><p className="profile-subs">{result.data.zebraSubscribe}</p>
              <p className="profile-subs">{result.data.rialtoSubscribe}</p>            <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
              <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
            </div>
        })
      }
    })
  }

  sendHeebsText() {
    debugger;
    axios.post("/textHeebs", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
      this.setState({
        heebsSubscribe: result.data.heebsSubscribe,
        userProfile:
          <div id="profile-box">
            <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
            <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
            <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p>
            <p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
            <p className="profile-subs">{result.data.fillingSubscribe}</p><p className="profile-subs">{result.data.zebraSubscribe}</p>
            <p className="profile-subs">{result.data.rialtoSubscribe}</p>            <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
            <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
          </div>
      })
    })
  }

  sendDavesText() {
    axios.post("/textDaves", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
      this.setState({
        davesSubscribe: result.data.davesSubscribe,
        userProfile:
          <div id="profile-box">
            <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
            <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
            <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p>
            <p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
            <p className="profile-subs">{result.data.fillingSubscribe}</p><p className="profile-subs">{result.data.zebraSubscribe}</p>
            <p className="profile-subs">{result.data.rialtoSubscribe}</p>            <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
            <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
          </div>
      })
    })
  }

  sendZebraText() {
    axios.post("/textZebra", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
      this.setState({
        zebraSubscribe: result.data.zebraSubscribe,
        userProfile:
          <div id="profile-box">
            <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
            <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
            <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p>
            <p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
            <p className="profile-subs">{result.data.fillingSubscribe}</p><p className="profile-subs">{result.data.zebraSubscribe}</p>
            <p className="profile-subs">{result.data.rialtoSubscribe}</p>            <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
            <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
          </div>
      })
    })
  }

  sendRialtoText() {
    axios.post("/textRialto", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
      this.setState({
        rialtoSubscribe: result.data.rialtoSubscribe,
        userProfile:
          <div id="profile-box">
            <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
            <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
            <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p>
            <p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
            <p className="profile-subs">{result.data.fillingSubscribe}</p><p className="profile-subs">{result.data.zebraSubscribe}</p>
            <p className="profile-subs">{result.data.rialtoSubscribe}</p>            <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
            <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
          </div>
      })
    })
  }


  sendFillingText() {
    axios.post("/textFilling", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      this.setState({
        fillingSubscribe: result.data.fillingSubscribe,
        userProfile:
          <div id="profile-box">
            <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
            <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
            <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p>
            <p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
            <p className="profile-subs">{result.data.fillingSubscribe}</p><p className="profile-subs">{result.data.zebraSubscribe}</p>
            <p className="profile-subs">{result.data.rialtoSubscribe}</p>
            <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
            <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
          </div>
      })
    })
  }

  signIn() {
    axios.post("/signInData", { username: this.state.username, password: this.state.password }).then((result) => {
      console.log(result.data.message)
      if (result.data.message === "Login successful!") {
        localStorage.setItem('token', result.data.myToken);
        this.setState({
          number: result.data.number,
          modal: !this.state.modal,
          password: "",
          tncSubscribe: result.data.tncSubscribe,
          heebsSubscribe: result.data.heebsSubscribe,
          davesSubscribe: result.data.davesSubscribe,
          userList: result.data.item[0].items.map((item, index) => {
            var somelist = <div>
              <li>{item}</li>
            </div>
            return somelist
          }),
          userProfile:
            <div id="profile-box">
              <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
              <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
              <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p>
              <p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
              <p className="profile-subs">{result.data.fillingSubscribe}</p><p className="profile-subs">{result.data.zebraSubscribe}</p>
              <p className="profile-subs">{result.data.rialtoSubscribe}</p>              <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
              <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
            </div>
        })
      } else {
        alert(result.data.message)
      }
      console.log(this.state.tncSubscribe)
    })

  }

  testSms() {
    axios.post("/testText", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
    })
  }

  stopSms() {
    axios.post("/stopText", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data);
      this.setState({
        tncSubscribe: result.data.tncSubscribe,
        heebsSubscribe: result.data.heebsSubscribe,
        davesSubscribe: result.data.davesSubscribe,
        userProfile:
          <div id="profile-box">
            <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
            <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
            <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p><p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
            <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
            <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
          </div>
      })
      if (result.data.message) {
        alert(result.data.message)
      }
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
    return (
      <div className="App" >
        <Navbar2 signIn={this.signIn} onPasswordChange={this.onPasswordChange}
          onUserChange={this.onUserChange} username={this.state.username} password={this.state.password} toggle={this.toggle}
          modal={this.state.modal} stopSms={this.stopSms} tncSubscribe={this.state.tncSubscribe} heebsSubscribe={this.state.heebsSubscribe}
          davesSubscribe={this.state.davesSubscribe} userProfile={this.state.userProfile} number={this.state.number} />
        {this.state.userWelcome}
        {/* <div id="page-header">
        </div> */}
        <Tabs id="main-tabs-div" sendTnCText={this.sendTnCText} sendHeebsText={this.sendHeebsText} sendDavesText={this.sendDavesText}
          sendFillingText={this.sendFillingText} sendZebraText={this.sendZebraText} sendRialtoText={this.sendRialtoText}
          addListItem={this.addListItem} userList={this.state.userList} removeListItem={this.removeListItem} />
      </div>
    );
  }
}
