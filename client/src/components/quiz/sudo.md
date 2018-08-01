Quiz:

Quiz.Js

Questions.Js

    props: questions

    render:
    <Questions />
    <Charts/>
    <PieChart/>

Question.Js
props: question

    render:
    <Questions />

    Answer clicked:

            First click
            add class active
            append "submit?"

            Second Click
            Submit

            Answer Checker
            right or wrong?
            add class "incorrect" ? "correct"

            Server Handler
            submit answer to server w/ question id and answer id.

            server sends updated poll.

Charts.Js
props: classData

MiddleWare

    GET questions from server

    GET classData from server

    SEND answerData to server
