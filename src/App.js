import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from "./tabs/tabs.js";
import axios from "axios";
import Navbar2 from "./navbar/navbar.js";

var places = [
  {
    name: "Town and Country",
    url: "https://www.facebook.com/Town-Country-Foods-148368425076/",
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
    },
    url: "https://www.facebook.com/heebsgrocery/",

  },
  {
    name: "Dave's Sushi",
    time: '0 13 * * *',
    links: {
      company: "http://www.daves-sushi.com",
      review: "https://www.yelp.com/biz/town-and-country-foods-bozeman-2?osq=town+and+country"
    },
    url: "https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/",

  },
  {
    name: "Dave's Sushi",
    time: '0 13 * * *',
    links: {
      company: "http://www.daves-sushi.com",
      review: "https://www.yelp.com/biz/town-and-country-foods-bozeman-2?osq=town+and+country"
    },
    url: "https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/",

  },
];

var music = [
  {
    name: "The Filling Station",
    url: "https://www.facebook.com/fillingstationmontana/",
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
    },
    url: "https://www.facebook.com/zebracocktaillounge/"
  },
  {
    name: "The Rialto",
    time: '30 11 * * *',
    links: {
      directions: "https://www.google.com/maps/place/Rialto+Bozeman/@45.6791062,-111.039787,17z/data=!3m1!4b1!4m5!3m4!1s0x53454450a6bce6af:0x3c24d92cd60d2212!8m2!3d45.6791025!4d-111.0375983",
      events: "https://rialtobozeman.ticketfly.com/"
    },
    url: "https://www.facebook.com/therialto/"
  },
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
    this.bizSignUp = this.bizSignUp.bind(this);
    this.onCommentsChange = this.onCommentsChange.bind(this);
    this.onFacebookUrlChange = this.onFacebookUrlChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
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
      places: [{
        url:""
      }]
    }
  }

  bizSignUp() {
    return new Promise ((resolve, reject)=>{
      axios.post("/signUpBiz", { email: this.state.email, password: this.state.password, comments: this.state.comments, facebookUrl: this.state.facebookUrl }).then((result) => {
        debugger
        if (result.data.message === 'Business sign up was successfull!') {
          this.setState({
            places: result.data.user.places
          })


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
    debugger
    axios.post("/testText", { username: this.state.username, number: this.state.userProfile.number, token: localStorage.getItem("token") }).then((result) => {
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
          toggle={this.toggle}
          modal={this.state.modal}
          stopSms={this.stopSms}
          userProfile={this.state.userProfile}
          testSms={this.testSms} bizSignUp={this.bizSignUp} />
        <Tabs id="main-tabs-div"
          places={this.state.places}
          subscribeToPlace={this.subscribeToPlace}
          addRemoveItem={this.addRemoveItem}
          music={music}
          userProfile={this.state.userProfile} />
      </div>
    );
  }
}
