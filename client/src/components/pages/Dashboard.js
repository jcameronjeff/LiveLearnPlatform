import React from 'react';
import Students from '../students/Students';
import Lessons from '../classes/Lessons';

export default() => {
    return (
        <div className="row">
            <div className="col-md-6">
                <Lessons/>
            </div>
            <div className="col-md-6">
                <Students/>
            </div>
        </div>
    )
}
