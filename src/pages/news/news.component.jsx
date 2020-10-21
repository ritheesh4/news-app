import React from "react";
import "./news.styles.scss";
import NavigationBar from "../../components/nav-bar/nav-bar.component";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

const News = (data) => (
  <div className="news-container">
    {console.log(data.news)}
    {console.log(data.result)}
    <NavigationBar />
    <CssBaseline />
    <Container fixed>
      <Typography
        component="div"
        style={{ backgroundColor: "white", height: "100vh" }}
        className="news-details"
      >
        {data.news}
      </Typography>
    </Container>
  </div>
);

// const mapStateToProps = (data) => ({
//   news: data.currentNews.newsListData,
//   newsList: data.news.newsList.news,
// });

const mapStateToProps = (data) => {
  try {
    const result = { ...data.news.newsList.news };
    return {
      result: Object.values(result),
      news: data.currentNews.newsListData,
    };
  } catch {}
  return { newsList: [0] };
};

export default connect(mapStateToProps)(News);
