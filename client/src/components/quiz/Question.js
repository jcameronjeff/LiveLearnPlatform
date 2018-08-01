import React, {Component} from 'react'

class Question extends Component {

  render() {
    const question = this.props;

    return (
      <div>
        <div className="container">
          <div className="row mb-3">
            <h4>{question.context}</h4>
            <br/>
            <h4>{question.stem}</h4>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                {question
                  .answers
                  .map((answer, index) => (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action"
                      feeback={answer.feedback}
                      onClick={question.answeredHandler}>{answer.text}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Question;
