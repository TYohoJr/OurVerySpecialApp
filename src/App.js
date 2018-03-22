import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from "./tabs/tabs.js";
import axios from "axios";
import Navbar2 from "./navbar/navbar.js";
import Profile from "./profile/profile";

var places = [
  {
    name: "Town and Country",
    time: "30 11 * * *",
    links: {
      company: "http://tncfoods.com/",
      review: "https://www.yelp.com/biz/daves-sushi-bozeman-2"
    }
  },
  {
    name: "Heebs",
    time: '0 10 * * *',
    links: {
      company: "http://heebsgrocery.com/",
      review: "https://www.yelp.com/biz/heebs-east-main-grocery-bozeman"
    }
  },
  {
    name: "Dave's Sushi",
    time: '0 13 * * *',
    links: {
      company: "http://www.daves-sushi.com",
      review: "https://www.yelp.com/biz/town-and-country-foods-bozeman-2?osq=town+and+country"
    }
  }
];

var music = [
  {
    name: "The Filling Station",
    time: "30 11 * * *",
    links: {
      directions: "https://www.google.com/maps/place/Filling+Station+VFW/@45.7347721,-111.2473871,12z/data=!4m8!1m2!2m1!1sfilling+station+bozeman+website!3m4!1s0x534544141d981605:0x7e21f1397f2a54ad!8m2!3d45.6988202!4d-111.0319631",
      events: "http://www.bozemanevents.net/FillingStation"
    }
  },
  {
    name: "The Zebra Lounge",
    time: '30 11 * * *',
    links: {
      directions: "https://www.google.com/maps/place/Zebra+Cocktail+Lounge/@45.6795986,-111.0343792,17z/data=!3m1!4b1!4m5!3m4!1s0x5345445bdc5128ad:0xc9f5c1cf4ae40604!8m2!3d45.6795949!4d-111.0321905",
      events: "http://www.bozemanevents.net/Zebra"
    }
  },
  {
    name: "The Rialto",
    time: '30 11 * * *',
    links: {
      directions: "https://www.google.com/maps/place/Rialto+Bozeman/@45.6791062,-111.039787,17z/data=!3m1!4b1!4m5!3m4!1s0x53454450a6bce6af:0x3c24d92cd60d2212!8m2!3d45.6791025!4d-111.0375983",
      events: "https://rialtobozeman.ticketfly.com/"
    }
  }
];

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
    this.state = {
      userProfile: {
        username: null,
        password: null,
        subscriptions: [],
        items: [],
        number: null,
        modal: false, 
      }
    }
  }

  addRemoveItem(item, serverRoute) {
    axios.post(serverRoute, { item: item.props.children, token: localStorage.getItem("token"), number: this.state.userProfile.number }).then((result) => {
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
      console.log(result.data.message)
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
    axios.post("/testText", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
    })
  }

  stopSms() {
    axios.post("/stopText", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      this.setState({
        userProfile: result.data.user
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

    window.onbeforeunload = function (e) {
      window.onunload = function () {
        window.localStorage.clear();
      }
      return undefined;
    };

    return (
      <div className="App" >
        <Navbar2 signIn={this.signIn} places={places}
          onPasswordChange={this.onPasswordChange}
          onUserChange={this.onUserChange}
          toggle={this.toggle}
          modal={this.state.modal}
          stopSms={this.stopSms}
          userProfile={this.state.userProfile} />
        <Tabs id="main-tabs-div" places={places}
          subscribeToPlace={this.subscribeToPlace}
          addRemoveItem={this.addRemoveItem}
          music={music}
          userProfile={this.state.userProfile} />
      </div>
    );
  }
}
