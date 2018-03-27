import React, { Component } from 'react';
import TextList from "../textlist/textlist.js";
import "./userlist.css";

export default class Userlist extends Component {

    render() {
        if (this.props.userProfile.everyDay.length) {
            var everyDaySpecialsList = this.props.userProfile.everyDay.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            });
        }
        if (this.props.userProfile.everyweekday.length) {
            var everyweekdaySpecialsList = this.props.userProfile.everyweekday.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            });
        }
        if (this.props.userProfile.mon.length) {
            var monSpecialsList = this.props.userProfile.mon.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            });
        }
        if (this.props.userProfile.tues.length) {
            var tuesSpecialsList = this.props.userProfile.tues.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            });
        }
        if (this.props.userProfile.weds.length) {
            var wedsSpecialsList = this.props.userProfile.weds.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            });
        }
        if (this.props.userProfile.thurs.length) {
            var thursSpecialsList = this.props.userProfile.thurs.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            });
        }
        if (this.props.userProfile.fri.length) {
            var friSpecialsList = this.props.userProfile.fri.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            });
        }
        if (this.props.userProfile.sat.length) {
            var satSpecialsList = this.props.userProfile.sat.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            });
        }
        if (this.props.userProfile.sun.length) {
            var sunSpecialsList = this.props.userProfile.sun.map((item, index) => {
                var someList =
                    <div>
                        <li>{item}</li>
                    </div>
                return someList
            })
        }
        return (
            <div id='list'>
                <TextList list={everyDaySpecialsList} username={this.props.username} number={this.props.number} dayText="Everday:" />
                <TextList list={everyweekdaySpecialsList} username={this.props.username} number={this.props.number} dayText="Weekdays:" />
                <TextList list={monSpecialsList} username={this.props.username} number={this.props.number} dayText="Monday:" />
                <TextList list={tuesSpecialsList} username={this.props.username} number={this.props.number} dayText="Tuesday:" />
                <TextList list={wedsSpecialsList} username={this.props.username} number={this.props.number} dayText="Wednesday:" />
                <TextList list={thursSpecialsList} username={this.props.username} number={this.props.number} dayText="Thursday:" />
                <TextList list={friSpecialsList} username={this.props.username} number={this.props.number} dayText="Friday:" />
                <TextList list={satSpecialsList} username={this.props.username} number={this.props.number} dayText="Saturday:" />
                <TextList list={sunSpecialsList} username={this.props.username} number={this.props.number} dayText="Sunday:" />
            </div>
        )
    }
}
