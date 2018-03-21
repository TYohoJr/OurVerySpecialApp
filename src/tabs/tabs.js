import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./tabs.css";
import { Table } from 'reactstrap';
import FoodButton from "../FoodButton/FoodButton";
import MooseTabs from "../moosetabs/moosetabs.js";
import MusicButton from "../MusicButton/MusicButton.js";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    let foodButtons = this.props.places.map((p, i) => {
      return (
        <th key={i}>
          <FoodButton subscribeToPlace={this.props.subscribeToPlace} place={p} />
        </th>
      )
    });

    let musicButtons = this.props.music.map((m, i) =>{
      return (
        <th key={i}>
          <MusicButton subscribeToPlace={this.props.subscribeToPlace} music={m} />
        </th>
      )
    })

    return (
      <div>
        <Nav id="tabs" tabs>
          <NavItem className="nav-item1">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Lunch Specials
            </NavLink>
          </NavItem>
          <NavItem className="nav-item2">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Music Venues
            </NavLink>
          </NavItem>
          <NavItem className="nav-item3">
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Happy Hour
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Table className="table1">
                  <thead>
                    <tr>
                      {foodButtons}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="fb-page" width="380" data-href="https://www.facebook.com/Town-Country-Foods-148368425076/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Town-Country-Foods-148368425076/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Town-Country-Foods-148368425076/">Town &amp; Country Foods</a></blockquote></div>
                      </td>
                      <td>
                        <div class="fb-page" width="380" data-href="https://www.facebook.com/heebsgrocery/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/heebsgrocery/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/heebsgrocery/">Heeb&#039;s East Main Grocery</a></blockquote></div>
                      </td>
                      <td>
                        <div class="fb-page" width="380" data-href="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/">Dave&#039;s Sushi - Off Main</a></blockquote></div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Table>
                  <thead>
                    <tr>
                      {musicButtons}
                      {/* <th>
                        <div>
                          <button id="fillingSmsBtn" className="tabsBtns" onClick={this.props.sendFillingText}><img className="tncBtns" src={require("../project-images/sms.png")} alt="sms" />Daily Alert</button>
                          <a href="https://www.google.com/maps/place/Filling+Station+VFW/@45.7347721,-111.2473871,12z/data=!4m8!1m2!2m1!1sfilling+station+bozeman+website!3m4!1s0x534544141d981605:0x7e21f1397f2a54ad!8m2!3d45.6988202!4d-111.0319631" target="_blank" rel="noopener noreferrer" ><button id="tncSiteBtn" className="tabsBtns"><img className="tncBtns" src={require("../project-images/directions.jpg")} alt="site" />Directions</button></a>
                          <a href="http://www.bozemanevents.net/FillingStation" target="_blank" rel="noopener noreferrer"><button id="tncReviewBtn" className="tabsBtns"><img className="tncBtns" src={require("../project-images/music.png")} alt="review" />Events</button></a>
                        </div>
                      </th>
                      <th>
                        <div>
                          <button id="zebraSmsBtn" className="tabsBtns" onClick={this.props.sendZebraText}><img className="davesBtns" src={require("../project-images/sms.png")} alt="sms" />Daily Alert</button>
                          <a href="https://www.google.com/maps/place/Zebra+Cocktail+Lounge/@45.6795986,-111.0343792,17z/data=!3m1!4b1!4m5!3m4!1s0x5345445bdc5128ad:0xc9f5c1cf4ae40604!8m2!3d45.6795949!4d-111.0321905" target="_blank" rel="noopener noreferrer"><button id="heebsSiteBtn" className="tabsBtns"><img className="heebsBtns" src={require("../project-images/directions.jpg")} alt="site" />Directions</button></a>
                          <a href="http://www.bozemanevents.net/Zebra" target="_blank" rel="noopener noreferrer"><button id="heebsReviewBtn" className="tabsBtns"><img className="heebsBtns" src={require("../project-images/music.png")} alt="review" />Events</button></a>
                        </div>
                      </th>
                      <th>
                        <div>
                          <button id="rialtoSmsBtn" className="tabsBtns" onClick={this.props.sendRialtoText}><img className="davesBtns" src={require("../project-images/sms.png")} alt="sms" />Daily Alert</button>
                          <a href="https://www.google.com/maps/place/Rialto+Bozeman/@45.6791062,-111.039787,17z/data=!3m1!4b1!4m5!3m4!1s0x53454450a6bce6af:0x3c24d92cd60d2212!8m2!3d45.6791025!4d-111.0375983" target="_blank" rel="noopener noreferrer"><button id="davesSiteBtn" className="tabsBtns"><img className="davesBtns" src={require("../project-images/directions.jpg")} alt="site" />Directions</button></a>
                          <a href="https://rialtobozeman.ticketfly.com/" target="_blank" rel="noopener noreferrer"><button id="davesReviewBtn" className="tabsBtns"><img className="davesBtns" src={require("../project-images/music.png")} alt="review" />Events</button></a>
                        </div>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="fb-page" width="380" data-href="https://www.facebook.com/fillingstationmontana/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/fillingstationmontana/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/fillingstationmontana/">The Filling Station</a></blockquote></div>                      </td>
                      <td>
                        <div class="fb-page" width="380" data-href="https://www.facebook.com/zebracocktaillounge/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/zebracocktaillounge/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/zebracocktaillounge/">Zebra Cocktail Lounge</a></blockquote></div>                      </td>
                      <td>
                        <div class="fb-page" width="380" data-href="https://www.facebook.com/therialto/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/therialto/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/therialto/">Rialto Bozeman</a></blockquote></div>                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <MooseTabs id="MooseTabs-div" addRemoveItem={this.props.addRemoveItem} userProfile={this.props.userProfile}/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
