import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./moosetabs.css";
import Userlist from "../userlist/userlist.js";
import ListArray from "../listarray/listarray.js"

var everyDay = [
    <div className='everyDay'>The Legion: $2 PBR or Black Velvet</div>,
    <div className='everyDay'>The Crystal: $2 Bud and Bud Light cans</div>,
    <div className='everyDay'>The Crystal: $2 Rainier Cans and Bottles</div>,
    <div className='everyDay'>The Crystal: $1.75 Oly and PBR</div>,
    <div className='everyDay'>The Crystal: $2 Pacifico and Corona</div>,
    <div className='everyDay'>Cat's Paw: $3 Grey Goose and $2 Fire Ball Shots and rotating beer specials</div>,
    <div className='everyDay'>Baja Fresh: $8 Bucket of 5 Coronas</div>,
    <div className='everyDay'>Mixers: $2 Jack</div>,
    <div className='everyDay'>Mixers: $2 Drafts, wells and domestics and 2 for 1 appetizers - 4-7pm</div>,
    <div className='everyDay'>Neptunes: $3 Pints</div>,
    <div className='everyDay'>The Bay: $4 Long Island Iced Teas, $5 Margaritas, $5 Mai Thais, $3 Draft Beers, $4 23oz draft beer</div>,
    <div className="everyday">The Bay: $4 Pork Carnitas, $5 Beef Sliders, $5 Shrimp Cocktail - 4-6pm</div>,
    <div className='everyDay'>The Eagles: $1.50 Beer Special</div>,
    <div className='everyDay'>Bar IX: Free Ski Pass To Bridger Bowl if you blow the keg</div>,
    <div className='everyDay'>Johnny Carino's: Happy Hour 3pm - 5pm</div>,
]

var everyWeekDay = [
    <div className='everyweekday'>The Crystal: $2 Wells and domestics 5-7pm</div>,
    <div className='everyweekday'>The Legion: $2.75 Domestics, $2.75 Wells, $2.25 PBR Cans 4-7pm</div>,
    <div className='everyweekday'>Old Chicago: $2.49 Wells $2.99 Cocktails 2.99 or cheaper on all beers $2.99 House Wine - 4-7pm</div>,
    <div className='everyweekday'>Seven Sushi: Sushi/Appetizer and Drink Happy Hour</div>,
    <div className='everyweekday'>Pub 317: $1 off Drafts, $2.5 single $3.75 Double wells - 3:17 - 6:17pm</div>,
    <div className='everyweekday'>Bar IX: Doubles for Singles - 4-9pm</div>,
]

var monday = [
    <div className='mon'>The Cannery: $8 Cannary Calypso Cooler  </div>,
    <div className='mon'>The Crystal Bar: $1.75 Millers </div>,
    <div className='mon'>Plonk: Service Industry Night  </div>,
    <div className='mon'>Mixers: 2 for 1 Long Island Iced Teas </div>,
    <div className='mon'>Neptunes: 4-7pm $6 Growler refills </div>,
    <div className='mon'>The Pour House: 1/2 Price Nachos and $10 for 5 Bud lights</div>,
    <div className='mon'>Spectators: $2.25 Drafts</div>,
    <div className='mon'>Bar IX:  18 Boneless Wings and a pitcher of beer</div>,
    <div className='mon'>Carinos: 1/2 off Family Platters </div>,
    <div className='mon'>Carinos: 3-5pm and 8-close Happy Hour!  </div>,
]

var tuesday = [
    <div className='tues'>The Cannery: $6 Sauza Margaritas </div>,
    <div className='tues'>Neptunes:  4-7pm $1 Off pints </div>,
    <div className='tues'>Pour House: $2 Coronas</div>,
    <div className='tues'>Spectators: Tonic Tuesday $2.50 Vodka/Gin and tonic $3.75 doubles</div>,
    <div className='tues'>Spectators: $7.95 Half-pound burger and pint of beer   </div>,
    <div className='tues'>The Rocking R: 5-9pm $2 Olympia, $1 Kamikazes</div>,
    <div className='tues'>Carinos: Free pitcher of beer with an order of ribs </div>,
    <div className='tues'>Carinos: 3-5 and 8-close Happy Hour! </div>,
]

