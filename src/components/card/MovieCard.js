import classes from "./MovieCard.module.css";
import { ReactComponent as Star } from "../../img/icons/star.svg";
function MovieCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={props.imageUrl} />
      </div>
      <div className={classes.info}>
        <div className={classes.ratings}>
          <Star className={classes.star} />
          <span>{props.rating}</span>
        </div>
        <p> | </p>
        <div className={classes.duration}>{props.runtimeMinutes} mins</div>
      </div>
      <h2 className={classes.title}>{props.title}</h2>
    </div>
  );
}

export default MovieCard;
