import React, {Component} from 'react';
import questionItems from '../../api/questionItems';
import Question from './Question';
import shuffleArray from '../helpers/shuffleArray';

class Questions extends Component {
  state = {
    questions: questionItems,
    showQuestion: {},
    answeredQuestions: [],
    currentIndex: 0,
    answerOptions: {}
  };

  componentWillMount() {
    const shuffledAnswerOptions = questionItems.map((question) => shuffleArray(question.answers));
    this.setState({
      question: this.state.questions[this.state.currentIndex].question,
      answerOptions: shuffledAnswerOptions[this.state.currentIndex]
    });
  }

  answeredQuestion = id => {
    const {questions} = this.state.questions;
    const unanswered = questions.filter(question => question.id !== id);

    this.setState({
      questions: unanswered,
      currentIndex: this.state.currentIndex++
    })
    console.log(id)
  }
  render() {
    const ques = this.state.questions[this.state.currentIndex];
    const answers = this.state.answerOptions;
    return (
      <React.Fragment>
        <Question
          key={ques.id}
          context={ques.context}
          stem={ques.stem}
          answers={answers}
          answeredHandler={this
          .answeredQuestion
          .bind(this, ques.id)}/>
      </React.Fragment>
    );
  }
}
export default Questions;
