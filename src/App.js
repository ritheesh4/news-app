import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompepage.component';
import News from './pages/news/news.component';

class App extends React.Component {
  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/news' component={News} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
