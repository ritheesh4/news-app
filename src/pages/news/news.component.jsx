import React from "react";
import "./news.styles.scss";
import NavigationBar from "../../components/nav-bar/nav-bar.component";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Footer from "../../components/footer/footer.component";

const News = (data) => {
  console.log(data.news);
  // const clickedTitle = data.news.newsListData;
  // const clickedTitle = data.news && data.news.newsListData;
  const currentNews = data && data.news;
  window.scrollTo(0, 0);
  return (
    <div className="news-container">
      <NavigationBar />
      <CssBaseline />
      <Container
        fixed
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        className="fade-in"
      >
        <Typography
          component="div"
          className="news-details"
          variant="h4"
          style={{
            marginBottom: "0.5em",
            marginTop: "0.5em",
            fontWeight: "bold",
            width: "95%",
            textAlign: "left",
          }}
        >
          {currentNews && currentNews.title}
        </Typography>
        <img src={currentNews && currentNews.image} alt="news" />
        <Typography
          style={{
            width: "50%",
            paddingTop: "1em",
            variant: "h6",
          }}
        >
          {currentNews && currentNews.description}
        </Typography>
        <a href={currentNews && currentNews.url}>Read More</a>
      </Container>
      <Footer />
    </div>
  );
};

const mapStateToProps = (data) => {
  try {
    // const result = { ...data.news.newsList.news };
    return {
      // result: Object.values(result),
      news: data.currentNews.newsListData,
    };
  } catch {}
  return { newsList: [0] };
};

export default connect(mapStateToProps)(News);
