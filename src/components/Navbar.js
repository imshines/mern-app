import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>Logger</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link'>My logs</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link'>New Task</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='nav-link'>New User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
