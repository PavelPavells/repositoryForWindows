import React, {Component} from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import {addListener, removeListener, isAuthorized } from './isAuthorizeApi';
import Private from './Private';
import Public from './Public';
import Home from './Home';
import Auth from './Auth';
class App extends Component {
    state = {
        isAuthorized,
    };
    componentDidMount() {
        addListener(this.handleAuthorize);
    }
    componentWillUnmount() {
        removeListener(this.handleAuthorize);
    }
    handleAuthorize = isAuthorized => {
        this.setState({isAuthorized});
    ;}
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/auth">Войти</Link>
                    </li>
                    <li>
                        <Link to="/private">Секретная страница</Link>
                    </li>
                    <li>
                        <Link to="/public">Публичная страница</Link>
                    </li>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/auth" component={Auth}/>
                    {this.state.isAuthorized ? (
                        <Route path="/private" component={Private}/>
                    ) : (
                        <Redirect from ="/private" to="/auth"/>
                    )}
                    <Route path="/public" component={Public}/>
                    <Redirect from="*" to="/"/>
                </Switch>
            </div>
        );
    }
}
export default App;