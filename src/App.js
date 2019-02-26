import React, { Component } from 'react'
import Layout from './hoc/layout'
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth'
import {Route, Switch} from "react-router-dom";
import QuizList from './components/QuizList'
import QuizCreator from './containers/QuizCreator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>

            <Route>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/quiz-creator" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/" component={QuizList}/>
                </Switch>
            </Route>
            {/*<Quiz />*/}

            {/*<Auth />*/}
        </Layout>
      </div>
    );
  }
}

export default App
