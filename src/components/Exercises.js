import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Exercises extends Component {

    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }
        this.deleteExercise = this.deleteExercise.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                this.setState({
                    exercises: res.data
                })
            })
            .catch((err) => console.log('err ', err))
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log('res.data ', res.data))

        this.setState({
            exercises: this.state.exercises.filter(element => element._id !== id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(exercise => {
            return <Exercise exercise={exercise} deleteExercise={this.deleteExercise} key={exercise._id} />
        })
    }

    render() {
        return (
            <div>
                <h3 className='text-center py-3'>My Logs</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const Exercise = (props) => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date}</td>
            <td>
                <Link to={'/edit/' + props.exercise._id} className='btn btn-sm btn-warning'>
                    edit
                </Link> | <a href='#' onClick={() => { props.deleteExercise(props.exercise._id) }} className='btn btn-danger btn-sm'>delete</a>
            </td>
        </tr>
    );
};
