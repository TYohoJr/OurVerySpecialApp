import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./tabs.css";
import { Table } from 'reactstrap';
import FoodButton from "../FoodButton/FoodButton.js";
import MooseTabs from "../moosetabs/moosetabs.js";
import MusicButton from "../MusicButton/MusicButton.js";
import Facebook from "../facebook/facebook.js";

var facebookFoodData = [
  "https://www.facebook.com/Town-Country-Foods-148368425076/",
  "https://www.facebook.com/heebsgrocery/",
  "https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/",
]

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

    let facebookFoodDiv = facebookFoodData.map((p, i) => {
      return (
        <th key={i}>
          <Facebook place={p} />
        </th>
      )
    });

    let musicButtons = this.props.music.map((m, i) => {
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
                    <tr id="facebook-plugins">
                      {facebookFoodDiv}
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
                <MooseTabs id="MooseTabs-div" addRemoveItem={this.props.addRemoveItem} userProfile={this.props.userProfile} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
