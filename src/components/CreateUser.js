import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            users: []
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users')
            .then(res => {
                this.setState({
                    users: res.data.map(usersName => usersName.username)
                })
            })
    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const user = {
            username: this.state.username
        }

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log('res.data ', res.data))

        this.setState({
            username: ''
        })

        window.location.reload()
    }

    render() {
        return (
            <div>
                <h3 className='text-center py-3'>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username :</label>
                        <input type='text' required className='form-control' value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Create User' className='btn btn-primary' />
                    </div>
                </form>
                <div>
                    <h4 className='text-center py-2'>Users List</h4>
                    <ul class="list-group">
                        {
                            this.state.users.map(usersNames => {
                                return <li class="list-group-item">{usersNames}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
