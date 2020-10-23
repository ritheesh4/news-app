import React from "react";
import "./cards-container.styles.scss";
import Card from "../card/card.component";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { render } from "@testing-library/react";

class CardsContainer extends React.Component {
  // componentWillMount(props) {
  //   const { result } = this.props;
  //   this.setState({
  //     result: result.result,
  //   });
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.result.length !== nextProps.props.result.length) {
  //     this.setState({
  //       result: nextProps.result,
  //     });
  //   }
  // }

  render() {
    window.scrollTo(0, 0);
    return (
      <Grid
        container
        spacing={3}
        className="fade-in"
        style={{ width: "95vw", margin: "auto", minHeight: "83.4vh" }}
      >
        {this.props.result
          ? this.props.result.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                image={item.urlToImage}
                description={item.description}
                publishedAt={item.publishedAt}
              />
            ))
          : ""}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  if (window.location.pathname === "/bookmarks") {
    return { result: state.bookMarkItem };
  } else {
    try {
      const result = { ...state.news.newsList.news };
      return { result: Object.values(result) };
    } catch {}
    return { newsList: [0] };
  }
};

export default connect(mapStateToProps)(CardsContainer);
