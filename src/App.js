import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompepage.component';
import News from './pages/news/news.component';
import { connect } from 'react-redux';
import { fetchNews } from './redux/home/home.actions';

class App extends React.Component {
  componentDidMount() {
    const { fetchNews } = this.props;
    (async () => {
      await fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=69cf4a8328d54e23921a8be3e595f01b').then(response => response.json()
        .then(data => fetchNews({
          news:data.articles
        })));
    })()
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

// const mapStateToProps = ({ data }) => ({
//   newsList: data
// })

const mapDispatchToProps = dispatch => ({
  fetchNews: data => dispatch(fetchNews(data))
})


export default connect(null, mapDispatchToProps)(App);
