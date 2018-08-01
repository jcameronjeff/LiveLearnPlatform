import React, {Component} from 'react';
import Questions from './Questions';
import Charts from './Charts';
import PieChart from '../data/PieChart';

class Quiz extends Component {
  render() {
    return (
      <div className="container">

        <div className="row mt-5 card-header">
          <div className="col-md-6">
            <h1>Quiz</h1>

          </div>
          <div className="col-md-6">
            <h3 className="text-secondary pull-right mt-3">Teacher: Demo</h3>
          </div>
        </div>

        <div className="row">
          <div className="card card-body">
            <div className="row mb-3">
              <div className="col-md-8">
                <Questions/>
              </div>

              <div className="col-md-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <Charts/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <PieChart/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <button className="btn btn-primary btn-round btn-lg">Previous</button>
              <button className="btn btn-success btn-round btn-lg">Next</button>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Quiz;
