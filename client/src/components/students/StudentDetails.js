import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/parts/Spinner';

class StudentDetails extends Component {
    render() {
        const {student} = this.props;

        if (student) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/" className="btn btn-dark">
                                <i className="fa fa-arrow-circle-left"></i>
                                {' '}
                                Back to Dashboard
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-group float-right">
                                <Link to={`/student/edit/${student.id}`} className="btn btn-dark">
                                    Edit</Link>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <h3>
                                        {student.name}
                                    </h3>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h5 className="pull-right">Student Id:{' '}
                                        <span className="text-secondary">{student.id}</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">

                                <h3>
                                    Student Scores
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>

            )
        } else {
            return <Spinner/>
        }
    }
}

export default compose(firestoreConnect(props => [
    {
        collection: 'students',
        storeAs: 'student',
        doc: props.match.params.id
    }
]), connect(({
    firestore: {
        ordered
    }
}, props) => ({
    student: ordered.student && ordered.student[0]
})))(StudentDetails);