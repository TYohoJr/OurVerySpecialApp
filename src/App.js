import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from "./tabs/tabs.js";
import axios from "axios";
import Navbar2 from "./navbar/navbar.js";

var places = [
  {
    name: "Town and Country",
    links: {
      company: "http://tncfoods.com/",
      review: "https://www.yelp.com/biz/daves-sushi-bozeman-2"
    }
  },
  {
    name: "Heebs",
    links: {
      company: "http://heebsgrocery.com/",
      review: "https://www.yelp.com/biz/heebs-east-main-grocery-bozeman"
    }
  },
  {
    name: "Dave's Sushi",
    links: {
      company: "http://www.daves-sushi.com",
      review: "https://www.yelp.com/biz/town-and-country-foods-bozeman-2?osq=town+and+country"
    }
  }
];

var venues = [
  {
    name: "Town and Country",
    links: {
      directions: "http://tncfoods.com/",
      events: "https://www.yelp.com/biz/daves-sushi-bozeman-2"
    }
  },
  {
    name: "Heebs",
    links: {
      directions: "http://heebsgrocery.com/",
      events: "https://www.yelp.com/biz/heebs-east-main-grocery-bozeman"
    }
  },
  {
    name: "Dave's Sushi",
    links: {
      directions: "http://www.daves-sushi.com",
      events: "https://www.yelp.com/biz/town-and-country-foods-bozeman-2?osq=town+and+country"
    }
  }
]


export default class App extends Component {
  constructor() {
    super()
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
        items:[],
        number: null,
        modal: false
      },
      userList:""
    }
  }

  addRemoveItem(item, serverRoute) {
    axios.post(serverRoute, { item: item.props.children, token: localStorage.getItem("token"), number: this.state.userProfile.number }).then((result) => {
      this.setState({
        userProfile:result.data.user,
      })
    })
  }

  subscribeToPlace(place) {
    axios.post("/subscribeToPlace", { place, username: this.state.userProfile.username, number: this.state.userProfile.number, token: localStorage.getItem("token") }).then((result) => {
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
          // userList: result.data.item[0].items.map((item, index) => {
          //   var somelist = <div>
          //     <li>{item}</li>
          //   </div>
          //   return somelist
          // })
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
          userList={this.state.userList}
          userProfile={this.state.userProfile} />
      </div>
    );
  }
}
