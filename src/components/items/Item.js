import classes from "./Item.module.css";
import Card from "../ui/Card";
import { ReactComponent as Star } from "../../img/icons/star.svg";
import { ReactComponent as Bookmark } from "../../img/icons/bookmark.svg";
import { ReactComponent as Unbookmark } from "../../img/icons/bookmark-outline.svg";
import FavoritesContext from "../../store/FavoritesContext";
import { useContext, useState } from "react";

function Item(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const isFavorites = favoriteCtx.isMovieFavorites(props.id);
  const [isBookMarked, setBookMarked] = useState(isFavorites);
  function toggleIsFavoritesHandler() {
    if (isBookMarked) {
      // unbookmark
      setBookMarked(false);
      favoriteCtx.removeFavorites(props.id);
    } else {
      setBookMarked(true);
      favoriteCtx.addFavorites(props);
    }
  }

  let bookMarkIcon;
  if (props.isDisplayBookmark === "true") {
    const content = isBookMarked ? (
      <Bookmark
        className={classes.bookMark}
        onClick={toggleIsFavoritesHandler}
      />
    ) : (
      <Unbookmark
        className={classes.bookMark}
        onClick={toggleIsFavoritesHandler}
      />
    );
    bookMarkIcon = <button className={classes.bookMarkBtn}>{content}</button>;
  } else {
    bookMarkIcon = null;
  }
  return (
    <Card>
      {bookMarkIcon}
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
    </Card>
  );
}

export default Item;