var wednesday = [
    <div className='weds'>The Cannery: 50-cent Wing Wednesday with purchase of any whiskey drink or cocktail </div>,
    <div className='weds'>The Crystal: Whiskey Wednesday 10am-4pm $1.50 Ten-High Whiskey</div>,
    <div className='weds'>The Crystal: 5-8pm $5 Burger Beer and Chips</div>,
    <div className='weds'>Plonk: Free Live Jazz Music</div>,
    <div className='weds'>Old Chicago: $1 off all new beers added to WBT (up to four beers)</div>,
    <div className='weds'>Mixers: Wild West Wednesday Dancing and a Country DJ: 8pm-close, $2 Jack, Bud Light Platinum and Draft Beer </div>,
    <div className='weds'>Neptunes: 4-7pm $1 Off pints from </div>,
    <div className='weds'>Carinos: 1/2 off all bottles of wine </div>,
    <div className='weds'>Carinos: 3-5 and 8-close Happy Hour! </div>,
]

var thursday = [
    <div className='thurs'> The Cannery: $5 Stoli Martinis and single ladies get first drink free! - Ladies Night</div>,
    <div className='thurs'> The Crystal: 2 for 1 Top Shelf Thursday - 8-11pm - </div>,
    <div className='thurs'> Old Chicago: 8-10pm $1.25 Pizza Slices and PBR</div>,
    <div className='thurs'> Cat's Paw: $2 Pints ></div>,
    <div className='thurs'> Neptunes: 4-7pm $1 Off  </div>,
    <div className='thurs'> The Pour House: $3 Stoli</div>,
    <div className='thurs'> Spectators: $2.5 Stolli singles $3.75 doubles </div>,
    <div className='thurs'> Spectators: 5-close 19.95 17 inch Pizza and pitcher of beer </div>,
    <div className='thurs'> Bar IX: 9-close, $10 Pitcher of you favorite cocktail </div>,
    <div className='thurs'> Carinos: 3-5 and 8-close Happy Hour! </div>

]

var friday = [
    <div className='fri'>The Cannery: Free appetizers and $3 Draft Bud Light and PBR</div>,
    <div className='fri'>Montana Ted's: Live Music and Assorted Drink Specials - 7:30-10pm</div>,
    <div className='fri'>Applebee's: $2.50-$3 Pints, $3 Long Island Iced Teas, $4 Bahama Mamas and Margaritas, $4.99 Appetizers 9-close</div>,
    <div className='fri'>Mixers: $2 Premium Whiskey - Whiskey Friday - 9-11pm</div>,
    <div className='fri'>Neptunes: $1 Off pints from 4-7pm</div>,
    <div className='fri'>The Pour House: $3 Jameson</div>,
    <div className='fri'>Spectators: $2 Twisted Teas, $3 Jager Bombs</div>,
    <div className='fri'>Spectators: $12.75 12 Wings and a pitcher of beer - 5 - close</div>,
    <div className='fri'>Johnny Carino's: $24.99 Dinner for Two - 2 Chef Select entrees, unlimited tuscan bread, soup or sald, and any two mini desserts</div>,
    <div className='fri'>Johnny Carino's: Happy Hour 3pm - 5pm and 9pm - Close</div>,
]

var saturday = [
    <div className='sat'>The Cannery: $5 Mimosas &amp; Bloody Mary's</div>,
    <div className='sat'>Montana Teds: Live Music and Assorted Drink Specials - 7:30-10pm</div>,
    <div className='sat'>Applebees's: $2.50-$3 Pints, $3 Long Island Iced Teas, $4 Bahama Mamas and Margaritas, $4.99 Appetizers 4-6pm 9-close</div>,
    <div className='sat'>Neptunes: $1 Off pints from 4-7pm</div>,
    <div className='sat'>The Pour House: 50-cent wings, $3 Draft Beer</div>,
    <div className='sat'>Bar IX: Doubles for singles - 4-9pm</div>,
    <div className='sat'>Johnny Carino's: $24.99 Dinner for Two - 2 Chef Select entrees, unlimited tuscan bread, soup or sald, and any two mini desserts</div>,
    <div className='sat'>Johnny Carino's: Happy Hour 3pm to 5pm and 9pm to Close</div>,
]

