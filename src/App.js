import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompepage.component';
import News from './pages/news/news.component';

class App extends React.Component {


  componentDidMount() {
    const state = {
      newsList: []
    }
    fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=69cf4a8328d54e23921a8be3e595f01b')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ newsList: data })
      });
    console.log(state)

  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/news' component={News} />
        </Switch>
      </div>
    );
  }
}
export default App;
