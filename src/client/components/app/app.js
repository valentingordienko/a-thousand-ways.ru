import React, {Component} from 'react';//
import {connect} from 'react-redux';//
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';//

import './app.css';//

// import Header from '../header/header';//
// import Home from '../home/home';//
// import SignInPage from '../../pages/sign-in/sign-in';//
// import SignUpPage from '../../pages/sign-up/sign-up';//


class App extends Component {


    /*initializedTemplate = () => {

        return (
            <Switch>
                <Redirect to='/'/>
            </Switch>
        );
    };

    noInitializedTemplate = () => {

        return (
            <Switch>
                <Route exact path="/sign-in" component={SignInPage}/>
                <Route exact path="/sign-up" component={SignUpPage}/>
            </Switch>
        )
    };*/

    render() {

        return (
            <div className="app">
                <h1>"Тысяча дорог"</h1>
                <h2>Тайное общество путешественников</h2>
                <h2>Сайт в разработке :)</h2>
                {/*<Header/>
                <div className="page-body">
                    {
                        this.props.state.initialized
                            ? this.initializedTemplate()
                            : this.noInitializedTemplate()
                    }
                </div>*/}
            </div>
        );
    }
}

export default withRouter(
    connect(
        state => ({
            state
        })
    )(App)
);
