import React, {Component} from 'react'
import classes from './quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuize/'
import FinishedQuiz from '../../components/FinishedQuiz'

class Quiz extends Component {

    state = {
        idFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Вопрос 1',
                id: 1,
                rightAnswerId: 1,
                answers: [
                    {text: 'Ответ на вопрос 1', id: 1},
                    {text: 'Ответ на вопрос 2', id: 2},
                    {text: 'Ответ на вопрос 3', id: 3},
                    {text: 'Ответ на вопрос 4', id: 4},
                    {text: 'Ответ на вопрос 5', id: 5},
                ]
            },
            {
                question: 'Вопрос 2',
                id: 2,
                rightAnswerId: 1,
                answers: [
                    {text: 'Ответ на вопрос 1', id: 1},
                    {text: 'Ответ на вопрос 2', id: 2},
                    {text: 'Ответ на вопрос 3', id: 3},
                    {text: 'Ответ на вопрос 4', id: 4},
                    {text: 'Ответ на вопрос 5', id: 5},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {

                if (this.isQuizFinished()) {

                    this.setState({
                        isFinished: true
                    })

                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)


        } else {

            this.setState({
                answerState: {[answerId]: 'error'}
            })

        }

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на вопросы:</h1>

                    {
                        this.state.isFinished
                            ? <FinishedQuiz

                                />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />

                    }


                </div>
            </div>
        )
    }
}

export default Quiz