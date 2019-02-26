import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from '../AnswersList/'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>
                    {props.answerNumber}.
                </strong>&nbsp;

                { props.question }

            </span>
            <small>{props.answerNumber} from {props.quizLength}</small>
        </p>
        <React.Fragment>

            <AnswersList
                answers = {props.answers}
                onAnswerClick  = {props.onAnswerClick}
                state = { props.state }
            />

        </React.Fragment>
    </div>
)

export default ActiveQuiz