import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong> 1 . </strong>
                    TEXT
                    <i className={'fa fa-times ' + classes.error} />

                    <strong> 1 . </strong>
                    TEXT
                    <i className={'fa fa-times ' + classes.success} />
                </li>
            </ul>
            <p>Correct 4 from 10</p>

            <div>
                <button>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz