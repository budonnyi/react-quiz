import React, {Component} from 'react'
import Button from "../../components/Ui/Button/Button"
import classes from './Auth.module.css'
import Input from '../../components/Ui/Input'

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный e-mail',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
}
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)
    }

    renderInputs = () => {
        const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return(
                <Input
                    key = {controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })

        return inputs

    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        { this.renderInputs() }

                        <Input label="E-mail" type="text" />
                        <Input
                            label="Пароль"
                            type="password"
                            errorMessage="test error message"
                        />
                    </form>

                    <Button
                        type="success"
                        onClick={this.loginHandler}
                    >Войти
                    </Button>

                    <Button
                        type="primary"
                        onClick={this.registerHandler}
                    >Зарегистрироваться
                    </Button>

                </div>
            </div>
        )
    }
}