var sunday = [
    <div className='sun'>The Cannery: $1 Beef or Chicken Sliders with purchase of a pitcher of beer</div>,
    <div className='sun'>Old Chicago: $2.49 Wells $2.99 Cocktails 2.99 or cheaper on all beers $2.99 House Wine - 7-10pm</div>,
    <div className='sun'>Cafe Zydeco: $5 Coffee and 4 Beignets</div>,
    <div className='sun'>Cat's Paw: $5.75 Chicken Fried Steak Hashed Browns and Toast</div>,
    <div className='sun'>Pour House: $2 Sliders, Bottomless Mimosa</div>,
    <div className='sun'>Bar IX: 2 for 1 all day</div>,
    <div className='sun'>Johnny Carino's: Kids 10 and under eat free with purchase of adult entree</div>,
    <div className='sun'>Johnny Carino's: Happy Hour 3pm to 5pm and 8pm to Close</div>,
]

var checkboxText



export default class MooseTabs extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
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
        let token = localStorage.getItem("token")
        if (!token) {
            checkboxText = "Please log in to save specials!"

        } else {
            checkboxText = null
        }


        return (
            <div id="moosetabs-div">
                <Nav tabs>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Everyday
            </NavLink>
                    </NavItem>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Mon - Fri
            </NavLink>
                    </NavItem>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Monday
            </NavLink>
                    </NavItem>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Tuesday
            </NavLink>
                    </NavItem>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                        >
                            Wednesday
            </NavLink>
                    </NavItem>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '6' })}
                            onClick={() => { this.toggle('6'); }}
                        >
                            Thursday
            </NavLink>
                    </NavItem>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '7' })}
                            onClick={() => { this.toggle('7'); }}
                        >
                            Friday
            </NavLink>
                    </NavItem>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '8' })}
                            onClick={() => { this.toggle('8'); }}
                        >
                            Saturday
            </NavLink>
                    </NavItem>
                    <NavItem className="moose-nav-item">
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '9' })}
                            onClick={() => { this.toggle('9'); }}
                        >
                            Sunday
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Everyday Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={everyDay[0]} addRemoveItem={this.props.addRemoveItem} userProfile={this.props.userProfile} />
                                            <ListArray listItem={everyDay[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[5]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[6]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[7]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[8]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[9]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[10]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[11]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[12]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[13]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyDay[14]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Every Weekday Special<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={everyWeekDay[0]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyWeekDay[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyWeekDay[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyWeekDay[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyWeekDay[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={everyWeekDay[5]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials
                                        </CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Monday Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={monday[0]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[5]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[6]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[7]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[8]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={monday[9]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials</CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Tuesday Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={tuesday[0]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={tuesday[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={tuesday[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={tuesday[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={tuesday[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={tuesday[5]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={tuesday[6]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={tuesday[7]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials</CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Wednesday Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={wednesday[0]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={wednesday[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={wednesday[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={wednesday[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={wednesday[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={wednesday[5]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={wednesday[6]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={wednesday[7]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={wednesday[8]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials</CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="6">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Thursday Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={thursday[0]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[5]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[6]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[7]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[8]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={thursday[9]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials</CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="7">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Friday Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={friday[0]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[5]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[6]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[7]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[8]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={friday[9]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials</CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="8">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Saturday Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={saturday[0]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={saturday[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={saturday[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={saturday[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={saturday[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={saturday[5]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={saturday[6]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={saturday[7]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials</CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="9">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Sunday Specials<br /> {checkboxText}</CardTitle>
                                        <CardText>
                                            <ListArray listItem={sunday[0]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={sunday[1]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={sunday[2]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={sunday[3]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={sunday[4]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={sunday[5]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={sunday[6]} addRemoveItem={this.props.addRemoveItem} />
                                            <ListArray listItem={sunday[7]} addRemoveItem={this.props.addRemoveItem} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <div className="moosetabs-text">
                                        <CardTitle>Your Saved Specials</CardTitle>
                                        <CardText>
                                            <Userlist userProfile={this.props.userProfile} />
                                        </CardText>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
