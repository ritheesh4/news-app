import React from "react";
import "./card.styles.scss";
// import BookMark from "../bookmark/bookmark.component";
import { currentNews } from "../../redux/currentNews/currentNews.actions";
import { bookMarkItem } from "../../redux/bookmarks/bookmarks.actions";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardBody from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import WatchLaterIcon from "@material-ui/icons/PlaylistAdd";
import { Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Card = ({
  key,
  title,
  image,
  description,
  publishedAt,
  currentNews,
  bookMarkItem,
}) => {
  const classes = useStyles();
  const [expanded] = React.useState(false);

  return (
    <Grid item xs={3}>
      <CardBody className={classes.root} key={title}>
        <CardHeader title={title} subheader={publishedAt} />
        <CardMedia className={classes.media} image={image} title="News card." />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              let urlToImage = image;
              bookMarkItem({ title, publishedAt, urlToImage, description });
              if(window.location === '/bookmarks'){
                window.location.reload(false)
              }
            }}
            aria-label="add to favorites"
          >
            <WatchLaterIcon />
          </IconButton>
          <Route
            render={({ history }) => (
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => {
                  currentNews({ newsListData: title });

                  history.push("/news");
                }}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            )}
          />
        </CardActions>
      </CardBody>
    </Grid>
  );
};

// const mapStateToProps = ({newsData}) => ({
//   newsListData:newsData.newsListData
// })

const mapDispatchToProps = (dispatch) => ({
  currentNews: (newsData) => dispatch(currentNews(newsData)),
  bookMarkItem: (item) => dispatch(bookMarkItem(item)),
});

export default connect(null, mapDispatchToProps)(Card);
