import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../imports/ui/App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';



Meteor.startup(() => {


    injectTapEventPlugin();



    render(


        <MuiThemeProvider>


                <Router history={browserHistory}>
                    <Route path="/" component={App}>


                    </Route>

                </Router>


        </MuiThemeProvider>







        , document.getElementById('render-target'));
});