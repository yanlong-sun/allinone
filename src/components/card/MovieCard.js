import classes from "./MovieCard.module.css";
import { ReactComponent as Star } from "../../img/icons/star.svg";
import { ReactComponent as Bookmark } from "../../img/icons/bookmark.svg";
import { ReactComponent as Unbookmark } from "../../img/icons/bookmark-outline.svg";
function MovieCard(props) {
  return (
    <div className={classes.card}>
      {/* <Bookmark className={classes.bookMark} /> */}
      <Unbookmark className={classes.bookMark} />

      <div className={classes.imageContainer}>
        <img className={classes.image} src={props.imageUrl} />
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.info}>
        <div className={classes.startYear}>{props.startYear}</div>
        <div className={classes.duration}>{props.runtimeMinutes} mins</div>
        <div className={classes.ratings}>
          <Star className={classes.star} />
          <span>{props.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
