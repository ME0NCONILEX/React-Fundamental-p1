import React, {Component} from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import {red} from "@mui/material/colors";
class DateTime extends Component {
    constructor() {
        super()
        let d = new Date()
        this.state = {
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: d.toLocaleTimeString()
        }
        this.countingSecond = this.countingSecond.bind(this)
    }
    countingSecond() {
        let d = new Date()
        this.setState({
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: d.toLocaleTimeString()
        })
    }
    componentWillMount() {
        setInterval(this.countingSecond, 1000)
    }
    render() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            <div className='timeclock-main'>
              <h1 style={{ color: 'red' }}>Your current date & time: </h1>
                <h3 style={{ color: 'blue' }} className='timeclock-text'>{days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year} {this.state.time}</h3>
                <h6 style={{ color: 'black'}}>(build with React 18.2) </h6>
            </div>
        )
    }
}
export default DateTime