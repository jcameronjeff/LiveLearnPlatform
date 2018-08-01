import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/parts/Spinner';

class Lessons extends Component {
    render() {
        const {lessons} = this.props;

        if (lessons) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                <i className="fa fa-book    "/>{' '}
                                Lessons</h2>
                        </div>

                        <div className="col-md-6">
                            <Link
                                to='/lessons/add'
                                className='btn btn-sm btn-secondary btn-danger pull-right'>
                                <i className="fa fa-plus"/> {' '}New

                            </Link>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Subject</th>
                                <th>Title</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.map(lesson => (
                                <tr key={lesson.id}>
                                    <td>{lesson.title}</td>
                                    <td>{lesson.subject}</td>
                                    <td>
                                        <Link to={`/lessons/${lesson.id}`} className='btn btn-secondary btn-sm'>
                                            <i className="fa fa-arrow-circle-right"/>{' '}Manage</Link>
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
Lessons.propTypes = {
    firestore: PropTypes.object.isRequired,
    lessons: PropTypes.object
}
export default compose(firestoreConnect([
    {
        collection: 'lessons'
    }
]), connect((state, props) => ({lessons: state.firestore.ordered.lessons})))(Lessons);