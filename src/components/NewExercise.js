import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class NewExercise extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    onChangeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }
    onChangeDuration(event) {
        this.setState({
            duration: event.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => alert(res.data))

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3 className='text-center py-3'>New Task Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username : </label>
                        <select ref='userInput' required className='form-control' value={this.state.username} onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option key={user} value={user}>{user}
                                    </option>
                                })
                            }
                        </select>
                        <div className='form-group'>
                            <label>Description : </label>
                            <input type='text' required className='form-control' value={this.state.description} onChange={this.onChangeDescription} />
                        </div>
                        <div className='form-group'>
                            <label>Duration : </label>
                            <input
                                type='text' className='form-control' value={this.state.duration} onChange={this.onChangeDuration} />
                        </div>
                        <div className='form-group'>
                            <label>Date : </label>
                            <div>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add to my log' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}
