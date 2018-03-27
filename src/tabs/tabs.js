import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./tabs.css";
import { Table } from 'reactstrap';
import FoodButton from "../FoodButton/FoodButton.js";
import MooseTabs from "../moosetabs/moosetabs.js";
import MusicButton from "../MusicButton/MusicButton.js";
import Facebook from "../facebook/facebook.js";

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
          <FoodButton subscribeToPlace={this.props.subscribeToPlace} places={p} />
        </th>
      )
    });

    let facebookFoodDiv = this.props.places.map((p, i) => {
      return (
        <th key={i}>
          <Facebook places={p} />
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

    let facebookMusicDiv = this.props.music.map((p, i) => {
      return (
        <th key={i}>
          <Facebook places={p} />
        </th>
      )
    });
    console.log(facebookFoodDiv)

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
                  <div className="table-container">
                    <thead>
                      <tr>
                        {foodButtons}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="facbook-plugins-div">
                        {facebookFoodDiv}
                      </tr>
                    </tbody>
                  </div>
                </Table>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Table>
                  <div className="table-container">
                    <thead>
                      <tr>
                        {musicButtons}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="facbook-plugins-div">
                        {facebookMusicDiv}
                      </tr>
                    </tbody>
                  </div>
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
