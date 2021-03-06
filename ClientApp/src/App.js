import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { GetPosts } from './components/GetPosts';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings/Settings';
import { Help } from './components/Help/Help';
import { Welcome } from './components/WelcomePage/Welcome'
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/settings' component={Settings} />
                <Route path='/help' component={Help} />
                <Route path='/welcome' component={Welcome}/>
            </Layout>
        );
    }
}
