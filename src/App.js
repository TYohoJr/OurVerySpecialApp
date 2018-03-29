import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from "./tabs/tabs.js";
import axios from "axios";
import Navbar2 from "./navbar/navbar.js";

export default class App extends Component {
  constructor() {
    super();
    this.subscribeToPlace = this.subscribeToPlace.bind(this);
    this.signIn = this.signIn.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.stopSms = this.stopSms.bind(this);
    this.testSms = this.testSms.bind(this);
    this.addRemoveItem = this.addRemoveItem.bind(this);
    this.bizSignUp = this.bizSignUp.bind(this);
    this.onCommentsChange = this.onCommentsChange.bind(this);
    this.onFacebookUrlChange = this.onFacebookUrlChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
    this.onCompanyWebsiteChange = this.onCompanyWebsiteChange.bind(this);
    this.onCompanyReviewChange = this.onCompanyReviewChange.bind(this);
    this.state = {
      userProfile: {
        username: null,
        password: null,
        subscriptions: [],
        number: null,
        modal: false,
        everyweekday: [],
        mon: [],
        tues: [],
        weds: [],
        thurs: [],
        fri: [],
        sat: [],
        sun: [],
        everyDay: [],
      },
      places: [],
      music: []
    }
  }

  componentDidMount() {
    axios.get("/getData").then((result) => {
      this.setState({
        places: result.data.foodData.places,
        music: result.data.musicData.music
      })
    })
  }

  bizSignUp() {
    return new Promise((resolve, reject) => {
      axios.post("/signUpBiz", { email: this.state.email, password: this.state.password, comments: this.state.comments, facebookUrl: this.state.facebookUrl, companyName: this.state.companyName, companyReview: this.state.companyReview, companyWebsite: this.state.companyWebsite }).then((result) => {
        if (result.data.message === 'Business sign up was successfull!') {
          alert(result.data.message)
          resolve();
        } else {
          alert(result.data.message)
        }
      })
    })
  }

  addRemoveItem(item, serverRoute) {
    axios.post(serverRoute, { item: item.props, token: localStorage.getItem("token"), number: this.state.userProfile.number }).then((result) => {
      this.setState({
        userProfile: result.data.user,
      })
    })
  }

  subscribeToPlace(place, time) {
    axios.post("/subscribeToPlace", { place, time, username: this.state.userProfile.username, number: this.state.userProfile.number, token: localStorage.getItem("token") }).then((result) => {
      this.setState({
        userProfile: result.data
      });
    });
  }

  signIn() {
    axios.post("/signInData", { username: this.state.username, password: this.state.password }).then((result) => {
      if (result.data.message === "Login successful!") {
        localStorage.setItem('token', result.data.myToken);
        this.setState({
          userProfile: result.data.user,
          modal: !this.state.modal,
        });
      } else {
        alert(result.data.message)
      }
    })
  }


  testSms() {
    axios.post("/testText", { username: this.state.username, number: this.state.userProfile.number, token: localStorage.getItem("token") }).then((result) => {
      alert("Test text sent!");
    })
  }

  stopSms() {
    axios.post("/stopText", { username: this.state.username, number: this.state.userProfile.number, token: localStorage.getItem("token") }).then((result) => {
      this.setState({
        userProfile: result.data.user
      })
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

  onCompanyNameChange = (e) => {
    this.setState({
      companyName: (e.target.value)
    })
  }

  onCompanyWebsiteChange = (e) => {
    this.setState({
      companyWebsite: (e.target.value)
    })
  }

  onCompanyReviewChange = (e) => {
    this.setState({
      companyReview: (e.target.value)
    })
  }

  render() {
    window.onbeforeunload = function (e) {
      window.onunload = function () {
        window.localStorage.clear();
      }
      return undefined;
    };

    return (
      <div className="App" >
        <Navbar2
          signIn={this.signIn}
          places={this.state.places}
          onPasswordChange={this.onPasswordChange}
          onUserChange={this.onUserChange}
          onCommentsChange={this.onCommentsChange}
          onEmailChange={this.onEmailChange}
          onFacebookUrlChange={this.onFacebookUrlChange}
          onCompanyNameChange={this.onCompanyNameChange}
          onCompanyWebsiteChange={this.onCompanyWebsiteChange}
          onCompanyReviewChange={this.onCompanyReviewChange}
          toggle={this.toggle}
          modal={this.state.modal}
          stopSms={this.stopSms}
          userProfile={this.state.userProfile}
          testSms={this.testSms} bizSignUp={this.bizSignUp} />
        <Tabs id="main-tabs-div"
          places={this.state.places}
          subscribeToPlace={this.subscribeToPlace}
          addRemoveItem={this.addRemoveItem}
          music={this.state.music}
          userProfile={this.state.userProfile}
          username={this.state.username}
          number={this.state.userProfile.number} />
      </div>
    );
  }
}
