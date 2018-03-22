import React, { Component } from 'react';
import "./userlist.css";

export default class Userlist extends Component {

    render() {
        if (this.props.userProfile.mon.length) {
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
        }
        return (
            <div id='list'>
                <div className='list-item'><div className='dayOfTheWeek'>Everyday:</div>{everyDaySpecialsList}</div>
                <div className='list-item'><div className='dayOfTheWeek'>Weekdays:</div>{everyweekdaySpecialsList}</div>
                <div className='list-item'><div className='dayOfTheWeek'>Monday:</div>{monSpecialsList}</div>
                <div className='list-item'><div className='dayOfTheWeek'>Tuesday:</div>{tuesSpecialsList}</div>
                <div className='list-item'><div className='dayOfTheWeek'>Wednesday:</div>{wedsSpecialsList}</div>
                <div className='list-item'><div className='dayOfTheWeek'>Thursdays:</div>{thursSpecialsList}</div>
                <div className='list-item'><div className='dayOfTheWeek'>Friday:</div>{friSpecialsList}</div>
                <div className='list-item'><div className='dayOfTheWeek'>Saturday:</div>{satSpecialsList}</div>
                <div className='list-item'><div className='dayOfTheWeek'>Sunday:</div>{sunSpecialsList}</div>
            </div>
        )
    }
}
