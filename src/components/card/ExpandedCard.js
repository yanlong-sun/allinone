import classes from "./ExpandedCard.module.css";
import MovieCard from "./MovieCard";

function ExpandedCard(props) {
  const data = props.data;
  return (
    <main className={classes.expandedContainer}>
      {data.map((item) => (
        <MovieCard
          className={classes.movieCard}
          key={item.titleId}
          title={item.title}
          isAdult={item.isAdult}
          startYear={item.startYear}
          runtimeMinutes={item.runtimeMinutes}
          genres={item.genres}
          imageUrl={item.imageUrl}
          rating={item.rating}
        />
      ))}
    </main>
  );
}

export default ExpandedCard;
