import MovieCategory from "./MovieCategory";
import classes from "./AllCategories.module.css";

function AllCategories() {
  return (
    <div className={classes.categoryList}>
      <MovieCategory />
      <MovieCategory />
      <MovieCategory />
      <MovieCategory />
      <MovieCategory />
    </div>
  );
}

export default AllCategories;
