import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/parts/Spinner';

class Students extends Component {
    render() {
        const {students} = this.props;

        if (students) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                <i className="fa fa-users"/>{' '}
                                Students</h2>
                        </div>

                        <div className="col-md-6">
                            <Link
                                to='/students/add'
                                className='btn btn-sm btn-secondary btn-danger pull-right'>
                                <i className="fa fa-plus"/> {' '}New

                            </Link>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <Link to={`/student/${student.id}`} className='btn btn-secondary btn-sm'>
                                            <i className="fa fa-arrow-circle-right"/>{' '}Scores</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return <Spinner/>
        }

    }
}
Students.propTypes = {
    firestore: PropTypes.object.isRequired,
    students: PropTypes.array
}
export default compose(firestoreConnect([
    {
        collection: 'students'
    }
]), connect((state, props) => ({students: state.firestore.ordered.students})))(Students);