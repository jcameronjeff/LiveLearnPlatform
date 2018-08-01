import React, {Component} from 'react'
import {Link} from 'react-router-dom';
// import {compose} from 'redux'; import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';

class AddStudents extends Component {
    state = {
        name: 'name',
        email: 'email',
        class: ''
    };
    onSubmit = (e) => {
        e.preventDefault();
        const newStudent = this.state;
        const {firestore} = this.props;

        //
        firestore.add({
            collection: 'students'
        }, newStudent).then(() => this.props.history.push('/dashboard'));

    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to='/dashboard' className="btn btn-link">
                            <i className="fa fa-arrow-circle-left"></i>
                            {' '}Back to Dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='name'
                                        minLength='2'
                                        required
                                        onChange={this.onChange}
                                        value={this.state.name}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='email'
                                        minLength='2'
                                        required
                                        onChange={this.onChange}
                                        value={this.state.email}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Class</label>
                                    <select
                                        type="text"
                                        className='form-control'
                                        name='class'
                                        required
                                        onChange={this.onChange}
                                        value={this.state.class}>
                                        <option value="Math">Math</option>
                                        <option value="Science">Science</option>
                                        <option value="Social Studies">Social Studies</option>
                                    </select>
                                </div>
                                <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
AddStudents.propTypes = {
    firestore: PropTypes.object.isRequired
}
export default firestoreConnect()(AddStudents);